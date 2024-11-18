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
      const li = document.createElement("li") as HTMLLIElement;
      const a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      li.appendChild(a);
      return li;
    });
  }

  private _createPacBurger(): void {
    const ul = document.createElement("ul") as HTMLUListElement;
    const nav = document.createElement("nav");
    const button = document.createElement("button");
    const pacburgerDiv = document.createElement("div");
    const pacmanWrapper = document.createElement("div");
    const pacmanCircle = document.createElement("div");
    const pacmanTriangle = document.createElement("div");

    this.menuItems.forEach((li) => {
      ul.appendChild(li);
    });

    pacburgerDiv.className = this.pacburgerClassPrefix;
    nav.className = `${this.pacburgerClassPrefix}_nav`;
    button.className = `${this.pacburgerClassPrefix}_button_icon`;
    pacmanWrapper.className = `${this.pacburgerClassPrefix}_div_pacman_wrapper`;
    pacmanCircle.className = `${this.pacburgerClassPrefix}_div_pacman_circle`;
    pacmanTriangle.className = `${this.pacburgerClassPrefix}_div_pacman_triangle`;

    pacmanWrapper.appendChild(pacmanCircle);
    pacmanWrapper.appendChild(pacmanTriangle);
    button.appendChild(pacmanWrapper);
    nav.appendChild(ul);
    nav.appendChild(button);
    pacburgerDiv.appendChild(nav);
    document.body.appendChild(pacburgerDiv);
  }

  private _addToggleEvent(): void {
    const toggle = document.getElementsByClassName(
      `${this.pacburgerClassPrefix}_button_icon`
    );
    const nav = document.getElementsByClassName(
      `${this.pacburgerClassPrefix}_nav`
    );

    if (toggle && nav) {
      toggle[0].addEventListener("click", () => {
        nav[0].classList.toggle("active");
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
