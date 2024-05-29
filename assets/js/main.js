$(document).ready(function(){

    // OWL Carousel Banner
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1200:{
                items:2
            }
        }
    })


    // About Page Hide and show elemnets
    $(document).ready(function(){
        // By default hide all tab-content div elements except first element
        $(".contents .tab-content").hide();
        $(".contents .tab-content:first-child").show();
        
        $(".about-section .tabs ul li").click(function(){
            $(".about-section .tabs ul li").removeClass("active");
            $(this).addClass("active");

            var current_tab_value = $(this).attr("data-list");
            $(".contents .tab-content").hide();
            $("."+current_tab_value).show();
        });
    });


    // FAQ Accordion JS Start
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion, index) => {
      const header = accordion.querySelector(".accordion__header");
      const content = accordion.querySelector(".accordion__content");
      const icon = accordion.querySelector("#accordion-icon");

      header.addEventListener("click", () => {
        const isOpen = content.style.height === `${content.scrollHeight}px`;

        accordions.forEach((a, i) => {
          const c = a.querySelector(".accordion__content");
          const ic = a.querySelector("#accordion-icon");

          c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
          ic.classList.toggle("ri-add-line", i !== index || !isOpen);
          ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
        });
      });
    });
    // FAQ Accordion JS End


    // Mix it up portfolio
    $(document).ready(function(){
        var mixer = mixitup('.item-grid');
    }); 


    // Working Contact Form Start
    const form = document.querySelector("form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    function sendEmail(){
        const bodyMessage = `Name: ${name.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${message.value}`;

        Email.send({
            SecureToken : "ca269611-2312-4875-8796-f029449fffd6",
            To : 'sanjida717270@gmail.com',
            From : 'sanjida717270@gmail.com',
            Subject : subject.value,
            Body : bodyMessage,
        }).then(
          message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Thanks for contacting me",
                    text: "Your message has been sent successfully!",
                    icon: "success"
                });
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
          }
        );
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        sendEmail();
    })
    // Working Contact Form End

});