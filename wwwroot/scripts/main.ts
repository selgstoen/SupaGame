

import store = require("Store");
import repoository = require("Repository");

requirejs.config({
    paths: {
        "jquery": "modules/jquery",
        "lodash": "modules/lodash/lodash.min"

    }
});

require([
    "modules/knockout-3.4.0",
    "appViewModel",
    "jquery",
    "binding", "lodash"],
    function (ko, appViewModel, jquery, binding, _) {
        var repo = new repoository.Repository(jquery);
        binding.registerBindingHandlers(ko, jquery);
        ko.applyBindings(new appViewModel(ko, repo));
        let myStore : store.IStore;
        myStore = new store.Store();
        myStore.RegisterScore(1,[ 1, 2, 4]);
    });




