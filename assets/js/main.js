// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if (toggle && nav) {
            toggle.addEventListener('click', () => {
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle', 'nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction() {
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// EMAIL CONTENT OPTION

document.getElementById('contactForm').addEventListener('submit', function (event) {
      const subjectInputValue = document.getElementById('subjectInput').value;
      const nameInputValue = document.getElementsByName('Name')[0].value;
      const messageInputValue = document.getElementsByName('Message')[0].value;

      const bodyContent = `Hi Raghul,\n\nI am ${nameInputValue}. I hope this email finds you.\n\n${messageInputValue}`;

      const mailtoLink = `mailto:raghulraghul111@gmail.com?subject=${encodeURIComponent('Reg: ' + subjectInputValue)}&body=${encodeURIComponent(bodyContent)}`;

      window.location.href = mailtoLink;
      event.preventDefault(); // Prevents the default form submission
});
