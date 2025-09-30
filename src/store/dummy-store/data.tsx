export type Category = "bouquet" | "wedding" | "event";

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: Category;
  cover: string;
  images?: string[];
  description?: string;
  couple?: string;
  location?: string;
  date?: string;
  palette?: string[];
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "1",
    slug: "anna-and-mike",
    title: "Anna & Mike Wedding",
    category: "wedding",
    cover: "/images/wedding/img11.JPG",
    images: [
      "/images/wedding/img1.JPG",
      "/images/wedding/img6.JPG",
      "/images/wedding/img7.JPG",
      "/images/wedding/img8.JPG",
      "/images/wedding/img9.JPG",
      "/images/wedding/img10.JPG",
      "/images/wedding/img11.JPG",
      "/images/wedding/img12.JPG",
      "/images/wedding/img13.JPG",
      "/images/wedding/img14.JPG",
      "/images/wedding/img15.JPG",
      "/images/wedding/img16.JPG",
      "/images/wedding/img17.JPG",
      "/images/wedding/img18.JPG",
      "/images/wedding/img19.JPG",
      "/images/wedding/img20.JPG",
      "/images/wedding/img21.JPG",
      "/images/wedding/img22.JPG",
      "/images/wedding/img23.JPG",
      "/images/wedding/img24.JPG",
      "/images/wedding/img25.JPG",
    ],
    description: "Elegant whites and greens with airy textures.",

  },

  {
    id: "2",
    slug: "elegant-bouquet",
    title: "Elegant Bouquet",
    category: "bouquet",
    cover: "/images/bouquet/img7.jpg",
    images: [
      "/images/bouquet/img.JPG",
      "/images/bouquet/img2.jpg",
      "/images/bouquet/img3.jpg",
      "/images/bouquet/img4.jpg",
      "/images/bouquet/img5.jpg",
      "/images/bouquet/img7.jpg",
    ],
    description: "A timeless bouquet with soft textures and elegant colors.",
  },

  {
    id: "3",
    slug: "baby-shower",
    title: "Baby Shower Celebration",
    category: "event",
    cover: "/images/baby-shower/IMG78.JPG",
    images: [
      "/images/baby-shower/IMG.JPG",
      "/images/baby-shower/IMG1.JPG",
      "/images/baby-shower/IMG2.JPG",
      "/images/baby-shower/IMG3.JPG",
      "/images/baby-shower/IMG4.JPG",
      "/images/baby-shower/IMG5.JPG",
      "/images/baby-shower/IMG6.JPG",
      "/images/baby-shower/IMG7.JPG",
      "/images/baby-shower/IMG9.JPG",
      "/images/baby-shower/IMG10.JPG",
      "/images/baby-shower/IMG11.JPG",
      "/images/baby-shower/IMG12.JPG",
      "/images/baby-shower/IMG13.JPG",
      "/images/baby-shower/IMG14.JPG",
      "/images/baby-shower/IMG78.JPG",
    ],
    description: "Yellow and purple florals and decorations for a cheerful celebration.",
  },
  {
    id: "4",
    slug: "flower-in-baskets",
    title: "Flower in Baskets",
    category: "bouquet",
    cover: "/images/bouquet1.jpeg",
    description: "Beautifully arranged baskets for all occasions.",
  },

  {
    id: "5",
    slug: "birthday-party",
    title: "Birthday Party",
    category: "event",
    cover: "/images/birthday/img11.jpg",
    images: [
      "/images/birthday/img.jpg",
      "/images/birthday/img1.jpg",
      "/images/birthday/img2.jpg",
      "/images/birthday/img3.jpg",
      "/images/birthday/img4.jpg",
      "/images/birthday/img5.jpg",
      "/images/birthday/img6.jpg",
      "/images/birthday/img7.jpg",
      "/images/birthday/img8.jpg",
      "/images/birthday/img9.jpg",
      "/images/birthday/img10.jpg",
      "/images/birthday/img11.jpg",
      "/images/birthday/img12.jpg",
      "/images/birthday/img13.jpg",
      "/images/birthday/img14.jpg",
      "/images/birthday/img15.jpg",
      "/images/birthday/img16.jpg",
      "/images/birthday/img17.jpg",
      "/images/birthday/img18.jpg",
      "/images/birthday/img19.jpg",
      "/images/birthday/img20.jpg",
      "/images/birthday/img21.jpg",
      "/images/birthday/img22.jpg",
    ],
    description: "Joyful birthday celebration with colorful arrangements.",
  },
  {
    id: "6",
    slug: "workshop",
    title: "Floral Workshop",
    category: "event",
    cover: "/images/workShop/photo-63.jpg",
    images: [
      "/images/workShop/photo-50.jpg",
      "/images/workShop/photo-51.jpg",
      "/images/workShop/photo-52.jpg",
      "/images/workShop/photo-69.jpg",
      "/images/workShop/photo-70.jpg",
      "/images/workShop/photo-133.jpg",
      "/images/workShop/photo-137.jpg",
      "/images/workShop/photo-63.jpg",
    ],
    description: "Hands-on floral arrangement workshop for enthusiasts.",
  }

];