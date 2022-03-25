import { Router } from "express";
import companySchema from "../models/companySchema.shapes";
import verifyDuplicateCnpj from "../middlewares/verifyDuplicateCnpj.middleware";
import verifyCompanyExistence from "../middlewares/verifyCompanyExistence.middleware";
import authenticateCompany from "../middlewares/authenticateCompany.middleware";
import validate from "../middlewares/validate.middleware";
import { createCompany, deleteCompany,  getCompanys,  loginCompany, updateCompany } from "../controllers/company.controller";

export const config = {
  secret: "the_greatest_secret_key",
  expiresIn: "6048002222222",
};





const routes = Router() 

export let companies = [ 
  {
		name:"Apple",
		cnpj:"48542842000100",
		password:"123456",
		cep:"69054-637",
		address:"endereço",
		number:213456,
		state:"SP",
		city:"Praia Grande"

	}
];


const routerCompany =  (app) => {

  routes.post(
    "/companies/register",
    validate(companySchema),
    verifyDuplicateCnpj,
    createCompany
  );
  
  routes.post("/companies/login", loginCompany);
  
  routes.get("/companies", getCompanys);
  
  routes.put(
    "/companies/:cnpj",
    authenticateCompany,
    verifyCompanyExistence,
    updateCompany
  );
  
  routes.delete(
    "/companies/:cnpj",
    authenticateCompany,
    verifyCompanyExistence,
    deleteCompany
  );
  
  
  app.use("/", routes)

}




export default routerCompany