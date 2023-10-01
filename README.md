# Parking Lot API

This API provides endpoints for managing parking lots and cars parked in those lots.

## Endpoints

### Get All Parking Lots

**Endpoint:** `/parkings`
**Method:** `GET`
**Description:** This endpoint returns a list of all parking lots.

### Get Parking by ID

**Endpoint:** `/parkings/{id}`
**Method:** `GET`
**Description:** This endpoint retrieves a specific parking lot based on its unique ID.

### Get Parking Lot by Car ID

**Endpoint:** `/parkings/car/{car_id}`
**Method:** `GET`
**Description:** This endpoint takes the ID of a car as input and returns the parking lot where the car is parked, along with the car's brand.

#### Example Output:
```json
{
    "brand": "BMW",
    "parkingLot": 1
}
