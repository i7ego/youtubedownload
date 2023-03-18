document.querySelector(".download").addEventListener("click",()=>{
	let link = document.querySelector(".linkOfVideo").value;
		const data = {
			"url": `${link}`
		};
		
		fetch('https://save-from.net/api/convert', {
		  method: 'POST', // or 'PUT'
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		})
		  .then((response) => response.json())
		  .then((data) => {
			  const AllUrls = data.url;
			  console.log(data);
			showAllUrls(AllUrls,data.thumb,data.meta.title);

		})
		.catch((error) => {
			console.error('Error:', error);
		});
	



	

		// fetch(`https://api.snappea.com/v1/video/details?url=${link}`, {
		//   method: 'GET', // or 'PUT'
		//   headers: {
		// 	'Content-Type': 'application/json',
		//   },
		// })
		//   .then((response) => response.json())
		//   .then((data) => {
		// 	console.log(data.videoInfo);
		// })
		// .catch((error) => {
		// 	console.error('Error:', error);
		// });
})

let arrow = document.querySelector(".arrow-container");
let head = document.getElementById("head");
let short = document.getElementById("short");
let vid = document.querySelector(".linkOfVideo");
short.onclick = function(){
	if (vid.value==""){
		head.innerText = "Please Enter a correct URL !";
		arrow.style.display = "none";
	// } else if (clik.catch==error){	
	// 	head.innerText = "Please Enter a correct URL !";
	// 	arrow.style.display = "none";
	} else {	
		head.innerText = "Your video is ready";
		arrow.style.display = "inline";
		window.scroll({
			top: window.innerHeight,
			behavior: 'smooth'
				
			});
		window.onscroll = function() {
		if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
		  arrow.style.display = "none";
		}else{
		  arrow.style.display = "inline";
		}
	  }
	}
}

arrow.onclick = function(){
	window.scroll({
		top: window.innerHeight,
		behavior: 'smooth'
			
		});
}

function scrollToSection(sectionId) {
	var section = document.querySelector(sectionId);
	window.scroll({
	  top: section.offsetTop,
	  behavior: 'smooth'
	});
	// setTimeout(function() {
	//   window.open('about:blank', '_blank');
	// }, 1000);
  }

function showForm(){
	document.querySelector(".form").innerHTML = `
	<h1>Get In Touch With Me!</h1>
    <form action="https://fabform.io/f/pc33wkP" method="POST">
        <input type="text" name="First Name" placeholder="Your  First Name" required >
        <input type="text" name="Last Name" placeholder="Your Last Name" required>
        <input type="email" name="email" placeholder="Your email" required>
        <textarea name="message" placeholder="Your message here" required></textarea>
        <button type="submit">Send</button>
    </form>`;
};


function showAllUrls(AllUrls,img,title){
	document.querySelector(".LinksDad").innerHTML=`
	
	<img src="${img}" alt="" style="width: 80%; margin: 0 auto 30px auto; border-radius: 20px;">
	<br>
	<h1 style="text-align: center;">${title}</h1>
	<br>
	<br>
	
	`;
	AllUrls.forEach((e) => {

		if(e.attr.class==""){

			let x = parseInt(e.filesize);
			
			document.querySelector(".LinksDad").innerHTML+=`
			<div style="margin: 10px 0px; min-width: 200px; display: flex; justify-content: center;">
				<a href="${e.url}" class="Link">${e.quality}p${!isNaN(x)?"_"+parseInt(x/1000000)+"MB":""}.${e.type} ${e.attr.class}</a>
			</div>
			`

		}

	});
};