var faqs = document.getElementsByClassName("faq");
var faqpanels = document.getElementsByClassName("faq-panel")
var i;

for (i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}