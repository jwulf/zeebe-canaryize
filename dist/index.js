"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var healthchecks_io_1 = require("healthchecks.io");
exports.canaryize = function (ZB, healthcheckConfig) {
    var check = healthchecks_io_1.healthcheck(healthcheckConfig.url, healthcheckConfig.minutes);
    if (!check) {
        return;
    }
    ZB.on("ready", function () { return check.start(); });
    ZB.on("connectionError", function () { return check.stop(); });
};
//# sourceMappingURL=index.js.map