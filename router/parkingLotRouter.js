import { Router } from "express";
import { getParkings } from "../data/parkings.js";
import { findCar } from "./carRouter.js";

const parkingLotRouter = Router();

parkingLotRouter.get("/", async (req, res) => {
  try {
    const parkingLots = await getParkings();

    res.send(parkingLots);
  } catch {
    res.status(404).send(err);
  }
});

parkingLotRouter.get("/:id", async (req, res) => {
  try {
    const parkingLotId = parseInt(req.params.id);

    const parkingLotToFind = await findParking(parkingLotId);

    console.log(parkingLotToFind);

    res.send(parkingLotToFind);
  } catch (err) {
    res.status(404).send(err);
  }
});

parkingLotRouter.get("/cars/:carId", async (req, res) => {
  try {
    const carId = parseInt(req.params.carId);

    const parkingLots = await getParkings();
    if (!parkingLots) throw new Error("No parking lots found");

    const parkingLotWithCar = parkingLots.find((lot) => {
      const car = lot.cars.find((car) => car.id === carId);
      return car ? lot : null;
    });

    res.send({
      parkingLot: parkingLotWithCar.name,
    });
  } catch {
    res.status(404).send(err);
  }
});

const findParking = async (parkingId) => {
  const parkings = await getParkings();
  console.log(parkings);
  const parkingFound = parkings.find((parking) => parking.id === parkingId);
  console.log(parkingFound);
  return parkingFound;
};

export default parkingLotRouter;
