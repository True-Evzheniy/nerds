	var link = document.querySelector(".btn-email");
	var popup = document.querySelector(".modal-content");
	var close = popup.querySelector(".modal-content-close");
	var login = popup.querySelector("input[type='text']");
	var form =  popup.querySelector("form");
	var email = popup.querySelector("input[type='email']");
	var textarea = popup.querySelector("textarea");
	var storage = localStorage.getItem("login");
	var storageemail = localStorage.getItem("email");
	var btn = document.querySelector(".filter-btn");

	link.addEventListener("click", function(event){
		event.preventDefault();
		popup.classList.add("modal-content-show");
		if (storageemail && storage) {
          login.value = storage;
          email.value = storageemail;
          textarea.focus();
        } else {
          login.focus();
        }
	});
	
	close.addEventListener("click", function(event){
		event.preventDefault();
		popup.classList.remove("modal-content-show")
	});
	
	form.addEventListener("submit", function(event) {
        if (!(login.value && email.value && textarea.value)) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.classList.add("modal-error");
        } else {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
        }
      });
	
	window.addEventListener("keydown", function(event) {
    	if (event.keyCode == 27) {
    		if (popup.classList.contains("modal-content-show")) {
    			popup.classList.remove("modal-content-show");
    		}
    	}
    });
	
	btn.addEventListener("click", function(event){
		event.preventDefault()
	});
	