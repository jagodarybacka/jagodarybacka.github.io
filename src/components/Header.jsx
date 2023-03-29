import './Header.css'
import { useContext } from 'react'
import { ThemeContext, THEMES } from 'App'

export default function Header({ setTheme }) {
    const theme = useContext(ThemeContext)

    return (
        <div className='Header'>
            <img src={THEMES[theme].img} alt="background" />
            <div class="container">
                <button onClick={setTheme}>✦ change theme ✦</button>
                <h1 className="header">Portfolio</h1>
                <a href="#">Blog</a>
            </div>
        </div>
    )
}