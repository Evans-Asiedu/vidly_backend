const request = require("supertest");
const { Genre } = require("../../models/genre");

const { app, server } = require("../../index");

describe("/api/genres", () => {
  beforeEach(() => {
    // server = require("../../index");
  });

  afterEach(async () => {
    if (server && server.close) {
      await server.close();
    }
  });

  describe("GET /", () => {
    it("should return all genres", async () => {
      // await Genre.collection.insertMany([
      //   { name: "genre1" },
      //   { name: "genre2" },
      // ]);

      const res = await request(app).get("/api/genres");

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(4);
    });
  });
});
