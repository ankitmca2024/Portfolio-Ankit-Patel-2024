document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-list");

  fetch("https://api.github.com/users/ankitmca2024/repos?sort=updated&per_page=6")
    .then(response => response.json())
    .then(repos => {
      repos.forEach(repo => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || "No description provided."}</p>
          <p><strong>⭐ Stars:</strong> ${repo.stargazers_count} • <strong>🔄 Updated:</strong> ${new Date(repo.updated_at).toLocaleDateString()}</p>
        `;
        projectList.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Failed to fetch repos:", err);
      projectList.innerHTML = "<p>Unable to load projects at this time.</p>";
    });
});
const text = "Hi, I'm Ankit Patel";
const speed = 100; // typing speed in ms
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

// Get the current view count from localStorage
    let views = localStorage.getItem("viewCount");

    // If not available, start with 0
    if (!views) {
      views = 1;
    } else {
      views = parseInt(views) + 1;
    }

    // Save the updated view count
    localStorage.setItem("viewCount", views);

    // Display it
    document.getElementById("viewerCounter").innerText = `Viewers: ${views}`;


