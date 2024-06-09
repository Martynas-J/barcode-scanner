import connect from "@/app/utils/db";
import itemModel from "@/models/Item";
import { NextResponse } from "next/server";
 // Įsitikinkite, kad tinkamai importuojate savo Mongoose modelį

export const PATCH = async (request, { params }) => {
  const id = params.id;
  const data = await request.json();
  try {
    await connect();

    const updatedData = await itemModel.findOneAndUpdate(
      { code: id },
      { $inc: { itemValue: data.itemValue } },
      { new: true }
    );

    if (!updatedData) {
      // const newItem = new itemModel(data);
      // await newItem.save();
    }

    return new NextResponse(`This has been updated`, { status: 200 });
  } catch (err) {
    console.error("Database Error: ", err);
    return new NextResponse("Database Error :(", { status: 500 });
  }
};
