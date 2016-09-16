package com.ejb.SessionBean;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

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
    	em.persist(instrument);
    	return instrument;
    }
    public Instrument getById(long id){
    	return em.find(Instrument.class, id);
    }
   
	@SuppressWarnings("unchecked")
	public List<Instrument> getAllInstruments() {
    	Query q = em.createNamedQuery("allInstrument");
    	return ((List<Instrument>)q.getResultList());
    }
	
	public void updateInstrument (Instrument instrument){
		em.merge(instrument);
	}
	
	public void removeInstrument(long id) {
    	em.remove(em.find(Instrument.class, id));
    }
	
    
}
