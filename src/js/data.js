(function() {
    'use strict';

    window.ghContrib = window.ghContrib || {};
    window.ghContrib.firstCall = firstCall;

 Math.ceil(Math.random() * 19);
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
        .done(function firstSuccess(data) {
            console.log('hello?', data);

            var search = data.items[Math.ceil(Math.random() * 29)];
            console.log(search);

            function secondCall(search) {
                return $.ajax({
                    
                })
            }
            // use that to access a single array entry
            // use that entry to call another fn which does another ajax call

        })
        .fail(function firstError(xhr) {
            console.log('what happened?', xhr.status)
        })
    }
})();
