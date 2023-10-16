import Joi from 'joi';
import { validateReq } from './validation.Helper';

class CommanValidationFilter {
    password() {
        return Joi.string()
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            )
            .required()
            .messages({
                'string.pattern.base':
                    'Password should be this type contain like ex:- Abc@123  ',
                'string.empty': 'Password cannot be empty',
            });
    }
    phone() {
        return Joi.string()
            .pattern(/^\+[0-9]{1,}$/)
            .length(13)
            .required()
            .messages({
                'string.pattern.base':
                    'Please provide valid phone number with +91 formate',
                'string.empty': 'phone number cannot be empty',
                'string.length': 'Please provide 10 digits phone number',
            });
    }

    emails() {
        return Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: { allow: ['com', 'net', 'org', 'edu'] },
            })
            .pattern(/^[^@]+@[^@]+\.[^@]+$/)
            .required()
            .messages({
                'string.email': 'Invalid email format',
                'string.minDomainSegments': 'Invalid email format',
                'string.tlds': 'Invalid email format',
                'string.pattern.base': 'Invalid email format',
            });
    }
}

export const userValidation = (req, res, next) => {
    const userSchema = Joi.object({
        username: Joi.string().required(),
        Email: new CommanValidationFilter().emails(),
        isActive: Joi.string().valid('0', '1').required(),
        password: Joi.string().min(6).required().messages({
            'string.length': 'Please provide 6 characters password',
        }),
        IsAdmin: Joi.number().required(),
    });
    validateReq(req, next, userSchema);
};

export const userUpdateValidation = (req, res, next) => {
    const userSchema = Joi.object({
        username: Joi.string().required(),
        Email: new CommanValidationFilter().emails(),
        isActive: Joi.string().valid('0', '1').required(),
        password: Joi.string().min(6).required().messages({
            'string.length': 'Please provide 6 characters password',
        }),
        IsAdmin: Joi.string().valid('0', '1', '2').required(),
        DNumber: Joi.string().required(),
        CellPhone: Joi.string().required(),
        isTime: Joi.string().required(),
    });
    validateReq(req, next, userSchema);
};

export const loginValidation = (req, res, next) => {
    const loginSchema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    });
    validateReq(req, next, loginSchema);
};

export const facilitiesValidation = (req, res, next) => {
    const facilitySchema = Joi.object({
        FacilityName: Joi.string().required(),
        PermittedName: Joi.string().required(),
        MeterNumber: Joi.string().required(),
        Line: Joi.string().required(),
        zOrder: Joi.number().required(),
        IsActive: Joi.string().required(),
        ShowBrine: Joi.string().required(),
    });
    validateReq(req, next, facilitySchema);
};

export const facilityLogValidation = (req, res, next) => {
    const facilitySchema = Joi.object({
        WaterMeter1: Joi.string().required(),
        Disposal1: Joi.string().required(),
        Disposal2: Joi.string().required(),
        Annulas1: Joi.string().required(),
        Annulas2: Joi.string().required(),
        LP: Joi.number().required(),
        Hours: Joi.string().required(),
        SalesDTE: Joi.string().required(),
        DateTime: Joi.string().required(),
    });
    validateReq(req, next, facilitySchema);
};

export const messagesValidation = (req, res, next) => {
    const messagesSchema = Joi.object({
        GroupID: Joi.number().required(),
        Title: Joi.string().required(),
        MessageContent: Joi.string().required(),
        isActive: Joi.number().required(),
    });
    validateReq(req, next, messagesSchema);
};
