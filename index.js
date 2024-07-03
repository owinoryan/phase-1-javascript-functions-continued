
// index.js

// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  module.exports = {
    saturdayFun
  };


 function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
  };
  
  console.log(mondayWork()); 
  //"You are *a hard worker*!"
function wrapAdjective(highlight = '*') {
  let adjective ='a hard worker';
  return function(adjective) {
    return `You are ${highlight}${adjective}${highlight}!`;
  }
}
