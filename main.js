var shapes = [];
var x = 1;
var y = 1;
var z = 1;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, document.getElementById("mainWindow").offsetWidth/document.getElementById("mainWindow").offsetHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( document.getElementById("mainWindow").offsetWidth, document.getElementById("mainWindow").offsetHeight );
document.getElementById("mainWindow").appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 2,2,1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
shapes[0] = new THREE.Mesh( geometry, material );
var geometry2 = new THREE.BoxGeometry( 1, 1,1);
var material2 = new THREE.MeshBasicMaterial( { color: 0x8000ff } );
shapes[1] = new THREE.Mesh( geometry2, material2 );
scene.add(shapes[0]);
scene.add(shapes[1]);
var colorChange=false;
camera.position.z = 5;
var move = 0.01;

var animate = function () {
    requestAnimationFrame( animate );
    //Animation settings
    /*if(cube2.scale.x>=2 && !colorChange){
        colorChange=true;
        console.log("done")
        cube2.material.color.setHex( 0xff0000 );
    }*/
    for (var i=0; i<shapes.length; i++){
        shapes[i].rotation.x+=move;
        shapes[i].rotation.y+=move;
    }
    /*cube2.scale.x+=0.01;
    cube2.scale.y+=0.01;
    cube2.scale.z+=0.01*/
    shapes[1].scale.x=x;
    shapes[1].scale.y=y;
    shapes[1].scale.z=z;

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
    var newGeometry = new THREE.BoxGeometry(3,3,3);
    var newMaterial = new THREE.MeshBasicMaterial({color: getRandomColor()})
    shapes[shapes.length]=new THREE.Mesh(newGeometry, newMaterial);
    scene.add(shapes[shapes.length-1]);
    shapes[shapes.length-1].rotation.x = shapes[0].rotation.x;
    shapes[shapes.length-1].rotation.y = shapes[0].rotation.y;

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}