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

  find: async function (req, res) {
      try {
          const products = await Product.find();
          return res.json(products);
      } catch (error) {
          return res.serverError(error);
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

  update: async function (req, res) {
      try {
          const productId = req.param('id');
          const { name, description, price } = req.allParams();

          const updatedProduct = await Product.updateOne({ id: productId }).set({
              name,
              description,
              price
          });

          if (!updatedProduct) {
              return res.notFound('Produto não encontrado');
          }

          return res.json(updatedProduct);
      } catch (error) {
          return res.serverError(error);
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
