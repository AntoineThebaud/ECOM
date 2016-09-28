package com.web.WebService;

import java.util.List;

import javax.annotation.ManagedBean;
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

import com.ejb.Entity.Commande;
import com.ejb.Entity.Instrument;
import com.ejb.SessionBean.CommandeResource;

@ManagedBean
@RequestScoped
@Path("commandes")
public class CommandeService {
	
	@Inject
	CommandeResource cr;

	@POST
	@Consumes("application/json")
	public Commande create(final Commande commande) {
		return cr.create(commande);
	}

	@GET
	@Path("/{id:[0-9][0-9]*}")
	@Produces("application/json")
	public Response findById(@PathParam("id") final Long id) {
		Commande commande = cr.getById(id);
		if (commande == null) {
			return Response.status(Status.NOT_FOUND).build();
		}
		return Response.ok(commande).build();
	}

	@GET
	@Produces("application/json")
	public List<Commande> listAll(@QueryParam("start") final Integer startPosition,
			@QueryParam("max") final Integer maxResult) { 
		List<Commande> commandes = cr.getAllCommandes(startPosition, maxResult);
		return commandes;
	}

	@PUT
	@Path("/{id:[0-9][0-9]*}")
	@Consumes("application/json")
	@Produces("text/plain")
	public Response update(@PathParam("id") Long id, final Commande commande) {
		Response r = null;
		try {
			cr.updateCommande(commande);
			r = Response.ok("OK").build();
		} catch (Exception e) {
			System.out.println("exception in create " + e);
			r = Response.ok("error").build();
		}
		return r;
	}

	@DELETE
	@Path("/{id:[0-9][0-9]*}")
	@Produces("application/json")
	public Response deleteById(@PathParam("id") final Long id) {
		Response r = null;
		try {
			cr.removeCommande(id);
			r = Response.ok("OK").build();
		} catch (Exception e) {
			System.out.println("exception in create " + e);
			r = Response.ok("error").build();
		}
		return r;
	}

}
