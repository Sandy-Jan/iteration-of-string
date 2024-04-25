let s = " sandip "

function iterateString(s:string):void{
      for(let i = 0; i < s.length; i++){
            for(let j = 0; j < s.length; j++){
                  console.log(s.substring(i, j+1));
                  
            }
      }
}
iterateString(s)