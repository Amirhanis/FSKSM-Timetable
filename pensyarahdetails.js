app.controller(
    'pensyarahdetails',
    function ($scope, $http, $rootScope) {
        console.log($rootScope.sessionAdmin.session_id);
        console.log($rootScope.no_pekerja);
        console.log($rootScope.currentSession);
        console.log($rootScope.currentSemester);

        //get selected lecturer details
        var urllectDet = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pensyarah&session_id="
                        + $rootScope.sessionAdmin.session_id + "&sesi=" + $rootScope.currentSession + "&semester=" + $rootScope.currentSemester;
        console.log(urllectDet);
        $http.get(urllectDet).then(
            function (response) {
                $scope.lecturerDetail = response.data;
                $rootScope.filteredArray1 = $scope.lecturerDetail.filter(function(item) {
                    return (item.no_pekerja == $rootScope.no_pekerja);
                });
                console.log($rootScope.filteredArray1);
            },
            function (response) {
                alert("AJAX connection error!");
            }
        );
        
        //get selected lecturers' subject
        var urllectSub = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pensyarah_subjek&no_pekerja=" + $rootScope.no_pekerja;
        console.log(urllectSub);
        $http.get(urllectSub).then(
            function (response) {
                $scope.lecturerSubject = response.data;
                console.log($rootScope.no_pekerja);
                $rootScope.filteredArray2 = $scope.lecturerSubject.filter(function(item) {
                    return (item.no_pekerja == $rootScope.no_pekerja && item.sesi === $rootScope.currentSession && item.semester === $rootScope.currentSemester);
                });
                console.log($rootScope.filteredArray2);
            },
            function (response) {
                alert("AJAX connection error!");
            }
        );
    }
)