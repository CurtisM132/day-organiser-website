/**
 * Object to represent a task
 */
export default class Task {
  constructor(id, title, completed, repeatable) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.repeatable = repeatable;
  }

  toPlainObject() {
    return Object.freeze({
      id: [this.id],
      title: [this.title],
      completed: [this.completed],
      repeatable: [this.repeatable],
    })
  }
}
