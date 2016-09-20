package com.ejb.SessionBean;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.ejb.Entity.Instrument;
import com.ejb.Entity.Utilisateur;

/**
 * Session Bean implementation class UtilisateurResource
 */
@Stateless
@LocalBean
public class UtilisateurResource {

	@PersistenceContext(unitName="mysql")
	private EntityManager em;
	private static final String SELECT_PAR_EMAIL = "SELECT u FROM Utilisateur u WHERE u.email=:email";
	private static final String AUTHENTIFICATION = "SELECT u FROM Utilisateur u WHERE u.email=:email AND u.mdp=:mdp";
	private static final String PARAM_EMAIL           = "email";
	private static final String PARAM_MDP           = "mdp";
    /**
     * Default constructor. 
     */
    public UtilisateurResource() {
        // TODO Auto-generated constructor stub
    }

    public Utilisateur createUtilisateur(Utilisateur utilisateur){
    	em.persist(utilisateur);
    	return utilisateur;
    }
    
    public Utilisateur getById(long id){
    	return em.find(Utilisateur.class, id);
    }
    
    @SuppressWarnings("unchecked")
	public List<Utilisateur> getAllUtilisateur() {
    	Query q = em.createNamedQuery("allUtilisateur");
    	return ((List<Utilisateur>)q.getResultList());
    }
    
    public void updateUtilisateur (Utilisateur utilisateur){
		em.merge(utilisateur);
	}
    
    public void removeUtilisateur(long id) {
    	em.remove(em.find(Utilisateur.class, id));
    }
    
    public Utilisateur authentification(String email, String mdp ) {
        Utilisateur utilisateur = null;
        Query requete = em.createQuery( AUTHENTIFICATION );
        requete.setParameter( PARAM_EMAIL, email );
        requete.setParameter( PARAM_MDP, mdp );
        try {
            utilisateur = (Utilisateur) requete.getSingleResult();
        } catch ( NoResultException e ) {
            return null;
        }
        return utilisateur;
    }
    public Utilisateur findUtilisateur(String email) {
        Utilisateur utilisateur = null;
        Query requete = em.createQuery( SELECT_PAR_EMAIL );
        requete.setParameter( PARAM_EMAIL, email );
        try {
            utilisateur = (Utilisateur) requete.getSingleResult();
        } catch ( NoResultException e ) {
            return null;
        }
        return utilisateur;
    }
}
