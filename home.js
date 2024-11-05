app.controller(
    'home',
    function ($scope, $http, $rootScope) {
        // $scope.login = "12085";
        // $scope.password = "S808323";
        var url = "http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?";

        $scope.authUser = function () {
            var urlAuthUser = url + "entity=authentication&login=" + $scope.login +
                                    "&password=" + $scope.password;
            
            console.log(urlAuthUser);

            $http.get(urlAuthUser).then(
                function (response) {
                    console.log(response.data);

                    if (response.data) {
                        $rootScope.sessionUser = response.data[0];
                        authAdmin($http);
                        getSessemList($http);
                        
                    } else {
                        alert("Please enter correct username and password!");
                    }
                    // More implementation goes here ...
                },
                function (response) {
                    // 2nd function to handle connection error
                    alert("AJAX connection error!");
                }
            );
        }

        function authAdmin ($http) {
            var urlAdmin = "http://web.fc.utm.my/ttms/auth-admin.php?session_id=" + 
                            $rootScope.sessionUser.session_id;

            console.log(urlAdmin);
                        
            $http.get(urlAdmin).then(
                function (response) {
                    console.log(response.data);

                    if (response.data) {
                        $rootScope.sessionAdmin = response.data[0];
                        
                    } else {
                        alert("Please enter valid user's session ID!");
                    }
                    // More implementation goes here ...
                },
                function (response) {
                    // 2nd function to handle connection error
                    alert("AJAX connection error!");
                }
            );
        }

        function getSessemList($http) {
            var urlSessemList = url + "entity=sesisemester";

            $http.get(urlSessemList).then(
                function (response) {
                    console.log(response.data);

                    if (response.data) {
                        $rootScope.sessemList = response.data;
                        $rootScope.currentSession = $rootScope.sessemList[0].sesi;
                        $rootScope.currentSemester = $rootScope.sessemList[0].semester;
                    }
                },
                function (response) {
                    // 2nd function to handle connection error
                    alert("AJAX connection error!");
                }
            );
        }

        $scope.logout = function () { 
            console.log("Try to logout");
            $rootScope.sessionUser = null;
            $rootScope.sessionAdmin = null;
            $rootScope.sessemList = null;
            $scope.login = null;
            $scope.password = null;
        }
    }
);