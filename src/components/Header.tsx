import profPic from "../assets/images/profile.jpg"
import linkedIn from "../assets/images/linkedin.png"
import github from "../assets/images/github.png"
import twitter from "../assets/images/twitter.png"


function Header() {

    return (<header className="header">
        <div className="container">
            <div className="profile-container">
                <img className="profile-image" src={profPic} alt="profile image" />
                <div className="profile-content">
                    <h1 className="name">Gustavo C. S.</h1>
                    <h2 className="desc">Developer /  Instructor</h2>

                </div>
            </div>
            <ul className="social list-inline">
                <li><a href="https://twitter.com/GustavoGcs26" target="">
                    <img src={twitter} /></a>
                </li>
                <li><a href="https://www.linkedin.com/in/gustavo-catala-sverdrup-40128427/?originalSubdomain=se"
                    target=""><img src={linkedIn} /></a></li>
                <li><a href="https://github.com/Gustaf26" target=""><img
                    src={github} /></a></li>
            </ul>
        </div>
    </header>)
}

export default Header