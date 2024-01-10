package org.acme;

import org.jboss.logging.Logger;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.core.Response;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;

@Path("/labseq")
public class LabseqResource {

    private static final Logger LOGGER = Logger.getLogger(LabseqResource.class);

    @Inject
    LabseqService labseqService;

    @GET
    @Path("/{n}")
    public Map<String, Object> calculatelabseq(@PathParam("n") int n) {

        // create a map to store the result and the duration
        Map<String, Object> result = new HashMap<>();

        try {
            //start timestamp
            long start = System.currentTimeMillis();

            // call the function where labseq is calculated
            BigInteger labseqResult = labseqService.computelabseq(n);

            LOGGER.info("Calculated labseq(" + n + ") result: " + labseqResult);

            // put the result in the map
            result.put("result", labseqResult.toString()); // Convert BigInteger to String
            // end timestamp
            long end = System.currentTimeMillis();
            // duration in milliseconds
            long duration = end - start;

            // put the duration in the map
            result.put("duration", duration + "ms");
            

        } catch (Exception e) {
            LOGGER.error("Error calculating labseq, index may be any non-negative integer number", e);
            result.put("error", "Error calculating labseq, index may be any non-negative integer number");
            
        }

        return result;
    }
}
