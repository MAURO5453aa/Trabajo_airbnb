// Importar los servicio
const { consultDC, TipeDC, reviewsDC, Documentscama } = require('../services/mongodb.service');

const Consulta  = async (req, res) => {
    let resp = {}
    try {
        resp.ok = true
        resp.message = "Airbnb consultados"
        let resultado = await consultDC(process.env.COLLECTION_AIRBNB)
        resp.info = resultado
        res.send(respuesta)
    }   catch (error) {
        console.log(error);
        resp.ok = false
        resp.message = "Ha ocurrido un error consultando los airbnb."
        resp.info = error
        res.status(500).send(resp)
    }
}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const Tipos= async (req, res) => {
    let resp = {}
    try {
        resp.ok = true
        resp.message = "Tipos de Airbnb consultados exitosamente"
        let resultado = await TipeDC(process.env.COLLECTION_AIRBNB)
        resultado = resultado.map((element) => {
            return element._id
        })
        resp.info = resultado
        res.send(resp)
    } catch (error) {
        console.log(error);
        resp.ok = false
        resp.message = "Ha ocurrido un error consultando los tipos de airbnb"
        resp.info = error
        res.status(500).send(resp)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const Reviews = async (req, res) => {
    let resp = {}
    try {
        resp.ok = true
        resp.message = "Airbnbs con más reviews consultados exitosamente"
        let resultado = await reviewsDC(process.env.COLLECTION_AIRBNB)
        resp.info = resultado
        res.send(resp)
    } catch (error) {
        console.log(error);
        resp.ok = false
        resp.message = "Ha ocurrido un error consultando los airbnb."
        resp.info = error
        res.status(500).send(resp)
    }
}


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const CamaAirbnb = async (req, res) => {
    let resp= {}
    try {
        // Limite de registros que pide el usuario para la consulta
        let limite = req.params.nro_beds
        resp.ok = true
        resp.message = "Airbnbs con más camas disponibles consultados exitosamente"
        // Se consultan los airbnb con más camas disponibles de la base de datos
        let resultado = await Documentscama(process.env.COLLECTION_AIRBNB, limite)
        resp.info = resultado
        res.send(resp)
    } catch (error) {
        console.log(error);
        resp.ok = false
        resp.message = "Ha ocurrido un error consultando los airbnbs"
        resp.info = error
        res.status(500).send(resp)
    }
}


module.exports = {Consulta ,Tipos,Reviews,CamaAirbnb}