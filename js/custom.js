$(window).load(function() { $("#loading").fadeOut("slow"); });

var countries;
var selectedCountry;
var result;

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/help/countries",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fbf5d074admsh7ce041297fe6bf2p19f5d9jsne7c3c24afe7e",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
  countries = response;
  countries.forEach(function(item,index){
    $(".select-country").append("<option value="+countries[index].alpha3code +">" + countries[index].name + "</option>");
  });
});

$("select.select-country").change(function(){
  selectedCountry = $(this).children("option:selected").val();
});

$('.search').on('click',function(e){
  $('.result').show();
  e.preventDefault();
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid-19-data.p.rapidapi.com/country/code?code=" + selectedCountry,
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "fbf5d074admsh7ce041297fe6bf2p19f5d9jsne7c3c24afe7e",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    result = response;
    $('.name-val').text(result[0].country);
    $('.confirmed-val').text(result[0].confirmed);
    $('.recovered-val').text(result[0].recovered);
    $('.critical-val').text(result[0].critical);
    $('.deaths-val').text(result[0].deaths);
  });

})
 

