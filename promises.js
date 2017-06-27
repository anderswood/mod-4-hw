
//EXERCISE 2
//*** from: https://gist.github.com/robbiejaeger/dc8f55c1f9462741090862f736b82cab ***//
const inputArr = ['carrot', 'kangaroo', 'kalamazoo', 'blue']

const makeAllCaps = (input) => {
  let validated = input.map(elem => {
    return typeof elem === 'string' ? elem.toUpperCase() : null
  })

  return new Promise((resolve, reject) => {
    if(!validated.includes(null)) {
      resolve(validated)
    }
    else {
      reject('some non-string elements!')
    }
  })
}

const sortWords = (upperCaseArr) => {
  return new Promise ((resolve, reject) => {
    if(upperCaseArr){
      resolve(upperCaseArr.sort())
    } else {
      reject('oops')
    }
  })
}

makeAllCaps(inputArr)
  .then(result => sortWords(result))
  .then(result => console.log(result))
  .catch(error => console.log(error))


//EXERCISE 1
//*** from: https://gist.github.com/robbiejaeger/dc8f55c1f9462741090862f736b82cab ***//
const testNum = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + " is greater than 10, you're wikid smaht")
    }
    else {
      reject(num + ' is less than 10, go home')
    }
  })

}

testNum(12)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// //*** from: https://davidwalsh.name/promises ***//
// let req1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('first!'), 2000);
// })
//
// let req2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('second!'), 1000);
// })
//
// Promise.all([req1, req2])
//   .then( results => console.log('then:', results))
//   .catch( err => console.log('error:', err))


// const get = (url) => {
//   return new Promise((resolve, reject) => {
//     let req = new XMLHttpRequest();
//
//     req.open('GET', url);
//
//     req.onload = () => {
//       if (req.status === 200) {
//         resolve(req.response)
//       }
//       else {
//         reject(Error(req.statusText))
//       }
//     }
//
//     req.onerror = () => {
//       reject(Error('Network Error'));
//     }
//
//     req.send()
//   });
//
// }
//
// get('http://eloquentjavascript.net/author').then(
//   response => {console.log('Success!', response)},
//   response => {console.log('FAIL', error)}
// )



// //*** from https://gist.github.com/robbiejaeger/dc8f55c1f9462741090862f736b82cab ***//
// const testNum = (num, lessThan, greaterThan) => {
//   if (num < 10) {
//     lessThan("less than 10")
//   } else {
//     greaterThan("greater than 10")
//   }
// }
//
// testNum(12, result => console.log(result), result => console.log(result))
