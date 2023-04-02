import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function useMarkdown(filename) {
    const [text, setText] = useState("")

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const module = await import(`../blog/${filename}.md`)
                fetch(module.default)
                    .then((response) => response.text())
                    .then((responseText) => setText(responseText))
            } catch (e) { /* silent fail */ }
        }

        fetchArticle()
    }, [filename])

    return text
}

export default function BlogPost() {
    const { postID } = useParams()
    const markdown = useMarkdown(postID)

    return (
        <Markdown>{markdown}</Markdown>
    )
}

