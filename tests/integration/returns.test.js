const request = require("supertest");
const { Rental } = require("../../models/rental");
const mongoose = require("mongoose");

const { app, server } = require("../../index");

describe("/api/returns", () => {
  let customerId;
  let movieId;
  let rental;

  beforeEach(async () => {
    customerId = mongoose.Types.ObjectId();
    movieId = mongoose.Types.ObjectId();

    rental = new Rental({
      customer: {
        _id: customerId,
        name: "12345",
        phone: "12345",
      },
      movie: {
        _id: movieId,
        title: "12345",
        dailyRentalRate: 2,
      },
    });
    await rental.save();
  });

  afterEach(async () => {
    if (server) {
      server.close();
    }
    await Rental.remove({});
  });

  it("should return 401 if client is not logged in", async () => {
    const res = await request(app).post("/api/returns").send({
      customerId,
      movieId,
    });
    expect(res.status).toBe(401);
  });
});
