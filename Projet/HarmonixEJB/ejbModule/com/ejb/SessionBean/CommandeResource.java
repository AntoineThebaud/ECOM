package com.ejb.SessionBean;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ejb.Entity.Avis;
import com.ejb.Entity.Commande;

/**
 * Session Bean implementation class CommandeResource
 */
@Stateless
@LocalBean
public class CommandeResource {

	@PersistenceContext(unitName="mysql")
	private EntityManager em;
	
    /**
     * Default constructor. 
     */
    public CommandeResource() {
        // TODO Auto-generated constructor stub
    }
    
    public Commande createCommande(Commande commande){
    	em.persist(commande);
    	return commande;
    }
    public void updateComande(Commande commande){
    	em.merge(commande);
    }

}
