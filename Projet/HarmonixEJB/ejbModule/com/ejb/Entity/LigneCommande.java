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

	@Column(name = "id_instrument")
	private long idInstrument;

	private int quantite;

	public LigneCommande() {

		// TODO Auto-generated constructor stub
	}

	public LigneCommande(long idInstrument, int quantite) {
		super();

		this.idInstrument = idInstrument;
		this.quantite = quantite;
	}

	public long getIdInstrument() {
		return idInstrument;
	}

	public void setIdInstrument(long idInstrument) {
		this.idInstrument = idInstrument;
	}

	public int getQuantite() {
		return quantite;
	}

	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}

}
