import Links from "components/Links";

export default function Home() {
    return (<>
        <section className="header-section">
            <h2>I’m Jagoda and I create software</h2>
            <p>Love to have you here lurking on my portfolio, let me tell you something about myself.</p>
            <p>I started as a frontend developer that loved vanilla JavasScript. Now I'm writing decentralized apps for the Ethereum blockchain. I teach others programming and I learn new concepts for fun.</p>
            <Links />
        </section>
        <div className="line" />
        <h1 className="faded-header">Skills</h1>
        <section>
            <h2 className="faded-subheader">I write code with</h2>
            <p>For frontend I use - React, Typescript, Redux, Ethers, Node</p>
            <p>For unit tests I use - Jest, Mocha, Karma, Chai</p>
            <p>For E2E I use - Cypress, WebdriverIO, Playwright</p>
            <p>For project management I use - Jira, Github Projects</p>
            <p>For smart contracts I use - Solidity and Hardhat (still learning!)</p>
        </section>
        <section className="row">
            <div>
                <h2 style={{ color: "#2C4E2C" }}>I thrive with</h2>
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
            </div>
            <div>
                <h2 style={{ color: "#630303" }}>Not my cup of tea</h2>
                <ul>
                    <li>legacy projects</li>
                    <li>big corporations</li>
                    <li>lack of transparency</li>
                    <li>overworking</li>
                </ul>
            </div>
        </section>
        <h1 className="faded-header">Experience</h1>
        <section >
            <h2 className="faded-subheader">I wrote some code here</h2>
            <p>I finished <b>Adam Mickiewicz University</b> in Poznan, Poland, and got my Computer Science Bachelor of Engineering. Learned some math there and it started my romance with functional programming.</p>
            <p>I was a  <b>workshop coordinator at Devmeetings</b> where I was preparing one-day bootcamps for software developers at different levels. Seeing so many junior developers in need of mentoring got me thinking about how can I help more people.</p>
            <p>I was a <b>frontend developer at mTab</b> where I was creating software for data analysis - large amounts of data, so I learned a lot about writing applications that work fast.</p>
            <p>I worked for <b>PWC</b> helping with various projects. I had an opportunity to touch many technologies and make my own choices starting new projects.</p>
            <p>Currently, I write <b>open source project Taho</b> which is an Ethereum wallet. This got me into blockchain and I fell in love! Working in an environment where there is constantly so much cool stuff I can learn keeps me going.</p>
        </section>
        <section>
            <h2 className="faded-subheader">I did it</h2>
            <p>I wrote some projects:</p>
            <ul>
                <li><b>Focusify</b> - <a href="https://github.com/jagodarybacka/focusify-app">Github</a> <a href="https://jagodarybacka.github.io/focusify-app/">Demo</a> - pomodoro-like app to play different Spotify playlists during work time and during breaks</li>
                <li><b>SVG Illustrations</b> - <a href="https://github.com/jagodarybacka/svg-illustrations">Github</a> <a href="https://jagodarybacka.github.io/svg-illustrations/">Demo</a> - SVGs I did in Inkscape</li>
                <li><b>Iterated Prisoner's Dilemma Presentation</b> - <a href="https://github.com/jagodarybacka/game-theory-presentation">Github</a> <a href="https://jagodarybacka.github.io/game-theory-presentation/">Demo</a> - presentation I've made for Game Theory class about Iterated Prisoner's Dilemma. The presentation was made in Polish</li>
            </ul>
            <p>Make sure to check my <a href="https://github.com/jagodarybacka">Github</a> account for other projects. As I work for open source you can check what I’m currently doing in a real-time!</p>
        </section>
        <section>
            <h2 className="faded-subheader">I teach code</h2>
            <p>I love helping others to level up their careers so I teach programming. It started with my job as a workshop coordinator, then I was teaching on Fiverr for some time. Now I have my small group of students approaching getting their first jobs in tech. Let me know if you would like to join.</p>
        </section>
        <section>
            <p>That’s all, thank you for reading!</p>
        </section>
    </>
    )
}