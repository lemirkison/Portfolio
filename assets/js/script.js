// sidebar-toggle.js
document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('sidebarToggle');
    var sidebar = document.getElementById('sidebar');
    

    
    function adjustSidebarForScreenSize() {
        if (window.innerWidth >= 769) {
            // If screen is wide, reset the sidebar styles to let CSS handle it
            sidebar.style.removeProperty('left');
            sidebar.style.removeProperty('width');
        } 
    }

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function() {
            // Use "left" property to toggle sidebar visibility
            console.log("left style: ", sidebar.style.left)
            if ((sidebar.style.left === "0%")) {
                console.log("hidint the bar")

                sidebar.style.left = "-100%";
            } else {
                
                console.log("showing the bar")
                sidebar.style.left = "0%";
            }
        });
    }

    window.addEventListener('resize', adjustSidebarForScreenSize);

    // Adjust sidebar on page load based on screen size
    adjustSidebarForScreenSize();
});
