import chat from '../assets/images/projects/chat.png'
import ecommerce from "../assets/images/projects/mobile.png"
import speaking from '../assets/images/projects/Speaking.jpg'
import minButik from '../assets/images/projects/min-butik.png'

let projects = [
    {
        image: ecommerce,
        title: 'E-commerce - CMS for retailers who want a flexible solution',
        description: 'Being this my examination project, it never saw the light of being actually used by retailers. I developed it further with CMS functionality and more suited styles for a clothes brand',
        more_link: { href: "https://e-commerce.catala-sverdrup.se", "text": 'Find out more' }
    },
    {
        image: chat,
        title: "Chat App - Live chat for Learning Management System project at Sankta Maria Folkhögskola Developers",
        description: "The main purpose of the app is to let students, teachers and admin communicate in real time in order to keep different channels of communication open.",
        more_link: {
            "href": "",
            "text": "Find out more"
        }
    },
    {
        image: speaking,
        title: "Speaking Up 2 You - Landing page for a language school",
        description: "This school driven by an aqcuaintance needed another functionality and some more versatility in order to change contents and actual information. So the work was based on re-writing the code into a React SPA and keep it simple, parting of the original design.",
        more_link: {
            "href": "https://speakingup2you.com",
            "text": "Find out more"
        }
    },
    {
        image: minButik,
        title: ' Mathem Clone - A copy of the popular Swedish food company',
        description: 'For this project I worked specifically with vanilla Javascript and Typescript. The product cards design was coded by my fellow co-worker at Sankta Maria, Mr. Lars Holmqvist. It was a cool project where my favorite part was coding the cart functionality.',
        more_link: {
            "href": "https://min-butik.catala-sverdrup.se",
            "text": "Find out more"
        }
    }
]


export default projects