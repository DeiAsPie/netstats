fetch("https://am.i.mullvad.net/json")
	.then((response) => response.json())
  	.then((data) => {
		const display = `<h2>
						Welcome my friend from ${data.city === null ? '' : `${data.city},`} ${data.country}
					  </h2>
					Your ISP, <u>${data.organization}</u> told me that your current IP is <u>${data.ip}</u>
					   and your current location coordinates are <u>(${data.longitude}, ${data.latitude})</u>.
			
					<br><br>
			  
				BTW did you know that your that your connection <u>${data.blacklisted.blacklisted === true ? (`is`) : (`is not`)}</u> blacklisted.`

	let toDisplay = document.getElementById('display')
	toDisplay.innerHTML = display
});