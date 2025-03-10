document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        let elements = ["title", "about-text", "teachers-text", "students-text", "events-text", 
                        "school-img", "teachers-img", "students-img", "events-img"];
        
        elements.forEach(id => {
            let el = document.getElementById(id);
            if (el) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }, 500);
});
