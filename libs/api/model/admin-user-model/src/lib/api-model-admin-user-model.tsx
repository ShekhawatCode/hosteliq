import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const adminUserSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  sortKey: {
    type: String,
    rangeKey: true,
  },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: {
      name: 'emailIndex',
      global: true,
    },
  },
  password: String,
  passwordUpdatedAt: Number,
  loginAttempt: Number,
  lastLogin: Number,
  resetPasswordToken: String,
  userType: {
    type: String,
    enum: ['super-admin', 'sub-admin'],
  },
  authToken: String,
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Deleted'],
  },
  timestamps: { createdAt: true, updatedAt: false },
});

export const AdminUser = mongoose.model('AdminUser', adminUserSchema);
