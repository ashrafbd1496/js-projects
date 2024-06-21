// made a function to use this calendar into website live update time date
function updateSidebarDate() {
  const date = new Date();

  const dayName = date.toLocaleDateString("default", { weekday: "long" });
  const dayNumber = date.getDate();
  const monthName = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  document.getElementById("month-name").innerHTML = monthName;
  document.getElementById("day-name").innerHTML = dayName;
  document.getElementById("day-number").innerHTML = dayNumber;
  document.getElementById("year").innerHTML = year;
}
updateSidebarDate();

// const monthName = document.getElementById("month-name");
// const dayName = document.getElementById("day-name");
// const dayNmber = document.getElementById("day-number");
// const year = document.getElementById("year");
// const date = new Date();
// //console.log(date.getDay().toLocaleString())
// dayName.innerHTML = date.toLocaleDateString("default", { weekday: "long" });
// dayNmber.innerHTML = date.getDate();
// year.innerHTML = date.getFullYear();
// monthName.innerHTML = date.toLocaleString("default", { month: "long" });
