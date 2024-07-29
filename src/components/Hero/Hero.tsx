import styles from "./Hero.module.css";

interface HeroProps {}

export function Hero(props: HeroProps) {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
