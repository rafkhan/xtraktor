(function(module, undefined) {

  // Get metadata from URL
  module.fromUrl = function(uri) {
    return {};
  };

  // Get metadata from HTML string
  module.fromHtml = function(html) {

    var parseImgTags = function() {
      var re = /<img.+?src=[\"'](.+?)[\"'].*?>/ig;
      console.log(re.exec(html));
    };
    
  };

})(window.xtraktor = window.xtraktor || {});
