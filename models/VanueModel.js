import mongoose from 'mongoose'
const VanueSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    country: String,
    description: String,
    vanueType: String,
    access: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Vanue', VanueSchema)
