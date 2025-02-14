import { useEffect, useRef } from "react"

export function useInputFocus () {
  const nameRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (nameRef.current) {
            nameRef.current.focus()
        }
    },[])

    return { nameRef }
}