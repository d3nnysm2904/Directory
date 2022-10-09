// WHAT DOES IT LOOK LIKE

function logger(req, res, next) {
  console.log(`Sending ${req.method} to ${req.path}`);
  return next();
}

module.exports = { logger: logger };
