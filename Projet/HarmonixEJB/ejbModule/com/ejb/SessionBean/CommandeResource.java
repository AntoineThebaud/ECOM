package com.ejb.SessionBean;

import java.util.Date;
import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.ejb.Entity.Avis;
import com.ejb.Entity.Commande;
import com.ejb.Entity.Instrument;

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
    
    public Commande create(Commande commande){
    	em.persist(commande);
    	
    	// Date de la commande
    	commande.setDateCommande(new Date());
    	
    	// On réduit les stocks
    	
    	
    	return commande;
    }
    
    public Commande getById(long id) {
    	return em.find(Commande.class, id);
    }
    
    public List<Commande> getAllCommandes(Integer startPosition, Integer maxResult) {
    	Query q = em.createNamedQuery("allCommandes");
    	
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

		return ((List<Commande>) q.getResultList());
    }
    
    public void updateCommande(Commande commande){
    	em.merge(commande);
    }

    public void removeCommande(long id) {
    	em.remove(em.find(Instrument.class, id));
    }
}
