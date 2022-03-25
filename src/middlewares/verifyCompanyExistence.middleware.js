import { companies } from "../routes/company.routes";


const verifyCompanyExistence = (req, res, next) => {
    let { cnpj } = req.params;
  
    let company = companies.find((company) => company.cnpj == cnpj);
  
    if (!company) {
      return res.status(400).json({ message: "Company not registered" });
    }
  
    req.company = company;
  
    return next();
  };

export default verifyCompanyExistence