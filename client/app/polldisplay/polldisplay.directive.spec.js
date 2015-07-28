'use strict';

describe('Directive: polldisplay', function () {

  // load the directive's module and view
  beforeEach(module('workspaceApp'));
  beforeEach(module('app/polldisplay/polldisplay.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<polldisplay></polldisplay>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the polldisplay directive');
  }));
});