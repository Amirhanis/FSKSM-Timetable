app.controller(
    'subjek',
    function ($scope, $http, $rootScope) {

        //getting urlAllSubject
        if (typeof $scope.sesi === 'undefined' || !$scope.sesi || $scope.sesi === ''){
            //declare default value
            $rootScope.sesi = "2022/2023";
            $rootScope.sem = "1";
            $scope.sesisem = "1";
            var urlAllSubject = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=subjek&sesi="
                                + $rootScope.sesi +"&semester=" + $rootScope.sem;
        }
        else{
            var urlAllSubject = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=subjek&sesi="
                                + $rootScope.sesi +"&semester=" + $rootScope.sem;
            $scope.sesisem = $rootScope.option;
        }

        //get all subject               
        console.log($rootScope.sesi);
        console.log($rootScope.sem);
        console.log(urlAllSubject);
        $http.get(urlAllSubject).then(
            function (response) {
                $rootScope.data = response.data;
                console.log($rootScope.data);
            },
            function (response) {
                alert("AJAX connection error!");
            }
        );

        //search function
        $scope.passSearchValue = function(searchValue){
            $rootScope.kodSubjek = searchValue;
        }

        //get subject based on sesi & sem choosen
        $scope.chooseSesi = function(){
            var selected = $scope.sesisem;
            $rootScope.option = selected;
            
            if (selected == 1){
                $scope.sesi ="2022/2023";
                $scope.sem ="1";
            }
            else if (selected == 2){
                $scope.sesi ="2021/2022";
                $scope.sem ="1";
            }
            else if (selected == 3){
                $scope.sesi ="2021/2022";
                $scope.sem ="2";
            }
            else if (selected == 4){
                $scope.sesi ="2020/2021";
                $scope.sem ="1";
            }
            else if (selected == 5){
                $scope.sesi ="2020/2021";
                $scope.sem ="2";
            }
            else if (selected == 6){
                $scope.sesi ="2019/2020";
                $scope.sem ="1";
            }
            else if (selected == 7){
                $scope.sesi ="2019/2020";
                $scope.sem ="2";
            }
            else if (selected == 8){
                $scope.sesi ="2018/2019";
                $scope.sem ="1";
            }
            else if (selected == 9){
                $scope.sesi ="2018/2019";
                $scope.sem ="2";
            }

            $rootScope.sesi = $scope.sesi;
            $rootScope.sem = $scope.sem;

            var urlSesiSubject = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=subjek&sesi="
                                + $rootScope.sesi +"&semester=" + $rootScope.sem;
            console.log($rootScope.sesi);
            console.log($rootScope.sem);
            console.log(urlSesiSubject);
            $http.get(urlSesiSubject).then(
                function (response) {
                    $rootScope.data = response.data;
                    console.log($scope.data);
                },
                function (response) {
                    alert("AJAX connection error!");
                }
            );
        }

        //set rootScope for kodSubjek
        $scope.codeClicked = function(kod) {
            $rootScope.kodSubjek = kod;
        }
    },
);