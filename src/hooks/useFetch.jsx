import { useEffect, useCallback, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [ispending, setIsPending] = useState(false);

  const FetchData = useCallback(async () => {
    setIsPending(true);
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("nimadur xato");
      }
      const data = await res.json();
      setData(data);

      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  }, [url]);

  useEffect(() => {
    FetchData();
  }, [FetchData]);

  return { data, error, ispending };
}
