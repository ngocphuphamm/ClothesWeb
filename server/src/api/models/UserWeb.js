const mongoose = require('mongoose');
const Customer = require('./Customers');
const { Schema } = mongoose;
const mongooseDelete = require('mongoose-delete');

const UserWeb = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        information: {
            name: { type: String, required: true },
            phoneNumber: { type: String, required: true },
            dateOfBirth: Date,
            gender: { type: Boolean, required: true },
            address: { type: String, required: true },
        },
        isAdmin: { type: Boolean, required: true, default: false },
        role: { type: Number, required: true, default: 0, enum: [0, 1, 2] },
        myPoint: { type: Number, required: true, default: 0 },
        verify: { type: Boolean, required: true, default: false },
        vip: {
            type: String,
            required: true,
            default: 'Bronze',
            enum: ['Bronze', 'Silver', 'Gold', 'Platinum'],
        },
        moneyPayed: { type: Number, required: true, default: 0 },
    },
    {
        timestamps: true,
        collection: 'UserWeb',
        versionKey: false,
    }
);
UserWeb.plugin(mongooseDelete, {
    overrideMethods: true,
    deletedAt: true,
});

module.exports = mongoose.model('UserWeb', UserWeb);
