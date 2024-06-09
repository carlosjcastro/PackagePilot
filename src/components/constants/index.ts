import people01 from '../../assets/people01.png';
import people02 from '../../assets/people02.png';
import people03 from '../../assets/people03.png';
// import facebook from '../../assets/';
// import instagram from '../../assets/instagram';
// import linkedin from '../../assets/linkedin';
// import twitter from '../../assets/';
import airbnb from '../../assets/airbnb.png';
import binance from '../../assets/binance.png';
import coinbase from '../../assets/coinbase.png';
import dropbox from '../../assets/dropbox.png';
import send from '../../assets/Send.svg';
import shield from '../../assets/Shield.svg';
import star from '../../assets/Star.svg';
import benefitIcon1 from '../../assets/benefits/card-1.svg';
import benefitIcon2 from '../../assets/benefits/card-2.svg';
import benefitIcon3 from '../../assets/benefits/card-3.svg';
import benefitIcon4 from '../../assets/benefits/card-4.svg';
import benefitImage2 from '../../assets/benefits/image-2.png';

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "benefits",
        title: "Benefits",
    },
    {
        id: "product",
        title: "Product",
    },
    {
        id: "clients",
        title: "Clients",
    },
];

export const benefits = [
    {
        id: "0",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "src/asset/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "1",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "src/asset/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "2",
        title: "Connect everywhere",
        text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
        backgroundUrl: "src/asset/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        id: "3",
        title: "Fast responding",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "src/asset/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "4",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "src/asset/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "5",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "src/asset/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
    },
];

export const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Acceso Centralizado",
        content:
            "Encuentra todos los datos que necesitas en un solo lugar y de manera eficiente",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "100% Seguridad",
        content:
            "Cumple con las normativas de privacidad y protege tu información sensible.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Análisis Inteligente",
        content:
            "Realiza busquedas en grandes volúmenes de datos y utiliza IA para categorizar contenido relevante.",
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content:
            "La plataforma ha revolucionado nuestra forma de trabajar. Ahora podemos acceder a la información rápidamente y con una precisión sin precedentes.",
        name: "María Gómez",
        title: "Directora de Análisis de Datos, Instituto de Estadística",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "Gracias a esta solución, nuestras decisiones son más informadas y basadas en datos precisos. La seguridad de la información nos da total tranquilidad",
        name: "Javier Rodríguez",
        title: "Analista de Datos, Agencia de Medio Ambiente",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "La capacidad multilingüe de la plataforma ha sido crucial para nuestro trabajo en diferentes países. Es una herramienta imprescindible para nuestra colaboración global.",
        name: "Angel López",
        title: "Coordinador de Proyectos, ONG Internacional",
        img: people03,
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "Seguridad",
        value: "Confiable",
    },
    {
        id: "stats-2",
        title: "Eficiencia",
        value: "Rapida",
    },
    {
        id: "stats-3",
        title: "Colaboración",
        value: "Constante",
    },
];


export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            {
                name: "Content",
                link: "https://www.hoobank.com/content/",
            },
            {
                name: "How it Works",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "Create",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Explore",
                link: "https://www.hoobank.com/explore/",
            },
            {
                name: "Terms & Services",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        title: "Community",
        links: [
            {
                name: "Help Center",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "Partners",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Suggestions",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Blog",
                link: "https://www.hoobank.com/blog/",
            },
            {
                name: "Newsletters",
                link: "https://www.hoobank.com/newsletters/",
            },
        ],
    },
    {
        title: "Partner",
        links: [
            {
                name: "Our Partner",
                link: "https://www.hoobank.com/our-partner/",
            },
            {
                name: "Become a Partner",
                link: "https://www.hoobank.com/become-a-partner/",
            },
        ],
    },
];

// export const socialMedia = [
//     {
//         id: "social-media-1",
//         icon: instagram,
//         link: "https://www.instagram.com/",
//     },
//     {
//         id: "social-media-2",
//         icon: facebook,
//         link: "https://www.facebook.com/",
//     },
//     {
//         id: "social-media-3",
//         icon: twitter,
//         link: "https://www.twitter.com/",
//     },
//     {
//         id: "social-media-4",
//         icon: linkedin,
//         link: "https://www.linkedin.com/",
//     },
// ];

export const clients = [
    {
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];