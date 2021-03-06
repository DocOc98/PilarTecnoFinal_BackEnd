const controller = require("../controllers/point.controller");
const courseSchema = require("../schemas/points");

const validate = require('../middleware/validateData');

module.exports = function(app){
    //get all places from mongodb Atlas
    app.get(
        "/places/",
        controller.getPlaces
    );
    //get place for id
    app.get(
        "/places/:id",
        controller.getPlaceById
    );
    //add place
    app.post(
        "/places/", validate(courseSchema.schema),
        controller.postPlace
    );
    //delete place for id
    app.delete(
        "/places/:id",
        controller.deletePlace
    );
    //update place direct from json: {id, name, address, lat, long, url} 
    app.patch(
        "/places/:id", validate(courseSchema.schemaPatch),
        controller.patchPlaces
    );
};