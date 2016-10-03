'use strict';

describe('Controller: SingupCtrl', function () {

  // load the controller's module
  beforeEach(module('globalesApp'));

  var SingupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SingupCtrl = $controller('SingupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
