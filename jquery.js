$(document).ready(function()
{
	// menyembunyikan semua dive container
	// dan hanya menampilkan 1 container pada halaman pertama yang ber ID "konsumen"
    $(".container1").css("display","none");
    $(".container2").css("display","none");
    $(".container3").css("display","none");
    $(".container4").css("display","none");
    $(".container5").css("display","none");
	$("#konsumen").css("display","block");
	
	// agar tombol navigasi aktif kita memanggil id "navigation"
	showViaLink($("ul#navigation li a"));
});

// menampilkan elemen yang diklik
function showViaKeypress(element_id)
{
	$(".container1").css("display","none");
    $(element_id).slideDown("slow");
    $(".container2").css("display","none");
    $(element_id).slideDown("slow");
    $(".container3").css("display","none");
    $(element_id).slideDown("slow");
    $(".container4").css("display","none");
    $(element_id).slideDown("slow");
    $(".container5").css("display","none");
	$(element_id).slideDown("slow");
}

// menampilkan container yang di klik dan menyembunyikan container yang tidak diklik
function showViaLink(array)
{
	array.each(function(i)
	{	
		$(this).click(function()
		{
			var target1 = $(this).attr("href");
			$(".container1").css("display","none");
            $(target1).slideDown("slow");
            var target2 = $(this).attr("href");
			$(".container2").css("display","none");
            $(target2).slideDown("slow");
            var target3 = $(this).attr("href");
			$(".container3").css("display","none");
            $(target3).slideDown("slow");
            var target4 = $(this).attr("href");
			$(".container4").css("display","none");
            $(target4).slideDown("slow");
            var target5 = $(this).attr("href");
			$(".container5").css("display","none");
			$(target5).slideDown("slow");
		});
	});
}