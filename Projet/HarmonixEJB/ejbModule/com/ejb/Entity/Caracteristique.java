package com.ejb.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@IdClass(CaracteristiquePK.class)
public class Caracteristique {
	
	@Id
	private String nom;
	
	@ManyToOne
	@JoinColumn(name="idInstrument")
	@Id
	private Instrument instrument;
	
	private String valeur;
	
	
	
public Caracteristique() {
		super();
		// TODO Auto-generated constructor stub
	}


public Caracteristique(String nom, Instrument instrument, String valeur) {
		
		this.nom = nom;
		this.instrument = instrument;
		this.valeur = valeur;
	}
	
	
	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public Instrument getIdInstrument() {
		return instrument;
	}


	public void setIdInstrument(Instrument instrument) {
		this.instrument = instrument;
	}


	public String getValeur() {
		return valeur;
	}


	public void setValeur(String valeur) {
		this.valeur = valeur;
	}


	
	
	

}
