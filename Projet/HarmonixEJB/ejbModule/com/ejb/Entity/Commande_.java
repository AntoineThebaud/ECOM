package com.ejb.Entity;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-09-22T15:26:18.960+0200")
@StaticMetamodel(Commande.class)
public class Commande_ {
	public static volatile SingularAttribute<Commande, Long> idCommande;
	public static volatile SingularAttribute<Commande, Date> dateCommande;
	public static volatile SingularAttribute<Commande, Integer> etat;
	public static volatile CollectionAttribute<Commande, LigneCommande> ligneCommande;
	public static volatile SingularAttribute<Commande, Utilisateur> utilisateur;
}
