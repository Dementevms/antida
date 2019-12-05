function testClass() {
  const obj = document.querySelector('div');
  console.time('timer_1');
  testClassName(obj);
  console.timeEnd('timer_1');
  console.time('timer_2');
  testClassAdd(obj);
  console.timeEnd('timer_2');
}

function testClassName(obj) {
  const callback = (i) => {
    obj.className = `test-class-${i}`;
  };
  iterator(callback);
}

function testClassAdd(obj) {
  const callback = (i) => {
    obj.classList.add(`test-class-${i}`);
  };
  iterator(callback);
}

function iterator(callback) {
  for (let i = 0; i <= 100; i++) {
    callback(i);
  }
}

testClass();
