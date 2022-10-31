class MyArray {
  constructor(self = []) {
    this.self = self;
  }

  forEach(fn) {
    for (let i = 0; i < this.self.length; i++) {
      const element = this.self[i];
      fn(element, i);
    }
  }

  map(fn) {
    const output = [];
    for (let i = 0; i < this.self.length; i++) {
      const element = this.self[i];
      const newElement = fn(element, i);
      output.push(newElement);
    }
    return output;
  }

  filter(fn) {
    const output = [];
    for (let i = 0; i < this.self.length; i++) {
      const element = this.self[i];
      if (fn(element, i)) {
        output.push(element);
      }
    }
    return output;
  }

  reduce(fn, start) {
    let acc = start;
    for (let i = 0; i < this.self.length; i++) {
      const element = this.self[i];
      acc = fn(acc, element, i); // Update accumulator
    }
    return acc;
  }
}

const foo = new MyArray(["hello", "goodbye", "see ya"]);

foo.map((elem) => elem.length);

const reduceFn = (acc, elem) => {
  if (elem.length > acc.length){
    return elem;
  }else {
    return acc;
  }
}

const bar = foo.reduce(reduceFn, "hello");

// Conditional Ternary Operator
/*
const bar = foo.reduce(
  (acc, elem) => (elem.length > acc.length ? elem : acc),
  "hello"
);
*/
