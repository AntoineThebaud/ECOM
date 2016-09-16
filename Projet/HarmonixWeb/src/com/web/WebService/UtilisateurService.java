package com.web.WebService;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.ejb.Entity.Utilisateur;
import com.ejb.SessionBean.UtilisateurResource;

@RequestScoped
@Path("/utilisateurs")
@Produces("application/json")
@Consumes("application/json")
public class UtilisateurService {

	@Inject
	UtilisateurResource ur;
	
	
	@POST
	public Utilisateur create(final Utilisateur utilisateur) {
		return ur.createUtilisateur(utilisateur);
	}

	@GET
	@Path("/{id:[0-9][0-9]*}")
	public Response findById(@PathParam("id") final Long id) {
		//TODO: retrieve the utilisateur 
		Utilisateur utilisateur = null;
		if (utilisateur == null) {
			return Response.status(Status.NOT_FOUND).build();
		}
		return Response.ok(utilisateur).build();
	}

	@GET
	public List<Utilisateur> listAll(@QueryParam("start") final Integer startPosition,
			@QueryParam("max") final Integer maxResult) {
		//TODO: retrieve the utilisateurs 
		final List<Utilisateur> utilisateurs = null;
		return utilisateurs;
	}

	@PUT
	@Path("/{id:[0-9][0-9]*}")
	public Response update(@PathParam("id") Long id, final Utilisateur utilisateur) {
		//TODO: process the given utilisateur 
		return Response.noContent().build();
	}

	@DELETE
	@Path("/{id:[0-9][0-9]*}")
	public Response deleteById(@PathParam("id") final Long id) {
		//TODO: process the utilisateur matching by the given id 
		return Response.noContent().build();
	}

}
