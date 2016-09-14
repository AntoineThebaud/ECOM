package com.ejb.Entity;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Utilisateur {
	
	public Utilisateur() {
		
		// TODO Auto-generated constructor stub
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idUtilisateur;
	
	private String nom;
	
	private String prenom;
	
	private int age;
	
	private String adresse;
	
	private String mail;
	
	@OneToMany(mappedBy = "utilisateur")	
	private Collection<Avis> avis;
	@OneToMany(mappedBy = "utilisateur")
	private Collection<Commande> commandes;

	public Utilisateur(String nom, String prenom, int age, String adresse, String mail,
			Collection<Avis> avis, Collection<Commande> commandes) {
		
		
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.adresse = adresse;
		this.mail = mail;
		this.avis = avis;
		this.commandes = commandes;
	}
	
	
	public long getIdUtilisateur() {
		return idUtilisateur;
	}

	public Collection<Avis> getAvis() {
		return avis;
	}


	public void setAvis(Collection<Avis> avis) {
		this.avis = avis;
	}


	public Collection<Commande> getCommandes() {
		return commandes;
	}


	public void setCommandes(Collection<Commande> commandes) {
		this.commandes = commandes;
	}


	
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	
}
