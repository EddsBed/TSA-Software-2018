/*
*
* This file is in charge of handling all animation
* Checks the position variable against the the actual position
* author Jordan
 */





var animate = function () {
    requestAnimationFrame( animate );//Requests a new frame from 3js
    //checks camera position with the new position stored in the var TODO CHANGE THE WAY THIS WORKS
    if(camera.position.x!=xPosition)
        camera.position.x = xPosition;

    if(camera.position.y!=yPosition)
        camera.position.y = yPosition;

    if(camera.position.z!=zPosition)
        camera.position.z = zPosition;

    //Changes camera angle to where the mouse is pointed
    camera.lookAt(scene.position);

//Updating shapes....
    for (var i=0; i<shapes.length; i++){
        if(shapes[i].scale.x!=scales[i][0])
            shapes[i].scale.x=scales[i][0];

        if(shapes[i].scale.y!=scales[i][1])
            shapes[i].scale.y=scales[i][1];

        if(shapes[i].scale.z!=scales[i][2])
            shapes[i].scale.z=scales[i][2];

    }
//tells 3js that we have a new frame we want rendered
    renderer.render( scene, camera );
};
//Calls the next frame
animate();
