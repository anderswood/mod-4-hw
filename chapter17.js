console.log('hello world');


//*** Exercise 1: http://eloquentjavascript.net/17_http.html ***//
const acceptFunction = () => {

  let req = new XMLHttpRequest();
  req.open('GET', 'http://eloquentjavascript.net/author', false);
  // req.setRequestHeader('Accept', 'application/json')
  // req.setRequestHeader('Accept', 'text/plain')
  // req.setRequestHeader('Accept', 'text/html')
  req.setRequestHeader('Accept', 'application/rainbows+unicorns')
  req.send(null);
  console.log(req.status, req.statusText);
  console.log(req.response);
  console.log(req.getResponseHeader('content-type'));


  // return fetch('http://eloquentjavascript.net/author',
  //   {
  //     method: 'GET',
  //     headers: {'Accept': 'application/json'}
  //   }
  // )
  // .then(response => response.json())
  // .then(output => console.log(output))
}

// acceptFunction()


//*** Exercise 2: http://eloquentjavascript.net/17_http.html ***//
  const all = (promises) => {
    return new Promise((success, fail) => {
      // Your code here.
    });
  }

  // Test code.
  all([]).then((array) => {
    console.log("This should be []:", array);
  });

  const soon = (val) => {
    return new Promise((success) => {
      setTimeout(() => { success(val); },
                 Math.random() * 500);
    });
  }

  all([soon(1), soon(2), soon(3)]).then((array) => {
    console.log("This should be [1, 2, 3]:", array);
  });

  const fail = () => {
    return new Promise((success, fail) => {
      fail(new Error("boom"));
    });
  }

  all([soon(1), fail(), soon(3)]).then((array) => {
    console.log("We should not get here");
  }, (error) => {
    if (error.message != "boom")
      console.log("Unexpected failure:", error);
  });
