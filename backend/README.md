# Backend Documentation

## Deployment
The github repo is hooked into Travis CI which runs automated tests whenever a push to a branch is made. When changes are merged to master and the all tests pass, the app will be deployed to heroku at https://parking-picker.herokuapp.com/. Follow the git flow described in the main [readme](https://github.com/janbro/CEN3031-Group1/blob/master/README.md) for merging to master.

## Testing Locally
To run the server locally, clone the repository and run `npm install` and then `npm start`. Run `npm run dev` instead of `npm start` to have the server automatically restart on file changes. To run automated tests, run `npm test`.

## API
GET `/api/garages` - returns all garages in db

POST `/api/garages` - returns garages in db based on decals passed `{ decals: [] }`

GET `/api/garages/:garageId` - returns requested garage

GET `/api/garages/mapbox` - GeoJSON garage data

POST `/api/garages/mapbox` - get GeoJSON data based on decals passed `{ decals: [] }`

GET `/api/decals` - returns all decal permissions

POST `/api/decals` - returns all permissions of decals passed `{ decals: [] }`

GET `/api/decals/:decalName` - returns permission of decal based on single decal name

GET `/api/occupancy` - returns all occupancy data of garages

POST `/api/occupancy` - updates occupancy data of passed garage/decal `{ occupancy: { name: [garagename], decal: [decaltoupdate], park: [bool]} }`

GET `/api/occupancy/:garageName` - returns occupancy data of passed garage name
