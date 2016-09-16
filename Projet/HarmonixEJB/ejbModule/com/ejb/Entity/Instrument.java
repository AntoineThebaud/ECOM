package com.ejb.Entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@NamedQuery(name = "allInstrument", query = "select OBJECT(i) from Instrument i")
public class Instrument {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_instrument")
	private long idInstrument;

	private String nom;

	private String type;

	private String images;

	private String fabricant;

	private float poids;

	private float prix;

	private int promo;

	@Column(name = "best_seller")
	private Boolean bestSeller;

	private int categorie;

	@OneToMany(mappedBy = "instrument", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Avis> avis;

	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "id_instrument", referencedColumnName = "id_instrument")
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Caracteristique> caracteristiques;

	public Instrument() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Instrument(String nom, String type, String images, String fabricant, float poids, float prix, int promo,
			Boolean bestSeller, int categorie, List<Avis> avis, List<Caracteristique> caracteristiques) {

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

	public List<Avis> getAvis() {
		return avis;
	}

	public void setAvis(List<Avis> avis) {
		this.avis = avis;
	}

	public List<Caracteristique> getCaracteristiques() {
		return this.caracteristiques;
	}

	public void setCaracteristiques(List<Caracteristique> caracteristiques) {
		this.caracteristiques = caracteristiques;
	}

	public void addCaracteristique(Caracteristique c) {
		if (c != null) {
			if (caracteristiques == null) {
				caracteristiques = new ArrayList<Caracteristique>();
			}
			caracteristiques.add(c);
		}
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
