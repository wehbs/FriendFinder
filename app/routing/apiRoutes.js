
var users = require("../data/friends.js")


module.exports = function (app) {

    // Create New User - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newUser = req.body;
        // newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();

        console.log(newUser);

        users.push(newUser);

        res.json(newUser);
    });


    app.get("/api/friends", function(req, res) {
        res.json(users);
      });

};