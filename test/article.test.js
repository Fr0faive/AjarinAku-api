// import supertest from "supertest";
// import { web } from "../src/application/web.js";
// import { logger } from "../src/application/logging.js";
// import {
//   createTestArticle,
//   createTestUser,
//   removeTestArticle,
// } from "./test-utils";

// describe("POST /api/articles", function () {
//   beforeEach(async () => {
//     await createTestUser();
//   });

//   afterEach(async () => {
//     await removeTestArticle();
//     await removeTestUser();
//   });

//   it("should can create article", async () => {
//     const result = await supertest(web)
//       .post("/api/articles")
//       .set("Authorization", "test")
//       .send({
//         title: "test",
//         content: "test",
//         description: "test",
//         category_id: 1,
//         user_id: 1,
//         User: {
//           username: "test",
//         },
//       });
//     logger.info(result.body);
//     console.log(result.body.errors);
//     expect(result.status).toBe(200);
//     expect(result.body.data.title).toBe("test");
//   });
// });
