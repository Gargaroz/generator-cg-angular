(function() {
    'use-strict';

    angular
    .module('<%= appname %>')
    .factory('<%= _.camelize(name) %>',<%= _.camelize(name) %>);

    <%= _.camelize(name) %>.$injector = [];

    function <%= _.camelize(name) %>() {

        // PRIVATE VARIABLES

        // EXPOSED VARIABLES AND FUNCTIONS
        var <%= _.camelize(name) %> = {};

        return <%= _.camelize(name) %>;

        // PUBLIC FUNCTIONS IMPLEMENTATIONS

        // PRIVATE FUNCTIONS

    }

})();