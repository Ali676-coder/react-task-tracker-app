import { useEffect, useState } from "react";
const useFetch = (url) => {
  // -----------------------------------------

  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  // -----------------------------------------
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((respone) => {
          if (!respone.ok) {
            throw new Error("Coud not fetch the data for that resource");
          }
          return respone.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted!!!");
          } else {
            setError(err.message);
            setPending(false);
          }
        });
    }, 500);

    return () => {
      abortCont.abort();
    };
  }, [url]);

  return { data, isPending, error };
  // -----------------------------------------
};

export default useFetch;
