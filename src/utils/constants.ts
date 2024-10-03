import { CoffeeFeatures, DeskStats } from "../types";
import { WarrantyStats } from "../types";
import { ComponentStats } from "../types";
import { PersonalStats } from "../types";
import { TableData } from "../types";
import { Testimonials } from "../types";
import { OrderServices } from "../types";

export const IMG_URL: string = "https://ecomposer.app/images/";
export const CLOUDINARY_URL: string = "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-";

export const OPTIONS = [
    { to: "/", value: "landing", label: "Landing Page" },
    { to: "/contact", value: "contact", label: "Contact Us" },
]

export const COFFEE_FEATURES: CoffeeFeatures[] = [
    {
        id: 1,
        title: "Superior Taste",
        description: "Experience coffee like never before with rich, bold flavors and a smooth finish.",
        imageUrl: "Ia5VaL9r8abn-1.png?v=1723601620" // You can replace this with the actual path or URL of the image
    },
    {
        id: 2,
        title: "Convenience at Fingertips",
        description: "With programmable features and quick brew times, enjoy your perfect cup of coffee without the wait.",
        imageUrl: "t4iVUOFHX6bn-c2.png?v=1723602029"
    },
    {
        id: 3,
        title: "Energy Efficient",
        description: "Our coffee makers are designed to be energy-efficient, saving you money on your electricity bills while being eco-friendly.",
        imageUrl: "1ca2N7EfOPbn-c3.png?v=1723602052  "
    }
];


export const WARRANTY_STATS: WarrantyStats[] = [
    {
        iconSrc: "h5765rKSIzft-ic-1.png?v=1723607026",
        title: "1-Year Limited Warranty",
    },
    {
        iconSrc: "m1AWrHYBKKft-ic-2.png?v=1723607142",
        title: "Extended Warranty Options",
    },
    {
        iconSrc: "b8q7zMqLKUft-ic-3.png?v=1723607159",
        title: "Hassle-Free Replacements",
    }
]


export const COMPONENTS_STATS: ComponentStats[] = [
    {
        id: 1,
        title: "Customizable Single Servings",
        description: "Compatible with Keurig K-Cup, other similar pods.",
        imgSrc: "3jVscJPSjOft-cff-1.png?v=1723604954"
    },
    {
        id: 2,
        title: "Fully Automatic",
        description: "24-hour brew start, temperature control, auto off.",
        imgSrc: "0Hw0Dbas33ft-cff-2.png?v=1723605148"
    },
    {
        id: 3,
        title: "12-Cup Brewing",
        description: "Customize with drip-programmable carafe brewing.",
        imgSrc: "Qn0ShNQ8uift-cff-3.png?v=1723605193"
    },
    {
        id: 4,
        title: "Espresso Capsule Brewer",
        description: "Compatible with Nespresso Original Line capsules.",
        imgSrc: "uQtdb3bLKUft-cff-4.png?v=1723605352"
    },
    {
        id: 5,
        title: "Brew Pause Feature",
        description: "Sneak a cup before the full brew cycle is done.",
        imgSrc: "uFHffGBorsft-cff-5.png?v=1723605596"
    },
    {
        id: 6,
        title: "Steam Wand",
        description: "Steam wand whips up cappuccinos and lattes.",
        imgSrc: "toQO4pwSu4ft-cff-6.png?v=1723605417"
    },
]

export const PERSONAL_STATS: PersonalStats[] = [
    {
        id: 1,
        label: "Drip Coffee",
        labelSrc: "et4ncapLwRft-ic-4.png?v=1723609603"
    },
    {
        id: 2,
        label: "Single Serve Coffee",
        labelSrc: "RTOJBFr6Erft-ic-5.png?v=1723609687"
    },
    {
        id: 3,
        label: "Single Serve Nespresso",
        labelSrc: "tTTPZbAWg6ft-ic-6.png?v=1723609723"
    },
    {
        id: 4,
        label: "Streamer/Frother",
        labelSrc: "HMAzIWy2igft-ic-7.png?v=1723609752"
    },
]

export const slides = [
    'https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-cff1.jpg?v=1723622634&width=1946',
    'https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-cff2_700x700.jpg?v=1723622634',
    'https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/main-p-cff3_700x700.jpg?v=1723622634',
];


export const machine_description = [
    'Color: Black',
    'Product Dimensions: 11.88"D x 12.88"W x 16.75"H',
    'Special Feature Milk Frother',
    'Coffee Maker Type Drip Coffee Machine',
]

