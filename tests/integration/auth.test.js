const request = require("supertest");
const { app, server } = require("../../index");
const { User } = require("../../models/user");

describe("auth middleware", () => {
  beforeEach(() => {
    // server = require("../../index");
  });

  afterEach(async () => {
    // await Genre.remove({});
    if (server) {
      await server.close();
    }
  });

  let token;

  const exec = () => {
    return request(app)
      .post("/api/genres")
      .set("x-auth-token", token)
      .send({ name: "genre1" });
  };

  beforeEach(() => {
    token = new User().generateAuthToken();
  });

  it("should return 401 if no token is provided", async () => {
    token = "";

    const res = await exec();

    expect(res.status).toBe(401);
  });

  it("should return 400 if token is invalid", async () => {
    token = "a";

    const res = await exec();

    expect(res.status).toBe(400);
  });

  it("should return 300 if token is valid", async () => {
    const res = await exec();

    expect(res.status).toBe(200);
  });
});
