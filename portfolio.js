const sections = ["about", "education", "skills", "projects", "resume", "contact"];

var sectionPositions = {};
sections.forEach((s) =>
{
    console.log("section: " + s);
    sectionPositions[s] = document.getElementById(s).offsetTop;
});


addEventListener("scroll", (event) => 
{
    var y = window.scrollY;
    var currentSection = "";
    sections.forEach((section) => 
    {
        console.log("Sroll section: " + section);
        if (y >= sectionPositions[section])
        {
            var currentLink = document.getElementById(currentSection + "-nav");
            if (currentLink != null)
            {
                currentLink.classList.remove("active");
            }
            currentSection = sections;
        }
    });

    
    var currentLink = document.getElementById(currentSection + "-nav");
    currentLink.classList.add("active");

    
});