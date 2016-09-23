package com.ejb.Entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@NamedQueries(value = {
	@NamedQuery(name = "allInstrument", query = "SELECT OBJECT(i) FROM Instrument i"),
	@NamedQuery(name = "allInstrumentCategorie", query = "SELECT OBJECT(i) FROM Instrument i WHERE i.categorie = :categorie"),
	@NamedQuery(name = "allInstrumentPromotions", query = "SELECT OBJECT(i) FROM Instrument i WHERE i.promo <> 0 ORDER BY i.promo DESC"),
	/*@NamedQuery(name = "allInstrumentMeilleuresVentes", query = "SELECT sum(c.quantite) FROM LigneCommande c GROUP BY c.instrument"),*/
	@NamedQuery(name = "allInstrumentNouveautes", query = "SELECT OBJECT(i) FROM Instrument i ORDER BY i.dateAjout DESC")
})
public class Instrument {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_instrument")
	private long idInstrument;

	private String nom;

	private String categorie;

	private String images;

	private String fabricant;

	private float prix;
	
	private int promo;
	
	private double note;
	
	@Column(name = "nb_votes")
	private int nbVotes;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "date_ajout")
	private Date dateAjout;

	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "id_instrument", referencedColumnName = "id_instrument")
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

	public Instrument(String nom, String categorie, String images, String fabricant, float prix, int promo,
			int note, Date dateAjout, List<Avis> avis, List<Caracteristique> caracteristiques) {

		this.nom = nom;
		this.images = images;
		this.fabricant = fabricant;
		this.prix = prix;
		this.promo = promo;
		this.categorie = categorie;
		this.note = note;
		this.dateAjout = dateAjout;
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

	public String getFabricant() {
		return fabricant;
	}

	public void setFabricant(String fabricant) {
		this.fabricant = fabricant;
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

	public double getNote() {
		return note;
	}

	public void setNote(double note) {
		this.note = note;
	}

	public int getNbVotes() {
		return nbVotes;
	}

	public void setNbVotes(int nbVotes) {
		this.nbVotes = nbVotes;
	}

	public Date getDateAjout() {
		return dateAjout;
	}

	public void setDateAjout(Date dateAjout) {
		this.dateAjout = dateAjout;
	}

	public String getCategorie() {
		return categorie;
	}

	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

}
