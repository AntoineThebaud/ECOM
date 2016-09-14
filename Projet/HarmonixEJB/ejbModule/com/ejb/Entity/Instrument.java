package com.ejb.Entity;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

@Entity
@NamedQuery(name="allInstrument",query="select OBJECT(i) from Instrument i") 
public class Instrument {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idInstrument")
	private long idInstrument;
	
	@Column(name = "nom")
	private String nom;
	
	@Column(name = "type")
	private String type;
	
	@Column(name = "fabricant")
	private String fabricant;
	
	@Column(name = "poids")
	private float poids;
	
	@Column(name = "prix")
	private float prix;
	
	@Column(name = "promo")
	private int promo;
	
	@Column(name = "bestSeller")
	private Boolean bestSeller;
	
	@Column(name = "categorie")
	private int categorie;
	
	@OneToMany(mappedBy = "instrument")
	private Collection<Avis> avis;
	
	@OneToMany(mappedBy = "instrument")
	private Collection<Caracteristique> Caracteristique;

	

	

	public Instrument() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Instrument(String nom, String type, String fabricant, float poids, float prix, int promo,
			Boolean bestSeller, int categorie, Collection<Avis> avis,
			Collection<com.ejb.Entity.Caracteristique> caracteristique) {
		
		this.nom = nom;
		this.type = type;
		this.fabricant = fabricant;
		this.poids = poids;
		this.prix = prix;
		this.promo = promo;
		this.bestSeller = bestSeller;
		this.categorie = categorie;
		this.avis = avis;
		Caracteristique = caracteristique;
	}

	
	public Collection<Avis> getAvis() {
		return avis;
	}


	public void setAvis(Collection<Avis> avis) {
		this.avis = avis;
	}


	public Collection<Caracteristique> getCaracteristique() {
		return Caracteristique;
	}


	public void setCaracteristique(Collection<Caracteristique> caracteristique) {
		Caracteristique = caracteristique;
	}

	public long getIdInstrument() {
		return idInstrument;
	}


	


	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFabricant() {
		return fabricant;
	}

	public void setFabricant(String fabricant) {
		this.fabricant = fabricant;
	}

	public float getPoids() {
		return poids;
	}

	public void setPoids(float poids) {
		this.poids = poids;
	}

	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}

	public int getPromo() {
		return promo;
	}

	public void setPromo(int promo) {
		this.promo = promo;
	}

	public Boolean getBestSeller() {
		return bestSeller;
	}

	public void setBestSeller(Boolean bestSeller) {
		this.bestSeller = bestSeller;
	}

	public int getCategorie() {
		return categorie;
	}

	public void setCategorie(int categorie) {
		this.categorie = categorie;
	}

}
