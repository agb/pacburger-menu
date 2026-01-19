import "./style.css";

interface rawMenuList {
  label: string;
  href: string;
}

class PacBurgerMenu {
  private menuItems: HTMLLIElement[];
  private pacburgerClassPrefix = "__pacburger";

  constructor(rawMenuItems: rawMenuList[]) {
    this.menuItems = this._createMenuItems(rawMenuItems);
    this._createPacBurger();
    this._addToggleEvent();
  }

  private _createMenuItems(items: rawMenuList[]): HTMLLIElement[] {
    return items.map((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      li.appendChild(a);
      return li;
    });
  }

  private _createPacBurger(): void {
    const wrapper = document.createElement("div");
    wrapper.className = this.pacburgerClassPrefix;

    const nav = document.createElement("nav");
    nav.className = `${this.pacburgerClassPrefix}_nav`;

    const button = document.createElement("button");
    button.className = `${this.pacburgerClassPrefix}_toggle`;
    button.setAttribute("aria-label", "Toggle navigation");

    // Create 3 bars for the hamburger icon
    const barTop = document.createElement("span");
    const barMiddle = document.createElement("span");
    const barBottom = document.createElement("span");

    barTop.className = "bar top";
    barMiddle.className = "bar middle";
    barBottom.className = "bar bottom";

    button.appendChild(barTop);
    button.appendChild(barMiddle);
    button.appendChild(barBottom);

    const ul = document.createElement("ul");
    ul.className = `${this.pacburgerClassPrefix}_menu`;

    this.menuItems.forEach((li) => {
      ul.appendChild(li);
    });

    nav.appendChild(button);
    nav.appendChild(ul);
    wrapper.appendChild(nav);
    document.body.appendChild(wrapper);
  }

  private _addToggleEvent(): void {
    const toggle = document.querySelector(`.${this.pacburgerClassPrefix}_toggle`);
    const nav = document.querySelector(`.${this.pacburgerClassPrefix}_nav`);

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        toggle.classList.toggle("active");
      });
    }
  }
}

const pacburgerList: rawMenuList[] = [
  { label: "Portfolio", href: "https://agb.github.io/portfolio" },
  { label: "Behance", href: "https://behance.com/agokselb" },
  { label: "Github", href: "https://github.com/agb" },
];

new PacBurgerMenu(pacburgerList);
