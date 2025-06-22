
document.getElementById("hlalo").onclick = function(){
      location.href = 'contactus.html';
    };
    document.getElementById("HLALO").onclick = function(){
      location.href = 'aboutus.html';
    };

     document.getElementById("submit").onclick = function(){
      alert('We will get back to you as soon as possible')
    };

      document.getElementById("submit").onclick = function(){
            alert('Thank you for reaching us...Is there anything else I can help you with?')
        };
  
         function toggleMenu() {
      const navbar = document.getElementById("navbar");
      navbar.classList.toggle("active");
    };

    function displayAlbum() {
      const album = document.getElementById("choices").value;
      const gallery = document.getElementById("gallery-images");

      let images = [];

      if (album === "marriage") {
        images = [
          "images/wedding photoshoot.jpeg",
          
        ];
      } else if (album === "funeral") {
        images = [
          "images/funeral photoshoot.jpg",
         
        ];
      } else if (album === "babyshower") {
        images = [
          "images/newborn photoshoot.jpeg",
          "images/pregnant-7961440_640.jpg",
          
        ];
      } else if (album === "birthday") {
        images = [
          "images/birthday photoshoot.jpeg",
          
         
        ];
      }

      gallery.innerHTML = "";
      images.forEach(src => {
        const imgElement = document.createElement("img");
        imgElement.src = src;
        imgElement.alt = "Gallery Image";
        gallery.appendChild(imgElement);
      });
    }

    
    displayAlbum();