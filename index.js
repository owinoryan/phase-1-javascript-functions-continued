
// index.js

// saturdayFun.js
 function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// mondayWork.js
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// wrapAdjective.js
function wrapAdjective(highlight = '*') {
  return function(adjective = 'a hard worker') {
    return `You are ${highlight}${adjective}${highlight}!`;
  };
}
