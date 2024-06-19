import mongoose from "mongoose";

const { Schema } = mongoose;

const statisticsSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    model: {
        type: String,
        required: true,
      },
    count: {
      type: Number,
      required: true,
    },
    action: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: {
      createdAt: true, 
      updatedAt: false, 
    },
  }
);

let statisticsModel;
try {
  statisticsModel = mongoose.model("Statistics");
} catch (error) {
  statisticsModel = mongoose.model("Statistics", statisticsSchema);
}

export default statisticsModel;
