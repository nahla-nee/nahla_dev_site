let dark_mode_svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
    <defs>
    </defs>
    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
        <path d="M 46.715 90 c -3.908 0 -7.841 -0.514 -11.717 -1.552 C 23.391 85.337 13.69 77.893 7.682 67.487 C 1.674 57.08 0.077 44.957 3.188 33.349 c 3.11 -11.607 10.554 -21.308 20.961 -27.316 c 8.601 -4.967 18.349 -6.923 28.193 -5.659 c 1.257 0.162 2.277 1.095 2.548 2.332 c 0.271 1.238 -0.265 2.512 -1.338 3.185 c -13.943 8.735 -18.418 26.742 -10.188 40.996 l 0 0 C 51.592 61.14 69.426 66.268 83.96 58.56 c 1.117 -0.596 2.491 -0.421 3.426 0.434 c 0.936 0.854 1.235 2.204 0.746 3.373 c -3.826 9.156 -10.395 16.621 -18.997 21.586 C 62.204 87.955 54.509 90 46.715 90 z M 43.74 6.101 c -5.805 0.421 -11.436 2.15 -16.592 5.127 c -9.019 5.207 -15.47 13.614 -18.166 23.674 C 6.287 44.961 7.67 55.469 12.877 64.488 c 5.207 9.019 13.614 15.471 23.673 18.165 c 10.058 2.697 20.567 1.311 29.585 -3.895 c 5.156 -2.977 9.47 -6.989 12.737 -11.806 c -15.547 4.094 -32.303 -2.515 -40.705 -17.066 l 0 0 C 29.768 35.336 32.427 17.518 43.74 6.101 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    </g>
</svg>
`;

let light_mode_svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
    <defs>
    </defs>
    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
        <path d="M 45 68 c -12.682 0 -23 -10.317 -23 -23 c 0 -12.682 10.318 -23 23 -23 c 12.683 0 23 10.318 23 23 C 68 57.683 57.683 68 45 68 z M 45 28 c -9.374 0 -17 7.626 -17 17 s 7.626 17 17 17 s 17 -7.626 17 -17 S 54.374 28 45 28 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 45 17.556 c -1.657 0 -3 -1.343 -3 -3 V 3 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 11.556 C 48 16.212 46.657 17.556 45 17.556 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 45 90 c -1.657 0 -3 -1.343 -3 -3 V 75.444 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 V 87 C 48 88.657 46.657 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 14.556 48 H 3 c -1.657 0 -3 -1.343 -3 -3 c 0 -1.657 1.343 -3 3 -3 h 11.556 c 1.657 0 3 1.343 3 3 C 17.556 46.657 16.212 48 14.556 48 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 87 48 H 75.444 c -1.657 0 -3 -1.343 -3 -3 c 0 -1.657 1.343 -3 3 -3 H 87 c 1.657 0 3 1.343 3 3 C 90 46.657 88.657 48 87 48 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 66.527 26.473 c -0.768 0 -1.535 -0.293 -2.121 -0.878 c -1.172 -1.172 -1.172 -3.071 0 -4.243 l 8.171 -8.171 c 1.172 -1.172 3.07 -1.171 4.242 0 c 1.172 1.172 1.172 3.071 0 4.243 l -8.171 8.171 C 68.063 26.18 67.295 26.473 66.527 26.473 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 15.302 77.698 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 8.171 -8.171 c 1.171 -1.172 3.071 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 l -8.171 8.171 C 16.837 77.405 16.069 77.698 15.302 77.698 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 23.473 26.473 c -0.768 0 -1.536 -0.293 -2.121 -0.878 l -8.171 -8.171 c -1.172 -1.172 -1.172 -3.071 0 -4.243 c 1.172 -1.172 3.072 -1.171 4.243 0 l 8.171 8.171 c 1.172 1.172 1.172 3.071 0 4.243 C 25.008 26.18 24.24 26.473 23.473 26.473 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 74.698 77.698 c -0.768 0 -1.535 -0.293 -2.121 -0.879 l -8.171 -8.171 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 8.171 8.171 c 1.172 1.171 1.172 3.071 0 4.242 C 76.233 77.405 75.466 77.698 74.698 77.698 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
    </g>
</svg>
`;

