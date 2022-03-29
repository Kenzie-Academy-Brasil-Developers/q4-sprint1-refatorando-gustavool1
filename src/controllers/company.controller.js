import bcrypt from "bcryptjs";
import { companies } from "../routes/company.routes";
import { config } from "../routes/company.routes";   
import { creatingToken, findingCompany, passwordMatches, serializingCompany } from "../services/company.services";

export const createCompany = async (req,res) => {

      
      const company =  await serializingCompany(req.body) 
  
      companies.push(company);
  
      res.status(201).json({ message: "Company successfully created", company });
}


export const loginCompany = async (req,res) => {

    const { cnpj, password } = req.body;
  
    let company = findingCompany(cnpj)
  
    const match = await passwordMatches(password, company.password)
  
    if (!company) {
      return res.status(401).json({ message: "Company not found" });
    }
    if (!match) {
      return res.status(401).json({ message: "User and password missmatch." });
    }
  
    let token = creatingToken(cnpj)
  
    res.status(200).json({ token, company });
}

export const getCompanys = (_, res) => {
    res.status(200).json(companies);
}


export const updateCompany = async (req, res) => {

    let { company } = req;
    let updatedCompany = { ...company, ...req.body };

    let index = companies.indexOf(company);

    companies[index] = updatedCompany;

    res.status(200).json({ messagem: "Company updated", companies });
}

export const deleteCompany = (req,res) => {
  let { cnpj } = req.params;
  
  companies = companies.filter((company) => company.cnpj !== cnpj);

  res.status(200).json({ messagem: "Company deleted", companies });
}







