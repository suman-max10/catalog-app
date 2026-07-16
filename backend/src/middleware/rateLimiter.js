/** @format */

import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit(userid);
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
