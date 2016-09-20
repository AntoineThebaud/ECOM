/* Classe panier */

//constructeur
function panier(nom) {
	this.nom = nom;
	this.articles = {};
	this.load();
	//todo : - méthodes load() et save() dans le localstorage
}

//ajoute un nouveau produit au panier
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
	//sauvegarde le panier dans le localstorage
	this.save();
}

//calcule le coût total du panier
panier.prototype.getTotal = function() {
	var total = 0;
	for(var key in this.articles) {
		article = this.articles[key]
		total += article.prix * article.quantity;
	}
	return total;
}

//récupère le panier sauvegardé dans le localstorage
panier.prototype.load = function() {
	if (localStorage[this.nom] != null) {
		var saved = JSON.parse(localStorage[this.nom]);
		for(article in saved) {
			this.articles[article] = saved[article];
		}
	}
}

//enregistre le panier dans le localstorage
panier.prototype.save = function() {
	localStorage[this.nom] = JSON.stringify(this.articles);
}