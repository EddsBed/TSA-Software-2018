function newRing(x, y, z, posX, posY, posZ, newColor){
    var newGeometry = new THREE.TorusGeometry( 0.5, 0.25, 200, 200);
    var newMaterial = new THREE.MeshBasicMaterial({color: newColor});
    shapes[shapes.length]=new THREE.Mesh(newGeometry, newMaterial);
    var length = scales.length;
    newGeometry.name = "ring"
    scales[length]=[];
    scales[length][0]=x;
    scales[length][1]=y;
    scales[length][2]=z;
    scene.add(shapes[shapes.length-1]);
    selectedShape++;
    setSelectedShape(selectedShape);
    moveShape(x, posX);
    moveShape(y, posY);
    moveShape(z, posZ);
}