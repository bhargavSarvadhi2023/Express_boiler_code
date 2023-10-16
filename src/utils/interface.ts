import { Model } from 'sequelize';

interface User extends Model {
    UserID: number;
    username: string;
    CellPhone: string;
    DNumber: string;
    Email: string;
    IsAdmin: number;
    isActive: number;
    password: string;
    FacilityID: number;
    isDeleted: number;
    ChatRead: number;
    isTime: number;
    authenticate(password: string): boolean | string;
}

export { User };
