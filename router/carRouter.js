import {Router} from 'express'
import {getCars} from '../data/cars.js'

const carRouter = Router()

carRouter.get('/', async (req, res) => {
    const cars = await getCars()
    res.send(cars)
})

carRouter.get('/:id', async(req, res) => {
    const carId = parseInt(req.params.id)

    const carToFind = await findCar(carId)

    res.send(carToFind)
})

const findCar = async (carId) => {
    const cars = await getCars()
    const car = cars.find(car => car.id === carId)
    return car
}

export {findCar}
export default carRouter