var mainApplicationModuleName = 'mean';

var mainApplicationModuleModule = angular.module(mainApplicationModuleName
, []);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});
