import { db } from '../../model';
import dotenv from 'dotenv';
dotenv.config();
import { ERRORTYPES, RES_TYPES } from '../../constant';
import { AppError } from '../../utils';
import { TokenController } from '../../config/passport.jwt';

class AuthController {
    async login(req, res, next) {
        try {
            const {
                body: { username, password },
            } = req;
            const result = await db.userModel.findOne({ where: { username } });
            if (result && password == result.password) {
                if (result.isActive === 0) {
                    throw new AppError(
                        RES_TYPES.ACTIVE_YOUR_ACCOUNT,
                        ERRORTYPES.FORBIDDEN,
                    );
                }
                const payload = {
                    id: result.UserID,
                };
                const token = await TokenController.createToken(payload, next);
                return res.status(200).json({
                    success: true,
                    statusCode: 200,
                    role: result.IsAdmin,
                    user: result.username,
                    data: token,
                    message: RES_TYPES.LOGIN,
                });
            } else {
                return next(
                    new AppError(RES_TYPES.AUTH_FAIL, ERRORTYPES.UNAUTHORIZED),
                );
            }
        } catch (error) {
            return next(error);
        }
    }
}

export const authController = new AuthController();
