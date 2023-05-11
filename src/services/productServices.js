import { faker } from '@faker-js/faker';


/* Obtener productos */
export const getProducts = async (req, res) => {
  try {
    const products = await [];
    const { size } = await req.query;
    const limit = await size || 10;
    for (let index = 0; index < limit; index++) {
      products.push({
        "name": faker.commerce.productName(),
        "price": parseInt(faker.commerce.price(), 10),
        "image": faker.image.imageUrl()
      });
    }

    res.json(products);
  } catch (error) {
    console.log(error);
  }

};

/* Obtener un solo producto */
export const oneProduct = async (req, res) => {
  try {
    const { id } = await req.params;
    if (id === '999') {
      res.status(404).json({
        message: "not found",
      });
    } else {
      res.status(200).json({
        id,
        name: "televisor",
        price: 2000
      });
    }

  } catch (error) {
    console.log(error);
  }

};

/* Crear un producto */
export const createProduct = async (req, res) => {
  const body = await req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
};

/* actualizar un producto */
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;

  res.status(200).json({
    message: 'update',
    data: body,
    id
  });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: 'delete',
    id,
  })
}

