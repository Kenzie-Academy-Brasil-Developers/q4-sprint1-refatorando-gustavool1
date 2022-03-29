import { v4 as uuidv4 } from "uuid";
import bcrypt from 'bcryptjs'
import { companies } from "../routes/company.routes";
import jwt from "jsonwebtoken";
import { config } from "../routes/company.routes";

export const serializingCompany = async (body) => {

    const hashedPassword = await bcrypt.hash(body.password, 10);

    return {
        ...body,
        id: uuidv4(),
        vehicles: [],
        password: hashedPassword,
      };
} 

export const passwordMatches = async (password, companyPassoword) => {
    return await bcrypt.compare(password, companyPassoword);

}

export const findingCompany = (cnpj) => {
    const company = companies.find((company) => company.cnpj === cnpj);
    return company
}


export const creatingToken = (cnpj) => {
    const token = jwt.sign({ cnpj: cnpj }, config.secret, {
        expiresIn: config.expiresIn,
      });

    return token
}