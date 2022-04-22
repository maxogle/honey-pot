import React from "react"


const About = ({darkMode, setDarkMode}) => {
    return(
        <div>
            <h2 className="sweetheart">Find your FBI sweethearts...</h2>
        <div className={darkMode ? "about-dark" : "about"}>
           
            Here at Honeypot we believe in a safe space to live dangerously!!!!! Finding the love interests of your nightmares ;) just became that much easier.  You might be asking what makes this space different from a subreddit? Honeypot is subject to ABSOULUTELY ZERO MODERATION, so you can be sure that what you post will be here forever.  No busy body mods, no rules, just a place to share your deepest darkest thoughts about these the FBI’s most WANTED hunks.

        So share your thoughts, feelings, and the lengths you’d go to share air with these criminals most fair.
        </div>
        </div>
    )
}
export default About