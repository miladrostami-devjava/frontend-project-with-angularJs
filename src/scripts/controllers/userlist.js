app.controller("userlistCtrl",function($scope){

    $scope.userList = [
{
    id: 1,
    username:"milad",
    jointed: 2024/15/4,
    fullName: "miladrostami"
},
{
    id: 2,
    username:"amir",
    jointed: 2024/3/4,
    fullName: "amirzare"
},
{
    id: 3,
    username:"ali",
    jointed: 2024/15/3,
    fullName: "alikeshavarz"
},
{
    id: 4,
    username:"hamed",
    jointed: 2024/4/4,
    fullName: "hamedtavasoli"
},
{
    id: 5,
    username:"john",
    jointed: 2024/15/4,
    fullName: "johnsmit"
},
{
    id: 7,
    username:"jack",
    jointed: 2024/15/4,
    fullName: "jackzare"
},
{
    id: 8,
    username:"porya",
    jointed: 2024/1/4,
    fullName: "poryagilaki"
}
    ];
$scope.showProfile = function(id){
    alert("your id is :" + " " + id)
}

});