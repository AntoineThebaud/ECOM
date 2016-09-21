package com.ejb.Entity;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-09-21T15:46:49.389+0200")
@StaticMetamodel(Instrument.class)
public class Instrument_ {
	public static volatile SingularAttribute<Instrument, Long> idInstrument;
	public static volatile SingularAttribute<Instrument, String> nom;
	public static volatile SingularAttribute<Instrument, String> categorie;
	public static volatile SingularAttribute<Instrument, String> images;
	public static volatile SingularAttribute<Instrument, String> fabricant;
	public static volatile SingularAttribute<Instrument, Float> poids;
	public static volatile SingularAttribute<Instrument, Float> prix;
	public static volatile SingularAttribute<Instrument, Integer> promo;
	public static volatile SingularAttribute<Instrument, Date> dateAjout;
	public static volatile ListAttribute<Instrument, Avis> avis;
	public static volatile ListAttribute<Instrument, Caracteristique> caracteristiques;
}
