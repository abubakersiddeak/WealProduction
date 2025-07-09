import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    productName: { type: String, required: true },
    size: { type: String, required: true },
    currentQuantity: { type: Number, required: true },
    threshold: { type: Number, default: 10 },
    read: { type: Boolean, default: false },
    message: { type: String }, // e.g., "Low stock for Product X (Size S): 5 left."
  },
  { timestamps: true }
);

const Notification =
  mongoose.models.Notification ||
  mongoose.model("Notification", notificationSchema);

export default Notification;
