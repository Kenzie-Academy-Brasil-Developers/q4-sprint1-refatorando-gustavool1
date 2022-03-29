import { companies } from "../routes/company.routes";

const verifyDuplicateVehiclePlate = (req, res, next) => {
    let { plate } = req.body;
  
    
    const vehicle = companies.some((company) =>
      company.vehicles.some((veh) => veh.plate === plate)
    );
   
    if (vehicle) {
      return res.status(400).json({ message: "Vehicle already registered" });
    }
  
    return next();
  };

export default verifyDuplicateVehiclePlate