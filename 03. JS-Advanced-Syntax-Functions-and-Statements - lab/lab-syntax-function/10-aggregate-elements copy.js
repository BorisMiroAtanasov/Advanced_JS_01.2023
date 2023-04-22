function aggregateElements(array){

  let data = array.slice();
  let sum = data.reduce((a,b) => a + b);
  let inverse = data.map( x => 1/x).reduce((a,b) => a + b)
  let concatenate = data.join('');
  //console.log(inverse);



  console.log(`${sum}\n${inverse}\n${concatenate}`);

}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
