export function userMiddlewareOne(req, res, next) {
  //here req method is checking
  console.log("Request Type", req.method);
  //next method is used fetching or connecting to next middleware
  next();
}
export function userMiddlewareTwo(req, res, next) {
  //here post method and its prams are checked which comming from req.body
  if (req.method == "POST") {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "body should not be empty" });
    } else if (!req.body?.firstname) {
      return res.status(400).json({ message: "body should contain firstname" });
    } else if (!req.body?.lastname) {
      return res.status(400).json({ message: "body should contain lastname" });
    } else if (!req.body?.hobby) {
      return res.status(400).json({ message: "body should contain hobby" });
    }
  } else if (req.method == "PUT") {
    if (!req.body) {
      return res.status(400).json({ message: "body should not be empty" });
    } else if (!req.body?.id) {
      return res.status(400).json({ message: "body should contain id" });
    }
  }
  next();
}
export function userMiddlewareThree(req, res, next) {
  //here request url is checking
  console.log("Request URL:", req.originalUrl);
  next();
}
