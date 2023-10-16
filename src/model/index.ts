import { Sequelize } from 'sequelize';
import { sequelize } from '../config/database';
import { userModel } from './user.model';

export const db = {
    Sequelize,
    sequelize,
    userModel,
};
db.sequelize.sync();
