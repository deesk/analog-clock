
console.log('Analog Clock');

const  CLOCK = document.querySelector("#clock-12h");
// moving hands
const HOURHAND = CLOCK.querySelector("#hr-hand").style;
const MINUTEHAND = CLOCK.querySelector("#min-hand").style;
const SECHAND = CLOCK.querySelector("#sec-hand").style;

displayHourMinNums(12,"hr");
displayHourMinNums(60,"min");
showDate();
setInterval(runTheClock,1000);

// to display and position hours and minutes
function displayHourMinNums(duration,selector) {
  let deg = 0;
  for (let i = 1; i <= duration; i++){
    // Outer Div
    var wrapper = document.createElement("div");
    wrapper.classList.add(selector, selector+i);
    CLOCK.append(wrapper);
    // Inner Div contains num(hrs) or fontAwsome symbols(for mins)
    var innerContainer = document.createElement("div");
    wrapper.append(innerContainer);
    // only for minutes
    if(selector == 'min'){
      // inserting i tag for fontawsome dot symbol
      var minIcon = document.createElement("i");
      minIcon.classList.add("fa","fa-circle");
      innerContainer.append(minIcon);
      // increasing size of every 5th dot symbol
      if((i % 5) !== 0){
        CLOCK.querySelector('.min'+i+" i").style.fontSize = ".1em";
      }
      // resetting degree and then incremnting by 6
      deg += 6;
    } else {
      // only for hours
      deg += 30;
      innerContainer.innerHTML = i;
    }
    // positioning
    CLOCK.querySelector('.'+selector+i).style.transform = "rotate(" + deg + "deg)";
    CLOCK.querySelector('.'+selector+i+' div').style.transform = "rotate(-" + deg + "deg)";
  }
}
// to show date, day month and year
function showDate() {
  var date = new Date();
  var dateArr = date.toString().split(' ');
  var weekDay = dateArr[0];
  var month = dateArr[1];
  var day = dateArr[2];
  var timeZone = dateArr.splice(5,2);

  CLOCK.querySelector('#weekday span').innerHTML = weekDay;
  CLOCK.querySelector('#month span').innerHTML = month; month;
  CLOCK.querySelector('#day span').innerHTML = day;
}
// to tick hands according to time
function runTheClock (){
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hrPos = (hr*360/12)+(min * 360/60)/12;
  let minPos = (min*360/60)+(sec*360/60)/60;
  let secPos = sec*360/60;

  HOURHAND.transform = "rotate(" + hrPos + "deg)";
  MINUTEHAND.transform = "rotate(" + minPos + "deg)";
  SECHAND.transform = "rotate(" + secPos + "deg)";
}
