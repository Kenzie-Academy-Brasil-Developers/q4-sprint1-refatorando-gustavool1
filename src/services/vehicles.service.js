import { v4 as uuidv4 } from "uuid";


export const serializingVehicles = (body) => {

    return {
        ...body,
      id: uuidv4(),
      acquisition_date: new Date(),
    }
}