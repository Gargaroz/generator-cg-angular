(function() {
  'use-strict';

  /**
  * @ngdoc controller
  * @name <%= appname %>.controller:<%= ctrlname %>
  * @description
  *
  * @requires
  */
  angular
  .module('<%= appname %>')
  .controller('<%= ctrlname %>', <%= ctrlname %>);

  <%= ctrlname %>.$injector = [];
  
  function <%= ctrlname %>(){
    var vm = this;

    // PRIVATE VARIABLES


    // PUBLIC VARIABLES AND FUNCTIONS


    // PUBLIC FUNCTIONS IMPLEMENTATIONS


    // PRIVATE FUNCTIONS
    
  }

})();