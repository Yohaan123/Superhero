var canvas = new fabric.Canvas('myCanvas');

var block_img_width = 30;
var block_img_height = 30;

var player_x = 10;
var player_y = 10;
var player_object = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    }
    );
}

function new_Image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    }
    );
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80') {
        console.log("P and shiftKey is pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("M and shiftKey is pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (keyPressed == '38') {
        console.log("UP");
        //up();
    }

    if (keyPressed == '40') {
        console.log("DOWN");
        //down();
    }

    if (keyPressed == '39') {
        console.log("RIGHT");
        //right();
    }

    if (keyPressed == '37') {
        console.log("LEFT");
        //left();
    }

    if(keyPressed == '70'){
        console.log("f");
        new_Image('ironman_face.png');
    }

    if(keyPressed == '66'){
        console.log("b");
        new_Image('spiderman_body.png');
    }

    if(keyPressed == '76'){
        console.log("l");
        new_Image('hulk_legs.png');
    }

    if(keyPressed == '82'){
        console.log("r");
        new_Image('thor_right_hand.png');
    }

    if(keyPressed == '72'){
        console.log("h");
        new_Image('captain_america_left_hand.png');
    }
}
