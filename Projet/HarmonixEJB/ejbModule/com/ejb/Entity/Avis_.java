package com.ejb.Entity;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-09-15T18:14:06.556+0200")
@StaticMetamodel(Avis.class)
public class Avis_ {
	public static volatile SingularAttribute<Avis, Long> IdAvis;
	public static volatile SingularAttribute<Avis, Integer> note;
	public static volatile SingularAttribute<Avis, String> titre;
	public static volatile SingularAttribute<Avis, Date> date;
	public static volatile SingularAttribute<Avis, String> texte;
	public static volatile SingularAttribute<Avis, Utilisateur> utilisateur;
	public static volatile SingularAttribute<Avis, Instrument> instrument;
}
