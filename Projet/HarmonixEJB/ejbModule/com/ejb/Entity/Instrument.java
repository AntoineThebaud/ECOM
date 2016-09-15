package com.ejb.Entity;

import java.util.Collection;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@NamedQuery(name = "allInstrument", query = "select OBJECT(i) from Instrument i")
public class Instrument {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idInstrument")
	private long idInstrument;

	@Column(name = "nom")
	private String nom;

	@Column(name = "type")
	private String type;

	@Column(name = "images")
	private String images;

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

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "instrument", cascade = CascadeType.ALL)
	@Fetch(value = FetchMode.SUBSELECT)
	private Set<Avis> avis;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "instrument", cascade = CascadeType.ALL)
	@Fetch(value = FetchMode.SUBSELECT)
	private Set<Caracteristique> caracteristiques;

	public Instrument() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Instrument(String nom, String type, String images, String fabricant, float poids, float prix, int promo,
			Boolean bestSeller, int categorie, Set<Avis> avis,
			Set<Caracteristique> caracteristiques) {

		this.nom = nom;
		this.type = type;
		this.images = images;
		this.fabricant = fabricant;
		this.poids = poids;
		this.prix = prix;
		this.promo = promo;
		this.bestSeller = bestSeller;
		this.categorie = categorie;
		this.avis = avis;
		this.caracteristiques = caracteristiques;
	}

	public String getImages() {
		return images;
	}

	public void setImages(String images) {
		this.images = images;
	}

	public Collection<Avis> getAvis() {
		return avis;
	}

	public void setAvis(Set<Avis> avis) {
		this.avis = avis;
	}

	public Set<Caracteristique> getCaracteristiques() {
		return this.caracteristiques;
	}

	public void setCaracteristiques(Set<Caracteristique> caracteristiques) {
		this.caracteristiques = caracteristiques;
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
