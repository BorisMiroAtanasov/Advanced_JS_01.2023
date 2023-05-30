function requestValidator(object){

    let patern = /^[\w.]+$/gm          ///([a-z.0-9]+)/gm;

    let maches = object.uri.match(patern);

    
    

    if (object.method !== 'GET' && object.method !== 'POST' && object.method !== 'DELETE' && object.method !== 'CONNECT' ){
        console.log(`Invalid request header: Invalid Method`);
        
    }
    if(!patern.test(object.uri)){    
        console.log(`Invalid request header: URI`);
       
    }



}

   
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  });

requestValidator({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
});