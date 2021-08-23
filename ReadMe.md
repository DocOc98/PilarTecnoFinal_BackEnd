# Vaccination points in La Rioja
This project is part of the final work of MERN Stack

# Description

It project is an API developed with NODEjs & EXPRESS, JOI's validation and Atlas from MongoDB as a database & mongoose.

The root application is provided by Heroku. 
Root: https://vaccination-larioja.herokuapp.com/

The project has the next endpoints:
- GET :: /places/ --> Returns all the vaccination points.
- GET :: /places/:id --> Returns a vaccination point by Id.
- POST :: /places/ --> Creates a new vaccination point to the database.
- DELETE :: /places/:id --> Deletes a vaccination point by id.
- PATCH :: /places/:id --> Edites a vaccination point from a body json, entering the Id & the other fields in Body / raw - Json.
    -Example: _/places/aa1133aadd33
     {  "id": "aa1133aadd33",
     "name": "surname name",
     "address": "address number",
     "latitude": "lat min 9 charact, max 10charact",
     "longitude": "lat min 9 charact, max 10charact",
     "url": "optional webpage" }

# Project Start
It has made with NodeJS and Express, it is validated with Joi, the used DB is MongoDB uploaded in the cloud(Atlas). And It is used mongoose to get data. 

# Author
Hernan Octavio de la Vega(DocOc98)

# Version
* 0.1  
*Initial Release

