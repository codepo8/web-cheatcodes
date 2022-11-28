let urls = [
    {u:"overlay.html",t: "Remove annoying overlays"},
    {u:"screenshot.html",t: "Take screenshots of web content"},
    {u:"inspect.html",t: "Inspect the uninspectable"},
    {u:"contextmenu.html",t: "Get back the context menu"},
    {u:"redirect.html",t: "Avoid unwanted redirects"},
    {u:"video.html",t: "Get a simpler video player"},
    {u:"all-images.html",t: "Grab all images on the page"},
    {u:"mobile-version.html",t: "See the document in a mobile view"},
    {u:"modes.html",t: "Check the document in different modes"},
    {u:"timed-button.html",t: "Making timed buttons work without waiting"}
];

let current = document.location.href.split('/').pop();
let nav = document.querySelector("#menu");
urls.forEach(u => {
    let li = document.createElement("li");
    if (u.u !== current) {
        let a = document.createElement("a");
        a.href = u.u;
        a.textContent = u.t;
        li.appendChild(a);
    } else {
        li.classList.add('current');
        li.textContent = u.t;
    }
    nav.appendChild(li);
});
