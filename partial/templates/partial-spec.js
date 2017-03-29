describe('<%= ctrlname %>', function() {

    var ctrl;

    beforeEach(function() {
        angular.mock.module('<%= appname %>')
        
        inject(function($controller) {
            ctrl = $controller('<%= ctrlname %>');
        });
    });

    it('should be defined', inject(function() {
        expect(ctrl).toBeTruthy();
    }));

});
