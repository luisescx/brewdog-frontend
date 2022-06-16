import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { authApi } from "services/authApi";

type Error = {
  statusCode: number;
  message: string;
};

const DEFAULT_ERROR = {
  statusCode: 400,
  message: "Please try again later"
};

async function signUp(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  try {
    const response = await authApi.post("users/create", {
      username,
      password
    });

    const { data } = response;
    return res.status(200).json({ ...data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data as Error;

      return res.status(400).json({ ...errorData });
    }

    return res.status(400).json({ ...DEFAULT_ERROR });
  }
}

export default signUp;
