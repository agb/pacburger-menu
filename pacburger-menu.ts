class PacBurgerMenu {
  private menuItems: HTMLLIElement[];

  constructor(menuItems: { label: string; href: string }[]) {
    this.menuItems = this._createMenuItems(menuItems);
    this._createPacBurger();
    this._addStyles();
    this._addToggleEvent();
  }

  private _createMenuItems(
    items: { label: string; href: string }[]
  ): HTMLLIElement[] {
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
    pacburgerDiv.className = "pacburger";

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

  private _addStyles(): void {
    const styles = `.icon,.pacburger{justify-content:center}#_pacburger__circle,#_pacburger__triangle,.circle{width:1.5rem;height:1.5rem}body,nav ul,ul{margin:0}nav,nav ul{transition:width 1s linear}a,nav ul a{color:#000;text-decoration:none}.icon,nav ul,ul{padding:0}.circle,.icon,nav ul a{position:relative}.pacburger{display:flex}.active{display:block}.circle,.icon,body,nav,nav ul{display:flex}#nav{background-color:#fff;padding:1rem;border-radius:.5rem}ul{list-style:none}li{margin:.5rem 0}.icon{align-items:center;background:0 0}.circle{background-color:#fbbf24;border-radius:50%;justify-content:center;align-items:center}#_pacburger__circle{background-color:#fcd34d;border-radius:50%;position:absolute}#_pacburger__triangle,.icon,nav{background-color:#fff}#_pacburger__triangle{transform:rotate(45deg);margin-left:-2rem;position:absolute;z-index:10}@keyframes growShrink{0%,100%{height:0}50%{height:24px}}body{font-family:Muli,sans-serif;align-items:center;justify-content:center;height:100vh}nav{padding:20px;width:80px;align-items:center;justify-content:center;border-radius:3px;box-shadow:0 2px 5px rgba(0,0,0,.3);overflow-x:hidden}nav.active{width:350px}nav ul{list-style-type:none;width:0}nav.active ul{width:100%}nav ul li{transform:rotateY(0);opacity:0;transition:transform 2s linear,opacity 1s linear}nav.active ul li{opacity:1;transform:rotateY(360deg)}nav ul a{margin:0 10px}.icon{border:0;cursor:pointer;height:30px;width:30px}.icon:focus{outline:0}.icon .line{background-color:#000;height:2px;width:20px;position:absolute;top:10px;left:5px;transition:transform 2s linear}.icon .line2{top:auto;bottom:10px}nav.active .icon .line1{transform:rotate(-765deg) translateY(5.5px)}nav.active .icon .line2{transform:rotate(765deg) translateY(-5.5px)}nav:not(.active) #_pacburger__triangle{animation:.8s infinite growShrink}`;

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

const pacburgerList = [
  { label: "#lgsta", href: "#" },
  { label: "#2", href: "#" },
  { label: "#3", href: "#" },
  { label: "#4", href: "#" },
];

new PacBurgerMenu(pacburgerList);
