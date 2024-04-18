function displaycountrytime(event) {
  if (event.target.value.length > 0) {
    let time = moment()
      .tz(event.target.value)
      .format("[It is] dddd, MMMM D, YYYY hh:mm A");
    alert(`${time} in ${event.target.value}`);
  }
}

let selectedCountry = document.querySelector("#countries");
selectedCountry.addEventListener("change", displaycountrytime);
