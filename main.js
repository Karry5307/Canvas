var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var blockSize = 10;
function readColor() {
	var colorString = prompt('Please input color: ').toUpperCase();
	if(!(/[\dA-F]/.test(colorString))) {
		alert('Input error!');
	} else {
		ctx.fillStyle = "#" + colorString;
	}
}
addEventListener("click",function(event) {
		console.log(event.pageX, event.pageY);
		var x = Math.floor(event.pageX / blockSize) * blockSize - 10;
		var y = Math.floor(event.pageY / blockSize) * blockSize - 10;
		ctx.fillRect(x, y, blockSize, blockSize);
});
addEventListener("keydown",function(event) {
		if(event.keyCode == 86 && event.ctrlKey) {
			readColor();
		}
});
addEventListener("keydown",function(event) {
		if(event.keyCode == 87 && event.ctrlKey) {
			var size = Number(prompt("Please input size!"));
			if(isNaN(size)) {
				alert("Input error!");
			} else {
				blockSize = size;
			}
		}
});
