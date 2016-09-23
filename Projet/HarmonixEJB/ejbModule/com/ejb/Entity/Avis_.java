package com.ejb.Entity;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-09-23T14:44:05.439+0200")
@StaticMetamodel(Avis.class)
public class Avis_ {
	public static volatile SingularAttribute<Avis, Long> idAvis;
	public static volatile SingularAttribute<Avis, Integer> note;
	public static volatile SingularAttribute<Avis, String> titre;
	public static volatile SingularAttribute<Avis, Date> date;
	public static volatile SingularAttribute<Avis, String> texte;
	public static volatile SingularAttribute<Avis, Utilisateur> utilisateur;
}
