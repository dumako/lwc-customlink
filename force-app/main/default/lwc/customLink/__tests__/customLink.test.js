import { createElement } from "lwc";
import CustomLink from "c/customLink";

describe("c-custom-link", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("displays unit status with default unitNumber", () => {
    const element = createElement("c-custom-link", {
      is: CustomLink
    });
    expect(element.unitNumber).toBe(5);
    // Add the element to the jsdom instance
    document.body.appendChild(element);
    // Verify displayed greeting
    const div = element.shadowRoot.querySelector("div");
    expect(div.textContent).toBe("Unit 5 alive!");
  });
});
