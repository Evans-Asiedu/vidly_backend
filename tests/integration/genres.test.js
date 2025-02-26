const request = require("supertest");

let server = require("../../index");

describe("/api/genres", () => {
  beforeEach(() => {
    server = require("../../index");
  });

  afterEach(() => {
    server.close();
  });

  describe("GET /", () => {
    it("should return all genres", async () => {
      const res = await request(server).get("/api/genres");
      expect(res.status).toBe(500);
    });
  });
});
