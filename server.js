import express, {Router} from 'express';

const car1 = {
    id: 1,
    brand: 'BMW',
    color: 'Black'
}

const car2 = {
    id:2,
    brand: 'AUDI',
    color: 'Red'
}

const car3 = {
    id:3,
    brand: 'Fiat',
    color: 'Gray'
}

const parkingLot1 = {
    id: 1,
    cars: [car1, car2]
}

const parkingLog2 = {
    id: 2,
    cars: [car3]
}

const cars = [car1, car2, car3]


const server = express()

server.use(express.json())

const PORT = 3000

const carRouter = Router()

server.get('/', (req, res) => {
    res.send('Hi i am your api')
})

carRouter.get('/', (req, res) => {

    res.send(cars)
})

carRouter.post('/', (req, res)=> {
   const newCar =  req.body

    cars.push(newCar)
   res.status(200).send(cars)
})

carRouter.get('/:id', (req, res) => {
    const carId = parseInt(req.params.id)

    const carToFind = cars.find(car => car.id === carId)

    res.send(carToFind)
})

server.use('/cars',carRouter)

server.use((req, res) => {
    res.status(404).send('Page not found.');
  });

server.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})