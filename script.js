let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


    function sendEmail(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Retrieve the form input values
        var name = document.getElementById("name").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;

        // Validate the input values (optional)
        if (name.trim() === '' || subject.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // Construct the mailto URL with subject and body parameters
        var mailtoURL = 'mailto:ahnafrais2020@gmail.com' +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nMessage: ' + message);

        // Open the default email client with the mailto URL
        window.open(mailtoURL);

        // Display a success message
        alert('Your message has been sent successfully');

        document.getElementById("name").value = '';
        document.getElementById("subject").value = '';
        document.getElementById("message").value = '';
        document.getElementById("email").value = '';
        document.getElementById("phone").value = '';
    }
