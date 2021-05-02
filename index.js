function scuberGreetingForFeet(someValue){
  if (someValue > 2500) {
    return "No can do."
  } else if (someValue > 2000) {
    return "I will gladly take your thirty bucks."
  } else if (someValue => 400){
    return "This one is on me!"
  }
}

function ternaryCheckCity(city){
  let answer
  (city === "NYC") ? (answer = "Ok, sounds good.") : (answer = "No go.");
  return answer
}

function switchOnCharmFromTip(money){
  let answer
  switch(money) {
    case 'generous':
      answer = "Thank you so much."
      break;
      case "not as generous":
        answer = "Thank you."
        break;
        default:
        answer = "Bye." 
        break;
  }
  return answer
  // Write your code here!

  
}