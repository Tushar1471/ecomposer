export interface CoffeeFeatures {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

export interface WarrantyStats {
    iconSrc: string;
    title: string;
}

export interface ComponentStats {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
}

export interface PersonalStats {
    id: number;
    label: string;
    labelSrc: string;
}

export interface TableData {
    feature: string;
    ourMaker: boolean;
    otherMaker1: boolean | null;
    otherMaker2: boolean | null;
}

export interface Testimonials {
    text: string;
    name: string;
    imageSrc: string;
    rating: number;
}

export interface OrderServices {
    id: number;
    iconSrc: string;
    serviceLabel: string;
    serviceDescription: string;
    buttonLabel: string;
}

export interface DeskStats{
    iconSrc:string;
    deskLabel:string;
    deskDescription:string
}