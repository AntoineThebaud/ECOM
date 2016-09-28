package com.ejb.Entity;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-09-28T22:07:12.306+0200")
@StaticMetamodel(LigneCommande.class)
public class LigneCommande_ {
	public static volatile SingularAttribute<LigneCommande, Long> idLigneCommande;
	public static volatile SingularAttribute<LigneCommande, Integer> quantite;
	public static volatile SingularAttribute<LigneCommande, Long> id_instrument;
}
