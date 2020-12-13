var cK
var plugins = {
    
}
setTimeout(function(){
    document.getElementsByTagName("canvas")[1].style.position="absolute"
    document.getElementsByTagName("canvas")[1].style.left="0%"
    document.getElementsByTagName("canvas")[1].style.top="0%"
    document.getElementsByTagName("canvas")[1].style.width="100%"
    document.getElementsByTagName("canvas")[1].style.height="100%"
},3)
var canCreateBody=true
var canCreateDialogs=true
function createRect(x,y,w,h) {
    setTimeout(function(){
    if(canCreateBody){
 bx=Bodies.rectangle(x,y,w,h)
 //elems.push(new Bodies.rectangle(x,y,w,h))
 World.add(engine.world, new Bodies.rectangle(x,y,w,h))
 //setInterval(function(){qqq.innerHTML=elems[0].position.y})
    }
    },10)
}
function setWireframe(bool) {
    render.options.wireframes=bool
}
function variable(variableName, variableValue) {
varNum++
var regExp = /[a-zA-Z]/g;
var varVar="var "+variableName+"="+variableValue;
if(variableValue=="true"||variableValue=="false") {
 //dataType="boolean"
 dT[variableName]=typeof variableValue
}
else if(varVar.includes("'")||varVar.includes('"')){//regExp.compilerTextArea(variableValue)&&variableValue.startsWith("'")&&variableValue.endsWith("'")||regExp.compilerTextArea(variableValue)&&variableValue.startsWith('"')&&variableValue.endsWith('"')){
 //dataType="string"
 dT[variableName]=typeof variableValue
} else {
 //dataType="number"
 dT[variableName]=typeof variableValue
}
 var newScript=document.createElement("script")
 newScript.textContent=varVar
 document.body.appendChild(newScript)
 eval("setTimeout(function(){"+varVar+"},10)")
}
function getDataType(vN) {
 alert(typeof vN)
}
function gameRefresher(){
game = {
 getKey: cK,
 winSize:{x: document.getElementsByTagName("canvas")[1].getBoundingClientRect().width, y: document.getElementsByTagName("canvas")[1].getBoundingClientRect().height},
 }
}
setInterval(gameRefresher)

