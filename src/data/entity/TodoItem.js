export function TodoItem(id, title, isDone, priority = 1) {
  this.id = id;
  this.title = title;
  this.isDone = isDone;
  this.priority = priority;
}