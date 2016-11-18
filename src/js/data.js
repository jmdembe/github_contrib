(function() {
    'use strict';

    window.ghContrib = window.ghContrib || {};
    window.ghContrib.searchRepo = searchRepo;

    var finalResult;
    var finalResultLength;

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
            console.log('First ajax call with repos:', data);

            var search = data.items[Math.ceil(Math.random() * 29)];

            return getCommit(search);
        })
        .then(function getCommitSuccess(result) {
            finalResultLength = Math.ceil(Math.random() * 29)
            finalResult = result[finalResultLength];
            console.log('second ajax call with commits: ', result);

            console.log('chosen commit: '+ finalResultLength, finalResult );


        })
        .fail(function searchRepoError(xhr) {
            console.log('what happened?', xhr.status)

        })
    }

/**
 * Upon success of the first ajax call (after a random repo is selected),
 * this function returns a promise with 30 commits.
 * @param  {Array} search
 * @return {Promise}
 */
    function getCommit(search) {
        return $.ajax({
            url: 'https://api.github.com/repos/'+ search.owner.login + '/' +search.name +'/commits',
            method: 'GET',
            dataType: 'json'
        })
    }

})();
