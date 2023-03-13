import './Header.css'
import BgImage from '../assets/bg-big.jpeg'

export default function Header() {
    return (
        <div className='Header'>
            <img src={BgImage} alt="background" />
            <h1 className="header">Portfolio</h1>
        </div>
    )
}