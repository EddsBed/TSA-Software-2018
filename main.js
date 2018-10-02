var shapes = [];
var scales = [[2,2,2],[3,3,1]];
var x = 1;
var y = 1;
var z = 1;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, document.getElementById("mainWindow").offsetWidth/document.getElementById("mainWindow").offsetHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( document.getElementById("mainWindow").offsetWidth, document.getElementById("mainWindow").offsetHeight );
document.getElementById("mainWindow").appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1,1,1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
shapes[0] = new THREE.Mesh( geometry, material );
var geometry2 = new THREE.BoxGeometry( 1, 1,1);
var material2 = new THREE.MeshBasicMaterial( { color: 0x8000ff } );
shapes[1] = new THREE.Mesh( geometry2, material2 );
document.getElementById('colorChanger').value="#8000ff"
scene.add(shapes[0]);
scene.add(shapes[1]);
camera.position.z = 5;
var move = 0.01;

var animate = function () {
    requestAnimationFrame( animate );
    //Animation settings
    for (var i=0; i<shapes.length; i++){
        shapes[i].rotation.x+=move;
        shapes[i].rotation.y+=move;
        shapes[i].rotation.z+=move;
        shapes[i].scale.x=scales[i][0];
        shapes[i].scale.y=scales[i][1];
        shapes[i].scale.z=scales[i][2];
    }

    renderer.render( scene, camera );
};
function changeBoxDims(dimension,value){
    if(dimension=="x"){
        x=value;
    }
    else if(dimension=="y"){
        y=value;
    }
    else if(dimension=="z"){
        z=value;
    }
    console.log("INFORMATION: New deminsion for " + "Cube 1 " + dimension + " =" + value)

}
animate();

function showList(){
    var sideBar=document.getElementById('sideBar');
    sideBar.innerHTML="";
    for (var i=0; i<shapes.length; i++){
        console.log("Shape "+(i+1)+": "+shapes[i]['geometry']['type']);
        sideBar.innerHTML+=(i+1)+": "+shapes[i]['geometry']['type']+"<br>";
    }
}

function newCube(){
    var newGeometry = new THREE.BoxGeometry(1,1,1);
    var color = getRandomColor();
    document.getElementById('colorChanger').value=color;
    var newMaterial = new THREE.MeshBasicMaterial({color: color})
    shapes[shapes.length]=new THREE.Mesh(newGeometry, newMaterial);
    var length = scales.length;
    scales[length]=[];
    scales[length][0]=1;
    scales[length][1]=1;
    scales[length][2]=1;
    scene.add(shapes[shapes.length-1]);
    shapes[length].rotation.x = shapes[0].rotation.x;
    shapes[length].rotation.y = shapes[0].rotation.y;
    shapes[length].rotation.z = shapes[0].rotation.z;



}
function newCubeDimensions(dimension,value){
    switch(dimension){
        case "x":
            scales[scales.length-1][0]=value;
            break;
        case "y":
            scales[scales.length-1][1]=value;
            break;
        case "z":
            scales[scales.length-1][2]=value;
            break;
    }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor(value){
    shapes[shapes.length-1].material.color.set(value);
}