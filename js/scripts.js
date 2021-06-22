window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');
  const panelsList = document.querySelector('#panels');
  const planetImage = document.querySelector(".planet-image");
  const planetImageInternal = document.querySelector(".planet-image__internal");

  // Hide all but first tab panel
  panelsList
  .querySelectorAll('[role="tabpanel"]')
  .forEach((p,index) => index > 0 ? p.classList.add("hidden") : null);

  fadeOut(planetImageInternal);

  // Add a click event handler to each tab
  tabs.forEach(tab => {
    tab.addEventListener("click", changeTabs);
  });

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener("keydown", e => {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === 37) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const panelsList = document.querySelector('#panels');
  const panel = panelsList
    .querySelector(`#panel__${target.dataset.info}`);
  const planetImage = document.querySelector(".planet-image");
  const planetImageInternal = document.querySelector(".planet-image__internal");
  console.log(planetImageInternal)
  // Remove all current selected tabs
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute("aria-selected", false));

  // Set this tab as selected
  target.setAttribute("aria-selected", true);

  // Hide all tab panels
  panelsList
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => p.classList.add("hidden"));

  show(panel);

  if (target.id === "tab__structure") {
    fadeIn(planetImageInternal)
  }
  else {
    fadeOut(planetImageInternal)
  }
}

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function fadeOut(element) {
  element.classList.add("invisible");
}

function fadeIn(element) {
  element.classList.remove("invisible");
}
