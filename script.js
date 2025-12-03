// Keep JavaScript minimal and scoped to avoid unnecessary attack surface.
// This file currently only handles navigation toggling and footer year display.

(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close nav when clicking a link (on mobile)
    navLinks.addEventListener("click", function (event) {
      if (event.target instanceof HTMLElement && event.target.tagName === "A") {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  // Check if model-viewer is loaded and verify 3D models
  window.addEventListener("load", function () {
    // Check if running via file:// protocol (won't work for 3D models)
    if (window.location.protocol === "file:") {
      console.warn("⚠️ Running via file:// protocol. 3D models require HTTP server.");
      console.log("💡 Solution: Run 'start-server.bat' or use a local web server.");
      
      // Show a helpful message on the page
      const sections = document.querySelectorAll(".section");
      if (sections.length > 0) {
        const warningDiv = document.createElement("div");
        warningDiv.style.cssText = "background: #ff0000; color: #fff; padding: 1rem; margin: 1rem; border-radius: 8px; text-align: center;";
        warningDiv.innerHTML = "<strong>⚠️ Important:</strong> This page must be served via HTTP (not file://). Run <code>start-server.bat</code> or use a local web server, then open <code>http://localhost:8000</code>";
        sections[0].insertBefore(warningDiv, sections[0].firstChild);
      }
    }
    
    // Wait a bit for model-viewer to register
    setTimeout(function() {
      const modelViewers = document.querySelectorAll("model-viewer");
      console.log(`Found ${modelViewers.length} model-viewer elements`);
      
      if (modelViewers.length === 0) {
        console.error("❌ No model-viewer elements found. Check if model-viewer script loaded.");
        return;
      }
      
      modelViewers.forEach((viewer, index) => {
        const modelSrc = viewer.getAttribute("src");
        console.log(`Model ${index + 1}: ${modelSrc}`);
        
        viewer.addEventListener("load", function () {
          console.log(`✓ Successfully loaded: ${modelSrc}`);
        });
        
        viewer.addEventListener("error", function (event) {
          console.error(`✗ Error loading model: ${modelSrc}`, event.detail || event);
        });
      });
    }, 500);
  });
})();


