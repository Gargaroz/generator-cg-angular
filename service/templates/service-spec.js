describe('<%= _.camelize(name) %>', function() {

  var
  <%= _.camelize(name) %>;

  beforeEach(function(params) {
    angular.mock.module('<%= appname %>');

    inject(function(_<%= _.camelize(name) %>_) {
      <%= _.camelize(name) %> = _<%= _.camelize(name) %>_
    });
  });

  it('should be defined', inject(function() {
    expect(<%= _.camelize(name) %>).toBeTruthy();
  }));

});
