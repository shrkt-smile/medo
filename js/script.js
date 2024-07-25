let lis = document.querySelectorAll("li");
lis.forEach((li) =>
  li.addEventListener("click", () => {
    li.parentElement
      .querySelectorAll(".active")
      .forEach((active) => active.classList.remove("active"));
    li.classList.add("active");
  })
);
document.querySelector(".menu-icon").addEventListener("click", function() {
  document.querySelector(".menu").classList.toggle("open");});
document.querySelector(".menu-head i").addEventListener("click", function() {
  document.querySelector(".menu").classList.toggle("open");});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 250,
  reset: true,
});

sr.reveal(`.info`);
sr.reveal(`.img`, { delay: 500 });
sr.reveal(`.cv`, { delay: 600 });
sr.reveal(`.r`, { origin: "left" });
sr.reveal(`.l`, { origin: "right" });
sr.reveal(`.t`, { origin: "top" });
sr.reveal(`.b`, { origin: "bottom" });
sr.reveal(`.project`, { interval: 150 });
var getFlatJooza = document.createElement("link");
      (getFlatJooza.rel = "stylesheet"),
        (getFlatJooza.type = "text/css"),
        (getFlatJooza.href = "https://www.fontstatic.com/f=flat-jooza"),
        document.querySelector("body").appendChild(getFlatJooza);
        function sginup() {
          var name = document.getElementById("contact-form-name").value;
          var phone = document.getElementById("contact-form-phone").value;
          var email = document.getElementById("contact-form-email").value;
          var message = document.getElementById("contact-form-msg").value;
          if (name && phone && email && message) {
            var formattedMessage =
              "%0Aالاســـــــــم : <pre>" +
              name +
              "</pre>%0A رقم الهاتف<pre>" +
              phone +
              "</pre>%0Aالبريد الالكتروني:<pre>" +
              email +
              "</pre>%0Aالرساله :<pre>" +
              message +
              "</pre>";
        
            var xhr = new XMLHttpRequest();
            xhr.open(
              "GET",
              "https://api.telegram.org/bot5991463182:AAH1BRMm-RWCuB0hUxER_KOqVJBWdqoGLkQ/sendMessage?text=" +
                formattedMessage +
                "&chat_id=-1001589590856&parse_mode=html"
            );
            xhr.send();
          } else {
            alert("يرجى ملء جميع الحقول قبل الإرسال.");
          }
        }

        window.onload = function () {
          "use strict";
          document.querySelector(".gear").onclick = function () {
              this.classList.toggle('change');
      
              this.classList.toggle('fa-spin');
      
              this.parentElement.parentElement.classList.toggle('open');
          }      
          /* Start Switch Color Of Root */
          let colorList = document.querySelectorAll(".colors-list li"),
              mainColor = localStorage.getItem("color_option"),
              mainColor1 = localStorage.getItem("color_option1");
          if (mainColor !== null) {
              document.documentElement.style.setProperty('--color', mainColor);
              document.documentElement.style.setProperty('--color1', mainColor1);
      
              document.querySelectorAll('.colors-list li').forEach(ele => {
                  ele.classList.remove("active");
                  if (ele.dataset.color === mainColor) { ele.classList.add("active") }
              });
          }
      
          /* Start Switch Color Of Root */
          colorList.forEach(li =>  {
              li.addEventListener("click", (e) => {
                  document.documentElement.style.setProperty('--color', e.target.dataset.color);
                  document.documentElement.style.setProperty('--color1', e.target.dataset.color1);
      
                  localStorage.setItem('color_option', e.target.dataset.color);
                  localStorage.setItem('color_option1', e.target.dataset.color1);
      
                  // Handle Active Class
                  handleActive(e);
              });
          });
          
      };
        