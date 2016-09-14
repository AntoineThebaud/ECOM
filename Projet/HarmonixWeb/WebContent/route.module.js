app.config(['$stateProvider', router]);
 
function router($stateProvider) {
    var mystate = {
        name : 'mystate',
        templateUrl: 'index.html'
    };
 
    $stateProvider
        .state(mystate);
};