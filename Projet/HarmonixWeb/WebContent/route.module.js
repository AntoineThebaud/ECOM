app.config(['$stateProvider', router]);
 
function router($stateProvider) {
	var headerState={
			templateUrl: 'header.htm',
			controller: 'headerCtrl',
			controllersAs: 'header',
	};
	
    $stateProvider
        .state('index', {
        	url: 'index.html',
        	views: {
        		// changer nom s'il faut de la vue principale
        		'listInstr': {
        			
        		},
        		'header': headerState
        	}
        })
        .state('instrument', {
        	url: '/instrument/id_instrument',
        	views: {
        		'fiche': {
        			templateUrl: 'ficheInstru.html',
        			controller: 'ficheInstruCtrl',
        			controllerAs: 'ficheInstru'
        		}
        	},
        	'header': headerState
        })
        // rajouter les autres états à la suite avec un .state comme précedemment
        ;
};