package com.ejb.Entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class LigneCommande {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_ligne_commande")
	private long idLigneCommande;

	@ManyToOne
	@JoinColumn(name = "id_instrument")
	private Instrument instrument;

	private int quantite;

	public LigneCommande() {

		// TODO Auto-generated constructor stub
	}

	public LigneCommande(Instrument instrument, int quantite) {
		super();

		this.instrument = instrument;
		this.quantite = quantite;
	}

	public Instrument getInstrument() {
		return instrument;
	}

	public void setInstrument(Instrument instrument) {
		this.instrument = instrument;
	}

	public int getQuantite() {
		return quantite;
	}

	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}

}
