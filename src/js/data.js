(function() {
    'use strict';

    window.ghContrib = window.ghContrib || {};
    window.ghContrib.firstCall = firstCall;

    /**
     * Activates the first Ajax call
     * @return {Promise} Gets to the second set of calls t
     */
    function firstCall(token, query) {
        return $.ajax({
            url: 'https://api.github.com/search/repositories',
            method: 'GET',
            dataType: 'json',
            headers: {
                Authorization: 'token '+ token
            },
            data: {
                q: query
            }
        })
        .then(function firstSuccess(data) {
            console.log('hello?', data);
        })
        .catch(function firstError(xhr) {
            console.log('what happened?', xhr.status)
        })
    }
})();
