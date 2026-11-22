const bouquetForm = document.querySelector("#bouquet-form");
if (bouquetForm) {
  bouquetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const flower = document.querySelector("#flower").value;
    const color = document.querySelector("#color").value;
    const wrap = document.querySelector("#wrap").value;
    const note = document.querySelector("#note").value.trim();
    let summary = `باقتك: ورد ${flower} بلون ${color}، والتغليف ${wrap}`;
    if (note) {
      summary += ` رسالة الإهداء: ${note}`;
    }
    bouquetForm.querySelector(".result").textContent = summary;
  });
}

const demoForm = document.querySelector(".demo-form");
if (demoForm) {
  demoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    demoForm.querySelector(".result").textContent = demoForm.dataset.message;
  });
}
