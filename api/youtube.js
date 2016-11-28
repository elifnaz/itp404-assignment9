var youtube = require('youtube-search');
var key = process.env.key

module.exports = {
  searchYoutube: function(val){
    return new Promise(function(resolve, reject) {
      youtube(val, {
          key: key
        }, function (err, results) {
          if(err) return console.log(err);
          resolve(results);
        });
      });
    }
};
