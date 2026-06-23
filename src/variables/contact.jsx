import email from '../assets/contact/gmail.svg'
import insta from '../assets/contact/instagram.svg'
import linkedin from '../assets/contact/linkedin.svg'
import wpp from '../assets/contact/whatsapp.svg'

const Contact = [
    {
        icon: insta,
        link: "https://www.instagram.com/marcosillvestre/",
        name: 'Instagram'
    },
    {
        icon: email,
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=marcosillvestre.dev@email.com&subject=Contato&body=Olá Marcos, gostaria de falar com você.",
        name: 'Email'
    },
    {
        icon: linkedin,
        link: "https://www.linkedin.com/in/marcos-vinicius-silvestre/",
        name: 'Linkedin'
    },
    {
        icon: wpp,
        link: "https://api.whatsapp.com/send?phone=5531973375058&text=Ol%C3%A1,%20Marcos...",
        name: 'Whatsapp'
    },
]

export default Contact