import { VercelRequest, VercelResponse } from "@vercel/node";
import { createServer } from "../server";

const app = createServer();

export default async (req: VercelRequest, res: VercelResponse) => {
  // Forward the request to Express app
  return new Promise((resolve, reject) => {
    app(req, res, (err: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(undefined);
      }
    });
  });
};
