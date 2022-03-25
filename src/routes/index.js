
import express from 'express'
import routerCompany from './company.routes'
import routerVehicles from './vehicle.route'


export const routes = (app) => {
    app.use(express.json())
    routerCompany(app)
    routerVehicles(app)
  
}