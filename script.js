function calculateTime() {
  var date = new Date();
  console.log(date);

  var weekDay = date.getDay();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var dayNames = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
  var monthNames = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];

   var currentDate = day + "/" + monthNames[month] + "/" + year;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  

  document.querySelector("#current-date").textContent = currentDate;
  document.querySelector("#week-day").textContent = dayNames[weekDay];
  document.querySelector("#hours").textContent = hours;
  document.querySelector("#minutes").textContent = minutes;
  document.querySelector("#seconds").textContent = seconds;

  setTimeout(calculateTime, 200);
}

window.addEventListener("load", calculateTime);/*ESSA FUNÇÃO FICA ESCUTANDO QUANDO ESTÁ SENDO CARREGADO A PAGINA, ASSIM QUE CARREGAR ELA IRÁ EXECUTAR O BLOCO DE FUNÇÕES ACIMA */
