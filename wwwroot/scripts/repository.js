/// <reference path="../scripts/modules/typings/jquery.d.ts"/>
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Repository = (function () {
        function Repository($) {
            this.users = [
                { id: 1, name: "Svein Elgstøen" },
                { id: 2, name: "Heidi Elisabeth Paulsen" },
            ];
            this.scores = [
                { id: 1, points: [3, 4, 3, 5, 4] },
                { id: 2, points: [6, 6, 3, 5, 4] }
            ];
            this.$ = $;
        }
        Repository.prototype.GetUsers = function () {
            return this.users;
        };
        Repository.prototype.GetScore = function (id) {
            var result = this.$.grep(this.scores, function (s) { return s.id === id; });
            if (result.length === 0) {
                return [];
            }
            return result[0].points;
        };
        Repository.prototype.getInfo = function (names, callback) {
            // let allNames = _.join(names, ",");
            //callback(allNames);
        };
        return Repository;
    }());
    exports.Repository = Repository;
    ;
});
//# sourceMappingURL=Repository.js.map