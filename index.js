var katzDeli= [];
function takeANumber (katzDeli, name) {

    katzDeli.push (`${name}`);
    return ("Welcome, " + name + ". You are number " + katzDeli.length + " in line.")

}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length===0) {
  return "There is nobody waiting to be served!"}
  else { return "Currently serving " + katzDeliLine.shift(katzDeliLine[0])+"."
}
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
var string = `The line is currently: 1. ${katzDeliLine [0]}`
for (var i =1; i<katzDeliLine.length; i++){
 string+=`, ${i+1}. ${katzDeliLine[i]}`
}
return string
}
