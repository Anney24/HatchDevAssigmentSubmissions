async function mockApiCall() {
    return new Promise((resolve, reject) => {
      // Simulate a random success or failure
      setTimeout(() => {
        if (Math.random() > 0.7) {
          resolve("Success: Data fetched!");
        } else {
          reject(new Error("Mock API Call Failed"));
        }
      }, 1000); // Simulate a 1 second delay for the API call
    });
  }
  
  async function fetchWithExponentialBackoff(
    mockApiCall,
    retries = 5,
    delay = 1000
  ) {
    //   implement logic here
    try {
        const data = await mockApiCall();
        return data; // Return data if successful
    } catch (error) {
        if (retries > 0) {
            console.log(`Retry attempt ${6 - retries}: ${error.message}`);
            await new Promise(resolve => setTimeout(resolve, delay));
            // Exponentially increase the delay
            const nextDelay = delay * 2;
            // Recursive call with reduced retry count and increased delay
            return await fetchWithExponentialBackoff(mockApiCall, retries - 1, nextDelay);
        } else {
            throw new Error("Maximum retries exceeded");
        }
    }
  }
  
  // Example usage
  (async () => {
    try {
      let data = await fetchWithExponentialBackoff(mockApiCall);
      console.log("Data fetched successfully:", data);
    } catch (error) {
      console.error(error.message);
    }
  })();