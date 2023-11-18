import supertest from "supertest";
import { web } from "../src/application/web";
import { prismaClient } from "../src/application/database";

describe("POST /api/users", function () {
  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  });

  it("should create a new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      id: 1,
      username: "test",
      password: "rahasia",
      email: "test@test.com",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBe(1);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.email).toBe("test@test.com");
    expect(result.body.data.password).toBeUndefined();
  });
});
