// UNHIDE HIDDEN ELEMENTS
function show_content() {
  if (
    document.getElementById("rent_in").checked ||
    document.getElementById("buy").checked
  ) {
    document.getElementById("money_lbl").removeAttribute("hidden");
    document.getElementById("scripted").removeAttribute("hidden");
    document.getElementById("scripted2").removeAttribute("hidden");
  }
  if (
    document.getElementById("rent_off").checked ||
    document.getElementById("sell").checked
  ) {
    document.getElementById("cost_lbl").removeAttribute("hidden");
    document.getElementById("scripted3").removeAttribute("hidden");
    document.getElementById("scripted4").removeAttribute("hidden");
  }
}
// HIDE THEM BACK
function hide_content() {
  if (
    document.getElementById("rent_off").checked ||
    document.getElementById("sell").checked
  ) {
    document.getElementById("money_lbl").setAttribute("hidden", "hidden");
    document.getElementById("scripted").setAttribute("hidden", "hidden");
    document.getElementById("scripted2").setAttribute("hidden", "hidden");
  }
  if (
    document.getElementById("rent_in").checked ||
    document.getElementById("buy").checked
  ) {
    document.getElementById("cost_lbl").setAttribute("hidden", "hidden");
    document.getElementById("scripted3").setAttribute("hidden", "hidden");
    document.getElementById("scripted4").setAttribute("hidden", "hidden");
  }
}
