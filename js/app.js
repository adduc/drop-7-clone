var AppClass = function(){};
AppClass.prototype = {
    d:0
};

var App = new AppClass();



function redraw() {
    var ctx = $('#app')[0].getContext('2d');

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);

    ctx.fillRect(0, ctx.canvas.height - 20, ctx.canvas.width, 20);
}

function update() {

}

$(function() {

    var FPS = 45;
    // FPS loop
    setInterval(function() {
        //update();
        redraw();
    }, 1000/FPS);

    // Calculate loop
    setInterval(function() {
        App.d = App.d + 1;
    }, 1000/45);



    $('#app').on('mousedown', function() {
        alert('a');
    });

    $('#app').on('touchstart', function() {
        alert('a');
    });

    // Prevent scrolling on mobile.
    document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });

});
