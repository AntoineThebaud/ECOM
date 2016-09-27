package com.ejb.SessionBean;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.ejb.Entity.Avis;
import com.ejb.Entity.Instrument;

/**
 * Session Bean implementation class InstrumentService
 */
@Stateless
@LocalBean
public class InstrumentResource {

	@PersistenceContext(unitName = "mysql")
	private EntityManager em;

	/**
	 * Default constructor.
	 */
	public InstrumentResource() {
		// TODO Auto-generated constructor stub
	}

	public Instrument create(Instrument instrument) {
		// On ajoute la date à l'instrument
		instrument.setDateAjout(new Date());

		em.persist(instrument);
		return instrument;
	}

	public Instrument getById(long id) {
		return em.find(Instrument.class, id);
	}

	@SuppressWarnings("unchecked")
	public List<Instrument> getAllInstruments(Integer startPosition, Integer maxResult, String categorie) {
		Query q;

		if (categorie == null) {
			q = em.createNamedQuery("allInstrument");
		} else {
			q = em.createNamedQuery("allInstrumentCategorie");
			q.setParameter("categorie", categorie);
		}

		if (startPosition != null) {
			try {
				q.setFirstResult(startPosition);
			} catch (IllegalArgumentException ex) {
				q.setFirstResult(0);
			}
		}

		if (maxResult != null) {
			try {
				q.setMaxResults(maxResult);
			} catch (IllegalArgumentException ex) {
				q.setMaxResults(0);
			}
		}

		return ((List<Instrument>) q.getResultList());
	}

	/**
	 * Liste tous les instruments d'un certain type 0 : Promotions 1 :
	 * Nouveautés 2 : Meilleures Ventes
	 * 
	 * @param type
	 * @param startPosition
	 * @param maxResult
	 * @return La liste des intruments ordonnée selon le type
	 */
	@SuppressWarnings("unchecked")
	public List<Instrument> getAllInstrumentsType(int type, Integer startPosition, Integer maxResult) {
		Query q;

		switch (type) {
		case 0:
			q = em.createNamedQuery("allInstrumentPromotions");
			break;
		case 1:
			q = em.createNamedQuery("allInstrumentNouveautes");
			break;
		case 2:
			q = em.createNamedQuery("allInstrumentMeilleuresVentes");
			break;
		default:
			return null;
		}

		if (startPosition != null) {
			try {
				q.setFirstResult(startPosition);
			} catch (IllegalArgumentException ex) {
				q.setFirstResult(0);
			}
		}

		if (maxResult != null) {
			try {
				q.setMaxResults(maxResult);
			} catch (IllegalArgumentException ex) {
				q.setMaxResults(0);
			}
		}

		return ((List<Instrument>) q.getResultList());
	}

	public void updateInstrument(Instrument instrument) {
		// On met à jour la note et le nombre de votes de l'instrument
		double note = 0.0;
		int nbVotes = 0;

		for (Avis v : instrument.getAvis()) {
			note += v.getNote();
			nbVotes++;
		}

		note /= (double) nbVotes;
		// On ne garde que 2 décimales après la virgule
		note = new BigDecimal(note).setScale(2, BigDecimal.ROUND_FLOOR).doubleValue();

		instrument.setNote(note);
		instrument.setNbVotes(nbVotes);

		em.merge(instrument);
	}

	public void removeInstrument(long id) {
		em.remove(em.find(Instrument.class, id));
	}

}
