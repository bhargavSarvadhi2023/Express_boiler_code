import { END_POINTS } from '../../constant/index';
import { userController } from '../../controller/index';
import BaseRoute from '../base.routes';

class AdminRoutes extends BaseRoute {
    async initializeRoutes() {
        this.router.get(END_POINTS.GET_USERS, userController.getuser);
        this.router.delete(END_POINTS.DELETE_USER, userController.deleteUser);
        this.router.put(END_POINTS.EDIT_USER, userController.UpdateUser);
        this.router.post(END_POINTS.CRAETE_USER, userController.CreateUser);
    }
}
export const adminRoutes = new AdminRoutes().router;
