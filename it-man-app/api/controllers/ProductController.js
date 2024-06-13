/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    create: async function (req, res) {
        try {
            const { name, description, price } = req.allParams();

            const newProduct = await Product.create({
                name,
                description,
                price
            }).fetch();

            return res.json(newProduct);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // ITMAN: Complete a função find do ProductController
    // Lembre-se de criar uma constante para armazenar o produto que você quer encontrar
    // Lembre-se de retorná-lo como json
    // Lembre-se de lidar com casos de erros
    find: async function (req, res) {
        try {

        } catch (error) {

        }
    },

    findOne: async function (req, res) {
        try {
            const productId = req.param('id');
            const product = await Product.findOne({ id: productId });
            if (!product) {
                return res.notFound('Produto não encontrado');
            }
            return res.json(product);
        } catch (error) {
            return res.serverError(error);
        }
    },

    // ITMAN: Complete a função update do ProductController
    // Dica: A função update usa o id do produto assim como a função delete ou a findOne, use de base
    // Dica: A função update insere informações para um produto assim como a função create, use de base
    update: async function (req, res) {
        try {

            // Faça uma verificação aqui para caso o produto não seja encontrado
            // if () {
            //     return res.notFound('Produto não encontrado');
            // }

            // return res.json(updatedProduct);
        } catch (error) {
            // return res.serverError(error);
        }
    },

    delete: async function (req, res) {
        try {
            const productId = req.param('id');
            const deletedProduct = await Product.destroyOne({ id: productId });
            if (!deletedProduct) {
                return res.notFound('Produto não encontrado');
            }
            return res.json(deletedProduct);
        } catch (error) {
            return res.serverError(error);
        }
    },
};
