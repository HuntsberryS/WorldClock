function updateTime() {
  let ParisElement = document.querySelector("#Paris");
  let ParisDateDisplay = document.querySelector("#ParisDate");
  let ParisTimeElement = document.querySelector("#ParisTime");
  let ParisTimezone = moment().tz("Europe/Paris");
  ParisDateDisplay.innerHTML = moment().format("dddd MMMM do, YYYY");
  ParisTimeElement.innerHTML = ParisTimezone.format(
    "hh:mm:ss [<small>] A [</small>]"
  );

  let TokyoElement = document.querySelector("#Tokyo");
  let TokyoDateDisplay = document.querySelector("#TokyoDate");
  let TokyoTimeElement = document.querySelector("#TokyoTime");
  let TokyoTimezone = moment().tz("Asia/Tokyo");

  TokyoDateDisplay.innerHTML = moment().format("dddd MMMM do, YYYY");
  TokyoTimeElement.innerHTML = TokyoTimezone.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let SydneyElement = document.querySelector("#Sydney");
  let SydneyDateDisplay = document.querySelector("#SydneyDate");
  let SydneyTimeElement = document.querySelector("#SydneyTime");
  let SydneyTimezone = moment().tz("Australia/Sydney");

  SydneyDateDisplay.innerHTML = moment().format("dddd MMMM do, YYYY");
  SydneyTimeElement.innerHTML = SydneyTimezone.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
