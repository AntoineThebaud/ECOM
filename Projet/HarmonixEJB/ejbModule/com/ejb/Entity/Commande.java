package com.ejb.Entity;

import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Commande {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idCommande;
	private Date date;
	private int état;
	@OneToMany(mappedBy = "commande")
	private Collection<LigneCommande> ligneCommande;
	@ManyToOne
	@JoinColumn(name="idUtilisateur")
	private Utilisateur utilisateur;
	
	
	
	
	public Commande() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Commande( Date date, int état, Collection<LigneCommande> ligneCommande,
			Utilisateur utilisateur) {
		super();
		
		this.date = date;
		this.état = état;
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
	public int getÉtat() {
		return état;
	}
	public void setÉtat(int état) {
		this.état = état;
	}
	
}
