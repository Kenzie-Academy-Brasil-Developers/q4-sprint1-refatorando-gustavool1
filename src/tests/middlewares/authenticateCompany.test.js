import { describe, it, jest, beforeEach, expect } from '@jest/globals'
import authenticateCompany from '../../middlewares/authenticateCompany.middleware'


describe('AuthenticateCompany Middleware test', () => {

    const mockRes = {}
    const mockReq = {}
    const mockNext = jest.fn()

    beforeEach(() => {
       mockRes.status  = jest.fn().mockReturnValue(mockRes)
       mockRes.json = jest.fn().mockReturnValue(mockRes)


       
    })

    it("Testing: JSON:Missing authorization &&  Status = 401", () => {

        mockReq.headers = {}
        authenticateCompany(mockReq, mockRes, mockNext)

        const expectedStatusCode = 401
        const expectedJson = { message: "Missing authorization" }

        expect(mockRes.status).toBeCalledWith(expectedStatusCode)
        expect(mockRes.json).toBeCalledWith(expectedJson)
    })

    it("Testing: Json: Invalid Token && Status = 401", () => {
        mockReq.headers = { authorization: "Bearer fake_token"}

        authenticateCompany(mockReq, mockRes, mockNext)

       

        const expectedStatusCode = 401
        const expectedJson = { message: "Invalid Token." }

        expect(mockRes.status).toBeCalledWith(expectedStatusCode)
        expect(mockRes.json).toBeCalledWith(expectedJson)
    })

   

})