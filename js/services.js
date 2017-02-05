angular.module('app.services', [])

.service('VisitorService', ['$q', '$http', '$timeout', function($q, $http, $timeout){
    var api_url = 'https://sheetsu.com/apis/v1.0/27c0c82cb1cd';
    return {
        /*getAll: function() {
            return $http.get(api_url).then(function(response){
                console.log(response.data);
                return response.data;
            });
        },
        search: function(userInput) {
            var search_url = api_url + '/contact/' + userInput;
            
            return $http.get(search_url).then(function(response){
                console.log(response.data);
                return response.data;
            });
        },
        addVisitor: function(visitor){
            return $http.post(api_url, visitor).then(function(resp){
                return resp.data;
            });
        },*/
        search: function(userInput){
            console.log(userInput);
            return $timeout(function(){
                return [{
                comments:"",
                contact:"9579690281",
                inTime:"12:42",
                name:"Rohit Shedage",
                otherVisitors:"Nikhil Bhandari",
                purpose:"Visit",
                vehicleNumber:"MH12JP5167",
                visitorCount:"2"
            }];
            },3000);
        },
        addVisitor: function(visitor){
            return $timeout(function(){
                return [{
                comments:"",
                contact:"9579690281",
                inTime:"12:42",
                name:"Rohit Shedage",
                otherVisitors:"Nikhil Bhandari",
                purpose:"Visit",
                vehicleNumber:"MH12JP5167",
                visitorCount:"2"
            }];
            },3000);
        }
        
    };
}]);