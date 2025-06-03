
import { useEffect, useState } from 'react'

import myProfile from '../assets/images/my-profile.jpg'


export default function Contact() {

    const [msg, setMsg] = useState('')

    useEffect(() => {

        let string3 = '...'
        let strings = ['Desarrollador', 'Instructor', 'Utbildare', 'Utvecklare', 'Developer', 'Guitarrist', 'Lingvist']
        let index = 0
        let stringsIndex = 0;
        let myMsg = ''
        let stringToShow = strings[stringsIndex]
        const myInt = setInterval(() => {

            if (myMsg.length === stringToShow.length && stringToShow !== string3) {
                myMsg = '';
                index = 0
                stringToShow = string3
            }

            if (stringToShow === string3 && index === string3.length) {
                myMsg = '';
                index = 0
                stringsIndex += 1
                if (stringsIndex === strings.length) { stringsIndex = 0 }
                stringToShow = strings[stringsIndex]
            }
            else if (stringToShow != string3) {
                stringToShow = strings[stringsIndex]
            }

            myMsg += stringToShow[index]
            setMsg(myMsg)
            index += 1

        }, 300)

    }, [])

    return (<div id="contact-container">
        <div id="main-pic-section">
            <div id="about-me-msg-container">
                <h2>Soy / <em>Är</em> / <b>I am</b> </h2>
                <h3>{msg}</h3>
            </div>
            <div id="pic-container">
                <img alt='profile' src={myProfile} />
            </div>

        </div>
    </div>)
}
