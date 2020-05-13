var foto;
window.onload=function(){
	foto =new Foto();
}
function selectimage(){
	document.getElementById("foto-file").click();
}
function makeGrayScale(){
	  foto.grayscale();
}
function makeBright(){
	foto.makeBright();
}
function makeDark(){
	foto.makeDark();
}
function makeBlur(){
	folo.applyBlurFilter();
}
function makeEmboss(){
	foto.applyEmbossFilter();
}
function makeSharp(){
	foto.applySharpFilter();
}
function download(){
	foto.export();
}
function opencolorpicker(){
	document.getElementById("color-picker").click();
}
function makeColorize(elem){
	var color= elem.value;
	foto.colorize(color);
}
function opencolorizecolorpicker(elem){
	document.getElementById("colorize-color-picker").click();
}
function applyColorfilter(elem){
	var color= elem.value;
	foto.colorize(color);
}
function makeTransparent(){
	foto.makeTransparent();
}

function crop(){
	foto.cropSelected();
}
function fliipvertically(){
	foto.flipVertically();
}
