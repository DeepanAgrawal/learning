export class LinkedList {
  constructor() {
    this.listNode = null;
    this.listLength = 0;
  }
  // tested
  add(newVal) {
    let list = this.listNode;
    if (list) {
      while (list.next) {
        list = list.next;
      }
      list.next = {
        val: newVal,
        next: null,
      };
    } else {
      list = {
        val: newVal,
        next: null,
      };
      this.listNode = list;
    }
    this.listLength += 1;
    return this.listNode;
  }

  // tested
  remove(element) {
    let list = this.listNode;
    let length = this.getLength();
    let removedElement;
    if (length === 1) {
        removedElement = null;
      return (this.listNode = null);
    } else if (length > 1) {
      while (list.next) {
        if (list.next.next) {
          list = list.next;
        } else {
            removedElement = list.next.val;
          list.next = null;
          
        }
      }
    }
    if(element){
        return removedElement
    }
    this.listLength -= 1;
    return this.listNode;
  }

  // tested
  iterate() {
    let list = this.listNode;
    while (list && (list.next || list.val)) {
      console.log("list", list.val);
      list = list.next ? list.next : null;
    }
  }

  // tested
  addAt(index, value) {
    let list = this.listNode;
    let counter = 0;
    let temp, tempVal;
    let length = this.getLength();
    if (length < 1) {
      list = {
        val: value,
        next: null,
      };
    }
    // ??
    while (list && list.next) {
      if (counter !== index) {
        list = list.next;
        counter++;
      } else {
        temp = list.next;
        tempVal = list.val;
        list.val = value;
        list.next = {
          val: tempVal,
          next: temp,
        };
        break;
      }
    }
    if (index === counter && !list.next) {
      list.next = {
        val: value,
        next: null,
      };
    }
    if (index > counter) {
      console.log("index out of bound");
    }
    this.listLength += 1;
    return this.listNode;
  }

  // tested
  removeFrom(index,element) {
    let length = this.getLength();
    let removedElement;
    if (index >= length) {
      console.log("Please enter valid index");
      return null;
    } else {
      if (index === 0) {
        removedElement = this.listNode.val;
        return (this.listNode = this.listNode.next);
      } else {
        let node = this.getFrom(index - 1, "node");
        removedElement = node.next.val;
        node.next = node.next.next;
      }
    }
    if(element){
        return this.listNode,removedElement;
    }
    this.listLength -= 1;
    return this.listNode;
  }

  // tested
  contains(value) {
    let list = this.listNode;
    // ??
    while (list && list.next && list.val !== value) {
      list = list.next;
    }
    if (list.val === value) {
      return true;
    } else {
      return false;
    }
  }

  // tested
  getFrom(index, node) {
    let list = this.listNode;
    let counter = 0;
    // ??
    while (list && list.next) {
      if (counter !== index) {
        counter++;
        list = list.next;
      } else {
        if (node) {
          return list;
        } else {
          return list.val;
        }
      }
    }
    if (counter === index && !list.next) {
      if (node) {
        return list;
      } else {
        return list.val;
      }
    }
  }

  // tested
  getLength() {
    return this.listLength;
  }

  printOddandEven() {
    let list = this.listNode;
    let length = this.getLength();
    let oddList;
    let evenList;
    while (list && list.next) {
      evenList = evenList ? evenList + "," + list.val : list.val;
      oddList = oddList ? oddList + "," + list.next.val : list.next.val;
      list = list.next.next;
    }
    if (length % 2 > 0 && list) {
      evenList = evenList ? evenList + "," + list.val : list.val;
    }
    console.log("LENGTH", length);
    console.log("ODD LIST", oddList);
    console.log("EVEN LIST", evenList);
  }

  printOdd() {
    let list = this.listNode;
    let length = this.getLength();
    let oddList;
    while (list && list.next) {
      //   evenList = evenList ? evenList + "," + list.val : list.val;
      oddList = oddList ? oddList + "," + list.next.val : list.next.val;
      list = list.next.next;
    }
    console.log("LENGTH", length);
    console.log("ODD LIST", oddList);
  }

  printEven() {
    let list = this.listNode;
    let length = this.getLength();
    let oddList;
    let evenList;
    while (list && list.next) {
      evenList = evenList ? evenList + "," + list.val : list.val;
      list = list.next.next;
    }
    if (length % 2 > 0 && list) {
      evenList = evenList ? evenList + "," + list.val : list.val;
    }
    console.log("LENGTH", length);
    console.log("EVEN LIST", evenList);
  }

}

//Add
//remove
//iterate
//add at
//remove from
//contains (finds the value and return boolean)
// get from
//length
//handle edge cases

// let list = {
//   val: 3,
//   next: {
//     val: 24,
//     next: {
//       val: 31,
//       next: {
//         val: 5,
//         next: {
//           val: 10,
//           next: null,
//         },
//       },
//     },
//   },
// };

// var c = new LinkedList();
// c.add(1);
// c.add(2);
// c.add(3);
// c.add(4);
// c.add(5);
// c.add(6);
// c.add(7);
// c.iterate();

// var d = new LinkedList();
// d.add(1);
// d.add(2);
// d.add(3);
// d.add(4);
// d.add(5);
// d.add(6);
// d.add(7);
// d.iterate();

1 -> 2 -> 3 -> 4 -> 5

Stack{
    //push
    //pop
    //peek
    //length
}

