
const {tracksModel} = require("../models")


/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req,res)=>{
    const data = await tracksModel.find({})

    res.send({data});
}

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req,res)=>{

    const id = req.params.id;
    const data = await tracksModel.findById(id);

    res.send({data});
}

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req,res)=>{
    const {body} = req;

    const data = await tracksModel.create(body);

    res.send({data});
}

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */

const updateItem = (req,res)=>{}
    

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */

const deleteItem = (req,res)=>{}




module.exports ={
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}
