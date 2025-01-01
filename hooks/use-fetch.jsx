import { toast } from "sonner";
import { useState } from "react"; // Correct import for useState

const useFetch = (cb) => {
  const [data, setData] = useState(undefined); // Use useState here
  const [loading, setLoading] = useState(false); // Initialize loading as false
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null); // Reset error before making a new request

    try {
      const response = await cb(...args);
      setData(response); // Set the response data
      setError(null); // Reset error on success
    } catch (error) {
      setError(error); // Set the error if the request fails
      toast.error(error.message); // Show toast error message
    } finally {
      setLoading(false); // Set loading to false after request is done
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;
