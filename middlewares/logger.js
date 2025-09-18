const logger = (req,res,next) => {
    console.log(`[${new Date().toLocaleString("en-IN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true
})}] ${req.method} ${req.url}`);
    next();
}

module.exports = logger;