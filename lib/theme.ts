export function subscribeTheme(callback: () => void) {
  window.addEventListener("theme-change", callback);
  return () => window.removeEventListener("theme-change", callback);
}

export function isDarkTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark";
}

export function toggleTheme() {
  if (isDarkTheme()) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
  window.dispatchEvent(new Event("theme-change"));
}
