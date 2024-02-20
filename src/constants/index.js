import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaQuoteLeft } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import * as Yup from 'yup';

export const HeaderLinks = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Offices', link: '/offices' },
    { title: 'Contact', link: '/contact' }
]


export const HeaderLinksB = [
    {
        title: 'what we do', link: '/services', list: [
            { "title": "Strategic Visioning", "link": "/some" },
            { "title": "Customer Engagement", "link": "/some" },
            { "title": "Customer Journey Analytics", "link": "/some" },
            { "title": "Human-Centered Design", "link": "/some" },
            { "title": "Marketing & Sales", "link": "/some" },
            { "title": "Mergers & Acquisitions", "link": "/some" },
            { "title": "Carveouts & Divestitures", "link": "/some" },
            { "title": "Portfolio Value Creation", "link": "/some" },
            { "title": "Post-Merger Integration", "link": "/some" },
            { "title": "Transaction Advisory", "link": "/some" },
            { "title": "Data & Technology", "link": "/some" },
            { "title": "Cloud", "link": "/some" },
            { "title": "Cybersecurity", "link": "/some" },
            { "title": "Data Analytics & AI", "link": "/some" },
            { "title": "IT Strategy & Architecture", "link": "/some" },
            { "title": "Organization & People", "link": "/some" },
            { "title": "HR Advisory", "link": "/some" },
            { "title": "Organizational Change Management", "link": "/some" },
            { "title": "Organizational Design", "link": "/some" },
            { "title": "Talent Strategy & Analytics", "link": "/some" },
            { "title": "Business Operations", "link": "/some" },
            { "title": "Automation & Productivity", "link": "/some" },
            { "title": "Cost Reduction", "link": "/some" },
            { "title": "Operations", "link": "/some" },
            { "title": "Outsourcing Advisory", "link": "/some" },
            { "title": "Supply Chain", "link": "/some" },
            { "title": "Products & Experiences", "link": "/some" },
            { "title": "Digital Products", "link": "/some" },
            { "title": "Systems & Platforms", "link": "/some" },
            { "title": "High-Performing Product Organization", "link": "/some" },
            { "title": "Industry Offerings", "link": "/some" }
        ]

    },
    {
        title: 'industries', link: '/industries', list: [
            { "title": "Consumer & Industrial Products", "link": "/some" },
            { "title": "Energy & Utilities", "link": "/some" },
            { "title": "Financial Services", "link": "/some" },
            { "title": "Banking & Credit Unions", "link": "/some" },
            { "title": "Agricultural Lending & Farm Credit", "link": "/some" },
            { "title": "Healthcare & Life Sciences", "link": "/some" },
            { "title": "Dental & Ancillary", "link": "/some" },
            { "title": "Health Plans", "link": "/some" },
            { "title": "Healthcare Providers", "link": "/some" },
            { "title": "Life Sciences", "link": "/some" },
            { "title": "High-Tech & Software", "link": "/some" },
            { "title": "Insurance", "link": "/some" },
            { "title": "Private Equity", "link": "/some" },
            { "title": "Retail", "link": "/some" },
            { "title": "Industry Overview", "link": "/some" }
        ]

    },
    {
        title: 'client stories', link: '/client-stories', list: false
    },
    {
        title: 'prespectives', link: '/perspectives', list: [
            { "title": "Perspectives Home", "link": "/some" },
            { "title": "Subscribe", "link": "/some" },
            { "title": "Trending Topics", "link": "/some" },
            { "title": "Generative AI", "link": "/some" },
            { "title": "Digital", "link": "/some" },
            { "title": "Recession", "link": "/some" },
            { "title": "Cybersecurity", "link": "/some" },
            { "title": "The Conduit: A Product & Tech Blog", "link": "/some" },
            { "title": "Featured", "link": "/some" },
            { "title": "2024 Industry Outlooks", "link": "/some" },
            { "title": "The Digital Disconnect", "link": "/some" },
            { "title": "This is AI Podcast Miniseries", "link": "/some" },
            { "title": "This is Digital Podcast", "link": "/some" }
        ]

    },
    
    {
        title: 'careers', link: '/careers', list: [
            { "title": "Careers Home", "link": "/some" },
            { "title": "Search Jobs", "link": "/some" },
            { "title": "Rewards & Benefits", "link": "/some" },
            { "title": "Life at West Monroe", "link": "/some" },
            { "title": "Career Resources", "link": "/some" },
            { "title": "Early Careers", "link": "/some" },
            { "title": "Experienced Professionals", "link": "/some" }
        ]

    }
]

export const heroHeading = `Bring the possible into the present`


export const heroLine = `Where forward thinking meets practical application`

