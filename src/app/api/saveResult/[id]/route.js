import connect from "@/app/utils/db";
import itemModel from "@/models/Item";
import { NextResponse } from "next/server";
// Įsitikinkite, kad tinkamai importuojate savo Mongoose modelį

export const PATCH = async (request, { params }) => {
  const id = params.id;
  const data = await request.json();
  let updatedData = ""
  try {
    await connect();
    if (!data.itemName) {
      updatedData = await itemModel.findOneAndUpdate(
        { code: id },
        { $inc: { itemValue: data.itemValue } },
        { new: true }
      );
    }


    if (!updatedData) {
      if (!data.itemName) {
        return new NextResponse(`This has been updated`, { status: 400 });
      }
      const newItem = new itemModel({ code: id, ...data });
      await newItem.save();
    }

    return new NextResponse(`This has been updated`, { status: 200 });
  } catch (err) {
    console.error("Database Error: ", err);
    return new NextResponse("Database Error :(", { status: 500 });
  }
};
