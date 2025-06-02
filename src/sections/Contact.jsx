
import myProfile from '../assets/images/my-profile.jpg'
export default function Contact() {

    return (<div id="contact-container">
        <div id="contact-pic">
            <h3>Hi there!</h3>
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
