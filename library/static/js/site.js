document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.passwordToggle);
      if (!input) return;
      const showing = input.type === "password";
      input.type = showing ? "text" : "password";
      button.textContent = showing ? "Hide" : "Show";
      button.setAttribute("aria-label", showing ? "Hide password" : "Show password");
    });
  });

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", () => {
      const button = form.querySelector("[data-loading-label]");
      if (!button || button.disabled) return;
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      button.innerHTML = `<span class="loading-spinner" aria-hidden="true"></span>${button.dataset.loadingLabel}`;
    });
  });

  const password = document.querySelector("[data-password-strength]");
  if (password) {
    const meter = document.querySelector(".strength-meter");
    const fill = meter.querySelector(".strength-fill");
    const label = meter.querySelector(".strength-label");
    password.addEventListener("input", () => {
      const value = password.value;
      let score = 0;
      if (value.length >= 8) score += 1;
      if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1;
      if (/\d/.test(value)) score += 1;
      if (/[^A-Za-z0-9]/.test(value)) score += 1;
      const names = ["Too short", "Fair", "Good", "Strong", "Very strong"];
      fill.style.width = `${score * 25}%`;
      fill.dataset.strength = score < 2 ? "low" : score < 3 ? "medium" : "high";
      label.textContent = value ? names[score] : "Password strength";
    });
  }

  const menuButton = document.querySelector(".mobile-menu");
  const sidebar = document.querySelector(".sidebar");
  if (menuButton && sidebar) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      sidebar.classList.toggle("sidebar-open", !expanded);
    });
    document.addEventListener("click", (event) => {
      if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove("sidebar-open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  const sectionToggle = document.querySelector(".library-nav-toggle");
  const libraryNav = document.querySelector(".library-nav");
  if (sectionToggle && libraryNav) {
    sectionToggle.addEventListener("click", () => {
      const expanded = sectionToggle.getAttribute("aria-expanded") === "true";
      sectionToggle.setAttribute("aria-expanded", String(!expanded));
      libraryNav.classList.toggle("library-nav-open", !expanded);
      sectionToggle.setAttribute("aria-label", expanded ? "Open library navigation" : "Close library navigation");
    });
    libraryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        libraryNav.classList.remove("library-nav-open");
        sectionToggle.setAttribute("aria-expanded", "false");
        sectionToggle.setAttribute("aria-label", "Open library navigation");
      });
    });
  }
  const libraNavLink = document.querySelector(".libra-nav-link");
  if (libraNavLink) {
    libraNavLink.addEventListener("click", (event) => {
      const launcher = document.querySelector(".libra-launcher");
      const panel = document.querySelector("#libra-panel");
      if (launcher && panel) {
        event.preventDefault();
        launcher.click();
        libraryNav?.classList.remove("library-nav-open");
        sectionToggle?.setAttribute("aria-expanded", "false");
        sectionToggle?.setAttribute("aria-label", "Open library navigation");
      }
    });
  }

  const toast = document.querySelector(".library-toast");
  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("library-toast-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("library-toast-visible"), 3800);
  };

  document.querySelectorAll("[data-demo-action]").forEach((button) => {
    button.addEventListener("click", () => showToast(button.dataset.demoAction));
  });

  document.querySelectorAll(".neo-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("is-on");
      toggle.setAttribute("aria-pressed", String(toggle.classList.contains("is-on")));
    });
  });

  document.querySelectorAll(".glass-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const group = tab.parentElement;
      group.querySelectorAll(".glass-tab").forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
    });
  });

  document.querySelectorAll(".close-chip").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".mini-toast-card")?.remove();
    });
  });

  document.querySelectorAll("[data-module-reader]").forEach((reader) => {
    const pages = [...reader.querySelectorAll("[data-reader-page]")];
    const previous = reader.querySelector("[data-reader-prev]");
    const next = reader.querySelector("[data-reader-next]");
    const status = reader.querySelector("[data-reader-status]");
    const count = reader.querySelector("[data-reader-count]");
    if (!pages.length || !previous || !next || !status) return;

    let currentPage = 0;
    const showPage = (index) => {
      const nextPage = Math.max(0, Math.min(index, pages.length - 1));
      const direction = nextPage >= currentPage ? "reader-page-next" : "reader-page-previous";
      currentPage = nextPage;
      pages.forEach((page, pageIndex) => {
        page.hidden = pageIndex !== currentPage;
        page.classList.remove("reader-page-next", "reader-page-previous");
      });
      pages[currentPage].classList.add(direction);
      previous.disabled = currentPage === 0;
      next.disabled = currentPage === pages.length - 1;
      status.textContent = `Page ${currentPage + 1} of ${pages.length}`;
      if (count) count.textContent = pages[currentPage].querySelector("h3")?.textContent || "";
    };

    previous.addEventListener("click", () => showPage(currentPage - 1));
    next.addEventListener("click", () => showPage(currentPage + 1));
    reader.addEventListener("keydown", (event) => {
      if (event.target.matches("input, textarea, select, button, a, [contenteditable='true']")) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPage(currentPage - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showPage(currentPage + 1);
      }
    });
    showPage(0);
  });

  const contentForm = document.querySelector("[data-learning-content-form]");
  const contentPreview = document.querySelector("[data-content-preview]");
  if (contentForm && contentPreview) {
    contentForm.querySelector("[data-content-preview-toggle]").addEventListener("click", () => {
      contentPreview.querySelector("[data-preview-title]").textContent =
        contentForm.elements.title.value || "Untitled content";
      contentPreview.querySelector("[data-preview-topic]").textContent =
        contentForm.elements.topic.value;
      contentPreview.querySelector("[data-preview-body]").textContent =
        contentForm.elements.body.value;
      contentPreview.querySelector("[data-preview-code]").textContent =
        contentForm.elements.code.value;
      contentPreview.hidden = false;
      contentPreview.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  const labDialog = document.querySelector("#lab-dialog");
  if (labDialog) {
    document.querySelectorAll("[data-lab-view]").forEach((button) => {
      button.addEventListener("click", () => {
        labDialog.querySelector("#lab-dialog-title").textContent = button.dataset.labView;
        labDialog.querySelector("#lab-dialog-aim").textContent = button.dataset.labAim;
        labDialog.showModal();
      });
    });
    labDialog.querySelector("[data-close-dialog]").addEventListener("click", () => labDialog.close());
    labDialog.addEventListener("click", (event) => {
      if (event.target === labDialog) labDialog.close();
    });
  }

  const libraLauncher = document.querySelector(".libra-launcher");
  const libraPanel = document.querySelector("#libra-panel");
  if (libraLauncher && libraPanel) {
    const closeButton = libraPanel.querySelector(".libra-close");
    const settingsButton = libraPanel.querySelector(".libra-settings-button");
    const settingsPanel = libraPanel.querySelector(".libra-provider-settings");
    const providerSelect = libraPanel.querySelector("#libra-provider");
    const messages = libraPanel.querySelector(".libra-messages");
    const compose = libraPanel.querySelector(".libra-compose");
    const input = libraPanel.querySelector("#libra-input");

    const addMessage = (text, type) => {
      const message = document.createElement("div");
      message.className = `libra-message libra-message-${type}`;
      if (type === "assistant") {
        const mark = document.createElement("span");
        mark.className = "libra-message-mark";
        mark.textContent = "✳";
        message.append(mark);
      }
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      message.append(paragraph);
      messages.append(message);
      messages.scrollTop = messages.scrollHeight;
      return message;
    };

    const sendMessage = async (rawMessage) => {
      const message = rawMessage.trim();
      if (!message || message.length > 1000) return;
      addMessage(message, "student");
      input.value = "";
      const pending = addMessage("Finding your way around the library…", "assistant");
      compose.querySelector("button").disabled = true;
      try {
        const response = await fetch("/api/libra", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": document.querySelector('meta[name="csrf-token"]').content,
          },
          body: JSON.stringify({ message, provider: providerSelect.value }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "The assistant could not respond.");
        pending.querySelector("p").textContent = result.reply;
        const sourceLinks = Array.isArray(result.links) ? result.links : [];
        for (const link of sourceLinks) {
          if (!link || typeof link.title !== "string" || typeof link.url !== "string") continue;
          const safeInternal = link.url.startsWith("/") && !link.url.startsWith("//");
          const safeExternal = link.url.startsWith("https://");
          if (!safeInternal && !safeExternal) continue;
          const anchor = document.createElement("a");
          anchor.href = link.url;
          anchor.textContent = `Open source: ${link.title}`;
          if (safeExternal) {
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";
          }
          pending.append(anchor);
        }
        pending.setAttribute("aria-label", result.notice);
      } catch (error) {
        pending.querySelector("p").textContent = error.message;
      } finally {
        compose.querySelector("button").disabled = false;
        input.focus();
      }
    };

    libraLauncher.addEventListener("click", () => {
      const open = libraPanel.hidden;
      libraPanel.hidden = !open;
      libraLauncher.setAttribute("aria-expanded", String(open));
      if (open) input.focus();
    });
    closeButton.addEventListener("click", () => {
      libraPanel.hidden = true;
      libraLauncher.setAttribute("aria-expanded", "false");
      libraLauncher.focus();
    });
    settingsButton.addEventListener("click", () => {
      settingsPanel.hidden = !settingsPanel.hidden;
      settingsButton.setAttribute("aria-expanded", String(!settingsPanel.hidden));
    });
    compose.addEventListener("submit", (event) => {
      event.preventDefault();
      sendMessage(input.value);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage(input.value);
      }
    });
    libraPanel.querySelectorAll("[data-prompt]").forEach((button) => {
      button.addEventListener("click", () => sendMessage(button.dataset.prompt));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !libraPanel.hidden) {
        libraPanel.hidden = true;
        libraLauncher.setAttribute("aria-expanded", "false");
      }
    });
    if (new URLSearchParams(window.location.search).get("assistant") === "open") {
      libraLauncher.click();
    }
  }

  document.querySelectorAll(".flash").forEach((flash) => {
    window.setTimeout(() => {
      flash.classList.add("flash-dismissed");
      window.setTimeout(() => flash.remove(), 300);
    }, 6000);
  });
});
