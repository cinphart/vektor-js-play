var doc = window.document;
// set up IE to handle VML
doc.createStyleSheet().addRule('.rvml','behavior:url(#default#VML)');
doc.getElementById('output').innerText = "Stylesheet Created";
doc.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
doc.getElementById('output').innerText = "Namespace Created";

// Create an oval
var oval = doc.createElement("<rvml:oval fillcolor='green' style='position:absolute;top:0;left:0;width:50;height:50' class='rvml'/>");
// Create a rectangle
var rect = doc.createElement("<rvml:rect fillcolor='red' style='position:absolute;top:52;left:0;width:50;height:50' class='rvml'/>");


// Add them both to the document
doc.getElementById('output').innerText = "Element Created";
doc.getElementById('canvas').appendChild(oval);
doc.getElementById('canvas').appendChild(rect);
doc.getElementById('output').innerText = "Element Appended";