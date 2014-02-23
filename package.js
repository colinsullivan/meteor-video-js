Package.describe({
  summary: "A smart package that makes it easy to use Video.js"
});

Package.on_use(function (api) {
  var path = Npm.require("path");

  // make static files available
  api.add_files(path.join("lib", "video-js", "video-js.swf"), "client");
  api.add_files(path.join("lib", "video-js", "font", "vjs.eot"), "client");
  api.add_files(path.join("lib", "video-js", "font", "vjs.svg"), "client");
  api.add_files(path.join("lib", "video-js", "font", "vjs.ttf"), "client");
  api.add_files(path.join("lib", "video-js", "font", "vjs.woff"), "client");

  api.add_files(path.join("lib", "video-js", "video-js.css"), "client");
  api.add_files(path.join("lib", "video-js", "video.dev.js"), "client");

  // needs to go last, after videojs has loaded, to set the path to the
  // static files
  api.add_files(path.join("lib", "video-js-config.js"), "client");
});
