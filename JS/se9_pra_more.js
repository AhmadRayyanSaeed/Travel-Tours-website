document.querySelectorAll(".read-more").forEach(function(button) {

    button.addEventListener("click", function() {

        const paragraph = this.previousElementSibling;

        paragraph.classList.toggle("show");

        if (paragraph.classList.contains("show")) {
            this.textContent = "Read less";
        } else {
            this.textContent = "Read more";
        }

    });

});