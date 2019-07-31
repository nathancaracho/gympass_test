(() => {
    "use strict";
    const raceFile =
        `Hora                               Piloto             Nº Volta   Tempo Volta       Velocidade média da volta
        23:49:08.277      038 – F.MASSA                           1		1:02.852                        44,275`;

    const logObj = { "hour": null, "driver": null, "numLap": null, "timeLap": null, "mediumLapVelocity": null };
    const mockLogList = [
        {
            "driver": "038 – F.MASSA",
            "hour": "        23:49:08.277",
            "mediumLapVelocity": "44,275",
            "numLap": "1",
            "timeLap": "1:02.852"
        }
    ];

    const { expect } = require("chai");
    const sinon = require("sinon");
    const fs = require("fs");
    const log = require("../src/log");

    describe('Log test', () => {
        describe("Valuate the log return", () => {

            before(() => sinon.stub(fs, "readFileSync").returns(raceFile));
            after(() => fs.readFileSync.restore());

            it("Log return a not be a empty", () => {
                let logList = log("fake", logObj);
                expect(logList).not.to.be.empty;
            });
            it("Log return to be an array", () => {
                let logList = log("fake", logObj);
                expect(typeof logList).not.to.be.equals("Array");
            });
            it("Log return to be equals", () => {
                let logList = log("fake", logObj);
                expect(logList).to.be.eql(mockLogList);
            });
        });
    });
})();