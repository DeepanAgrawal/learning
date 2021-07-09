import LinkedList from "./LinkedListClass";
class StackLL extends LinkedList {
  constructor() {
    super();
  }
  push(input) {
    this.add(input); //O(n)
  }
  pop() {
    return this.remove("getVal"); //O(n)
  }
  peek() {
    return this.getFrom(this.getLength() - 1); //O(n)
  }
  size() {
    return this.getLength(); //O(1)
  }
}
