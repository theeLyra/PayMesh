import { useEffect, useState } from 'react'

/** Current time in ms, refreshed on an interval. Keep the interval as long as the UI allows. */
export function useNow(intervalMs = 5000) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), intervalMs)
    return () => clearInterval(t)
  }, [intervalMs])
  return now
}
