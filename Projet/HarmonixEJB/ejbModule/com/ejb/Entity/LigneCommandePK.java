package com.ejb.Entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Embeddable
public class LigneCommandePK implements Serializable {

	
	@Column(name = "idInstrument")
	private long idInstrument ;
	@Column(name = "idCommande")
	private long idCommande;
	
	public LigneCommandePK() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public LigneCommandePK(long idInstrument, long idCommande) {
		super();
		this.idInstrument = idInstrument;
		this.idCommande = idCommande;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (idCommande ^ (idCommande >>> 32));
		result = prime * result + (int) (idInstrument ^ (idInstrument >>> 32));
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		LigneCommandePK other = (LigneCommandePK) obj;
		if (idCommande != other.idCommande)
			return false;
		if (idInstrument != other.idInstrument)
			return false;
		return true;
	}


	
	
	
	
	
	
	
}
