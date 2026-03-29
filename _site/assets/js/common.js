$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  function togglePanel(clicked, targetClass) {
    var container = $(clicked).closest("[id]");
    var target = container.find("." + targetClass + ".hidden");
    var others = container.find(".hidden.open").not(target);

    // Instantly hide others (no transition)
    others.css("transition", "none");
    others.removeClass("open");
    // Force reflow so the instant hide takes effect
    others[0] && others[0].offsetHeight;
    others.css("transition", "");

    // Toggle the clicked panel
    target.toggleClass("open");
  }

  $("a.abstract").click(function () { togglePanel(this, "abstract"); });
  $("a.award").click(function () { togglePanel(this, "award"); });
  $("a.bibtex").click(function () { togglePanel(this, "bibtex"); });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let theme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });
});
