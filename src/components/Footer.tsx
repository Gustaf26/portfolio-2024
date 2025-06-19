
import BasicInfo from '../sections/container-two/BasicInfo.jsx'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {

    return (<footer className="footer">
        <small className="copyright">Remastered by <a href="https://github.com/Gustaf26" target=""> Gustaf26 </a>after template with <FontAwesomeIcon icon={faHeartbeat} /> by <a href="https://themes.3rdwavemedia.com" target="">Xiaoying Riley</a> for developers</small>
        <div className="container">
            <BasicInfo />
        </div>
    </footer>)
}

export default Footer