import { connectMongodb } from "@/app/lib/mongodb";
import Product from "@/app/models/product";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) {
      return NextResponse.json({ message: "Query parameter is required" }, { status: 400 });
    }

    await connectMongodb();

    const products = await Product.find({
      name: { $regex: query, $options: 'i' }
    });

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error searching for products:", error);
    return NextResponse.json(
      { message: "Failed to search for products", error: error.message },
      { status: 500 }
    );
  }
}
