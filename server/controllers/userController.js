import models from '../models/index';

export default {
    add: async (req, res, next) => {
        try {
            // cosole.log(req.body)
            const reg = await models.User.create(req.body);
            res.status(200).json(reg);
        } catch (error){
            res.status(500).send({
                mesage: 'Ocurrio un error'
            });
            next(error)
        }
    },

    list: async (req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.User.find()
                res.status(200).json(reg);

        }
        catch(error) {
            res.status(500).send({
                mesage: 'Ocurrio un error'
            });
            next(error)
        }
        
    },
}