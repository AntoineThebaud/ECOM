package com.ejb.Entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity

public class LigneCommande {

	@EmbeddedId
	LigneCommandePK pk;
	
	@ManyToOne
	@MapsId("idCommande")// reference vers le champs identifiant de la classe commande 
	@JoinColumn(name="idCommande")
	private Commande commande;
	
	@ManyToOne
	@MapsId("idInstrument")
	@JoinColumn(name="idInstrument")
	private Instrument intsrument;
	
	private int quantite;
	
	
	
	public LigneCommande() {
		
		// TODO Auto-generated constructor stub
	}
	public LigneCommande(Commande commande, Instrument intsrument, int quantite) {
		super();
		
		this.commande = commande;
		this.intsrument = intsrument;
		this.quantite = quantite;
	}
	public Commande getCommande() {
		return commande;
	}
	public void setCommande(Commande commande) {
		this.commande = commande;
	}
	public Instrument getIntsrument() {
		return intsrument;
	}
	public void setIntsrument(Instrument intsrument) {
		this.intsrument = intsrument;
	}
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	
	
	
}
