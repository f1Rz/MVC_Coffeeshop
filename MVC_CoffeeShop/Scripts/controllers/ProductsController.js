app.controller('ProductsController', ['$http', '$scope', function ($http, $scope)
{
    $scope.productsList = [];

    $scope.getProductList = function ()
    {
        $http.get('/api/Products').success(function (data) {
            $scope.productsList = data;
        }).error(function (err) {
            console.log(err);
        });
    }

    $scope.newProduct = {};

    $scope.addProduct = function () {
        $http.post('/api/Products', $scope.newProduct)
            .success(function () {
                alert("Ok!");
            }).error(function (err) {
                alert(err);
            });
    }
    // отделить в другой контроллер
    $scope.dateList = [];
    
    $scope.getDateList = function () {
        $http.get('/api/getDate').success(function (data) {
            $scope.dateList = data;
        }).error(function (err) {
            console.log(err);
        });
    }

    function convertDateForServer(date) {
        if (date === undefined || date === null)
            return "";
        var dt = date.split(' ');
        var d = dt[0].split('.');
        return d[2] + "-" + d[1] + "-" + d[0] + "T" + dt[1];
    }
   

    $scope.addTempDate = function (date) {
        date.Date = convertDateForServer(date.lDate);
        $http.post('/api/addDate', date)
            .success(function () {
                alert("Ok");
            });
    }

    $scope.convertDateFromServer = function(date) {
        if (date === undefined || date === null)
            return "";
        var dt = date.split('T');
        var d = dt[0].split('-');
        return d[2] + "." + d[1] + "." + d[0] + " " + dt[1];
    }
}]);