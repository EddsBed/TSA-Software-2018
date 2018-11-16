//jordan's code
function newCube(x, y, z, posX, posY, posZ, newColor, borderColor){
    
    //creates a 1x1x1 box, so that we can scale with the scales variable.
    var newGeometry = new THREE.BoxGeometry(1, 1, 1);
    //creates the Material object with info about how the cube looks
    var newMaterial = new THREE.MeshBasicMaterial({color: newColor});
    //adds the shape to the shapes array.
    shapes[shapes.length]=new THREE.Mesh(newGeometry, newMaterial);
    var length = scales.length;
    newGeometry.name = "cube";
    //initiallizes dimensions of the cube with the x, y, and z variables passed into the function. 
    scales[length]=[];
    scales[length][0]=x;
    scales[length][1]=y;
    scales[length][2]=z;
    //creates the shape in the scene.
    scene.add(shapes[shapes.length-1]);
    //sets the selected shape to the new one we just created;
    selectedShape++;
    //this basically replecates everything we did above but creates the border instead of the actual shape.
    var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
    var edges = new THREE.EdgesGeometry( geometry );
    var borderToAdd = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: borderColor } ) );
    borderToAdd.scale.x = x;
    borderToAdd.scale.y = y;
    borderToAdd.scale.z = z;
    //adds the border to the borders array, similar to the shapes array
    borders.push(borderToAdd);
    //adds the border itself to the scene
    scene.add( borderToAdd );
    setSelectedShape(selectedShape);
    //moves the shape into position.
    moveShape("x", posX);
    moveShape("y", posY);
    moveShape("z", posZ);

}

