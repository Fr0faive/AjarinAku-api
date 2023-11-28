import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import {
  createTestCategory,
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
      .set("Authorization", "4bd8143b-8598-45aa-a4e6-ec8d84db0c04")
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

describe("GET /api/categories/:categoryName", function () {
  beforeAll(async () => {
    createTestCategory();
  });

  afterAll(async () => {
    removeTestCategory();
    removeTestUser();
  });
  it("should can get all category", async () => {
    const result = await supertest(web)
      .get("/api/categories")
      .set("Authorization", "4bd8143b-8598-45aa-a4e6-ec8d84db0c04")
      .set("Content-Type", "application/json");

    logger.info(result.body);
    expect(result.status).toBe(200);
    expect(result.body.data[0].category_name).toBe("Kimia");
  });

  it("should can get category", async () => {
    const result = await supertest(web)
      .get("/api/categories/Kimia")
      .set("Authorization", "4bd8143b-8598-45aa-a4e6-ec8d84db0c04")
      .set("Content-Type", "application/json");

    logger.info(result.body);
    expect(result.status).toBe(200);
    expect(result.body.data.category_name).toBe("Kimia");
  });

  it("should can not get category", async () => {
    const result = await supertest(web)
      .get("/api/categories/baba")
      .set("Authorization", "4bd8143b-8598-45aa-a4e6-ec8d84db0c04")
      .set("Content-Type", "application/json");
    logger.info(result.errors);
    expect(result.status).toBe(404);
    expect(result.body.errors).toBeDefined();
  });
});
