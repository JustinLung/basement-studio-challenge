import { Item, ItemProps } from "../Item/Item";

interface ShopProps {
  items: ItemProps[];
}

export const shopItems = [
  {
    title: "Black T-shirt",
    alt: "Basement Studio T-Shirt",
    src: "/images/shirt.png",
    price: 7.95,
  },
  {
    title: "Black hoodie",
    alt: "Basement Studio Hoodie",
    src: "/images/hoodie.png",
    price: 13,
  },
  {
    title: "Cap",
    alt: "Basement Studio Cap",
    src: "/images/cap.png",
    price: 13,
  },
];

export function Shop({ items }: ShopProps) {
  return (
    <section className="flex flex-col md:flex-row gap-[32px]">
      {items.map((item, i) => (
        <Item
          key={i}
          title={item.title}
          alt={item.alt}
          src={item.src}
          price={item.price}
        />
      ))}
    </section>
  );
}
