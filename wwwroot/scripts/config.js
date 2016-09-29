requirejs.config({
    paths: {
        "jquery": "Scripts/jquery-2.1.1"
    },
    shim: {
        "jquery": {
            exports: "jQuery",
        } }
});
require(["main"]);
//# sourceMappingURL=config.js.map