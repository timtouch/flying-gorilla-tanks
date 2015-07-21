'use strict';

describe('Controller: MakepollCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var MakepollCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MakepollCtrl = $controller('MakepollCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
