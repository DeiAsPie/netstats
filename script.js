function getGreetings(){
    $.getJSON("https://am.i.mullvad.net/json", function (data) {
			var display = `<h2>
    							Welcome my friend from ${if_city()} ${data.country}
  							</h2>
                            Your ISP, <u>${data.organization}</u> told me that your current IP is <u>${data.ip}</u>
       				        and your current location coordinates are <u>(${data.longitude}, ${data.latitude})</u>.
					
					        <br><br>
      				
					    BTW did you know that your that your connection <u>${blacklisted_or_not()}</u> blacklisted.`

			function blacklisted_or_not() {
				return `${data.blacklisted.blacklisted}` === true ? (`is`) : (`is not`);
			}

			function if_city() {
				return `${data.city}` === null ? '' : `${data.city},`;
			}
			$(".display").html(display);
		});
}