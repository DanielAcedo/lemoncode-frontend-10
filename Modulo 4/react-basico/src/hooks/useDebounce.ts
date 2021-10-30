import { useEffect, useState } from "react";

const useDebounce = (value, interval) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, interval);

    return () => clearTimeout(timeout);
  }, [value, interval]);

  return debouncedValue;
};

export default useDebounce;
