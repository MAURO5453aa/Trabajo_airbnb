const express = require('express')
const router = express.Router()

const airbnbCtr = require("../controllers/airbnb.controller")

const vs = "/api/v1"

router.get(vs + "/airbnb/all-properties", airbnbCtr.Consulta)
router.get(vs + "/airbnb/types", airbnbCtr.Tipos)
router.get(vs + "/airbnb/reviews", airbnbCtr.Reviews)
router.get(vs + "/airbnb/beds/:nro_beds", airbnbCtr.CamaAirbnb)

module.exports = router