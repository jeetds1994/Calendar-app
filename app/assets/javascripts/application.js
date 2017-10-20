// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  document.querySelectorAll(".events").forEach(p => p.addEventListener("click", (e) => {
    let message = e.target.dataset.message
    let id = e.target.id
    let doc = document.getElementById(`span${id}`)
    if(doc.style.visibility == "" || doc.style.visibility == "hidden"){
      doc.style.visibility = "visible"
    }else{
      doc.style.visibility = "hidden";
    }
  }))
});
