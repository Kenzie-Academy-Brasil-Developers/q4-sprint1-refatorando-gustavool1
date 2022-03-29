import { serializingVehicles } from "../services/vehicles.service";



export const createVehicle = (req,res) => {
    let newVehicle = serializingVehicles(req.body)
  
    let { company } = req;
  
    company.vehicles.push(newVehicle);
  
    res.status(201).json({
      message: `Vehicle ${newVehicle.model} from year ${newVehicle.year} was acquired to the ${company.name}'s fleet`,
      vehicle: newVehicle,
    });
  }


  export const getVehicles = (req, res) => {
    res.status(200).json(req.company.vehicles);
}


export const updateVehicle = (req,res) => {
    let { vehicle, company } = req;
    
    let updatedVehicle = { ...vehicle, ...req.body };
  
    let index = company.vehicles.indexOf(vehicle);
  
    company.vehicles[index] = updatedVehicle;
  
    res
      .status(200)
      .json({ message: "Vehicle updated", vehicle: updatedVehicle });
  }
  

export const deleteVehicle = async (req,res) => {

    let { plate } = req.params;

    let { company } = req;

    company.vehicles = company.vehicles.filter(
        (vehicle) => vehicle.plate !== plate
    );

    res
        .status(200)
        .json({ messagem: "Vehicle deleted", vehicles: company.vehicles });
}