import { NextResponse } from "next/server";

import prisma from "../../libs/prismadb";
import getCurrentUser from "../../actions/getCurrentUser";

export async function POST(request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    listingImages,
    category,
    features,
    services,
    operationDateTime,
    price,
    address,
    country,
    state,
    pincode,
    owonerFirstName,
    owonerLastName,
    owonerPhone,
  } = body;

  Object.keys(body).forEach((value) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      listingImages,
      category,
      features,
      services,
      operationDateTime,
      price,
      address,
      country,
      state,
      pincode,
      owonerFirstName,
      owonerLastName,
      owonerPhone,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
