package com.ejb.SessionBean;

import java.util.Date;
import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.ejb.Entity.Avis;
import com.ejb.Entity.Caracteristique;
import com.ejb.Entity.Instrument;

/**
 * Session Bean implementation class InstrumentService
 */
@Stateless
@LocalBean
public class InstrumentResource {

	@PersistenceContext(unitName="mysql")
	private EntityManager em;
    /**
     * Default constructor. 
     */
    public InstrumentResource() {
        // TODO Auto-generated constructor stub
    }

    public Instrument create(Instrument instrument){
    	// On ajoute la date à l'instrument
    	instrument.setDateAjout(new Date());
    	
    	em.persist(instrument);
    	return instrument;
    }
    public Instrument getById(long id){
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
    	
    	return ((List<Instrument>)q.getResultList());
    }
	
	@SuppressWarnings("unchecked")
	public List<Instrument> getAllInstrumentsPromotions(Integer startPosition, Integer maxResult) {
    	Query q = em.createNamedQuery("allInstrumentPromotions");
    	
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
    	
    	return ((List<Instrument>)q.getResultList());
    }
	
	@SuppressWarnings("unchecked")
	public List<Instrument> getAllInstrumentsNouveautes(Integer startPosition, Integer maxResult) {
    	Query q = em.createNamedQuery("allInstrumentNouveautes");
    	
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
    	
    	return ((List<Instrument>)q.getResultList());
    }
	
	public void updateInstrument (Instrument instrument){
		// On met à jour la note et le nombre de votes de l'instrument
		double note = 0.0;
		int nbVotes = 0;
		
		for(Avis v : instrument.getAvis()) {
			note += v.getNote();
			nbVotes++;
		}
		
		note /= (double)nbVotes;
		
		instrument.setNote(note);
		instrument.setNbVotes(nbVotes);
		
		em.merge(instrument);
	}
	
	public void removeInstrument(long id) {
    	em.remove(em.find(Instrument.class, id));
    }
	
    
}
