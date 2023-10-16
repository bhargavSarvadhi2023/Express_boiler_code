import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from '../utils/interface';

export const userModel = sequelize.define<User>(
    'Users',
    {
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        Email: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        DNumber: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        CellPhone: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        IsAdmin: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        isActive: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1,
        },
        FacilityID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        ChatRead: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        isDeleted: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        isTime: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1,
        },
    },
    {
        timestamps: true,
    },
);
