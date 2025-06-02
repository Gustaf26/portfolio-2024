
import myProfile from '../assets/images/my-profile.jpg'
export default function Contact() {

    return (<div id="contact-container">
        <div id="contact-pic">
            <img alt='profile' src={myProfile} />
            <div id="contact">
                <button>
                    <a href="mailto: gcs26@yahoo.com" target="">
                        CONTACT ME</a>
                </button>
            </div>
        </div>
    </div>)
}
