// ui.postMessage({ "scriptMessage": {
//     "type": "random"
// }});
// ui.postMessage({ "scriptMessage": {
//     "type": "random1"
// }});
// ui.postMessage({ "scriptMessage": {
//     "type": "random2"
// }});
try {
    console.log(editor.currentPasteboard.currentContext);
} catch (err) {
    console.log(err.message);
}

try {
    function startAnimation() {

        function getFaceNode(){
            const face = editor.createEllipse();
            face.x =0;
            face.y =0;
            face.rx = 100;
            face.ry = 100;
            const faceColor = { red: 1.0, green:1.0, blue:1.0 };
            face.fills.append(editor.createColorFill(faceColor));
            return face;
        }
    
        function getEye(x,y,rx,ry){
            const eye = editor.createEllipse();
            eye.x = x;
            eye.y = y;
            eye.rx = rx;
            eye.ry = ry;
            const eyeColor = { red: 0.0, green:0.0, blue:0.0 };
            eye.fills.append(editor.createColorFill(eyeColor));
            return eye;
        }
    
        function getMouth(){
            const pathNode = editor.createPath();
            pathNode.x = 37.5;
            pathNode.y = 120;
            pathNode.path = "M 0 10 C 30 60 90 60 120 10";
            return pathNode;
        }

        const currentContext = editor.currentPasteboard.currentContext;
        const groupNode = editor.createGroup();
        currentContext.children.append(groupNode);
        const children = groupNode.children;
        groupNode.opacity = 0.1;
    
        const face  =  getFaceNode();
        children.append(face);
    
        const leftEye = getEye(60,40,12,24);
        children.append(leftEye);
    
        const rightEye = getEye(110,40,12,24);
        children.append(rightEye);
    
        const mouth = getMouth()
        children.append(mouth);
    
    
        var centerX = 100;
        var centerY = 200;
        var radius = 120;
    
        var points = [];
        for (var angle = 0; angle < 360; angle+=20) {
            var x = centerX + radius * Math.cos((angle * Math.PI) / 180);
            var y = centerY + radius * Math.sin((angle * Math.PI) / 180);
            points.push([x, y]);
        }
    
        let blueVal = 1.0;
        const minBlueVal = 0.12;
        const incrementDeltaBlue = 0.05;
        const shiftPos = 20;
        let count = 0;

        const interval = setInterval(function() {
            if (blueVal - incrementDeltaBlue > minBlueVal) {
                count++;
                groupNode.opacity += 0.05;
                blueVal-= incrementDeltaBlue;
                if(groupNode.x<centerX){
                    groupNode.x += shiftPos;
                }
                if (groupNode.y<centerY){
                    groupNode.y += shiftPos;
                }
                const updatedColor = { red: 0.9, green: 0.75, blue:blueVal};
                face.fills.append(editor.createColorFill(updatedColor));
            }
            else {
                let initialRotation = 0;
                let rotationCount = 0;
                let intervalR = undefined;
                intervalR = setInterval(function() {
                    if(rotationCount++ > 49){
                        clearInterval(intervalR);
                        ui.postMessage({ "scriptMessage": {
                            "type": "animationCompleted"
                        }});
                    }
                    groupNode.relativeRotation = initialRotation;
                    ui.postMessage({ "scriptMessage": {
                        "type": "nodeRotation",
                        "rotation": initialRotation
                    }});
                    initialRotation = (initialRotation + 36) % 360;
                },100); 
                clearInterval(interval);
            }
    
        }, 100);
    }
    ui.onmessage = (msg) => {
        const { uiMessage } = msg;
        if (!uiMessage) {
            console.log("uiMessage not found");
            return;
        }

        switch(uiMessage.type) {
            case "startAnimation": {
                startAnimation();
            }
            break;
            case "clearArtboard": {
                editor.currentPasteboard.currentContext.children.clear();
            }
            break;
            default:
                console.log(`Unknown uiMessage type : ${uiMessage.type}`);
        }
    }
} catch (err) {
    console.error(err.name + " : " + err.message);
}
