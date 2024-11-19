export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    image: string;
    imagebig: string;
    category: 'bestsellers' | 'recommended';
    desc: string;
    publish: string;
    brand: string;
    series: string;
    year: number;
    pages: number;
    cover: string;
    edition: number;
    age: string;
}
