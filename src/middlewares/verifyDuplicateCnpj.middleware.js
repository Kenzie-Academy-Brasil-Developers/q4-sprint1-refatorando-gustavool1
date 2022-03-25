import { companies } from "../routes/company.routes";


const verifyDuplicateCnpj = (req, res, next) => {
    let { cnpj } = req.body;
  
    let company = companies.find((company) => company.cnpj == cnpj);
  
    if (company) {
      return res.status(400).json({ message: "CNPJ already registered" });
    }
  
    return next();
  };

export default verifyDuplicateCnpj