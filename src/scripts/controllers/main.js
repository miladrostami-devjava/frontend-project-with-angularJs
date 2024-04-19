app.controller("mainCtrl",function($scope){

    $scope.name = "milad";
    $scope.template = "src/views/dashboard.html";
    $scope.templateName = "dashboard";
    $scope.changeTemplateMenu = (templateName) => {
        $scope.templateName = templateName;
        "/views" + templateName + ".html";   
    }


});