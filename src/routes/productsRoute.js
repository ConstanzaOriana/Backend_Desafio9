import { Router } from 'express';
import { authToken } from '../utils/jwt.js';
import { 
    getAllProducts,
    adminRender,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productsController.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const productsRoute = Router();

productsRoute.get('/', authToken, getAllProducts);

productsRoute.get('/admin/products', authToken, isAdmin, adminRender);

productsRoute.post('/admin/products', authToken, isAdmin, createProduct);

productsRoute.put('/admin/products/:pid', authToken, isAdmin, updateProduct);

productsRoute.delete('/admin/products/:pid', authToken, isAdmin, deleteProduct);

productsRoute.get('/loggerTest', (req, res) => {
    req.logger.debug('This is a debug');
    req.logger.http('http://localhost:8080/home/loggerTest');
    req.logger.info('Enter root route');
    req.logger.warn('This is a warning');
    req.logger.error('This is an error');
    req.logger.fatal('This is a fatal error');
    res.send('Route ok');
});

export default productsRoute;