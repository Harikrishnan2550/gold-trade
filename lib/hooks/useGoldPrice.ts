import { useState, useEffect } from 'react';

export function useGoldPrice() {
  const [prices, setPrices] = useState<any[]>([]);
  const [lastSync, setLastSync] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrices = async () => {
      try {
        const res = await fetch("/api/prices");
        const data = await res.json();
        
        if (data.rates) {
          const formatted = data.rates.map((item: any) => ({
            ...item,
            up: item.change >= 0
          }));
          setPrices(formatted);
          setLastSync(data.lastUpdated);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    getPrices();
    // We only check our own internal API every 30 mins to see if the 8-hour cache expired
    const interval = setInterval(getPrices, 1800000); 
    return () => clearInterval(interval);
  }, []);

  return { prices, lastSync, loading };
}