import { loginValidation } from '../../validation/basic.Validation';
import { authController } from '../../controller/index';
import BaseRoute from '../base.routes';

class AuthRoutes extends BaseRoute {
    async initializeRoutes() {
        this.router.post('/login', loginValidation, authController.login);
    }
}
export const authRoutes = new AuthRoutes().router;
