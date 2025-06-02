
import { useEffect, useState } from 'react'

import myProfile from '../assets/images/my-profile.jpg'


export default function Contact() {

    const [msg, setMsg] = useState('')

    useEffect(() => {

        let string2 = 'Hi there!'
        let string3 = '...'

        let index = 0
        let myMsg = ''
        let stringToShow = string2
        const myInt = setInterval(() => {
            if (stringToShow === string3 && index === 3) {
                stringToShow = string2
                index = 0;
                myMsg = ''
            }
            if (myMsg.length > 8) {
                myMsg = '.';
                index = 0
                stringToShow = string3
            }
            else {
                myMsg += stringToShow[index];
            }
            setMsg(myMsg)
            index += 1
        }, 500)

    }, [])

    return (<div id="contact-container">
        <div id="contact-pic">
            <h3>{msg}</h3>
            <img alt='profile' src={myProfile} />
            <div id="contact">
            </div>
        </div>
    </div>)
}
