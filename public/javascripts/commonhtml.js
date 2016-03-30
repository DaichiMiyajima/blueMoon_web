$(document).ready(function(){
	writeHeader();
	writeFooter();
});

function writeHeader(){
	$.ajax({
		url: "../public/commonview/header/header.html", 
		cache: false,
		async: false,
		success: function(html){
		document.getElementById("header").innerHTML = html;
		}
	});
}

function writeFooter(){
	$.ajax({
		url: "../public/commonview/footer/footer.html", 
		cache: false,
		async: false,
		success: function(html){
		document.getElementById("footer").innerHTML = html;
		}
	});
}