var fonts =  document.querySelectorAll("select#fontChanger > option");
for(var i = 0; i < fonts.length; i++){
	fonts[i].style.fontFamily = fonts[i].value;
}

for(var i = 0; i < 10; i++){
	var opt = document.createElement("option");
	var node = document.createTextNode(i);
	opt.appendChild(node);
	var element_ = document.getElementById("fontSize");
	element_.appendChild(opt);
}

window.addEventListener("load", function(){
	var editor = textAreaFrame.document;
	editor.designMode = "on";
	
	
	boldButton.addEventListener("click", function(){
		editor.execCommand("Bold", false, null);
	},false);
	talicButton.addEventListener("click", function(){
		editor.execCommand("Italic", false, null);
	}, false);
	supButton.addEventListener("click", function(){
		editor.execCommand("Superscript", false, null);
	}, false);
	subButton.addEventListener("click", function(){
		editor.execCommand("Subscript", false, null);
	}, false);
	strikeButton.addEventListener("click", function(){
		editor.execCommand("Strikethrough", false, null);
	}, false);
	orderedListButton.addEventListener("click", function(){
		editor.execCommand("InsertOrderedList", false, "newOl"+Math.round(Math.random()*1000));
	}, false);
	unorderredListButton.addEventListener("click", function(){
		editor.execCommand("InsertUnorderedList", false, null);
	}, false);
	
	
	fontColorButton.addEventListener("change", function(event){
		editor.execCommand("ForeColor", false, event.target.value);
	}, false);
	highlightButton.addEventListener("change", function(event){
		editor.execCommand("BackColor", false, event.target.value);
	}, false);
	
	
	fontChanger.addEventListener("change", function(event){
		editor.execCommand("FontName", false, event.target.value);
	}, false);
	fontSize.addEventListener("change", function(event){
		editor.execCommand("FontSize", false, event.target.value);
	}, false);
	
	
	linkButton.addEventListener("click", function(){
		var url = prompt("Enter a url","https://");
		editor.execCommand("CreateLink", false, url);
	}, false);
	
	unLinkButton.addEventListener("click", function(){
		editor.execCommand("UnLink",false, null);
	}, false);
	
	undoButton.addEventListener("click", function(){
		editor.execCommand("undo",false, null);
	}, false);
	redoButton.addEventListener("click", function(){
		editor.execCommand("redo",false, null);
	}, false);
	
	savePdf.addEventListener("click", function(){
		/*
		var iframe = document.getElementById('textAreaFrame');
		var iframeDocument = iframe.contentWindow.document;
		var iframeContent = iframeDocument.getElementById('textAreaFrame')
		console.log(iframeContent);
		*/
		import jsPDF from 'jspdf.js';
		var base64Img = null;
		margins = {
		  top: 70,
		  bottom: 40,
		  left: 30,
		  width: 550
		};

		var pdf = new jsPDF('p', 'pt', 'a4');
		pdf.setFontSize(18);
		pdf.fromHTML(document.getElementById('textAreaFrame'), 
			margins.left, // x coord
			margins.top,
			{
			  // y coord
			  width: margins.width// max width of content on PDF
			},function(dispose) {
			  headerFooterFormatting(pdf)
			}, 
			margins);
			
		  var iframe = document.createElement('iframe');
		  iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
		  document.body.appendChild(iframe);
		  
		  iframe.src = pdf.output('datauristring');
		
	}, false);
	
},false);
