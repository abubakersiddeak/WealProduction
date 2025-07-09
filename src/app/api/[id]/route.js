import { connectMongodb } from "@/app/lib/mongodb";
import Product from "@/app/models/product";
import Notification from "@/app/models/Notification"; // Import Notification model
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

// Cloudinary config (rest of the file remains the same until PUT)
// ...

export async function PUT(request, { params }) {
  await connectMongodb();

  const { id } = await params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  try {
    const body = await request.json();

    // Fetch the product before update to compare quantities
    const oldProduct = await Product.findById(id);

    const updatedProduct = await Product.findByIdAndUpdate(id, body, {
      new: true, // updated document return করবে
      runValidators: true, // model validation enforce করবে
    });

    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // --- Stock Notification Logic ---
    const THRESHOLD = 10;
    updatedProduct.sizes.forEach(async (newSize) => {
      const oldSize = oldProduct?.sizes.find((s) => s.size === newSize.size);

      console.log(`Checking size: ${newSize.size}`);
      console.log(`New quantity: ${newSize.quantity}`);
      console.log(`Old quantity: ${oldSize?.quantity}`);
      console.log(`Condition 1 (new < THRESHOLD): ${newSize.quantity < THRESHOLD}`);
      console.log(`Condition 2 (old >= THRESHOLD or old undefined): ${oldSize?.quantity >= THRESHOLD || oldSize === undefined}`);

      // Check if quantity dropped below threshold
      if (newSize.quantity < THRESHOLD && (oldSize?.quantity >= THRESHOLD || oldSize === undefined)) {
        console.log(`--- Creating notification for ${newSize.size} ---`);
        // Create a notification
        await Notification.create({
          productId: updatedProduct._id,
          productName: updatedProduct.name,
          size: newSize.size,
          currentQuantity: newSize.quantity,
          threshold: THRESHOLD,
          message: `Low stock for ${updatedProduct.name} (Size ${newSize.size}): ${newSize.quantity} left.`,
        });
      }
    });
    // --- End Stock Notification Logic ---

    return NextResponse.json(updatedProduct);
