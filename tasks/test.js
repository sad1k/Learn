/**
 * @jest-environment jsdom
 */
HTMLElement.prototype.myContains = function (target) {
  if (typeof this === "object" && this !== null) {
    for (let node of this.children) {
      console.log(node);
      if (node == target) {
        return true;
      }
      return node.myContains(target);
    }
  }
  return false;
};

describe("myContains Method Tests", () => {
  let parent, child, nestedChild, unrelatedElement;

  beforeAll(() => {
    document.body.innerHTML = `
        <div id="parent">
            <div id="child">
                <div id="nestedChild"></div>
            </div>
        </div>
        <div id="unrelatedElement"></div>
    `;
    parent = document.getElementById("parent");
    child = document.getElementById("child");
    nestedChild = document.getElementById("nestedChild");
    unrelatedElement = document.getElementById("unrelatedElement");
  });

  test("test myContains with direct or nested child", () => {
    expect(parent.myContains(child)).toBe(true);
    expect(parent.myContains(nestedChild)).toBe(true);
  });

  test("test myContains with non child element", () => {
    expect(parent.myContains(unrelatedElement)).toBe(false);
  });

  test("test myContains with invalid this", () => {
    const invalidThis = null;
    const testFunc = () => {
      return invalidThis.myContains(child);
    };
    expect(testFunc).toThrow(TypeError);
  });
});