if(document.getElementsByTagName("canvas")[1]){document.getElementsByTagName("canvas")[1].addEventListener("keydown",function(event){
if(!event.repeat){
    cK=event.key
    //setTimeout(function(){if(game.getKey==key){eval(code)}},3)
}})}
var keyCount=0
function addKey(func,code) {
keyCount++
var keyExecution="function _keyPressed"+keyCount+"() {"+func+"{"+code+"}};"+"document.getElementsByTagName('div')[0].onkeyup=function(){_keyPressed"+keyCount+"()}"
var newScript=document.createElement("script")
newScript.textContent=keyExecution

eval("setTimeout(function(){"+keyExecution+"},10)"
);document.body.appendChild(newScript)
}
function loadPlugin(pluginMode,pluginMode2,pluginMode3,pluginMode4,pluginMode5,pluginMode6,pluginMode7,pluginMode8,pluginMode9,pluginMode10,pluginMode11,pluginMode12,pluginMode13) {
if(!pluginMode=='') {
if(pluginMode.length>0) {
    if(pluginMode=="collision"||pluginMode=="time"||pluginMode=="keyboardEvent"){
  plugins[pluginMode]=true
  }
  else {
  //console.error('wtf is this statement ? >:[')
 }
 }
}
if(!pluginMode2=='') {
 if(pluginMode2.length>0) {
  plugins[pluginMode2]=true
 }
}
if(!pluginMode3=='') {
 if(pluginMode3.length>0) {
  plugins[pluginMode3]=true
 }
}
if(!pluginMode4=='') {
 if(pluginMode4.length>0) {
  plugins[pluginMode4]=true
 }
}
if(!pluginMode5=='') {
 if(pluginMode5.length>0) {
  plugins[pluginMode5]=true
 }
}
if(!pluginMode6=='') {
 if(pluginMode6.length>0) {
  plugins[pluginMode6]=true
 }
}
if(!pluginMode7=='') {
 if(pluginMode7.length>0) {
  plugins[pluginMode7]=true
 }
}
if(!pluginMode8=='') {
 if(pluginMode8.length>0) {
  plugins[pluginMode8]=true
 }
}
if(!pluginMode9=='') {
 if(pluginMode9.length>0) {
  plugins[pluginMode9]=true
 }
}
if(!pluginMode10=='') {
 if(pluginMode10.length>0) {
  plugins[pluginMode10]=true
 }
}
if(!pluginMode11=='') {
 if(pluginMode11.length>0) {
  plugins[pluginMode11]=true
 }
}
if(!pluginMode12=='') {
 if(pluginMode12.length>0) {
  plugins[pluginMode12]=true
 }
}
if(!pluginMode13=='') {
 if(pluginMode13.length>0) {
  plugins[pluginMode13]=true
 }
}
}
setInterval(function(){
 if(plugins.hasOwnProperty("undefined")){
  delete plugins[undefined]
 }
})
/*
function plugin(pluginMode) {
 if(pluginMode.includes("collision")&&pluginMode.startsWith("{")&&pluginMode.endsWith("}")) {
  plugins["collision"]=true
 }
 if(pluginMode.includes("time")&&pluginMode.startsWith("{")&&pluginMode.endsWith("}")) {
  plugins["time"]=true
 }
 alert(pluginMode.split)
}
*/
function IMPORT(scriptSource) {
 var newScript=document.createElement("script")
 newScript.src=scriptSource
 document.body.appendChild(newScript)
}
function loop(interval, intName, code) {
 eval("setTimeout(function(){"+"for(var "+intName+"=0;"+intName+"<"+interval+"-1;"+intName+"++){"+code+"}"+"},10)")
}
function wait(time, converison, code) {
 var _time
 var convertedCode
 var n
 if(converison=="s"){
     _time=time+"000"
 }
 if(converison=="ms"){
     _time=time+"00"
 }
 if(code.startsWith("{")&&code.endsWith("}")){
 n=code.slice(0,-1).substring(1)
 convertedCode="setTimeout(function(){"+n+"},"+_time+")"
 }
 if(!code.startsWith("{")){alert("Missing { to the wait statement.")}
 if(!code.endsWith("}")){alert("Missing } to the wait statement.")}
 eval("setTimeout(function(){"+convertedCode+"},10)")
 //alert(convertedCode)
}
var ttf = document.createElement('link')
ttf.setAttribute('rel', 'stylesheet')
ttf.setAttribute('type', 'text/css')
ttf.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap')
document.head.appendChild(ttf)
setTimeout(function(){
    document.getElementsByTagName("div")[0].style.width="100%"
    document.getElementsByTagName("div")[0].style.height="100%"
},3)
function createDialog(title, text) {
if(canCreateDialogs){
 var dialogBg=document.createElement("div")
 var dialogHeader=document.createElement("div")
 var dialogTitle=document.createElement("h3")
 var dialogText=document.createElement("h3")
 var dialogX=document.createElement("button")
 
 if(document.getElementsByTagName("div")[0]){
 dialogBg.style.background="gray"
 dialogBg.style.position="absolute"
 dialogBg.style.left=document.getElementsByTagName("div")[0].style.width.split("%").join("")-50+"%"
 dialogBg.style.top=document.getElementsByTagName("div")[0].style.height.split("%").join("")/2+"%"
 dialogBg.style.width=300
 dialogBg.style.zIndex=2000
 dialogBg.style.height=200
 dialogBg.style.transform = "translate(-50%, -50%)"
 dialogBg.id="dialogBg"
 dialogBg.setAttribute("class", "dBg")
 }

 dialogHeader.style.background="#000000"
 dialogHeader.style.position="absolute"
 dialogHeader.style.width=300
 dialogHeader.style.height=30
 dialogHeader.style.zIndex=2000
 dialogHeader.style.cursor="grab"
 dialogBg.id="dialogHeader"

 dialogTitle.style.position="absolute"
 dialogTitle.style.color="#ffffff"
 dialogTitle.style.fontFamily="Roboto"
 dialogTitle.style.zIndex=2000
 dialogTitle.style.left=parseInt(dialogHeader.style.width.split("px").join(""))/3
 dialogTitle.style.top=parseInt(dialogHeader.style.height.split("px").join(""))-45
 dialogTitle.innerHTML=title

 dialogText.style.position="absolute"
 dialogText.style.color="#000000"
 dialogText.style.zIndex=2000
 dialogText.style.fontFamily="Roboto"
 dialogText.style.left=parseInt(dialogBg.style.width.split("px").join(""))-290
 dialogText.style.top=parseInt(dialogBg.style.height.split("px").join(""))-185
 dialogText.innerHTML=text

 dialogX.style.position="absolute"
 dialogX.style.background="darkred"
 dialogX.style.color="#000000"
 dialogX.style.width=30
 dialogX.style.height=30
 dialogX.style.zIndex=2000
 dialogX.style.outline="none"
 dialogX.style.border="none"
 dialogX.style.fontFamily="Roboto"
 dialogX.style.cursor="pointer"
 dialogX.style.left=parseInt(dialogBg.style.width.split("px").join(""))-30
 dialogX.style.top=parseInt(dialogBg.style.height.split("px").join(""))-200
 dialogX.innerHTML="X"
 dialogX.onmouseover=function(){dialogX.style.background="red"}
 dialogX.onmouseout=function(){dialogX.style.background="darkred"}
 dialogX.onclick=function(){
     for(var x=0;x<document.getElementsByClassName("dBg").length;x++){
       document.getElementsByClassName("dBg")[x].remove()
      }
     }
 
     if(document.getElementsByTagName("div")[0]){
     document.getElementsByTagName("div")[0].style.overflow="auto"
     document.getElementsByTagName("div")[0].appendChild(dialogBg)
 dialogBg.appendChild(dialogHeader)
 dialogBg.appendChild(dialogTitle)
 dialogBg.appendChild(dialogText)
 dialogBg.appendChild(dialogX)
 }
}
else {
    return false
}

var isDown = false
var elem = dialogBg
var div = dialogHeader
div.addEventListener('mousedown', function(e) {
    isDown = true;
    dialogHeader.style.cursor="grabbing"
    offset = [
        elem.offsetLeft - e.clientX,
        elem.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
    dialogHeader.style.cursor="grab"
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        dialogHeader.style.cursor="grabbing"
        elem.style.left = (mousePosition.x + offset[0]) + 'px';
        elem.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);
function ungrab() {
 return false
 }
}


function collisionDetection(obj1,obj2,code) {
    eval("setTimeout(function(){"+"setInterval(function(){var collision = Matter.SAT.collides("+obj1+", "+obj2+");if (collision.collided) {"+code+";}},10)"+"},10)"+"},10)")
/*
    var part = editor.setValue(substring(
        compilerTextArea.value.lastIndexOf("collisionDetection")+27+getFnParamNames(collisionDetection).join(",").length, 
        compilerTextArea.value.lastIndexOf("endCol();")
));
*/
//alert(part)
/*
Matter.Events.on(engine, 'collisionStart', function(event) {
    var A_Elm = obj1;
    var B_Elm = obj2;
    setTimeout(function(){
    eval(code)
    canForce=true
    setTimeout(function(){canForce=false},10)
    },10)
})
*/
 //setTimeout(function(){alert(getFnParamNames(collisionDetection).join(",").length)},1000)
}
var win
setInterval(function(){
if(document.getElementsByClassName("exeDiv").length==1){
// setTimeout(function(){
//     console.log(win)
// },1000)
win = {
 x: document.getElementsByClassName("exeDiv")[0].getBoundingClientRect().width,
 y: document.getElementsByClassName("exeDiv")[0].getBoundingClientRect().height
  }
 }
})
function createGround(x,y,w,h) {
if(x=="def"&&y=="def"&&w=="def"&&h=="def"){
 ground = Bodies.rectangle(win.x-480, win.y, win.x, 100, { isStatic: true })
 World.add(engine.world, [ground])
}
else {
setTimeout(function(){
 ground = Bodies.rectangle(x, y, w, h, { isStatic: true })
 World.add(engine.world, [ground])
  },50)
 }
}
function removeBody(body) {
    World.remove(engine.world, body)
 //var ind=elems.indexOf(2)
    //elems.splice(ind, 1)
    //console.log(elems)
 //World.remove(engine.world, body)
}
function addForceX(body,val) {
    setTimeout(function(){
        if(canForce){
 Matter.Body.applyForce( body, {x: body.position.x, y: body.position.y}, {x: val, y: 0});
        }
    },10)
}
function addForceY(body,val) {
if(!val.toString().indexOf('-')&&canForce===true){
    setTimeout(function(){
    Matter.Body.applyForce( body, {x: body.position.x, y: body.position.y}, {x: 0, y: Math.abs(val)});
},10)
}
if(val.toString().indexOf('-')&&canForce===true){
    setTimeout(function(){
 Matter.Body.applyForce( body, {x: body.position.x, y: body.position.y}, {x: 0, y: -Math.abs(val)});
},10)
}}
module.exports.uycProgrammingLanguage = uycProgrammingLanguage