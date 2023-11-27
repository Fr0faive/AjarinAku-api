import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import {
  createTestUser,
  removeTestCategory,
  removeTestUser,
} from "./test-utils";

describe("POST /api/categories", function () {
  beforeAll(async () => {
    createTestUser();
  });

  afterAll(async () => {
    removeTestCategory();
    removeTestUser();
  });

  it("should can create category", async () => {
    const result = await supertest(web)
      .post("/api/categories")
      .set("Authorization", "test")
      .set("Content-Type", "application/json")
      .send({
        category_name: "test",
      });
    logger.info(result.body);
    console.log(result.body.errors);
    expect(result.status).toBe(200);
    expect(result.body.data.category_name).toBe("test");
  });
});
