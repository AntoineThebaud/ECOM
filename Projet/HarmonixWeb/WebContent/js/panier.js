/* Classe panier */

function panier() {
	this.articles = {};
	//todo : 	- attribut nom pour la sauvegarde dans le localstorage
	//			- méthodes load() et save() dans le localstorage
}

panier.prototype.addArticle = function(nom, prix, image, id) {
	
	//article déjà dans le panier : on augmente la quantité de 1
	if (this.articles[nom] != null) {
		this.articles[nom].quantity++;
	}
	//article non présent : on l'ajoute au panier
	else {
		var quantity = 1;
		var article = {
			prix,
			quantity, //tester en mettant 1 direct (eclipse gueule ?)
			image,
			id
		};
		this.articles[nom] = article;
	}
	console.log("updated panier");
	console.log(this);
}