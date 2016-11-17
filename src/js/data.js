(function() {
    'use strict';

    window.ghContrib = window.ghContrib || {};

    window.ghContrib.firstCall = firstCall;

    var token;

    /**
     * Activates the first Ajax call
     * @return {Promise} [description]
     */
    function firstCall(token) {
        return $.ajax({
            url: 'https://api.github.com/search/repositories',
            method: 'GET',
            dataType: 'json',
            headers: {
                Authorization: 'token '+ token
            }
        })
    }
})();
