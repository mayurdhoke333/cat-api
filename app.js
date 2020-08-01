// 'api_key=f6cb08b1-5d7b-48bf-9d49-6550272486ed'
// https://thecatapi.com/v1/images?api_key=ABC123

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

});


app.post("/", function(req, res) {

    const breed = req.body.breed;
    const api = "f6cb08b1-5d7b-48bf-9d49-6550272486ed";

    const url = "https://api.thecatapi.com/v1/images/search?api_key=" + api + "breed_id=" + breed + "&mime_types=jpg,png";

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const catData = JSON.parse(data);
            console.log(catData);

            const url1 = catData[0].url;
            console.log(url1);
            const id = catData[0].id;
            console.log(id);

            res.send("<img src =" + url1 + " width=300px height=300px>");




        });
    });

});

app.listen(3000, function() {

    console.log("server is running at port 3000");


});