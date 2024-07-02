document.querySelector('header button').addEventListener('click', function() {
    alert('Thank you for getting started!');
});

document.querySelector('#cta button').addEventListener('click', function() {
    alert('Thank you for joining!');
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});
