var infoData = require("../View/Data/info");

module.exports = function (app) {

    app.get("/api/person", function (req, res) {
        res.json(infoData);
    });

    app.post("/api/person", function (req, res) {

        for (var i = 0; i < infoData.length; i++) {
            var sal = infoData[i].info.salary;

            var salOBJ = {
                base: parseFloat(sal),
                we: base * 0.6,
                mW: base * 1.2,
                ea: base * 0.8,
            }
            
            console.log(salOBJ)
            salArray.push(salOBJ);

        }
    })

}