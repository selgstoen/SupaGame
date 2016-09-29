define(["require", "exports", "Store", "Repository"], function (require, exports, store, repoository) {
    "use strict";
    requirejs.config({
        paths: {
            "jquery": "modules/jquery"
        }
    });
    require([
        "modules/knockout-3.4.0",
        "appViewModel",
        "jquery",
        "binding"], function (ko, appViewModel, jquery, binding) {
        var repo = new repoository.Repository(jquery);
        binding.registerBindingHandlers(ko, jquery);
        ko.applyBindings(new appViewModel(ko, repo));
        var myStore;
        myStore = new store.Store();
        myStore.RegisterScore(1, [1, 2, 4]);
    });
});
//# sourceMappingURL=main.js.map