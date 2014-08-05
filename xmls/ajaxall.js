// JavaScript Document
//203
$(document).ready(function() {
    $("#203b").click(x203);
    $("#264b").click(x264);
	$("#466b").click(x466);
    $("#543b").click(x543);
    $("#654b").click(x654);
	 $("#comb").click(commn);
    $("#215b").click(gp215);
    $("#405b").click(gp405);


	});
// canon codes //

// common codes 
function commn(){
	$("#canon").empty();
	  $.ajax({
    type: "GET",
    url: "xmls/canon.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('canon').each(function(){
      var serror = $(this).find('Error').text();
      var sdesc = $(this).find('Cause').text();
	        var saction = $(this).find('Action').text();
      $("<div class='concor'></div>").html("<div class='error'>" + serror + "</div>" + "<div class='desc'>" + sdesc + "</div>" + "<div class='actn'>" + saction + "</div>").appendTo("#canon");
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }	
		});
}
	
// gp215
function gp215(){
	$("#canon").empty();
	  $.ajax({
    type: "GET",
    url: "xmls/gp215.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('gp215').each(function(){
      var serror = $(this).find('Error').text();
      var sdesc = $(this).find('Cause').text();
	        var saction = $(this).find('Description').text();
      $("<div class='concor'></div>").html("<div class='error'>" + serror + "</div>" + "<div class='desc'>" + sdesc + "</div>" + "<div class='actn'>" + saction + "</div>").appendTo("#canon");
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }	
		});
}
	// gp405
function gp405(){
	$("#canon").empty();
	  $.ajax({
    type: "GET",
    url: "xmls/gp405.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('gp405').each(function(){
      var serror = $(this).find('Error').text();
      var sdetail = $(this).find('Detail').text();
      var sdesc = $(this).find('Cause').text();
	        var saction = $(this).find('Description').text();
      $("<div class='concor'></div>").html("<div class='error'>" + serror + "</div>" + "<div class='detl'>" + sdetail + "</div>" +  "<div class='desc'>" + sdesc + "</div>" + "<div class='actn'>" + saction + "</div>").appendTo("#canon");
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }	
		});
}

	
// lexmark codes //	
function x203(){
	$("#dis").empty();
	  $.ajax({
    type: "GET",
    url: "xmls/203.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('x203n').each(function(){
      var serror = $(this).find('Error').text();
      var sdesc = $(this).find('Description').text();
	        var saction = $(this).find('Action').text();
      $("<div class='concor'></div>").html("<div class='error'>" + serror + "</div>" + "<div class='desc'>" + sdesc + "</div>" + "<div class='actn'>" + saction + "</div>").appendTo("#dis");
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }	
		});
}
//264
function x264(){
	$("#dis").empty();
	  $.ajax({
    type: "GET",
    url: "xmls/264.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('x264').each(function(){
      var serror = $(this).find('Error').text();
      var sdesc = $(this).find('Description').text();
	        var saction = $(this).find('Action').text();
      $("<div class='concor'></div>").html("<div class='error'>" + serror + "</div>" + "<div class='desc'>" + sdesc + "</div>" + "<div class='actn'>" + saction + "</div>").appendTo("#dis");
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }		
		});
}
//466
function x466(){
	$("#dis").empty();
	  $.ajax({
    type: "GET",
    url: "xmls/466.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('x466').each(function(){
      var serror = $(this).find('Error').text();
      var sdesc = $(this).find('Description').text();
	        var saction = $(this).find('Action').text();
      $("<div class='concor'></div>").html("<div class='error'>" + serror + "</div>" + "<div class='desc'>" + sdesc + "</div>" + "<div class='actn'>" + saction + "</div>").appendTo("#dis");
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }		
		});
}
//543
function x543(){
	$("#dis").empty();
	  $.ajax({
    type: "GET",
    url: "xmls/543.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('x543').each(function(){
      var serror = $(this).find('Error').text();
      var sdesc = $(this).find('Description').text();
	        var saction = $(this).find('Action').text();
      $("<div class='concor'></div>").html("<div class='error'>" + serror + "</div>" + "<div class='desc'>" + sdesc + "</div>" + "<div class='actn'>" + saction + "</div>").appendTo("#dis");
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }		
		});
}
//654
function x654(){
	$("#dis").empty();
	  $.ajax({
    type: "GET",
    url: "xmls/654.xml",
    dataType: "xml",
    success: function(xml){
    $(xml).find('x654').each(function(){
      var serror = $(this).find('Error').text();
      var sdesc = $(this).find('Description').text();
	  var saction = $(this).find('Action').text();
	var sugest = $(this).find('Suggestion').text();

      $("<div class='concor'></div>").html("<div class='error'>" + serror + "</div>" + "<div class='desc'>" + sdesc + "</div>" + "<div class='actn'>" + saction + "</div>"  + "<div class='sugest'>" + sugest + "</div>").appendTo("#dis");
    });
  },
  error: function() {
    alert("An error occurred while processing XML file.");
  }		
		});
}
