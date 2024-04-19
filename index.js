function updateTime() {
  let ParisElement = document.querySelector("#Paris");
  if (ParisElement) {
    let ParisDateDisplay = document.querySelector("#ParisDate");
    let ParisTimeElement = document.querySelector("#ParisTime");
    let ParisTimezone = moment().tz("Europe/Paris");
    ParisDateDisplay.innerHTML = moment().format("dddd MMMM do, YYYY");
    ParisTimeElement.innerHTML = ParisTimezone.format(
      "hh:mm:ss [<small>] A [</small>]"
    );
  }

  let TokyoElement = document.querySelector("#Tokyo");
  if (TokyoElement) {
    let TokyoDateDisplay = document.querySelector("#TokyoDate");
    let TokyoTimeElement = document.querySelector("#TokyoTime");
    let TokyoTimezone = moment().tz("Asia/Tokyo");

    TokyoDateDisplay.innerHTML = moment().format("dddd MMMM do, YYYY");
    TokyoTimeElement.innerHTML = TokyoTimezone.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let SydneyElement = document.querySelector("#Sydney");
  if (SydneyElement) {
    let SydneyDateDisplay = document.querySelector("#SydneyDate");
    let SydneyTimeElement = document.querySelector("#SydneyTime");
    let SydneyTimezone = moment().tz("Australia/Sydney");

    SydneyDateDisplay.innerHTML = moment().format("dddd MMMM do, YYYY");
    SydneyTimeElement.innerHTML = SydneyTimezone.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}
setInterval(updateTime, 1000);

function updateCountryDisplay(event) {
  let adjustedTimeZone = event.target.value;
  let cityName = adjustedTimeZone.split("/")[1].replace("_", " ");
  let countryTime = moment().tz(adjustedTimeZone);

  let SelectedCityElement = document.querySelector("#cities");
  SelectedCityElement.innerHTML = `
  <div id="cities">
      <div>
        <div class="city"> ${cityName}
        <div  class="time"> ${countryTime.format(
          "hh:mm:ss [<small>]A[</small>]"
        )}</div>

        </div>
        <div class="date">${countryTime.format("dddd MMMM do, YYYY")}
            </div>
      </div>
  `;
}

let countriesSelected = document.querySelector("#countries");
countriesSelected.addEventListener("change", updateCountryDisplay);
setInterval(updateCountryDisplay, 1000);
