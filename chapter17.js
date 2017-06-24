console.log('hello world');

const acceptFunction = () => {

  let req = new XMLHttpRequest();
  // req.open('GET', 'http://eloquentjavascript.net/author', false);
  // // req.setRequestHeader('Accept', 'application/json')
  // // req.setRequestHeader('Accept', 'text/plain')
  // req.setRequestHeader('Accept', 'text/html')
  // req.send(null);
  // console.log(req.status, req.statusText);
  // console.log(req.response);
  // console.log(req.getResponseHeader('content-type'));


  return fetch('http://eloquentjavascript.net/author',
    {
      method: 'GET',
      headers: {'Accept': 'application/json'}
    }
  )
  .then(response => response.json())
  .then(output => console.log(output))
}

acceptFunction()
