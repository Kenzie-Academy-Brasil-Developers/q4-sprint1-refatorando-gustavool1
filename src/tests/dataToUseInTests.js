import { v4 } from 'uuid';


const generateCompany = () => {
  const name = "KAKLSADLK";
  const cnpj = "48542842000120";
  const password = "123456"
  const cep =   "69054-637"
  const address = "endereco"
  const number = 54234
  const state = "SP"
  const city = "Praia Grande"
  const message = "Company successfully created"

  return {

        name,
        cnpj,
        password,
        cep,
        address,
        number,
        state,
        city,
        id: v4(),
        vehicles: []
    }
};

export { generateCompany };