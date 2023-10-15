import express from 'express';
import { carRouter, parkingLotRouter } from './router/index.js';

const server = express()

server.use(express.json())

const PORT = 3000


server.get('/', (req, res) => {
    res.send('Hi i am your api')
})

server.use('/cars',carRouter)

server.use('/parkings', parkingLotRouter);

server.use((req, res) => {
    res.status(404).send('Page not found.');
  });

server.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)
})



