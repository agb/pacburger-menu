import "./style.css";

export interface rawMenuList {
  label: string;
  href: string;
}

export class PacBurgerMenu {
  private menuItems: HTMLLIElement[];
  private pacburgerClassPrefix = "__pacburger";
  private isEating = false;

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
    const toggle = document.querySelector(`.${this.pacburgerClassPrefix}_toggle`) as HTMLElement;
    const nav = document.querySelector(`.${this.pacburgerClassPrefix}_nav`) as HTMLElement;
    const menu = document.querySelector(`.${this.pacburgerClassPrefix}_menu`) as HTMLElement;

    if (toggle && nav && menu) {
      toggle.addEventListener("click", () => {
        if (this.isEating) return;

        if (nav.classList.contains("active")) {
          // Close Sequence
          this._animateClose(toggle, nav, menu);
        } else {
          // Open Sequence
          nav.classList.add("active");
          toggle.classList.add("active");
        }
      });
    }
  }

  private _animateClose(toggle: HTMLElement, nav: HTMLElement, menu: HTMLElement) {
    this.isEating = true;
    nav.classList.add("eating");

    // PHASE 1: SHRINK (Wait for CSS transition)
    // CSS transition for li width is 0.3s. Let's wait 400ms to be safe and ensure layout is settled.
    setTimeout(() => {
      // PHASE 2: EAT
      const menuWidth = menu.offsetWidth;
      const items = menu.querySelectorAll("li");
      const eatDuration = 1000; // 1s

      // Update Toggle Transition for smooth movement
      toggle.style.transition = `transform ${eatDuration}ms linear`;
      toggle.style.transform = `translateX(-${menuWidth + 20}px)`; // Move Left

      // Hide dots sequentially
      const step = eatDuration / items.length;
      items.forEach((item, index) => {
        // Items are 1, 2, 3 (Left to Right). Pacman is at Right.
        // He hits item 3 (index length-1) first.
        const delay = (items.length - 1 - index) * step;
        setTimeout(() => {
           (item as HTMLElement).style.opacity = "0";
        }, delay * 0.8); // Slightly faster than movement to ensure it disappears 'inside' mouth
      });

      // PHASE 3: RETURN
      setTimeout(() => {
        // Eating done. Move back.
        const returnDuration = 500; // 0.5s
        toggle.style.transition = `transform ${returnDuration}ms ease-out`;
        toggle.style.transform = `translateX(0)`; // Return to right

        // PHASE 4: RESET (After return)
        setTimeout(() => {
            nav.classList.remove("active");
            nav.classList.remove("eating");
            toggle.classList.remove("active");
            toggle.style.transition = ""; // Reset transition
            toggle.style.transform = "";

            items.forEach((item) => {
                (item as HTMLElement).style.opacity = "";
            });

            this.isEating = false;
        }, returnDuration);

      }, eatDuration);

    }, 400); // Shrink wait time
  }
}
