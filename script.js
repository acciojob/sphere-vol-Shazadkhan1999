function volume_sphere() {
    //Write your code here

	let r = document.getElementById("radius").value;
	if(r == "" || r <= 0){
		alert("please enter valid radius");
		return;
	} 
	
     let volume = (4 / 3) * Math.PI * Math.pow(r, 3);

    document.getElementById("volume").value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
