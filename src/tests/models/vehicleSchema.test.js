import { describe, it, jest, beforeEach, expect } from '@jest/globals'
import vehicleSchema from '../../models/vehicleSchema.shapes'
import validate from '../../middlewares/validate.middleware'

describe("Vehicle Yup validation", () => {

    const mockReq = {}
    const mockRes = {}
    const mockNext = jest.fn()

    beforeEach(() => {
        mockRes.json = jest.fn().mockReturnValue(mockRes)
        mockRes.status = jest.fn().mockReturnValue(mockRes)
    })

    it("Testing: Status = 400 && validation fail", async () => {

        mockReq.body = {
            plate:"12390309a",
            year:2012,
        }
        await validate(vehicleSchema)(mockReq, mockRes, mockNext)


        const expectedStatusCode = 400
        expect(mockRes.status).toBeCalledWith(expectedStatusCode);
        expect(mockRes.json).toHaveBeenCalledTimes(1);
        
    })

    it("Testing: Next to be called && validation passing", async () => {

        mockReq.body = {
            model:"Gol",
            brand:"Wolksvagen",
            year:2012,
            plate:"12390309a",
        }
        await validate(vehicleSchema)(mockReq, mockRes, mockNext)
        expect(mockNext).toHaveBeenCalledTimes(1)
    })
})