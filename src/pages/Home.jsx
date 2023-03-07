import Links from "components/Links";

export default function Home() {
    return (<>
        <section>
            <h1>Howdy!</h1>
            <h2>I’m Jagoda and I create software</h2>
            <p>Love to have you here lurking on my portfolio, let me tell you something about myself.</p>
            <p>I started as a frontend developer that loved vanilla JavasScript. Now I'm writing decentralized apps for the Ethereum blockchain. I teach others programming and I learn new concepts for fun.</p>
        </section>
        <section>
            <span>Me online</span>
            <Links />
        </section>
        <h1>Skills</h1>
        <section>
            <h2>I write code with</h2>
            <p>For frontend I use - React, Typescript, Redux, Ethers, Node</p>
            <p>For unit tests I use - Jest, Mocha, Karma, Chai</p>
            <p>For E2E I use - Cypress, WebdriverIO, Playwright</p>
            <p>For project management I use - Jira, Github Projects</p>
            <p>For smart contracts I use - Solidity and Hardhat (still learning!)</p>
        </section>
        <section>
            <h2>I thrive with</h2>
            <ul>
                <li>dynamic work environment</li>
                <li>bleeding edge technologies</li>
                <li>people that trust each other</li>
                <li>thoughtful design</li>
                <li>attention to details</li>
                <li>having space to learn</li>
                <li>doing research</li>
                <li>working remotely</li>
                <li>startup projects</li>
            </ul>
            <h2>Not my cup of tea</h2>
            <ul>
                <li>legacy projects</li>
                <li>big corporations</li>
                <li>lack of transparency</li>
                <li>overworking</li>
            </ul>
        </section>
        <h1>Experiance</h1>
        <section>
            <h2>I wrote some code here</h2>
            <p>I finished Adam Mickiewicz University in Poznan, Poland, and got my Computer Science Bachelor of Engineering. Learned some math there and it started my romance with functional programming.</p>
            <p>I was a workshop coordinator at Devmeetings where I was preparing one-day bootcamps for software developers at different levels. Seeing so many junior developers in need of mentoring got me thinking about how can I help more people.</p>
            <p>I was a frontend developer at mTab where I was creating software for data analysis - large amounts of data, so I learned a lot about writing applications that work fast.</p>
            <p>I worked in PWC helping with various projects. I had an opportunity to touch many technologies and make my own choices starting new projects.</p>
            <p>Currently, I write open source project Taho which is an Ethereum wallet. This got me into blockchain and I fell in love! Working in an environment where there is constantly so much cool stuff I can learn keeps me going.</p>
        </section>
        <section>
            <h2>I did it</h2>
            <p>I wrote some projects:</p>
            <ul>
                <li>Previous Portfolio - Github Demo - I updated my portfolio to the one you are currently browsing but maybe you will like the previous one more</li>
                <li>Focusify - Github Demo - pomodoro-like app to play different Spotify playlists during work time and during breaks</li>
                <li>SVG Illustrations - Github Demo - SVGs I did in Inkscape</li>
                <li>Iterated Prisoner's Dilemma Presentation - Github Demo - presentation I've made for Game Theory class about Iterated Prisoner's Dilemma. The presentation was made in Polish</li>
            </ul>
            <p>Make sure to check my Github account for other projects. As I work for open source you can check what I’m currently doing in a real-time!</p>
        </section>
        <section>
            <h2>I teach code</h2>
            <p>I love helping others to level up their careers so I teach programming. It started with my job as a workshop coordinator, then I was teaching on Fiverr for some time. Now I have my small group of students approaching getting their first jobs in tech. Let me know if you would like to join.</p>
        </section>
        <section>
            <p>That’s all, thank you for reading!</p>
            <Links />
        </section>

    </>
    )
}