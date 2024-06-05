import OhMyFood from './assets/images/2024-05-31 121901.webp';
import OhMyFoodSmartphone from './assets/images/OhMyFoodSmart.webp';
import Kasa from './assets/images/kasa-desktop.webp';
import KasaSmart from './assets/images/kasa-smart.webp';

const logotext = "P.V";
const meta = {
    title: "Pierrick Viarde",
    description: "Bonjourn Pierrick Viarde développeur web frontend",
};

const introdata = {
    title: "Je suis Pierrick Viarde",
    animated: {
        first: "développeur web frontend",
        second: "j'aime créer",
        third: "j'aime coder",
    },
    description: "Développeur web frontend passioné ",
    your_img_url: "https://photos.app.goo.gl/bke5gDvSb55fokd66",
};

const dataabout = {
    title: "à propos de moi",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};

    



const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
    id: 1,
    title: "OhMyFood",
    captureDesktop: OhMyFood,
    captureSmartphone: OhMyFoodSmartphone, 
    description: "Projet d'étude réalisé en HTML et Sass. Réalisé pour travailler le principe d'animation et l'interactivité avec les utilisateurs.",
    responsive: "Desktop / Tablette / Smartphone",
    gitLink : "https://github.com/pierrick3773/oh_my_food.git"
},
{
    id: 1,
    title: "Kasa",
    captureDesktop: Kasa,
    captureSmartphone: KasaSmart, 
    description: "Projet d'étude réalisé en HTML et Sass. Réalisé pour travailler le principe d'animation et l'interactivité avec les utilisateurs.",
    responsive: "Desktop / Tablette / Smartphone",
    gitLink : "https://github.com/pierrick3773/oh_my_food.git"
},
   
];

const contactConfig = {
    YOUR_EMAIL: "pviarde@gmail.com",
    YOUR_FONE: "0769047307",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_az7amdh",
    YOUR_TEMPLATE_ID: "template_7d7cq1s",
    YOUR_USER_ID: "vPFZNRhomgC_HFgq1",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
   
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};