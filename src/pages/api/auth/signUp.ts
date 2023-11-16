// Importing necessary modules
import { NextApiRequest, NextApiResponse } from "next";
import { DbConnect } from "../../../../utils/db";
import UserModel from "../../../../model/user.model"; // Adjust the path accordingly

// Exporting signUp as the default function
export default async function signUp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await DbConnect();
    if (req.method === "POST") {
      const { name, email, password } = req.body;

      // Check if the user with the given email already exists
      const existingUser = await UserModel.findOne({ email });

      if (existingUser) {
        // If the user already exists, return an error
        res.status(400).json({
          success: false,
          message: "User with this email already exists",
        });
      } else {
        // Create a new user
        const newUser = await UserModel.create({ name, email, password });

        res.status(201).json({
          success: true,
          message: "User registered successfully",
          user: newUser,
        });
      }
    } else {
      res.status(405).json({
        error: "Only POST requests allowed",
      });
    }
  } catch (error) {
    console.error("error is here", error);
    res.status(500).json({
      error,
    });
  }
}
