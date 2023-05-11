import { Router } from 'express';
import { authToken } from '../utils/jwt.js';
import { mockProducts } from '../utils/mockProducts.js'

const mockRoute = Router();

mockRoute.get('/mockingproducts', authToken, (req, res) => {
    try {
        const result = mockProducts();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

export default mockRoute;