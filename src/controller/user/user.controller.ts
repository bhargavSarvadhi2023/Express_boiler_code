import { ApplicationController } from '../base.application.controller';
import { db } from '../../model/index';
import { AppError } from '../../utils';
import { ERRORTYPES, RES_TYPES } from '../../constant';

class UserController extends ApplicationController {
    constructor() {
        super(db.userModel);
    }

    async CreateUser(req, res, next) {
        try {
            const duplicateUser = await db.userModel.findOne({
                where: { username: req.body.username },
            });
            if (duplicateUser) {
                throw new AppError(
                    RES_TYPES.DUPLICATEUSER,
                    ERRORTYPES.CONFLICT,
                );
            }
            const Data = await db.userModel.create(req.body);
            return res.status(201).json({
                success: true,
                StatusCode: 201,
                data: Data,
                message: RES_TYPES.CREATE,
            });
        } catch (err) {
            return next(err);
        }
    }

    async getuser(req, res, next) {
        try {
            const data = await db.userModel.findAll({
                attributes: [
                    'username',
                    'Email',
                    'password',
                    'IsAdmin',
                    'isActive',
                    'isTime',
                    'isDeleted',
                    'UserID',
                ],
                order: [['UserID', 'ASC']],
            });
            if (data.length) {
                return res.status(200).json({
                    success: true,
                    statusCode: 200,
                    data,
                    message: RES_TYPES.FETCH,
                });
            }
            throw new AppError(RES_TYPES.NO_FOUND, ERRORTYPES.NOT_FOUND);
        } catch (error) {
            return next(error);
        }
    }

    async deleteUser(req, res, next) {
        try {
            const {
                params: { id },
            } = req;
            const data = await db.userModel.destroy({ where: { UserID: id } });
            if (!data || data === 0)
                throw new AppError(
                    RES_TYPES.ID_NOT_FOUND,
                    ERRORTYPES.NOT_FOUND,
                );
            return res.json({
                success: true,
                StatusCode: 200,
                message: RES_TYPES.DELETE,
            });
        } catch (error) {
            return next(error);
        }
    }

    async UpdateUser(req, res, next) {
        try {
            const { id } = req.params;
            const [data] = await db.userModel.update(req.body, {
                where: { UserID: id },
            });
            if (!data || data === 0)
                throw new AppError(
                    RES_TYPES.ID_NOT_FOUND,
                    ERRORTYPES.NOT_FOUND,
                );
            return res.json({
                success: true,
                StatusCode: 200,
                message: RES_TYPES.UPDATE,
            });
        } catch (err) {
            return next(err);
        }
    }
}
export const userController = new UserController();
