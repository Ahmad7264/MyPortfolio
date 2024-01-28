// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector ('.navbar');
const form = document.querySelector('form');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll section

let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar link

            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
          // active section for animation on scroll
            sec.classList.add('show-animate');
        }
// if you want to use animation that on scroll use this
        else{
            sec.classList.remove('show-animate');  
        }
        }); 
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

// remove toggle icon and navbaar when click navbar links

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// animate footer on scroll
let footer = document.querySelector("footer");

footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
// Form controll
const FullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail() {

    const bodyMassege = `Full Name: ${FullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;
    Email.send({
        SecureToken : "22919e42-8e6c-43a7-bb27-8fcbaa99cff4",
        To : 'dilshadahmad286@gmail.com',
        From : "dilshadahmad286@gmail.com",
        Subject : subject.value,
        Body : bodyMassege
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkinput(){
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener("keyup", () => {
            checkEmail();
        });
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

        });
    }
}

function checkEmail(){
    const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const errortxtEmail = document.querySelector(".error-txt.email");
    if (!email.value.match(emailRegx)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errortxtEmail.innerText = "Enter a valid email address";
        }else{
            errortxtEmail.innerText = "Email address can't be blank";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }

}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkinput();

    if (!FullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")){
         sendEmail();

         form.reset();
         return false;
    }
   
});