package org.acme;

import io.quarkus.cache.CacheResult;
import org.jboss.logging.Logger;

import jakarta.enterprise.context.ApplicationScoped;
import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;

@ApplicationScoped
public class LabseqService {    

    // The maximum index of labseq that has been asked
    public int maxAsked = 3;

    private static final Logger LOGGER = Logger.getLogger(LabseqService.class);

    // Cache for labseq using HashMap
    private Map<Integer, BigInteger> labseqCache = new HashMap<>();

    @CacheResult(cacheName = "labseq-cache")
    public BigInteger computelabseq(int n) {

        // Check if the input is a non-negative integer
        if (n < 0) {
            throw new IllegalArgumentException("Input must be a non-negative integer");
        }

        // Check if the result is already in the cache
        if (labseqCache.containsKey(n)) {
            LOGGER.info("Result for labseq(" + n + ") found in cache.");
            return labseqCache.get(n);
        }

        // Calculate the result
        BigInteger result = calculatelabseqIterative(n);

        // Store the result in the cache from whole labseq
        for (int i = maxAsked + 1; i <= n; i++) {
            labseqCache.put(i, result);
            LOGGER.info("Calculated and cached labseq(" + i + ") result.");
        }

        // Update the maximum index of labseq that has been asked
        if(n > maxAsked) {
            maxAsked = n;
        }

        return result;
    }

    // Iterative method to calculate labseq
    private BigInteger calculatelabseqIterative(int n) {
        // Base cases
        if (n == 0) {
            return BigInteger.ZERO;
        } else if (n == 1) {
            return BigInteger.ONE;
        } else if (n == 2) {
            return BigInteger.ZERO;
        } else if (n == 3) {
            return BigInteger.ONE;
        }

        // Create an array to store labseq
        BigInteger[] labseq = new BigInteger[n + 1];
        labseq[0] = BigInteger.ZERO;
        labseq[1] = BigInteger.ONE;
        labseq[2] = BigInteger.ZERO;
        labseq[3] = BigInteger.ONE;

        // Calculate labseq from index 4 to n
        for (int i = maxAsked+1; i <= n; i++) {
            BigInteger prev1 = labseqCache.getOrDefault(i - 4, labseq[i - 4]);
            BigInteger prev2 = labseqCache.getOrDefault(i - 3, labseq[i - 3]);

            labseq[i] = prev1.add(prev2);
        }

        return labseq[n];
    }   
}
