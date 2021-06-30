$( document ).ready(function() {
    $("#btn").click(function(){
        if (this.textContent === "Show") {
            this.textContent = "Hide";
            $("#content").css("color", "black");
        }else{
            this.textContent = "Show";
            $("#content").css("color", "white");

        }
    })
  });