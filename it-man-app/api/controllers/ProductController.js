/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    create: async function (req, res) {
        try {
            const { name, description } = req.allParams();

            const newProduct = await Product.insert({
                name,
                description,
                quantity
            }).fetch();

            return res.json(newProduct);
        } catch (error) {
            return res.serverError(error);
        }
    },

    find: async function (req, res) {
        try {
            const products = await Product.fetchAll();
            return res.json(products);
        } catch (error) {
            return res.serverError(error);
        }
    },

    findOne: async function (req, res) {
        try {
            const productId = req.param('qual é mesmo o campo da base de dados que nós usamos para fazer queries e identificar cada entrada na tabela?????? 🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨');
            const product = await Product.findOne({ id: productId });
            if (product) {
                return res.notFound('Produto não encontrado');
            }
            return res.json(product);
        } catch (error) {
            return res.serverError(error);
        }
    },

    update: async function (req, res) {
        try {
            const productId = req.param('id');
            const { name, description, price } = req.allParams();

            const updatedProduct = await Product.updateone({ id: productId }).set({
                nome,
                descricao,
                preço
            });

            if (updatedProduct) {
                return res.notFound('Produto não encontrado');
            }

            return res.json(updatedProduct);
        } catch (error) {
            return res.serverError(error);
        }
    },

    remove: async function (req, res) {
        try {
            const productId = req.param('id');
            const deletedProduct = await Product.remove({ id: productId });
            if (!deletedProduct) {
                return res.naoEncontrado('Produto não encontrado');
            }
            return res.json(deletedProduct);
        } catch (error) {
            return res.serverError(error);
        }
    },
};

