/**
 * Created by dayanithihari on 23/10/2016.
 */
angular.module('testApp.services', [])

    .factory('stockDataService', function ($q, $http) {

        var getPriceData = function (ticker) {

            var deferred = $q.defer(),
                url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22" + ticker + "%22)&format=json&env=http://datatables.org/alltables.env";

            $http.get(url)
                .success(function (json) {

                    var jsonData = json.query.results.quote;

                    deferred.resolve(jsonData);
                })
                .error(function (error) {
                    console.log("Price data error:" + error);
                    deferred.reject();
                });
            return deferred.promise;

        };

        return {
            getPriceData: getPriceData
        };

    });
;