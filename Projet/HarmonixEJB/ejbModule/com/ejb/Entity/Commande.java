package com.ejb.Entity;

import java.util.Collection;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Commande {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_commande")
	private long idCommande;

	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	private int etat;
	
	@OneToMany(mappedBy = "commande")
	private Collection<LigneCommande> ligneCommande;
	
	@ManyToOne
	@JoinColumn(name = "id_utilisateur")
	private Utilisateur utilisateur;

	public Commande() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Commande(Date date, int etat, Collection<LigneCommande> ligneCommande, Utilisateur utilisateur) {
		super();

		this.date = date;
		this.etat = etat;
		this.ligneCommande = ligneCommande;
		this.utilisateur = utilisateur;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getEtat() {
		return etat;
	}

	public void setEtat(int etat) {
		this.etat = etat;
	}

}
