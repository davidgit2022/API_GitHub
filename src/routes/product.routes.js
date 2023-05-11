import { Router } from 'express';
import * as productController from '../controllers/productController.js';

const router = Router();

router.get('/', productController.getProducts);

router.get('/:id', productController.getOneProduct);

router.post('/', productController.createProduct);

router.patch('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);


/* router.patch('/:id', productController); */

/* router.get('/:filter', productController.getFilter);

 */

export default router;
