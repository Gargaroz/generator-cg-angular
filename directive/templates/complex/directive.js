(function() {
    'use-strict';

    /**
     * @ngdoc directive
     * @name <%= appname %>.directive:<%= _.camelize(name) %>
     * @restrict E
     * @scope
     * @param {} parameterName Parameter description
     * @description
     */
    angular
    .module('<%= appname %>')
    .directive('<%= _.camelize(name) %>',<%= _.camelize(name) %>);
    
    function <%= _.camelize(name) %>() {
        var directive = {
            restrict: 'E',
            templateUrl: '<%= htmlPath %>',
            scope: {},
            bindToController: {},
            controller: <%= _.camelize(_.classify(name)) + 'Ctrl' %>,
            controllerAs: '<%= _.camelize(name).toLowerCase() + "ctrl" %>',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {}
    }

    <%= _.camelize(_.classify(name)) + 'Ctrl' %>.$inject = [];

    function <%= _.camelize(_.classify(name)) + 'Ctrl' %>() {
        // PRIVATE VARIABLES
        var vm = this;

        // PUBLIC VARIABLES AND FUNCTIONS


        // PUBLIC FUNCTIONS IMPLEMENTATIONS


        // PRIVATE FUNCTIONS

    }

})();