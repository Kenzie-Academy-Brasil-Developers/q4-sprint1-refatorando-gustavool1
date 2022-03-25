import { describe, it, jest, beforeEach, expect } from '@jest/globals'
import { generateCompany } from '../dataToUseInTests'
import request from 'supertest';
import app from '../../app'


describe('Testing createCompany Route', () => { 

    const mockRes = {}

    beforeEach(()=> {

        mockRes.json = jest.fn().mockReturnValue(mockRes)
        mockRes.status = jest.fn().mockReturnValue(mockRes)
        
        
    })


    it("Testing: Json = mockCompany && Status = 201", async () => {
        
        const mockCompany = generateCompany()


        const response = await request(app).post(`/companies/register`).send(mockCompany);
        
        const bodyKeys = Object.keys(response.body.company).sort()
        const mockCompanyKeys = Object.keys(mockCompany).sort()

        const expectedStatus = 201
        expect(Number(response.status)).toEqual(expectedStatus)


        expect(bodyKeys).toStrictEqual(mockCompanyKeys)

    })
 })