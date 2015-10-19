var mainApplicationModuleName = 'mean';

var mainApplicationModuleModule = angular.module(mainApplicationModuleName
, ['example']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});
