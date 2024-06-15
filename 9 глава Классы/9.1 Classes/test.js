const ExecutingTask = require("../9.2 Наследование");
const Vector = require("./Index");

describe("Test class Vector", () => {
  test("Vector created and toString work correctly", () => {
    expect(new Vector(1, 2, 3).toString()).toBe("Vector(1,2,3)");
  });

  test("Vector created correctly", () => {
    expect(new Vector(1, 2, 3)).toEqual({ x: 1, y: 2, z: 3 });
  });

  test("Vector length", () => {
    expect(new Vector(1, 2, 3).length).toBeCloseTo(3.74);
  });
  test("Vector scalar test", () => {
    expect(new Vector(1, 2, 3).scalar(new Vector(4, 5, 6))).toBe(32);
  });

  test("vector plus", () => {
    expect(new Vector(1, 2, 3).plus(new Vector(4, 5, 6))).toEqual({
      x: 5,
      y: 7,
      z: 9,
    });
  });

  it("should create an instance with valid inputs", () => {
    const task = new ExecutingTask(
      "Task 1",
      "Description 1",
      "2023-01-01",
      "2023-01-10",
      50,
      false
    );
    expect(task.name).toBe("Task 1");
    expect(task.description).toBe("Description 1");
    expect(task.dateStart).toBe("2023-01-01");
    expect(task.dateEnd).toBe("2023-01-10");
    expect(task.completeProgress).toBe(50);
    expect(task.done).toBe(false);
  });
  // Creating an instance with missing parameters
  it("should throw an error when parameters are missing", () => {
    expect(() => {
      new ExecutingTask("Task 2", "Description 2");
    }).toThrow();
  });

  // Updating progress and checking the updated value
  it("should update progress and check the updated value", () => {
    const task = new ExecutingTask(
      "Task 1",
      "Description 1",
      "2023-01-01",
      "2023-01-10",
      50,
      false
    );
    task.completeProgress = 75;
    expect(task.completeProgress).toBe(75);
  });

  // Ensuring task name uniqueness if required
  it("should ensure task name uniqueness", () => {
    const task1 = new ExecutingTask(
      "Task 1",
      "Description 1",
      "2023-01-01",
      "2023-01-10",
      50,
      false
    );
    const task2 = new ExecutingTask(
      "Task 1",
      "Description 2",
      "2023-01-02",
      "2023-01-11",
      75,
      true
    );
    expect(task1.name).toBe("Task 1");
    expect(task2.name).toBe("Task 1");
  });
});
