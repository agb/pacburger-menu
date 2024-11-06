interface rawMenuList {
  label: string;
  href: string;
}

class PacBurgerMenu {
  private menuItems: HTMLLIElement[];

  constructor(rawMenuItems: rawMenuList[]) {
    this.menuItems = this._createMenuItems(rawMenuItems);
    this._createPacBurger();
    this._addStyles();
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
    const pacburgerDiv = document.createElement("div");
    pacburgerDiv.className = "__pacburger";

    const nav = document.createElement("nav");
    nav.className = "active";
    nav.id = "nav";

    const ul = document.createElement("ul") as HTMLUListElement;

    this.menuItems.forEach((li) => {
      ul.appendChild(li);
    });

    const button = document.createElement("button");
    button.className = "icon";
    button.id = "toggle";

    const circleDiv = document.createElement("div");
    circleDiv.className = "circle";

    const pacburgerCircle = document.createElement("div");
    pacburgerCircle.id = "_pacburger__circle";

    const pacburgerTriangle = document.createElement("div");
    pacburgerTriangle.id = "_pacburger__triangle";

    circleDiv.appendChild(pacburgerCircle);
    circleDiv.appendChild(pacburgerTriangle);
    button.appendChild(circleDiv);

    nav.appendChild(ul);
    nav.appendChild(button);
    pacburgerDiv.appendChild(nav);

    document.body.appendChild(pacburgerDiv);
  }

  private async _addStyles(): Promise<void> {
    const response = await fetch("/style.css");
    const styles = await response.text();
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;

    document.head.appendChild(styleSheet);
  }

  private _addToggleEvent(): void {
    const toggle = document.getElementById("toggle");
    const nav = document.getElementById("nav");

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    }
  }
}

const pacburgerList: rawMenuList[] = [
  { label: "#lgsta", href: "#" },
  { label: "#2", href: "#" },
  { label: "#3", href: "#" },
  { label: "#4", href: "#" },
];

new PacBurgerMenu(pacburgerList);
