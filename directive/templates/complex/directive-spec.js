describe('§ <%= _.camelize(name) %>', function() {

  var
  scope,
  compile,
  compiledDirective;
  
  beforeEach(function() {
    module('<%= appname %>');
    
    inject(function($rootScope,$compile) {
      scope = $rootScope.$new();
      compile = $compile;
    });

    compiledDirective = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<<%= name %>></<%= name %>>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should ...', function() {

  });
});