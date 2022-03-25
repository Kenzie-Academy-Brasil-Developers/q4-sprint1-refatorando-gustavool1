import { Router } from "express";
import { createVehicle, deleteVehicle, getVehicles, updateVehicle } from "../controllers/vehicle.controller";
import authenticateCompany from "../middlewares/authenticateCompany.middleware";
import validate from "../middlewares/validate.middleware";
import verifyCompanyExistence from "../middlewares/verifyCompanyExistence.middleware";
import verifyDuplicateVehiclePlate from "../middlewares/verifyDuplicateVehiclePlate.middleware";
import vehicleSchema from "../models/vehicleSchema.shapes";
import verifyVehicleExistence from "../middlewares/verifyVehicleExistence.middleware";



const routes = Router()


const routerVehicles = (app) => {

    routes.post(
        "/companies/:cnpj/vehicles",
        authenticateCompany,
        verifyCompanyExistence,
        verifyDuplicateVehiclePlate,
        validate(vehicleSchema),
        createVehicle
      );


    routes.get(
        "/companies/:cnpj/vehicles",
        authenticateCompany,
        verifyCompanyExistence,
        getVehicles
    );

    routes.put(
        "/companies/:cnpj/vehicles/:plate",
        authenticateCompany,
        verifyCompanyExistence,
        verifyVehicleExistence,
        updateVehicle     
      );

    routes.delete(
        "/companies/:cnpj/vehicles/:plate",
        authenticateCompany,
        verifyCompanyExistence,
        verifyVehicleExistence,
        deleteVehicle      
    );


    

    app.use("/", routes)
}


export default routerVehicles