package com.ejb.Entity;

import java.util.Collection;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
public class Commande {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_commande")
	private long idCommande;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "date_commande")
	private Date dateCommande;

	private int etat;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "id_commande", referencedColumnName = "id_commande")
	@Fetch(value = FetchMode.SUBSELECT)
	private Collection<LigneCommande> ligneCommande;

	public Commande() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Commande(Date date, int etat, Collection<LigneCommande> ligneCommande) {
		super();

		this.dateCommande = date;
		this.etat = etat;
		this.ligneCommande = ligneCommande;
	}

	public Collection<LigneCommande> getLigneCommande() {
		return ligneCommande;
	}

	public void setLigneCommande(Collection<LigneCommande> ligneCommande) {
		this.ligneCommande = ligneCommande;
	}

	public long getIdCommande() {
		return idCommande;
	}

	public Date getDateCommande() {
		return dateCommande;
	}

	public void setDateCommande(Date date) {
		this.dateCommande = date;
	}

	public int getEtat() {
		return etat;
	}

	public void setEtat(int etat) {
		this.etat = etat;
	}

}
