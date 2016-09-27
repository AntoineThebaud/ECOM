package com.ejb.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Avis {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_avis")
	private long idAvis;

	private int note;

	private String titre;

	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	private String texte;

	public Avis() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Avis(int note, String titre, Date date, String texte) {
		this.note = note;
		this.titre = titre;
		this.date = date;
		this.texte = texte;
	}

	public long getIdAvis() {
		return idAvis;
	}

	public int getNote() {
		return note;
	}

	public void setNote(int note) {
		this.note = note;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getTexte() {
		return texte;
	}

	public void setTexte(String texte) {
		this.texte = texte;
	}

}
