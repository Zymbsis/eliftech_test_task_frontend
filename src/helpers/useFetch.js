import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useFetch = (fetchFunction, ...rest) => {
  const [serverData, setServerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    toast.dismiss();
    (async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchFunction(...rest);
        setServerData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFunction, ...rest]);

  return [serverData, isLoading, isError];
};
