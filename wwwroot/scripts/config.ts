requirejs.config({
    paths: {
        "jquery": "Scripts/jquery-2.1.1",
        "lodash": "modules/lodash/"
    },
    shim: {
        "jquery": {
          exports: "jQuery",
    },
    "lodash" : {exports: "_"}
}
});

require(["main"]);