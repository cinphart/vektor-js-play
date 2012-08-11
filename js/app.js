var doc = window.document;

var type = (window.SVGAngle || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"))?"SVG":"VML";

var op = document.getElementById('output');

function log(x) {
    window.console && console.log(x);
    op.removeChild(op.firstChild);
    op.appendChild(document.createTextNode(x));
}

if (type == "VML") {
    
    // set up IE to handle VML
    doc.createStyleSheet().addRule('.rvml','behavior:url(#default#VML)');
    log("Stylesheet Created");
    doc.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    log("Namespace Created");

    // Create an oval
    //var oval = doc.createElement("<rvml:oval fillcolor='green' style='position:absolute;top:0;left:0;width:50;height:50' class='rvml'/>");
    // Create a rectangle
    //var rect = doc.createElement("<rvml:rect fillcolor='red' style='position:absolute;top:52;left:0;width:50;height:50' class='rvml'/>");


    // Add them both to the document
    log("Elements Created");
    //doc.getElementById('canvas').appendChild(oval);
    //doc.getElementById('canvas').appendChild(rect);
    log("Element Appended");
}
if (document.getElementById('canvas')) {
    
    log("Implementation is: " + type + ", canvas style is: " + document.getElementById('canvas').style.cssText);
}

angular.module('myApp',[])
   .directive(
       'vcFillColor',
       function(){
           log("directive set up");
           return function postLink(scope, elem, attrs, controller) {
                   log(elem[0]);
                   log(attrs.vcFillColor);
                   attrs.$observe('vcFillColor',
                                   function(value){
                                       log("vcFillColor Observed change to: " + value);
                                       elem[0].fillcolor = value;
                                   });
               };
       });

function Controller($scope) {
  $scope.height = 100;
  $scope.width = 100;
}