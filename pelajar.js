app.controller(
    'pelajar',
    function ($scope, $http, $rootScope) {

        $scope.offset="0";
        // console.log($rootScope.course1);

        if(typeof $rootScope.course1 === 'undefined' || !$rootScope.course1 || $rootScope.course1 === '' || $rootScope.course1 === "All"){
            $rootScope.course1="All";
            $rootScope.option=1;

            var urlAllStudent = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar&session_id="
                            + $rootScope.sessionAdmin.session_id + "&sesi=" + $rootScope.currentSession +"&semester=" + $rootScope.currentSemester
                            +"&kod_fakulti=FSKSM&limit=100&offset="+ $scope.offset;

                            $http.get(urlAllStudent).then(
                                function (response) {
                                    $rootScope.pelajar = response.data
                                    // console.log($rootScope.pelajar);
                                    
                                },
                                function (response) {
                                    alert("AJAX connection error!");
                                }
                            );
            
        }

        else if($scope.course1!="All"){
            
            $rootScope.option=2;
                var urlAllStudentFiltered = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar&session_id="
                + $rootScope.sessionAdmin.session_id + "&sesi=" + $rootScope.currentSession +"&semester=" + $rootScope.currentSemester
                +"&kod_fakulti=FSKSM&kod_kursus="+$rootScope.course1+"&limit=100&offset="+ $scope.offset;
                // console.log(urlAllStudentFiltered); 
                $http.get(urlAllStudentFiltered).then(
                    function (response) {
                        $rootScope.pelajar = response.data
                        // console.log($rootScope.pelajar);
                    },
                    function (response) {
                        alert("AJAX connection error!");
                    }
                )
        }
        
        // console.log($rootScope.sessionAdmin.session_id);
        // console.log($rootScope.currentSession);
        // console.log($rootScope.currentSemester);
        
        $scope.chooseCourse =   function(selectedCourse)
        {
            $rootScope.course1=selectedCourse;
            // console.log($rootScope.course1);
            
            if($rootScope.course1=="All"){
                $rootScope.option=1;
                // console.log($rootScope.pelajar);
                var urlAllStudent = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar&session_id="
                            + $rootScope.sessionAdmin.session_id + "&sesi=" + $rootScope.currentSession +"&semester=" + $rootScope.currentSemester
                            +"&kod_fakulti=FSKSM&limit=100&offset="+ $scope.offset;

                            $http.get(urlAllStudent).then(
                                function (response) {
                                    $rootScope.pelajar = response.data
                                    // console.log($rootScope.pelajar);
                                    
                                },
                                function (response) {
                                    alert("AJAX connection error!");
                                }
                            )


            }

            else{
                $rootScope.option=2;
                var urlAllStudentFiltered = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar&session_id="
                + $rootScope.sessionAdmin.session_id + "&sesi=" + $rootScope.currentSession +"&semester=" + $rootScope.currentSemester
                +"&kod_fakulti=FSKSM&kod_kursus="+$rootScope.course1+"&limit=100&offset="+ $scope.offset;
                // console.log(urlAllStudentFiltered); 
                $http.get(urlAllStudentFiltered).then(
                    function (response) {
                        $rootScope.pelajar = response.data
                        // console.log($rootScope.pelajar);
                    },
                    function (response) {
                        alert("AJAX connection error!");
                    }
                )
            }
           

      
        }

        //search function
        $scope.passSearchValue = function(searchValue){
            $rootScope.no_matrik = searchValue;
        }


        //set rootscope for no_matrik
        $scope.codeClicked = function(searchValue){
            $rootScope.no_matrik = searchValue;
            $rootScope.offset=$scope.offset;
        }
    },
);