document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------------
       1. SIDEBAR MOBILE MENU
    --------------------------------*/
    const navBtn = document.getElementById("navbtn");
const sideBar = document.getElementById("sidebar");

if (navBtn && sideBar) {
  navBtn.addEventListener("click", () => {
    const isOpen = sideBar.classList.toggle("show");

    navBtn.innerHTML = isOpen
      ? `<span class="fs-1 text-danger">&times;</span>`   
      : `<i class="fas fa-bars fa-lg"></i>`;           
  });
}

  
    /* -------------------------------
       2. FOOTER YEAR + LIVE CLOCK
    --------------------------------*/
    const yearEl = document.getElementById("footer-year");
    const timeEl = document.getElementById("time");
  
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    function updateClock() {
      const now = new Date();
      if (timeEl) {
        timeEl.textContent = now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        });
      }
    }
  
    if (timeEl) {
      updateClock();
      setInterval(updateClock, 1000);
    }
  
    /* -------------------------------
       3. REFRESH BUTTON SPIN EFFECT
    --------------------------------*/
    const refreshBtn = document.getElementById("refresh");
  
    if (refreshBtn) {
      refreshBtn.addEventListener("click", function () {
        refreshBtn.classList.add("refreshon");
  
        setTimeout(() => {
          refreshBtn.classList.remove("refreshon");
          location.reload();
        }, 900);
      });
    }
  
    /* -------------------------------
       4. TAWK.TO LIVE CHAT
    --------------------------------*/
    (function () {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/691cd84735fc3b193838beb6/1jacapns7";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.body.appendChild(s1);
    })();
  
    /* -------------------------------
       5. INSTANT SEARCH ENGINE
    --------------------------------*/
    const sitePages = [
      { title: "Scholarship Program 2025", url: "sch.html", tags: "scholarship bursary education students school" },
      { title: "Youth Digital Skills Training", url: "index.html", tags: "digital training youth laptop empowerment web" },
      { title: "Amnesty Program", url: "agro.html", tags: "amnesty peace reconciliation cultism" },
      { title: "Press & Media Center", url: "press.html", tags: "press news announcement chairman media" },
      { title: "Contact the Chairman", url: "contact.html", tags: "contact phone email office" },
      { title: "NNEsweoha Festival", url: "press.html", tags: "festival culture nnesweoha celebration" },
      { title: "Mechanized Farming Launch", url: "index.html", tags: "farming agriculture tractor" }
    ];
  
    const searchInput = document.getElementById("input-search");
    const resultsBox = document.getElementById("search-results");
  
    if (searchInput && resultsBox) {
      searchInput.addEventListener("input", function () {
        const q = this.value.toLowerCase().trim();
  
        if (!q) {
          resultsBox.style.display = "none";
          return;
        }
  
        const matches = sitePages.filter(p =>
          p.title.toLowerCase().includes(q) ||
          p.tags.toLowerCase().includes(q)
        );
  
        resultsBox.innerHTML =
          matches.length === 0
            ? `<div style="padding:20px;text-align:center;color:#777;">No results for "<b>${this.value}</b>"</div>`
            : matches
                .map(
                  p => `
            <a href="${p.url}" 
               style="display:block;padding:12px;text-decoration:none;color:#000;border-bottom:1px solid #eee;">
              <div style="font-weight:600;color:#0057ff;">${p.title}</div>
              <small style="color:#666;">${p.tags.replace(/ /g, " • ")}</small>
            </a>`
                )
                .join("");
  
        resultsBox.style.display = "block";
      });
  
      // Hide search results when clicking outside
      document.addEventListener("click", e => {
        if (!document.getElementById("input-div")?.contains(e.target)) {
          resultsBox.style.display = "none";
        }
      });
    }
  
    /* -------------------------------
       6. NEWSLETTER (EMAILJS)
    --------------------------------*/
    emailjs.init("M_V_MosX7T7pzJGtV");
  
    const newsletterForm = document.getElementById("newsletterForm");
  
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", e => {
        e.preventDefault();
  
        const emailInput = document.getElementById("newsletterEmail");
        const msg = document.getElementById("newsletterMsg");
        const email = emailInput.value.trim();
  
        if (!email || !email.includes("@")) {
          msg.innerHTML = `<span style="color:red;">Enter a valid email</span>`;
          return;
        }
  
        emailjs
          .send("service_j2muokg", "template_zpdsnsm", {
            subscriber_email: email,
            signup_time: new Date().toLocaleString()
          })
          .then(() => {
            msg.innerHTML = `<span style="color:green;">Subscription saved!</span>`;
            emailInput.value = "";
            setTimeout(() => (msg.innerHTML = ""), 4000);
          })
          .catch(() => {
            msg.innerHTML = `<span style="color:red;">Error. Try again later.</span>`;
          });
      });
    }
  });
  