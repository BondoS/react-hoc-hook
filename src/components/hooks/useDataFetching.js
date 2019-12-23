import {useState, useEffect} from 'react';

const useDataFetching = dataSource => {
  const [loading, setLoading] = useState (true);
  const [results, setResults] = useState ([]);
  const [error, setError] = useState ('');

  useEffect (
    () => {
      (async () => {
        try {
          const data = await fetch (dataSource);
          const json = await data.json ();
          if (json) {
            setLoading (false);
            setResults (json);
          }
        } catch (error) {
          setLoading (false);
          setError (error.message);
        }
        setLoading (false);
      }) ();
    },
    [dataSource]
  );

  return {
    error,
    loading,
    results,
  };
};

export default useDataFetching;
