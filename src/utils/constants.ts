import { CoffeeFeatures } from "../types";
import { WarrantyStats } from "../types";
import { ComponentStats } from "../types";
import { PersonalStats } from "../types";

export const IMG_URL: string = "https://ecomposer.app/images/";
export const CLOUDINARY_URL: string = "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-";

export const OPTIONS = [
    { value: "landing", label: "Landing Page" },
    { value: "contact", label: "Contact Us" },
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
        description: "Compatible with Nespresso OriginalLine capsules.",
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
