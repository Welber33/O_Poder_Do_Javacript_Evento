import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { createOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';


export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback){
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    })
});

router.get('/categories', listCategories);

router.post('/category', createCategory);

router.get('/products', listProducts);

router.post('/product', upload.single('image'), createProduct);

router.get('/category/:categoryId/products', listProductsByCategory);

router.get('/orders', listOrders);

router.post('/order', createOrder);

router.patch('/orders/:orderId', createOrderStatus);

router.delete('/orders/:orderId', cancelOrder);