export const cardList = [
    {
        title: 'thinkers',
        link: '/services',
        line: 'A strategy that’s custom-built for your business. We meet you where you’re at on your digital journey.'
    },
    {
        title: 'Doers',
        link: 'how-we-work',
        line: 'We’re problem solvers that thrive on sweat equity. We work side-by-side with you to untangle the most complex problems across people, process, and technology - fast.'
    },
    {
        title: 'Makers',
        link: '/services/products-experiences',
        line: 'We design and build products and experiences that delight users.'
    },
    {
        title: 'Tech flow',
        link: 'how-we-work/',
        line: 'A tailored strategy designed specifically for your business. We align with your current position on the digital journey.'
    },
];

export const homeInfo = [
    'We bring the right people into the room, right from the start.',

    `Changing the way you do business at the pace of changing customer expectations requires all hands on deck: functional, technical, industry & product experts who work collaboratively to create solutions that blend the physical and digital worlds.`
]

export const marqueeImageLinks = [
    "https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/dfo-logo.png?mw=480&mh=480&iar=0&as=1&hash=BD1C47CC31C181A52B382DCF89E282BF",
    "https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/fce_stackedlogo_2019.png?mw=480&mh=480&iar=0&as=1&hash=A87B12D549CA2A78487210C8943C631A",
    "https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/leonardgreenpartnerslogo.png?mw=480&mh=480&iar=0&as=1&hash=D0BD8C210E2119F7299CDF431CC7A8A7",
    "https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/paloaltonetworks_2020_logo.png?mw=480&mh=480&iar=0&as=1&hash=F417B6EA2420FCB0B910A97D6B05C378",
    "https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ted.png?mw=480&mh=480&iar=0&as=1&hash=E6EFAD90232F4BDA1CB1BA07B946CC49",
    "https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/tropicana-brands-group.png?mw=480&mh=480&iar=0&as=1&hash=D0B871B97F5FF9DA37D234F1E335EC94",
    "https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/umpquabank.png?mw=480&mh=480&iar=0&as=1&hash=D2A8B402111A0AE75646B2D9C935238A",
    "https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/ameritaslogo305eaa3012seeklogocom.png?mw=480&mh=480&iar=0&as=1&hash=4AB6587B3B777246B77C8235C92B7355",
    "https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/bakelite_synthetics_logo.png?mw=480&mh=480&iar=0&as=1&hash=FBA410184C0215756BD3104386AEBC43",
];


export const footerSocialLink = [
    { Icon: FaLinkedinIn, link: 'https://www.some.com/' },
    { Icon: FaXTwitter, link: 'https://www.some.com/' },
    { Icon: FaFacebookF, link: 'https://www.some.com/' },
    { Icon: FaInstagram, link: 'https://www.some.com/' },
    { Icon: FaYoutube, link: 'https://www.some.com/' },
]

export const footerBottomLinks = [
    { title: 'contact', link: '/contact' },
    { title: 'offices', link: '/offices' },
    { title: 'privacy policy', link: '/privacy-policy' },
    { title: 'terms of use', link: '/terms-of-use' },
]


export const HomeCarouselData = [
    {

        url: 'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/creatingforimpact_1182x830_1.jpg',
        revenue: '$216M',
        description: 'Modernized a virtual care program to drive patient engagement and generate $216 million in new revenue',
        link: '/client-stories/virtual-care-program-drives-patient-engagement',

    },
    {

        url: 'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/creatingforimpact_2.jpg',
        revenue: '13%',
        description: 'Optimized cost for a PE-backed software company to drive 13% EBITDA improvement',
        link: '/client-stories/assessing-cost-optimization-ebitda-improvement',

    },
    {

        url: 'https://cdn.westmonroe.com/-/media/west-monroe-images/2023-homepage-assets/creatingforimpact_1182x830_3.jpg',
        revenue: '100%',
        description: 'Crafted a plan to help a utility deliver 100% clean energy by 2045',
        link: '/client-stories/puget-sound-energy',

    },
];


export const homeClient = {
    title: 'CLIENT-CENTRIC',
    heading: `We're helping clients achieve their boldest ambitions. Read more about how our clients are redefining their businesses to thrive.`,
    button: {
        title: 'See All Client Stories',
        link: '/client-stories'
    },
    quote: {
        Icon: FaQuoteLeft,
        line: `I think the big difference with West Monroe is it truly feels like you have a strategic partner that helps you think through the end-to-end business flows. They bring a totally different element to what we do in helping us think through both the business as well as the technology.`
    },
    cards: [
        {
            img: 'https://cdn.westmonroe.com/-/media/west-monroe-images/industry-images/healthcare/dental-and-ancillary/vision_glasses_test.jpg?cx=0.51&cy=0.43&cw=768&ch=432&hash=4AE4A42840775119519E7D5AA0254C7E',
            title: `Visionworks boosts productivity by 15% through data analytics
        `, link: '/client-stories'
        },
        {
            img: 'https://cdn.westmonroe.com/-/media/west-monroe-images/client-stories-images/eu_electric_worker.jpg?cx=0.49&cy=0.81&cw=768&ch=432&hash=B65B63C6F633E03405D5E32AD9AFBBDD',
            title: `Energizing Con Edison on the journey from doing digital to being digital`,
            link: '/client-stories'
        },
    ]
}