export const tableData: TableData[] = [
    {
        feature: 'Advanced Brewing Tech',
        ourMaker: true,
        otherMaker1: false,
        otherMaker2: null,
    },
    {
        feature: 'Customizable Settings',
        ourMaker: true,
        otherMaker1: null,
        otherMaker2: false
    },
    {
        feature: 'Sleek Design',
        ourMaker: true,
        otherMaker1: false,
        otherMaker2: null
    },
    {
        feature: 'Durability',
        ourMaker: true,
        otherMaker1: false,
        otherMaker2: false
    },
    {
        feature: 'Money-Back Guarantee',
        ourMaker: true,
        otherMaker1: false,
        otherMaker2: null
    },
    {
        feature: 'Easy to Clean',
        ourMaker: true,
        otherMaker1: null,
        otherMaker2: false
    }
];

export const testimonials: Testimonials[] = [
    {
        text: "This coffee maker has transformed my mornings. The flavor is incredible, and it's so easy to use!",
        name: "Floyd Miles",
        imageSrc: "BwczLOQ3Jmavt-2.png?v=1723683741",
        rating: 5,
    },
    {
        text: "This is the 2nd Cuisinart single serve coffee maker I've purchased. I was able to still find it after all this time.",
        name: "Emiley Johnson",
        imageSrc: "X2eacovkVFavt-3.png?v=1698913203",
        rating: 5,
    }
]

export const ORDER_SERVICES: OrderServices[] = [
    {
        id: 1,
        iconSrc: "Te8cHLsQU8icon-hc-1.png?v=1724405573",
        serviceLabel: "Order Tracking",
        serviceDescription: "log in to check the status of your order.",
        buttonLabel: "Track your order",
    },
    {
        id: 2,
        iconSrc: "Te8cHLsQU8icon-hc-1.png?v=1724405573",
        serviceLabel: "Return & Exchange",
        serviceDescription: "We make it easy to return and exchange styles.",
        buttonLabel: "Start a return",
    },
]

export const HELPDESK_STATS: DeskStats[] = [
    {
        iconSrc: "TSKqG0pC2uic-hp-1.png?v=1724407135",
        deskLabel: "Size Guide",
        deskDescription: "Ensure your customers get the right fit.",
    },
    {
        iconSrc: "ry1vhOiRg8ic-hp-2.png?v=1724407185",
        deskLabel: "Loyalty Program",
        deskDescription: "Offer exclusive rewards",
    },
    {
        iconSrc: "1hx43OngFRic-hp-3.png?v=1724407203",
        deskLabel: "Order & Shipping",
        deskDescription: "Looking for your Order status",
    },
    {
        iconSrc: "JYbi3Qpv20ic-hp-4.png?v=1724634293",
        deskLabel: "Payment & Gift cards",
        deskDescription: "Wonder of what payment we accept?",
    },
    {
        iconSrc: "NcXYj3LOv3ic-hp-5.png?v=1724634338",
        deskLabel: "Discount Codes",
        deskDescription: "Have a discount you like to use?",
    },
    {
        iconSrc: "zO0BfEcTlSic-hp-6.png?v=1724634383",
        deskLabel: "Store Location",
        deskDescription: "Want to find a store near you?",
    },

]

export const ACCORDIAN_ITEMS = [
    {
        label: "How do I join the affiliate program?",
        content: "Simply sign up through our affiliate program page by filling out the registration form. Once approved,you'll receive a unique affiliate link to start promoting our products."
    },
    {
        label: "What commission rates do you offer?",
        content: "We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are available through our website, however there are some that are available exclusively through our retailer partners."
    },
    {
        label: "How and when do I get paid?",
        content: "For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing to rigorous testing and approvals, before they make their way to you and your family."
    },
    {
        label: "What marketing resources are available to affiliates?",
        content: "Our headquarters is in Green Bay, WI. We also have an office in Minneapolis, and a distribution center in Green Bay, WI.",
    }
];

export const QUERY_STATS = [
    {
        iconSrc: "YGrRM9IVGXicon-lc-1.png?v=1724638892",
        queryLabel: "Call",
        queryContent: "012-345-6789",
    },
    {
        iconSrc: "Lv4LCle25Yicon-lc-2.png?v=1724639488",
        queryLabel: "Email",
        queryContent: "Contact Us",
    },
    {
        iconSrc: "nXKveOYRkzicon-lc-3.png?v=1724639522",
        queryLabel: "Chat",
        queryContent: "Chat now",
    },
    {
        iconSrc: "qX7d2R8frVicon-lc-4.png?v=1724639557",
        queryLabel: "Message",
        queryContent: "Support Now",
    }
]