(function() {
    'use-strict';

    angular
    .module('<%= appname %>')
    .controller('<%= ctrlname %>', function(){
        // PRIVATE
        var vm = this;

        // PUBLIC
        vm.ok = _ok;
        vm.cancel = _cancel;

        // PUBLIC FUNCTIONS IMPLEMENTATION
        function _ok() {
            
        }

        function _cancel() {
            
        }

        // PRIVATE FUNCTIONS
    });
})();