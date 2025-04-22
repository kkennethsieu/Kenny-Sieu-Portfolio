export function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    // Default to light mode if no theme is saved
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
