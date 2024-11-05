app.controller(
    'pelajardetails',
    function ($scope, $http, $rootScope) {
        // console.log($rootScope.sessionAdmin.session_id);
        // console.log($rootScope.no_matrik);
       
        // console.log($rootScope.currentSession);
        // console.log($rootScope.currentSemester);

        // get selected student details
        // var urlStudentDetails = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar&session_id="
        // + $rootScope.sessionAdmin.session_id + "&sesi=" + $rootScope.currentSession +"&semester=" + $rootScope.currentSemester
        // +"&kod_fakulti=FSKSM&limit=100&offset="+$rootScope.offset;
        // console.log(urlStudentDetails);
        // $http.get(urlStudentDetails).then(
        //     function (response) {
        //         $scope.studentDetail = response.data;
        //         $rootScope.filteredArray1 = $scope.studentDetail.filter(function(item) {
        //             return item.no_matrik == $rootScope.no_matrik;
        //         });
        //         console.log($rootScope.filteredArray1);
        //     },
        //     function (response) {
        //         alert("AJAX connection error!");
        //     }
        // );

        if($rootScope.option==1){
            // console.log($rootScope.pelajar);
                var urlStudentDetails = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar&session_id="
                            + $rootScope.sessionAdmin.session_id + "&sesi=" + $rootScope.currentSession +"&semester=" + $rootScope.currentSemester
                            +"&kod_fakulti=FSKSM&limit=100&offset="+ $scope.offset;
                            // console.log(urlStudentDetails);
                            $http.get(urlStudentDetails).then(
                                function (response) {
                                    $scope.studentDetail = response.data;
                                    $rootScope.filteredArray1 = $scope.studentDetail.filter(function(item) {
                                        return item.no_matrik == $rootScope.no_matrik;
                                    });
                                    // console.log($rootScope.filteredArray1);
                                },
                                function (response) {
                                    alert("AJAX connection error!");
                                }
                            )
        }

        else{
            var urlStudentDetails = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar&session_id="
                + $rootScope.sessionAdmin.session_id + "&sesi=" + $rootScope.currentSession +"&semester=" + $rootScope.currentSemester
                +"&kod_fakulti=FSKSM&kod_kursus="+$rootScope.course1+"&limit=100&offset="+ $scope.offset;
                // console.log(urlStudentDetails);
                            $http.get(urlStudentDetails).then(
                                function (response) {
                                    $scope.studentDetail = response.data;
                                    $rootScope.filteredArray1 = $scope.studentDetail.filter(function(item) {
                                        return item.no_matrik == $rootScope.no_matrik;
                                    });
                                    // console.log($rootScope.filteredArray1);
                                },
                    function (response) {
                        alert("AJAX connection error!");
                    }
                )
        }
        
        //get selected student' subject
        //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=A20EC4061
        //http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=subjek_pensyarah&kod_subjek=SECJ2013&sesi=2022/2023&semester=1&seksyen=8
        var urlStudentSubject = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=pelajar_subjek&no_matrik=" + $rootScope.no_matrik;
        // console.log(urlStudentSubject);
        $http.get(urlStudentSubject).then(
            function (response) {
                $scope.studentSubject = response.data;
                $rootScope.filteredArray2 = $scope.studentSubject.filter(function(item) {
                    return (item.sesi === $rootScope.currentSession && item.semester === $rootScope.currentSemester);
                });
                
                // console.log($rootScope.filteredArray2);
                let  lect = [];
                // let subWithLectArray=[];
                // var updateArray =$rootScope.filteredArray2
                for(var i = 0; i < $rootScope.filteredArray2.length; i++){
                    $scope.subCode=$rootScope.filteredArray2[i].kod_subjek;
                    $scope.sect=$rootScope.filteredArray2[i].seksyen;
                    //console.log($rootScope.filteredArray2[i]);
                    let updatedList= $rootScope.filteredArray2[i];
                    
                    //console.log(updatedList);
                    var urlSubLect = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=subjek_pensyarah&kod_subjek="
                                     + $scope.subCode+ "&sesi="+$rootScope.currentSession+"&semester="+$rootScope.currentSemester+"&seksyen="+$scope.sect;
                    // console.log(urlSubLect);      
                     $http.get(urlSubLect).then(
                        function(response){
                            
                            $scope.subLect=response.data;
                            $rootScope.lect=$scope.subLect[0].nama

                            //console.log($rootScope.lect);
                            
                            
                            
                            updatedList['nama_pensyarah']=$scope.subLect[0].nama;
                            //console.log(updatedList);

                           
                            
                           
                        }
                     )
                     
                     $rootScope.allLect=lect;
                     //console.log($rootScope.allLect);
                     

                }

                


                
            },
            function (response) {
                alert("AJAX connection error!");
            }
        );
    }
)

