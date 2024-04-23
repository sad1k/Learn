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

    test("test_myContains_with_direct_or_nested_child", () => {
      expect(parent.myContains(child)).toBe(true);
      expect(parent.myContains(nestedChild)).toBe(true);
    });

    test("test_myContains_with_non_child_element", () => {
      expect(parent.myContains(unrelatedElement)).toBe(false);
    });

    test("test_myContains_with_invalid_this", () => {
      const invalidThis = null;
      const testFunc = () => {
        return invalidThis.myContains(child);
      };
      expect(testFunc).toThrow(TypeError);
    });
  });