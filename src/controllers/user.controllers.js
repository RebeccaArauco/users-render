const catchError = require('../utils/catchError');
const User = require('../models/User');

//GetAll
const getAll = catchError(async(req, res) => {
    const result = await User.findAll()
    
    return res.json(result)
});

//Create
const create = catchError(async(req, res) => {
    const result = await User.create(req.body)
    return res.status(201).json(result)
});

//GetOne
const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.findByPk(id)
    if (!result) return res.sendStatus(404)
    return res.json(result)
});

//Delete
const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.destroy({where: { id }})
    if (!result) return res.sendStatus(404)
    return res.sendStatus(204)
});

//Update
const update = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.update(
        req.body,
        { where: { id }, returning: true } 
    )
    if (result[0] === 0) return res.sendStatus(404)
    return res.json(result[1][0])
    
});

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}