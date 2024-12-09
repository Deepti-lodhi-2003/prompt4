document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Show an alert as a demo (you can replace this with a backend submission)
    alert(`Thank you for reaching out, ${name}! We will get back to you at ${email} shortly.`);
  });
  
  function menubar(){
    let dropbar = document.getElementById("drop");
    let cross = document.getElementById("cross");
    let menubar = document.getElementById("menubar");
    dropbar.style.visibility="visible";
    cross.style.visibility="visible";
    menubar.style.visibility="hidden";
    
    }
    function crossbar(){
    let cross = document.getElementById("cross");
    let dropbar = document.getElementById("drop");
    let menubar = document.getElementById("menubar");
    cross.style.visibility="hidden";
    menubar.style.visibility="visible";
    dropbar.style.visibility="hidden";
    
    }