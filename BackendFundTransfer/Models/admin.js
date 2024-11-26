const mongoose = require("mongoose");
const Joi = require("joi");

const adminSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            minLenght: 3,
            maxLenght: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        },
        password: {
            type: String,
            minLength: 6,
        },
        role: {
            type: String,
            required: true,
            enum: ["admin", "superadmin"],
        },
    },
    { timestamps: true }
);

const validateAdmin = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().valid("admin","superadmin").required(),
    });
    return schema.validate(data);
}

module.exports = {
    adminModel: mongoose.model("admin", adminSchema),
    validateAdmin,
}