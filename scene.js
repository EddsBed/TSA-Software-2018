//this changes the scene characteristics. Called in in index.html. dimention returns the axis to set changes on (x, y, or z). values is the new value to change it to-->
function scenePosition(dimension,value){
    scene.position[dimension]=Number(value);
}

function sceneScale(dimension, value){
    scene.scale[dimension]=Number(value);
}

function sceneBackground(value){
    scene.background= new THREE.Color(value);
}

function sceneRotation(dimension,value){
    scene.rotation[dimension] = Number(value)*Math.PI/180;
}
