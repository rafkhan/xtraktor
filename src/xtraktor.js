(function(module, undefined) {

  // Get metadata from URL
  module.fromUrl = function(uri) {
    return {};
  };

  // Get metadata from HTML string
  module.fromHtml = function(html) {

    var parseImgTags = function(data) {
      var re = /<img.+?src=[\"'](.+?)[\"'].*?>/ig;
      console.log(re.exec(data));
    };

    ajaxGet('http://google.com', parseImgTags);
    
  };

  var ajaxGet = function(url, cb) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400){
        var resp = request.responseText;
        cb(resp);
      } else {
        console.log('error');
      }
    };

    request.onerror = function() {
      console.log('error');
    };

    request.send();
  };

})(window.xtraktor = window.xtraktor || {});

xtraktor.fromHtml("<html><img src='asd' />");
