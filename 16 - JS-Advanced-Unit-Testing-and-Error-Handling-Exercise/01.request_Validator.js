function requestValidator(object){

    let patern = /([a-z.0-9]+)/gm;

    let maches = object.uri.match(patern);

    console.log(maches);
    

    if (object.method !== 'GET' && object.method !== 'POST' && object.method !== 'DELETE' && object.method !== 'CONNECT' ){
        console.log(`Invalid request header: Invalid Method`);
    }else if(object.uri !== 1){    
       
        

    }



}

   
requestValidator({
  method: 'GET',
  uri: '%appdata%',
  version: 'HTTP/1.1',
  message: ''
});

requestValidator({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
});