package com.ejb.SessionBean;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ejb.Entity.Instrument;
import com.ejb.Entity.LigneCommande;

/**
 * Session Bean implementation class LigneCommandeResource
 */
@Stateless
@LocalBean
public class LigneCommandeResource {

	@PersistenceContext(unitName="mysql")
	private EntityManager em;
    /**
     * Default constructor. 
     */
    public LigneCommandeResource() {
        // TODO Auto-generated constructor stub
    }
    
    public LigneCommande create(LigneCommande ligneCommande){
    	em.persist( ligneCommande);
    	return ligneCommande;
    }
    public void updateLigneCommande (LigneCommande commande){
		em.merge(commande);
	}

}
