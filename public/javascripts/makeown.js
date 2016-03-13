$("#addWorka").click(function () {
	if($("#workName").val().length !=0 && $("#description").val().length !=0){
		swal({
		title: "Confirm",   
		text: "Submit to register",   
		type: "info", 
		showCancelButton: true,   
		closeOnConfirm: false,   
		showLoaderOnConfirm: true, 
		}, function(){
			$.ajax({
				url  : "/insertWork",
				type : "post",
				data:{
					workName:$("#workName").val(),
					description:$("#description").val(),
			},
				success : function(responses) {
						swal("Registered!", "Your information has been registered.", "success");
				}
				,error : function(){
						swal("Error!", "Error!", "error");
				}
			});
		});
	}else{
		swal("Required!", "You should input all of the items!", "error");
	}
});



