import { PacBurgerMenu, rawMenuList } from "./PacBurgerMenu";
import "./style.css";

const pacburgerList: rawMenuList[] = [
  { label: "Portfolio", href: "https://agb.github.io/portfolio" },
  { label: "Behance", href: "https://behance.com/agokselb" },
  { label: "Github", href: "https://github.com/agb" },
];

new PacBurgerMenu(pacburgerList);
