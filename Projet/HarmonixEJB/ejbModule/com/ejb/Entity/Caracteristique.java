package com.ejb.Entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class Caracteristique {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idCaracteristique;

	@ManyToOne
	@JoinColumn(name = "idInstrument")
	private Instrument instrument;

	private String nom;
	private String valeur;

	public Caracteristique() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Caracteristique(Instrument instrument, String nom, String valeur) {
		this.instrument = instrument;
		this.nom = nom;
		this.valeur = valeur;
	}

	public Instrument getInstrument() {
		return instrument;
	}

	public void setInstrument(Instrument instrument) {
		this.instrument = instrument;
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
