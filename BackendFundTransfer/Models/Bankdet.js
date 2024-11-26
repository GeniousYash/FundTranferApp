const mongoose = require('mongoose');
const Joi = require("joi");

const BankAddress = mongoose.Schema(
    {
        city: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 50
        },
        state: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 50,
        },
    }
);

const bankDetailsSchema = new mongoose.Schema({
    accountHolderName: {
      type: String,
      required: true,
      trim: true,
    },
    accountNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    ifscCode: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    bankName: {
      type: String,
      required: true,
      trim: true,
    },
    branchName: {
      type: [BankAddress],
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    transactionLimit: {
      type: Number,
      default: 5000000,
      min:1,
      max:5000000,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  }, {
    timestamps: true, // Add createdAt and updatedAt timestamps
  });

const bankDetailsValidationSchema = (data) => {
    const schema = Joi.object({
        accountHolderName: Joi.string().min(2).max(100).required().trim().label('Account Holder Name'),
        accountNumber: Joi.string().pattern(/^[0-9]{9,18}$/).required().trim().label('Account Number'),
        ifscCode: Joi.string().pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/).required().uppercase().trim().label('IFSC Code'),
        bankName: Joi.string().min(2).max(50).required().trim().label('Bank Name'),
        branchName: Joi.array()
        .items(
            Joi.object({
                state: Joi.string().min(2).max(50).required(),
                city: Joi.string().min(2).max(50).required(),
            })
        )
        .max(5),
        phoneNumber: Joi.string().pattern(/^[0-9]{10}$/).optional().trim().label('Phone Number'),
        email: Joi.string().email().required(),
        transactionLimit: Joi.number().integer().positive().min(1).max(5000000).default(5000000).strict().label('Transaction Limit'),
        isActive: Joi.boolean().default(true).label('Is Active'),
    });
    return schema.validate(data);
};

module.exports = {
    bankdetModel : mongoose.model('BankDetail', bankDetailsSchema),
    bankDetailsValidationSchema
}
