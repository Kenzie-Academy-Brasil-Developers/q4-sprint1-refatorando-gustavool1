import { describe, it, jest, beforeEach, expect } from '@jest/globals'
import verifyCompanyExistence from '../../middlewares/verifyCompanyExistence.middleware'


describe('Testing verifyCompanyExistence Middleware ', () => {

    const mockRes = {}
    const mockReq = {}
    const mockNext = jest.fn()

    beforeEach(() => {
        mockRes.status = jest.fn().mockReturnValue(mockRes)
        mockRes.json = jest.fn().mockReturnValue(mockRes)
    })

    it("Testing: JSON: Company not registered && Status = 400 ", () => {
        
        mockReq.params = {cnpj:'x'}
        verifyCompanyExistence(mockReq, mockRes, mockNext)

        const expectedJson = { message: "Company not registered" }
        const expectedStatusCode = 400

        expect(mockRes.status).toBeCalledWith(expectedStatusCode)
        expect(mockRes.json).toBeCalledWith(expectedJson)



    })


    it("Testing: Next to be called && Company exists", () => {
        mockReq.params = { cnpj:"48542842000100" }

        const expectedCompany =  {
            name:"Apple",
            cnpj:"48542842000100",
            password:"123456",
            cep:"69054-637",
            address:"endereço",
            number:213456,
            state:"SP",
            city:"Praia Grande",
            vehicles:[]
    
        }

        verifyCompanyExistence(mockReq, mockRes, mockNext)

        expect(mockReq.company).toEqual(expectedCompany)
        expect(mockNext).toBeCalledTimes(1)
    })
})