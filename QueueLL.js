import LinkedList from "./LinkedListClass";
class QueueLL extends LinkedList {
  constructor() {
    super();
  }
  push(input) {
    this.add(input); //O(n)
  }
  pop() {
    return this.removeFrom(0, "getVal"); //O(1)
  }
  peek() {
    return this.getFrom(0); //O(1)
  }
  size() {
    return this.getLength(); //O(1)
  }
}
