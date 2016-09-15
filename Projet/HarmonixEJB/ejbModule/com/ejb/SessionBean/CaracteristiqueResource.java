package com.ejb.SessionBean;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ejb.Entity.Avis;
import com.ejb.Entity.Caracteristique;

/**
 * Session Bean implementation class CaracteristiqueResource
 */
@Stateless
@LocalBean
public class CaracteristiqueResource {

	@PersistenceContext(unitName="mysql")
	private EntityManager em;
	
    /**
     * Default constructor. 
     */
    public CaracteristiqueResource() {
        // TODO Auto-generated constructor stub
    }
    
    public Caracteristique createAvis(Caracteristique caracteristique ){
    	em.persist(caracteristique);
    	return caracteristique;
    }
    public void updateAvis(Caracteristique caracteristique){
    	em.merge(caracteristique);
    }
    
    

}
