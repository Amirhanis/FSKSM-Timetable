app.controller(
    'pensyarah',
    function ($scope, $http, $rootScope) {
        //getting urlAllLecturer
        var urlAllLecturer = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pensyarah&session_id="
                            + $rootScope.sessionAdmin.session_id + "&sesi=" + $rootScope.currentSession +"&semester=" + $rootScope.currentSemester;

        //get all lecturer
        console.log($rootScope.sessionAdmin.session_id);
        console.log($rootScope.currentSession);
        console.log($rootScope.currentSemester);
        console.log(urlAllLecturer);
        $http.get(urlAllLecturer).then(
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
            $rootScope.no_pekerja = searchValue;
        }


        //set rootscope for no_pekerja
        $scope.codeClicked = function(searchValue){
            $rootScope.no_pekerja = searchValue;
        }
    },
);