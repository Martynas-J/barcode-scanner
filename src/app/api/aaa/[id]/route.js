// import connect from "@/app/utils/db";
// import statisticsModel from "@/models/Statistics";

import { NextResponse } from "next/server";

export const PATCH = async (request) => {
  console.log("ateina");
  // const data = await request.json();
  // console.log(data);
  try {
    // await connect();

    // const newStatistics = new statisticsModel(data);
    // await newStatistics.save();

    return new NextResponse(`This has been created`, { status: 200 });
  } catch (err) {
    console.error("Database Error: ", err);
    return new NextResponse("Database Error :(", { status: 500 });
  }
};
