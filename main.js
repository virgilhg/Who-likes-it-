/*  Challenge solution is incomplete. 
Challenge was time-restricted, but with more time, I would account for... I'd calculate the remaining names in the array to display it as others. If the array has 4 or more items, I'd manage empty or false arrays appropriately.*/

function likes(names) {
  if(names.length=== 1){
     return `${names[0]} likes this`
  }
  else if(names.length=== 2){
     return `${names[0]} and ${names[1]} like this`
  }
  else if(names.length=== 3){
     return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else if(names.length=== 4){
     return `${names[0]}, ${names[1]} and  others like this`
  }
  else {
     return "no one likes this"
  }
}
