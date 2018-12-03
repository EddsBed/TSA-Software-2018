 //jordan's code

function getRandomColor() {//returns a random number in Hex
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor(value){//changes the selected shapes color to value
    shapes[selectedShape].material.color.set(value);
}

function rgbToHex (num) {//pretty self explainitory
    var hex = Number(num).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};


function addShape(){//completely unnecessary, is it even implemented?
    var shapeType = document.getElementById("shapeSelector").value;
    // if it's literially the same call every time, why??
    switch(shapeType){
        case "cube" :
            addShapeMenu();
            break;
        case "cylinder" :
            addShapeMenu();
            break;
        case "cone" :
            addShapeMenu();
            break;
        case "dodecahedron" :
            addShapeMenu();
            break;
        case "icosahedron" :
            addShapeMenu();
            break;
        case "octahedron" :
            addShapeMenu();
            break;
        case "pyramid" :
            addShapeMenu();
            break;
        case "ring" :
            addShapeMenu();
            break;
        case "sphere" :
            addShapeMenu();
            break;
        case "text" :
            addShapeMenu();
            break;
        case "tube" :
            addShapeMenu();
            break;
    }
}

function createShape(){//is this one necessary and/or impletemented 
    var shapeType = document.getElementById("shapeSelector").value;
    var setColor = document.getElementById("colorSet").value;
    var posX = document.getElementById("createPositionX").value;
    var posY = document.getElementById("createPositionY").value;
    var posZ = document.getElementById("createPositionZ").value;
    var borderColor = document.getElementById('createColorBorder').value;
    // if it's literially the same call every time, why??
    switch(shapeType){
        case "cube" :
            newCube(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
            break;
        case "cylinder" :
            newCylinder(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
            break;
        case "cone" :
            newCone(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
            break;
        case "dodecahedron" :
            newDodecahedron(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
            break;
        case "icosahedron" :
            newIcosahedron(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
            break;
        case "octahedron" :
            newOctahedron(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
            break;
        case "pyramid" :
            newPyramid(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
            break;
        case "ring" :
            newRing(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
            break;
        case "sphere" :
            newSphere(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
            break;
        case "text" :
           newText(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
           break;
        case "tube" :
            newTube(createX, createY, createZ, posX, posY, posZ, setColor, borderColor);
            break;
    }

}


