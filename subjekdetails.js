app.controller(
    'subjekdetails',
    function ($scope, $http, $rootScope) {
        // console.log($rootScope.sessionUser);
        console.log($rootScope.kodSubjek);
        console.log($rootScope.sesi);
        console.log($rootScope.sem);

        //get selected subject details
        var urlsubDet = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=subjek_seksyen&sesi="
                        + $rootScope.sesi + "&semester=" + $rootScope.sem;
        console.log(urlsubDet);
        $http.get(urlsubDet).then(
            function (response) {
                $scope.subjectDetail = response.data;
                $rootScope.filteredArray = $scope.subjectDetail.filter(function(item) {
                    return item.kod_subjek === $rootScope.kodSubjek;
                });
                console.log($rootScope.filteredArray);
            },
            function (response) {
                alert("AJAX connection error!");
            }
        );
    }
)