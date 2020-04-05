const path = require("path");

module.exports = function(app) {
  
  app.get("/exercise", function(_, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // Not quite sure what this is used for yet ....
  app.get("/stats", function(_, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};