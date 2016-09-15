package com.ejb.SessionBean;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ejb.Entity.Avis;

/**
 * Session Bean implementation class AvisSessionBean
 */
@Stateless
@LocalBean
public class AvisResource {

	@PersistenceContext(unitName="mysql")
	private EntityManager em;
	
    /**
     * Default constructor. 
     */
    public AvisResource() {
        // TODO Auto-generated constructor stub
    }
    
    public Avis createAvis(Avis avis){
    	em.persist(avis);
    	return avis;
    }
    public void updateAvis(Avis avis){
    	em.merge(avis);
    }
    

}
