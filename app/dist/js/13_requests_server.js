console.groupCollapsed('===>    REQUESTS TO THE SERVER. FETCH, XMLHttpRequest (XHR)');

/////////////////////////////////////////////////////////////////
// Server for JSON:   http://jsonplaceholder.typicode.com/    //
///////////////////////////////////////////////////////////////

const requestURL = 'http://jsonplaceholder.typicode.com/users';

// -----
// XMLHttpRequest
console.groupCollapsed('XMLHttpRequest (XHR)');

const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);

xhr.responseType = 'json'; // OR parse the response ( JSON.parse(xhr.response) )

let responseXHR = {};
xhr.onload = ()=>{
  if(xhr.status >= 400){
    //console.error(xhr.response);  // NOTE: commented out for normal output of subsequent scripts
  }else{
    //console.log(xhr.response);    // NOTE: commented out for normal output of subsequent scripts
  }
  
  responseXHR = xhr.response;
  // console.log('XMLHttpRequest:: GET: ', responseXHR); // NOTE: commented out for normal output of subsequent scripts
}

xhr.onerror = () => console.error(xhr.response);
xhr.send();

////////////////////////////////////
// the same is true through promise

function sendRequest(method, url, body = null){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
  
    xhr.responseType = 'json'; // OR parse the response ( JSON.parse(xhr.response) )
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = ()=>{
      if(xhr.status >= 400){
        reject(xhr.response);
      }else{
        resolve(xhr.response);
      }
    }
    xhr.onerror = () => reject(xhr.response);
    
    xhr.send(JSON.stringify(body));
  })
}

// NOTE: commented out for normal output of subsequent scripts
//sendRequest('GET', requestURL)
// .then(data=> console.log(data))
// .catch(err => console.error(err));

//sendRequest('POST', requestURL, {name:'Igor', age:20})
//  .then(data=> console.log(data))
//  .catch(err => console.error(err));

// End group XMLHttpRequest
console.groupEnd();



// -----
// Fetch
console.groupCollapsed('Fetch');

function sendRequestFetch (method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }
  
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }
    
    return response.json().then(error => {
      const e = new Error('Something went wrong!')
      e.data  = error
      throw e
    })
  })
}

// End group Fetch
console.groupEnd();

console.groupEnd();