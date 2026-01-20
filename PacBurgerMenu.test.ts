import { PacBurgerMenu } from "./PacBurgerMenu";

describe("PacBurgerMenu", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("should render the pacburger menu", () => {
    const menuItems = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ];
    new PacBurgerMenu(menuItems);

    const wrapper = document.querySelector(".__pacburger");
    expect(wrapper).toBeTruthy();

    const links = document.querySelectorAll(".__pacburger_menu a");
    expect(links.length).toBe(2);
    expect(links[0].textContent).toBe("Home");
  });

  test("should toggle active class on click", () => {
    const menuItems = [{ label: "Home", href: "/" }];
    new PacBurgerMenu(menuItems);

    const toggle = document.querySelector(".__pacburger_toggle") as HTMLElement;
    const nav = document.querySelector(".__pacburger_nav") as HTMLElement;

    // 1. Click to Open
    toggle.click();
    expect(nav.classList.contains("active")).toBe(true);

    // 2. Click to Close (trigger animation)
    toggle.click();

    // Immediately after click, it should be in eating mode
    expect(nav.classList.contains("eating")).toBe(true);
    expect(nav.classList.contains("active")).toBe(true); // Still active during anim

    // Advance time past Shrink (400ms) and Eat (1000ms) and Return (500ms) = 1900ms
    jest.advanceTimersByTime(2000);

    // Now it should be closed
    expect(nav.classList.contains("active")).toBe(false);
    expect(nav.classList.contains("eating")).toBe(false);
  });
});
