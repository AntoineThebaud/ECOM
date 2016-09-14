package com.web.WebService;

import java.util.List;

import javax.enterprise.context.RequestScoped;
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

import com.ejb.Entity.Instrument;

@RequestScoped
@Path("/instruments")
@Produces("application/json")
@Consumes("application/json")
public class InstrumentService {

	@POST
	public Response create(final Instrument instrument) {
		//TODO: process the given instrument 
		//you may want to use the following return statement, assuming that Instrument#getId() or a similar method 
		//would provide the identifier to retrieve the created Instrument resource:
		//return Response.created(UriBuilder.fromResource(InstrumentResource.class).path(String.valueOf(instrument.getId())).build()).build();
		return Response.created(null).build();
	}

	@GET
	@Path("/{id:[0-9][0-9]*}")
	public Response findById(@PathParam("id") final Long id) {
		//TODO: retrieve the instrument 
		Instrument instrument = null;
		if (instrument == null) {
			return Response.status(Status.NOT_FOUND).build();
		}
		return Response.ok(instrument).build();
	}

	@GET
	public List<Instrument> listAll(@QueryParam("start") final Integer startPosition,
			@QueryParam("max") final Integer maxResult) {
		//TODO: retrieve the instruments 
		final List<Instrument> instruments = null;
		return instruments;
	}

	@PUT
	@Path("/{id:[0-9][0-9]*}")
	public Response update(@PathParam("id") Long id, final Instrument instrument) {
		//TODO: process the given instrument 
		return Response.noContent().build();
	}

	@DELETE
	@Path("/{id:[0-9][0-9]*}")
	public Response deleteById(@PathParam("id") final Long id) {
		//TODO: process the instrument matching by the given id 
		return Response.noContent().build();
	}

}
