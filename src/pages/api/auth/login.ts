// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, password } = req.body;
    res.status(200).json({
      name,
      password,
    });
  } else {
    res.status(405).json({
      error: "Only POST requests allowed",
    });
  }
}
