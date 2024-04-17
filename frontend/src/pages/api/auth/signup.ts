// pages/api/auth/signup.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";
import { connectToDatabase } from "../../../utils/dbConnect";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
  const { email, password } = req.body;

  // Hash the password before saving
  const hashedPassword = await hash(password, 10);

  // Save the user in the database
  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User created", userId: result.insertedId });
}
