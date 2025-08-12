import { IProduct } from "@/types";

export const user = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/placeholder.svg?height=32&width=32",
};

export const navigationItems = [
  { href: "/", label: "home" },
  { href: "/shop", label: "shop" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export const BrowseRangeData = [{
  title: "Dining  ",
  href: "/",
  imageSrc: "/home/1.png",
},
{
  title: "Living",
  href: "/",
  imageSrc: "/home/2.png",
},
{
  title: "Bedroom",
  href: "/",
  imageSrc: "/home/3.png",
}
]
export const ProductsData: IProduct[] = [
  {
    id: 1,
    title: "Iced Latte",
    description: "Cold espresso with fresh milk and ice.",
    price: 3.99,
    label: "sale",
    category: "Drinks",
    oldPrice: 4.99,
    image: "/home/products/1.png",
    inStock: true
  },
  {
    id: 2,
    title: "Cappuccino",
    description: "Hot espresso with steamed milk foam.",
    price: 4.49,
    category: "Drinks",
    image: "/home/products/2.png",
    inStock: true
  },
  {
    id: 3,
    title: "Chocolate Cake",
    description: "Rich chocolate sponge cake with cream.",
    price: 5.99,
    category: "Desserts",
    image: "/home/products/3.png",
    inStock: false
  },
  {
    id: 4,
    title: "Cheesecake",
    description: "Creamy cheesecake with strawberry topping.",
    price: 6.49,
    label: "new",
    category: "Desserts",
    image: "/home/products/4.png",
    inStock: true
  },
  {
    id: 5,
    title: "Club Sandwich",
    description: "Triple-layer sandwich with chicken, cheese, and lettuce.",
    price: 7.99,
    category: "Snacks",
    image: "/home/products/5.png",
    inStock: true
  },
  {
    id: 6,
    title: "French Fries",
    description: "Crispy golden potato fries.",
    price: 2.49,
    label: "new",
    category: "Snacks",
    image: "/home/products/6.png",
    inStock: false
  },
  {
    id: 7,
    title: "Fresh Orange Juice",
    description: "100% pure fresh orange juice.",
    price: 3.49,
    label: "sale",
    oldPrice: 4.99,

    category: "Drinks",
    image: "/home/products/7.png",
    inStock: true
  },
  {
    id: 8,
    title: "Veggie Pizza",
    description: "Thin crust pizza with fresh vegetables.",
    price: 8.99,
    category: "Main Course",
    image: "/home/products/8.png",
    inStock: true
  },
  {
    id: 9,
    title: "Grilled Chicken",
    description: "Juicy grilled chicken breast with herbs.",
    price: 9.49,
    category: "Main Course",
    image: "/home/products/9.png",
    inStock: false
  },
  {
    id: 10,
    title: "Vanilla Milkshake",
    description: "Cold and creamy vanilla milkshake.",
    price: 4.29,
    label: "new",
    category: "Drinks",
    image: "/home/products/2.png",
    inStock: true
  },
  {
    id: 11,
    title: "Iced Latte",
    description: "Cold espresso with fresh milk and ice.",
    price: 3.99,
    label: "sale",
    category: "Drinks",
    oldPrice: 4.99,
    image: "/home/products/1.png",
    inStock: true
  },
  {
    id: 12,
    title: "Cappuccino",
    description: "Hot espresso with steamed milk foam.",
    price: 4.49,
    category: "Drinks",
    image: "/home/products/2.png",
    inStock: true
  },
  {
    id: 13,
    title: "Chocolate Cake",
    description: "Rich chocolate sponge cake with cream.",
    price: 5.99,
    category: "Desserts",
    image: "/home/products/3.png",
    inStock: false
  },
  {
    id: 14,
    title: "Cheesecake",
    description: "Creamy cheesecake with strawberry topping.",
    price: 6.49,
    label: "new",
    category: "Desserts",
    image: "/home/products/4.png",
    inStock: true
  },
  {
    id: 15,
    title: "Club Sandwich",
    description: "Triple-layer sandwich with chicken, cheese, and lettuce.",
    price: 7.99,
    category: "Snacks",
    image: "/home/products/5.png",
    inStock: true
  },
  {
    id: 16,
    title: "French Fries",
    description: "Crispy golden potato fries.",
    price: 2.49,
    label: "new",
    category: "Snacks",
    image: "/home/products/6.png",
    inStock: false
  },
  {
    id: 17,
    title: "Fresh Orange Juice",
    description: "100% pure fresh orange juice.",
    price: 3.49,
    label: "sale",
    oldPrice: 4.99,

    category: "Drinks",
    image: "/home/products/7.png",
    inStock: true
  },
  {
    id: 18,
    title: "Veggie Pizza",
    description: "Thin crust pizza with fresh vegetables.",
    price: 8.99,
    category: "Main Course",
    image: "/home/products/8.png",
    inStock: true
  },
  {
    id: 19,
    title: "Grilled Chicken",
    description: "Juicy grilled chicken breast with herbs.",
    price: 9.49,
    category: "Main Course",
    image: "/home/products/9.png",
    inStock: false
  },
  {
    id: 20,
    title: "Vanilla Milkshake",
    description: "Cold and creamy vanilla milkshake.",
    price: 4.29,
    label: "new",
    category: "Drinks",
    image: "/home/products/2.png",
    inStock: true
  }
];
