import { useEffect, useState } from "react";

export function useMagicColor() {
  const [state, setState] = useState("blue")
  useEffect(() => {
    const magicColorInterval = setInterval(() => {
      setState(`#${Math.floor(Math.random() * 999999)}`)
    }, 1000)
    return () => {
      clearInterval(magicColorInterval)
    }
  }, [])
  return state;
}