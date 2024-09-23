import { useEffect, useState } from 'react';

export const useFetch = (fetchFunction, ...rest) => {
  const [serverData, setServerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
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
  }, [fetchFunction, ...rest]);

  return [serverData, isLoading, isError];
};