export const homeFormValidation = {
    fullName: Yup.string().required("Full name is Required"),
    email: Yup.string().required("Email is Required").email("Invalid email address"),
    phone: Yup.string()
        .required("Phone is Required"),
    country: Yup.string().required("Country is Required"),
    city: Yup.string().required("City is Required"),
    jobTitle: Yup.string().required("Job title is Required"),
    comment: Yup.string().required("Comment is Required"),
}


export const officesData = [
    { link: '/chicago', title: 'Chicago', img: 'https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/chicago.jpg?cx=0.26&amp;cy=0.38&amp;cw=1600&amp;ch=1600&amp;hash=0ABDD9F0810872F574DDF23E906849A0', description: 'Our Chicago office, conveniently located in the Loop, is our HQ and where it all began.' },
    { link: '/dallas', title: 'Dallas', img: 'https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/dallas.jpg?cx=0.75&amp;cy=0.68&amp;cw=1600&amp;ch=1600&amp;hash=055BCD16759CF6619C4B9CAA4581699A', description: 'Located at One Arts Plaza in the Dallas Arts District, this office is home base for our operations in the Texas, Oklahoma, Louisiana, and Arkansas area.' },
    { link: '/los-ngeles', title: 'Los Angeles', img: 'https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/losangeles.jpg?cx=0.34&amp;cy=0.61&amp;cw=1600&amp;ch=1600&amp;hash=AFD87C588DE130C45BF95B2D78242B6F', description: 'Located in the rapidly revitalizing downtown business district, our Los Angeles office is the hub of our Southern California operations.' },
    { link: '/minneapolis', title: 'Minneapolis', img: 'https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/losangeles.jpg?cx=0.34&amp;cy=0.61&amp;cw=1600&amp;ch=1600&amp;hash=AFD87C588DE130C45BF95B2D78242B6F', description: 'Our Minneapolis office is located in the North Loop’s Nordic building and includes the firm’s digital product studio, which serves clients nationally.' },
    { link: '/new-york', title: 'New York', img: 'https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/minneapolis.jpg?cx=0.24&amp;cy=0.55&amp;cw=1600&amp;ch=1600&amp;hash=3F542B9E2EBE37543416D0FBB483D9C8', description: 'Our New York office is conveniently located in Midtown Manhattan to serve clients up in the Tri-state area and up and down the East Coast. ' },
    { link: '/san-francisco', title: 'San Francisco', img: 'https://cdn.westmonroe.com/-/media/west-monroe-images/core-brand-images/hero/newyork.jpg?cx=0.5&amp;cy=0.5&amp;cw=1600&amp;ch=1600&amp;hash=12FFDDB828617E92E1E6CCA9D70CA72B', description: 'Located in SoMa, the epicenter of San Francisco’s tech community, this office serves clients in the Bay Area and across Northern California.' }
]

export const aboutOverview = [
    {
        image: "https://cdn.westmonroe.com/-/media/west-monroe-images/industry-images/software-and-high-tech/2020_01_31_wmp_seattle_1739-min.jpg?cx=0.5&cy=0.5&cw=1416&ch=1360&hash=D19834126B953E108000DFD78A8B7501", title: `The Right People, Right From the Start
    `, description: `Changing the way you do business at the pace of rapidly changing customer expectations requires all hands on deck. Our dynamic team includes technical, industry, operational, and product experts who work cross-collaboratively and leverage data to deliver an optimal employee and customer experience.

    We understand your challenges and opportunities are multifaceted—which is why our teams are, too. Define new ways of working, improve customer and employee experience, streamline operations, optimize profitability, expand revenue streams, and better compete in the market—all with one team.`
    },
    {
        image: "https://cdn.westmonroe.com/-/media/west-monroe-images/perspective-images/why-salesforce-should-use-an-ide.png?cx=0.5&cy=0.5&cw=1416&ch=1360&hash=8BE8E6BF6C3726BF39942EDF4EF7F541", title: `Our Promise`, description: `West Monroe is the only digital services firm that connects innovative creators and experienced business advisors to drive value across the digital and physical worlds.

        We apply industry and functional experience, leverage data and technology, and design products and experiences to help companies differentiate, drive value and transform.
        
        People are at the heart of great companies and experiences, so we bring together the brightest minds in innovation and advisory to unlock our clients’ greatest potential.`
    }
]