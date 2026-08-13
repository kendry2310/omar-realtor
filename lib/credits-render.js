(function () {
  "use strict";

  function escHTML(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function render(credits) {
    var list = document.querySelector("[data-credits]");
    if (!list) return;
    var ids = Object.keys(credits);
    if (!ids.length) {
      list.innerHTML = '<li class="credits-empty">No hay créditos registrados.</li>';
      return;
    }
    list.innerHTML = ids.map(function (id) {
      var c = credits[id];
      var creatorHTML = c.creator_url
        ? '<a href="' + escHTML(c.creator_url) + '" target="_blank" rel="noopener">' + escHTML(c.creator) + "</a>"
        : escHTML(c.creator);
      return (
        "<li><strong>" + escHTML(c.title) + "</strong> — " + creatorHTML +
        " (" + escHTML(c.source) + ") · " +
        '<a href="' + escHTML(c.license_url) + '" target="_blank" rel="noopener">' +
        escHTML((c.license || "").toUpperCase()) + " " + escHTML(c.license_version || "") + "</a> · " +
        '<a href="' + escHTML(c.foreign_landing_url) + '" target="_blank" rel="noopener">Ver original ↗</a></li>'
      );
    }).join("");
  }

  function boot() {
    fetch("assets/credits.json")
      .then(function (r) { return r.json(); })
      .then(render)
      .catch(function () {
        var list = document.querySelector("[data-credits]");
        if (list) list.innerHTML = '<li class="credits-empty">No se pudieron cargar los créditos.</li>';
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
