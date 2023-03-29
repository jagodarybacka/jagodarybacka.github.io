import CopyLink from './CopyLink'
import './Links.css'

export default function Links() {
    return (
        <ul className="Links no-bullets">
            <li><a href="https://github.com/jagodarybacka">Github</a></li>
            <li><a href="https://twitter.com/berry_rybacka">Twitter</a></li>
            <li><CopyLink label="Discord" content="berrry.eth#4391" /></li>
            <li><CopyLink label="ENS" content="berrry.eth" /></li>
            <li><a href='mailto:berry.rybacka@gmail.com'>Email</a></li>
        </ul>
    )
}