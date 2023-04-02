import { Link } from 'react-router-dom'
import './Blog.css'

const BLOG_POSTS = [
    {
        title: "Article 1 in progress",
        description: "Some description...",
        fileName: "article_one"
    }
]

export default function Blog() {
    return (
        <div className='Blog'>
            <h1>Blog</h1>
            <h2>🚧 This is work in progress 🚧</h2>

            {BLOG_POSTS.map(({ title, description, fileName }) => (
                <Link to={fileName} key={fileName}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Link>
            ))}
        </div>
    )
}

