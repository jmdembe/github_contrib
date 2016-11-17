(function() {
    'use strict';

    window.ghContrib = window.ghContrib || {};

    var token;
    var query;

    $('input')
        .on('submit', function findContrib () {
            var token = $('#api-key').val();
            var query = $('#query').val();

            var firstCall = window.ghContrib.firstCall(token, query);
        })
}());