let github_svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
    <defs>
    </defs>
    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
        <path d="M 60.394 90.002 H 35.32 c -2.149 0 -3.912 -1.746 -3.93 -3.892 l -0.007 -0.874 c -0.012 -1.419 -0.027 -3.12 -0.04 -4.937 c -14.895 2.2 -19.076 -7.408 -19.513 -8.541 h 0 c -2.278 -5.787 -5.454 -7.447 -5.487 -7.463 L 6.09 64.147 c -1.12 -0.765 -3.741 -2.558 -3 -4.903 c 0.669 -2.112 3.422 -2.297 4.553 -2.291 l 0.114 0.005 c 6.86 0.481 10.4 6.77 10.547 7.037 c 3.84 6.579 9.715 5.793 13.424 4.386 c 0.361 -1.812 0.959 -3.458 1.762 -4.872 C 21.946 61.561 8.658 55.605 8.658 33.204 c 0 -6.118 1.926 -11.522 5.73 -16.078 c -0.843 -2.7 -1.892 -8.441 0.981 -15.727 l 0.348 -0.883 l 0.903 -0.289 c 0.583 -0.188 5.912 -1.57 16.999 5.714 c 4.514 -1.169 9.294 -1.773 14.225 -1.796 c 4.948 0.022 9.733 0.626 14.254 1.796 C 73.17 -1.343 78.496 0.041 79.08 0.228 l 0.901 0.289 l 0.349 0.881 c 2.877 7.282 1.83 13.025 0.988 15.726 c 3.798 4.544 5.722 9.948 5.722 16.08 c 0 22.406 -13.303 28.34 -24.869 30.265 c 1.426 2.496 2.207 5.712 2.207 9.29 c 0 5.203 -0.03 9.727 -0.05 12.736 l -0.004 0.608 C 64.31 88.253 62.547 90.002 60.394 90.002 z M 35.39 86.002 h 24.934 l 0.003 -0.533 c 0.02 -3.002 0.05 -7.517 0.05 -12.71 c 0 -5.829 -2.281 -8.432 -3.263 -9.281 l -3.462 -2.994 l 4.55 -0.506 c 12.282 -1.366 24.837 -5.616 24.837 -26.774 c 0 -5.519 -1.842 -10.328 -5.474 -14.295 l -0.857 -0.937 l 0.483 -1.175 c 0.398 -0.966 2.167 -5.929 -0.168 -12.802 C 75.322 4.04 70.976 4.75 63.578 9.764 l -0.766 0.519 l -0.891 -0.247 c -4.377 -1.214 -9.246 -1.867 -14.077 -1.889 c -4.814 0.022 -9.677 0.675 -14.046 1.889 l -0.891 0.248 l -0.766 -0.519 c -7.371 -4.991 -11.717 -5.718 -13.468 -5.76 c -2.326 6.871 -0.557 11.826 -0.159 12.791 l 0.484 1.174 l -0.856 0.938 c -3.638 3.983 -5.483 8.793 -5.483 14.297 c 0 21.148 12.528 25.425 24.784 26.82 l 4.505 0.513 l -3.415 2.982 c -0.902 0.787 -2.497 2.688 -3.035 6.563 l -0.152 1.098 l -1.011 0.452 c -3.016 1.35 -13.329 4.928 -19.508 -5.662 c -0.042 -0.073 -2.133 -3.725 -5.872 -4.765 c 1.476 0.993 4.416 3.542 6.598 9.089 l 0.039 0.107 c 0.118 0.337 3.196 8.616 17.313 5.548 l 2.412 -0.524 l 0.013 2.468 c 0.014 2.687 0.037 5.286 0.054 7.31 L 35.39 86.002 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
    </g>
</svg>
`;

let top_bar_html = `<div id="top-bar">
<div id="top-bar-content">
    <img src="../assets/pfp.jpg" id="top-bar-pfp">
    <span id="top-bar-greet">Hi, I'm Nahla!</span>
    <ul class="nav-links" id="dark-mode-nav">
        <li><a href="https://github.com/nahla-nee" target="_blank">${github_svg}</a></li>
        <li onclick="light_mode()" id="toggle-color">${light_mode_svg}</li>
    </ul>
</div>
</div>`;

document.addEventListener("DOMContentLoaded", function() {
    document.body.insertAdjacentHTML("afterbegin", top_bar_html);
});

function light_mode() {
    document.documentElement.style.setProperty("--top-bar-color", "var(--top-bar-color-light)");
    document.documentElement.style.setProperty("--text-color", "var(--text-color-light)");
    document.documentElement.style.setProperty("--body-color", "var(--body-color-light)");
    document.documentElement.style.setProperty("--content-bg-color", "var(--content-bg-color-light)");
    document.documentElement.style.setProperty("--link-color", "var(--link-color-light)");
    document.documentElement.style.setProperty("--link-hover-color", "var(--link-hover-color-light)");
    document.documentElement.style.setProperty("--top-bar-svg-color", "var(--top-bar-svg-color-light)");

    let toggle_color = document.querySelector("#toggle-color");
    toggle_color.setAttribute("onclick", "dark_mode()");
    toggle_color.innerHTML = dark_mode_svg;
}

function dark_mode() {
    document.documentElement.style.setProperty("--top-bar-color", "var(--top-bar-color-dark)");
    document.documentElement.style.setProperty("--text-color", "var(--text-color-dark)");
    document.documentElement.style.setProperty("--body-color", "var(--body-color-dark)");
    document.documentElement.style.setProperty("--content-bg-color", "var(--content-bg-color-dark)");
    document.documentElement.style.setProperty("--link-color", "var(--link-color-dark)");
    document.documentElement.style.setProperty("--link-hover-color", "var(--link-hover-color-dark)");
    document.documentElement.style.setProperty("--top-bar-svg-color", "var(--top-bar-svg-color-dark)");

    let toggle_color = document.querySelector("#toggle-color");
    toggle_color.setAttribute("onclick", "light_mode()");
    toggle_color.innerHTML = light_mode_svg;
}