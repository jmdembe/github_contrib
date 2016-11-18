(function() {
    'use strict';

    window.ghContrib = window.ghContrib || {};
    window.ghContrib.searchRepo = searchRepo;

 Math.ceil(Math.random() * 19);
    /**
     * Activates the first Ajax call
     * @return {Promise} Gets to the second set of calls t
     */
    function searchRepo(token, query) {
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
        .then(function searchRepoSuccess(data) {
            console.log('hello?', data);

            var search = data.items[Math.ceil(Math.random() * 29)];
            console.log(search);

            return secondCall(search);
            // use that to access a single array entry
            // use that entry to call another fn which does another ajax call

        })
        .then(function functionName(result) {
            console.log(result);
        })
        .fail(function searchRepoError(xhr) {
            console.log('what happened?', xhr.status)
        })
    }

    function secondCall(search) {
        return $.ajax({
            url: 'https://api.github.com/repos/:username/:reponame/commits',
            method: 'GET',
            dataType: 'json',
            data: {
              username: search.owner.login, //?username='...'
              reponame: search.name
            }
        });
    }
})();
