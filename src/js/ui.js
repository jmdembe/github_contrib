(function() {
    'use strict';

    window.ghContrib = window.ghContrib || {};
    window.ghContrib.addInfo = addInfo;

    var token;
    var query;

    $('#search')
        .on('submit', function findContrib (event) {
            event.preventDefault();
            var token = $('#api-key').val();
            var query = $('#query').val();

            var searchRepo = window.ghContrib.searchRepo(token, query);
        })

    function addInfo(avatar_url,user) {
      console.log(avatar_url, user);
    }
}());
