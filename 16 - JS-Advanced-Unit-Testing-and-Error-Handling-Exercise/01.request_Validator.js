function requestValidator(object){

    let methodArr = ['GET', 'POST', 'DELETE' , 'CONNECT']

    let patern = /^[\w.]+$/gm          

    let maches = object.uri.match(patern);
    let massageRex = /^[^<>\\&'\"]*$/gm;

    
    

    if (!(object.hasOwnProperty('method') &&  (object.method == 'GET' || object.method == 'POST' || object.method == 'DELETE' || object.method == 'CONNECT'))){
        throw new Error(`Invalid request header: Invalid Method`);
        
    }
    if(!object.hasOwnProperty('uri') || !patern.test(object.uri)){    
        throw new Error(`Invalid request header: URI`);
       
    }

    if( !object.hasOwnProperty('version') || object.version !=='' && ( object.version !== "HTTP/0.9" && object.version !== "HTTP/1.0" && object.version !== "HTTP/1.1" && object.version !== "HTTP/2.0" )){
        throw new Error(`Invalid request header: Version`);
    }

    if(!object.hasOwnProperty('message')  || massageRex.test(object.message)){
        throw new Error(`Invalid request header: Message`);
    }

   return (object);



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