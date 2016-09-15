package com.ejb.Entity;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-09-15T18:14:06.582+0200")
@StaticMetamodel(LigneCommande.class)
public class LigneCommande_ {
	public static volatile SingularAttribute<LigneCommande, LigneCommandePK> pk;
	public static volatile SingularAttribute<LigneCommande, Commande> commande;
	public static volatile SingularAttribute<LigneCommande, Instrument> intsrument;
	public static volatile SingularAttribute<LigneCommande, Integer> quantite;
}
