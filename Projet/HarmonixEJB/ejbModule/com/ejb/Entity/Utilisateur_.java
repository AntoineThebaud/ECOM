package com.ejb.Entity;

import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2016-09-21T14:54:07.390+0200")
@StaticMetamodel(Utilisateur.class)
public class Utilisateur_ {
	public static volatile SingularAttribute<Utilisateur, Long> idUtilisateur;
	public static volatile SingularAttribute<Utilisateur, String> motDePasse;
	public static volatile SingularAttribute<Utilisateur, String> nom;
	public static volatile SingularAttribute<Utilisateur, String> prenom;
	public static volatile SingularAttribute<Utilisateur, Integer> age;
	public static volatile SingularAttribute<Utilisateur, String> adresse;
	public static volatile SingularAttribute<Utilisateur, String> mail;
	public static volatile CollectionAttribute<Utilisateur, Avis> avis;
	public static volatile CollectionAttribute<Utilisateur, Commande> commandes;
}
