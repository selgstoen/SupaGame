define(["require", "exports"], function (require, exports) {
    "use strict";
    var Store = (function () {
        function Store() {
            this.internalStore = [];
        }
        Store.prototype.RegisterScore = function (userId, score) {
            this.internalStore.push(new UserScore(userId, score));
        };
        Store.prototype.GetScoreForUser = function (userId) {
            return [];
        };
        ;
        return Store;
    }());
    exports.Store = Store;
    var UserScore = (function () {
        function UserScore(userId, score) {
            this.UserId = userId;
            this.Score = score;
        }
        return UserScore;
    }());
});
//# sourceMappingURL=Store.js.map