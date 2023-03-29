import { useCallback, useState } from "react"
import "./CopyLink.css"

export default function CopyLink({ label, content }) {
    const [isCopied, setIsCopied] = useState(false)

    const copy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(content)
            setIsCopied(true)
        } catch (e) { console.error("Copy failed") }
    }, [content])

    return (
        <button className="CopyLink" onClick={copy}>
            {label}
            <span>
                {isCopied ? "Copied" : "Copy"}: {content}
            </span>
        </button>
    )
}