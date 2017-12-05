var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', function($scope) {
    $scope.personalDetails = [
        {
            'fname':''
        }];
    
        $scope.addNew = function(personalDetail){
            $scope.personalDetails.push({ 
                'fname': ""
            });
        };
    
        $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.personalDetails, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            }); 
            $scope.personalDetails = newDataList;
        };
    
    $scope.checkAll = function () {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.personalDetails, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };    
    
    $scope.getTotal1 = function(list){
        var total1 = 0;
        for(var i1 = 0; i1 < $scope.personalDetails.length; i1++){
            var product1 = $scope.personalDetails[i1].fname;
             total1 += product1;
        }
    return total1*0.125;
    }
    
}
                                 ]);

app.controller("ListController1", ['$scope', function($scope1) {
    $scope1.personalDetails1 = [
        {
            'fname1':''
        }];
    
        $scope1.addNew1 = function(personalDetail1){
            $scope1.personalDetails1.push({ 
                'fname1': ""
            });
        };
    
        $scope1.remove1 = function(){
            var newDataList1=[];
            $scope1.selectedAll = false;
            angular.forEach($scope1.personalDetails1, function(selected){
                if(!selected.selected){
                    newDataList1.push(selected);
                }
            }); 
            $scope1.personalDetails1 = newDataList1;
        };
    
    $scope1.checkAll1 = function () {
        if (!$scope1.selectedAll) {
            $scope1.selectedAll = true;
        } else {
            $scope1.selectedAll = false;
        }
        angular.forEach($scope1.personalDetails1, function(personalDetail1) {
            personalDetail1.selected = $scope1.selectedAll;
        });
    };    
    
    $scope1.getTotal = function(list){
        var total = 0;
        for(var i = 0; i < $scope1.personalDetails1.length; i++){
            var product = $scope1.personalDetails1[i].fname1;
             total += product;
        }
    return total*1;
    }
    
    $scope1.isHAPRental = function () {
        if($scope1.hapCheckbox){
            return 1;
        } else {
            return 0.8;
        }
    }
}
                                   ]);
                                                             
//app.controller("ListController2", ['$scope', function($scope3) {
//   $scope1.getOverall = function(list){
//     var total = 0;
 //       for(var i = 0; i < $scope3.personalDetails1.length; i++){
//            var product = $scope3.personalDetails1[i].fname1;
//             total += product;
//        } 
               
//    var total1 = 0;
//        for(var i1 = 0; i1 < $scope3.personalDetails.length; i1++){
//            var product1 = $scope3.personalDetails[i1].fname;
//             total1 += product1;           
//    }
//    return total + total1*0.125;
//}
//}
                  //                 ]);//