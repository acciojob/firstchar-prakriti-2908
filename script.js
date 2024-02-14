function firstChar(text) {
  // your code here
	for(let i=0;i<text.length;i++){
      if(text.charAt(i)!=" "){
          return text.charAt(i);
      }
  }
  let ans = "";
  return ans;
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
