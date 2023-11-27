import supertest from "supertest";
import { web } from "../src/application/web";
import { logger } from "../src/application/logging";
import {
  createTestUser,
  removeTestCategory,
  removeTestUser,
} from "./test-utils";

describe("POST /api/categories", function () {
  beforeEach(async () => {
    createTestUser();
  });

  afterEach(async () => {
    removeTestCategory();
    removeTestUser();
  });

  it("should can create category", async () => {
    const result = await supertest(web)
      .post("/api/categories")
      .set("Authorization", "test")
      .send({
        category_name: "test",
      });
    logger.info(result.body);
    console.log(result.body.errors);
    expect(result.status).toBe(200);
    expect(result.body.data.category_name).toBe("test");
  });
});
