$(document).ready(function(){
  $(".number").change(function(){
      var selected = $(this).children("option:selected").val();
      console.log(selected);
      if(selected == "1"){
      
        $("#div1").show();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
    }
      else if(selected == "2"){
        $("#div1").show();
        $("#div2").show();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
    }
      else if(selected == "3"){
        $("#div1").show();
        $("#div2").show();
        $("#div3").show();
        $("#div4").hide();
        $("#div5").hide();
    }
      else if(selected == "4"){
        $("#div1").show();
        $("#div2").show();
        $("#div3").show();
        $("#div4").show();
        $("#div5").hide();
      }
       else if(selected == "5"){
        $("#div1").show();
        $("#div2").show();
        $("#div3").show();
        $("#div4").show();
        $("#div5").show();
      }

      else{
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
        $("#div4").hide();
        $("#div5").hide();
      }

    });
  });
