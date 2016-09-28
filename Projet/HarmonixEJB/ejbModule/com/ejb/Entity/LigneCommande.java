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

	private long id_instrument;

	private int quantite;

	public LigneCommande() {

		// TODO Auto-generated constructor stub
	}

	public LigneCommande(long id_instrument, int quantite) {
		super();

		this.id_instrument = id_instrument;
		this.quantite = quantite;
	}

	public long getInstrument() {
		return id_instrument;
	}

	public void setInstrument(long id_instrument) {
		this.id_instrument = id_instrument;
	}

	public int getQuantite() {
		return quantite;
	}

	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}

}
