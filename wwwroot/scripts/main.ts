

import store = require("Store");
import repoository = require("Repository");


requirejs.config({
    paths: {
        "jquery": "modules/jquery"
    }
});

require([
    "modules/knockout-3.4.0",
    "appViewModel",
    "jquery",
    "binding"],
    function (ko, appViewModel, jquery, binding) {
        var repo = new repoository.Repository(jquery);
        binding.registerBindingHandlers(ko, jquery);
        ko.applyBindings(new appViewModel(ko, repo));
        let myStore : store.IStore;
        myStore = new store.Store();
        myStore.RegisterScore(1,[ 1, 2, 4]);
    });




