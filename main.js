//close sidebar on first page open
closeNav();

//close sidebar if clicked outside the sidebar
const openbtn = document.getElementById('openbtn');
const mySidepanel = document.getElementById('mySidepanel');

openbtn.onclick = function(){
    openNav();
}

document.onclick = function(e){
    if(e.target.id !== 'mySidepanel' && e.target.id !== 'openbtn'){
        closeNav();
    }
}

//close sidebar if a nav item is clicked
$("a.sidepanel-item").click(function() { closeNav();  });

//open and close sidebar function
function openNav() {
    document.getElementById("mySidepanel").style.width = "180px";
    document.getElementById("mySidepanel").style.boxShadow = "0 3px 10px rgb(0 0 0 / 0.2)";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.boxShadow = "none";
}

//ng-routing to other html pages
var app = angular.module("FSKSMtimetable", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/kurikulum", {
            templateUrl: "kurikulum.html"
        })
        .when("/subjek", {
            templateUrl: "subjek.html"
        })
        .when("/subjek/subjekdetails", {
            templateUrl: "subjekdetails.html"
        })
        .when("/pensyarah", {
            templateUrl: "pensyarah.html"
        })
        .when("/pensyarah/pensyarahdetails", {
            templateUrl: "pensyarahdetails.html"
        })
        .when("/pelajar", {
            templateUrl: "pelajar.html"
        })
        .when("/pelajar/pelajardetails", {
            templateUrl: "pelajardetails.html"
        })
        .when("/ruang", {
            templateUrl: "ruang.html"
        })
        .when("/jadualwaktu", {
            templateUrl: "jadualwaktu.html"
        });
});