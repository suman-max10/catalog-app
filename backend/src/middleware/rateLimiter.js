/** @format */

import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const identifier = req.ip || req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || "anonymous";
    const { success } = await ratelimit.limit(identifier);
    if (!success) {
      return res.status(429).json({
        message: "Too many request, Please try later!!!",
      });
    }
    next();
  } catch (error) {
    console.log("Rate Limit Error", error);
    next(error);
  }
};
export default rateLimiter;
