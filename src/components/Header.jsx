import './Header.css'
import { useContext } from 'react'
import { ThemeContext, THEMES } from 'App'

export default function Header({ setTheme }) {
    const theme = useContext(ThemeContext)

    return (
        <div className='Header'>
            <img src={THEMES[theme].img} alt="background" />
            <div className="container">
                <button onClick={setTheme}>✦ change theme ✦</button>
                <h1 className="header"><a href="/">Portfolio</a></h1>
                <a href="/#/blog">Blog</a>
            </div>
        </div>
    )
}