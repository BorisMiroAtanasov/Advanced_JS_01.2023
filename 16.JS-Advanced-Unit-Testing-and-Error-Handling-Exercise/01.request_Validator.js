function requestValidator(object){

    let methodArr = ['GET', 'POST', 'DELETE' , 'CONNECT'];
    let versionArr = ["HTTP/0.9","HTTP/1.0", "HTTP/1.1","HTTP/2.0"]

    let patern = /^[\w.]+$/gm          

   
    let massageRex = /^[^<>\\&'\"]*$/gm;

    
    

    if (!(object.hasOwnProperty('method') &&  methodArr.includes(object.method))){
        throw new Error(`Invalid request header: Invalid Method`);
        
    }
    if(!(object.hasOwnProperty('uri') &&(object.uri === "*" || patern.test(object.uri)))){    
        throw new Error("Invalid request header: Invalid URI");
       
    }

    if( !(object.hasOwnProperty('version') &&  versionArr.includes(object.version))){
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if(!(object.hasOwnProperty('message')&& ( object.message ==='' || massageRex.test(object.message)))){
        throw new Error(`Invalid request header: Invalid Message`);
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