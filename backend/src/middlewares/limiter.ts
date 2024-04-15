import rateLimit from "express-rate-limit";

export const storyLimiter = rateLimit({
  max: 10, //max requests
  windowMs: 24 * 60 * 60 * 1000, //24 hours
  message: "Too many requests from this IP, please try again after in 24 hours",
});

export const userLimiter = rateLimit({
  max: 3,
  windowMs: 20 * 60 * 1000, // 20 minutes
  message:
    "Too many requests to identify, please try again after in 20 minutes",
});

export const globalLimiter = rateLimit({
  max: 100,
  windowMs: 3 * 60 * 1000, // 3 minutes
  message:
    "Too many requests from this IP, please try again after in 15 minutes",
});
