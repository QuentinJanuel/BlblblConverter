const txtToBlbl = txt => {
	if(txt.length == 0)
		return "";
	return "b"+Array.from(txt).map(letter =>
		Array.from(letter.charCodeAt(0).toString(2)).map(digit =>
			digit == 1 ? "b" : "l").join("")+"L").join("");
}

const blblToTxt = blbl => {
	let array = blbl.substring(1).split("L");
	array.pop();
	array = array.map(binaryBl => String.fromCharCode(parseInt(Array.from(binaryBl).map(bl => bl == "b" ? 1 : 0).join(""), 2)));
	return array.join("");
}

$(() => {
	$("#text").keydown(e => {
		if(e.originalEvent.key === "Enter"){
			$("#blblbl").val(txtToBlbl($("#text").val()));
			e.preventDefault();
		}
	});
	$("#blblbl").keydown(e => {
		if(e.originalEvent.key === "Enter"){
			$("#text").val(blblToTxt($("#blblbl").val()));
			e.preventDefault();
		}
	});
});
