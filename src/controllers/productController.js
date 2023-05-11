import * as productServices from '../services/productServices.js';

/* Obtener todo los productos */
export const getProducts = async (req, res) => {
  const products = await productServices.getProducts(req, res);
  res.json(products);
};

/* Obtener un solo producto */
export const getOneProduct = async(req, res) => {
  const oneProduct = await productServices.oneProduct(req, res);
  res.json(oneProduct);
};

/* Crear un producto */

export const createProduct = async (req, res) => {
  const newProduct = await productServices.createProduct(req, res);
  return newProduct;
};


/* Actualizar un producto */
export const updateProduct = async (req, res) => {
  const updateProduct = await productServices.updateProduct(req, res);
};

/* Actualizar un producto */
export const deleteProduct = async (req, res) => {
  const deleteProduct = await productServices.deleteProduct(req, res);
}


/* export const getFilter = async (req, res) => {
  const mensaje = await res.send('Yo soy un filter');
};

export const getOneProduc = async (req, res) => {
  const { id } = await req.params;
  res.json({
    id,
    name: "televisor",
    price: 2000
  })
};


export const getCategoriesId = async (req, res) => {
  const { categoryId, productId } = await req.params;

  res.json({
    categoryId,
    productId
  });
}; */

