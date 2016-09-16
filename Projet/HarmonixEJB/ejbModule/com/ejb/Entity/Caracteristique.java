package com.ejb.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Caracteristique {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_caracteristique")
	private long idCaracteristique;

	private String nom;

	private String valeur;

	public Caracteristique() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Caracteristique(String nom, String valeur) {
		this.nom = nom;
		this.valeur = valeur;
	}

	public long getIdCaracteristique() {
		return idCaracteristique;
	}

	public void setIdCaracteristique(long idCaracteristique) {
		this.idCaracteristique = idCaracteristique;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getValeur() {
		return valeur;
	}

	public void setValeur(String valeur) {
		this.valeur = valeur;
	}

}
