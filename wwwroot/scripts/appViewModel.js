define(function () {
    return function appViewModel(ko, repo) {
        this.users = ko.observableArray(repo.GetUsers());
        this.score = ko.observableArray();
        this.selectedUser = ko.observable();
        this.firstName = ko.observable(this.users()[1].id);
        this.firstNameCaps = ko.pureComputed(function () {
            return this.firstName();
        }, this);
        this.giftWrap = ko.observable(true);
        this.myClick = function () {
            var names = ["Svein", "Heidi", "Jonas", "Erlend"];
            repo.getInfo(names, this.arrayFye);
            // var userScore = repo.GetScore(parseInt(this.firstName(), null));
            // this.score(userScore);
            // console.log(this.selectedUser());
        };
        this.userSelect = function () {
            var id = this.selectedUser().id;
            this.score(repo.GetScore(id));
            console.log(this.score());
        };
        function arrayFye(values) {
            var arr = _.split(values, ",");
            console.log(arr);
        }
    };
});
//# sourceMappingURL=appViewModel.js.map