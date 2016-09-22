package com.web.rest;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

import com.ejb.Views.View;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

@Provider
@Produces(MediaType.APPLICATION_JSON)  
public class JacksonConfig implements ContextResolver<ObjectMapper>  
{  
   private ObjectMapper objectMapper;  
  
  
   public JacksonConfig() throws Exception  
   {  
      this.objectMapper = new ObjectMapper();  
      this.objectMapper.setConfig(objectMapper.getSerializationConfig().withView(View.Resume.class));
      this.objectMapper.disable(MapperFeature.DEFAULT_VIEW_INCLUSION);
   }  
  
   @Override
   public ObjectMapper getContext(Class<?> objectType)  
   {  
      return objectMapper;  
   }  
}  
