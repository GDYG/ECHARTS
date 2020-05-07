import React, {
    Component
} from 'react';
import '../../css/new.css';
// import $ from 'jquery';
class New extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d')

            // ctx.beginPath();
            // ctx.moveTo(25, 25);
            // ctx.quadraticCurveTo(50, 15, 40, 70) //两次贝塞尔曲线
            // // ctx.bezierCurveTo(50, 15, 40, 70, 10, 10) //三次贝塞尔曲线
            // ctx.stroke();

            // 二次贝塞尔曲线
            // ctx.beginPath();
            // ctx.moveTo(75,25);
            // ctx.quadraticCurveTo(25,25,25,62.5);
            // ctx.quadraticCurveTo(25,100,50,100);
            // ctx.quadraticCurveTo(50,120,30,125);
            // ctx.quadraticCurveTo(60,120,65,100);
            // ctx.quadraticCurveTo(125,100,125,62.5);
            // ctx.quadraticCurveTo(125,25,75,25);
            // ctx.stroke();

            //三次贝塞尔曲线
            // ctx.beginPath();
            // ctx.moveTo(75,40);
            // ctx.bezierCurveTo(75,37,70,25,50,25);
            // ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
            // ctx.bezierCurveTo(20,80,40,102,75,120);
            // ctx.bezierCurveTo(110,102,130,80,130,62.5);
            // ctx.bezierCurveTo(130,62.5,130,25,100,25);
            // ctx.bezierCurveTo(85,25,75,37,75,40);
            // ctx.fill();

            // var lingrad = ctx.createLinearGradient(0,0,0,150);
            //     lingrad.addColorStop(0, '#00ABEB');
            //     lingrad.addColorStop(0.5, '#fff');
            //     lingrad.addColorStop(0.5, '#26C000');
            //     lingrad.addColorStop(1, '#fff');

            //     var lingrad2 = ctx.createLinearGradient(0,50,0,95);
            //     lingrad2.addColorStop(0.5, '#000');
            //     lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

            //     // assign gradients to fill and stroke styles
            //     ctx.fillStyle = lingrad;
            //     ctx.strokeStyle = lingrad2;
                
            //     // draw shapes
            //     ctx.fillRect(10,10,130,130);
            //     ctx.strokeRect(50,50,50,50);

            // var ctx = document.getElementById('canvas').getContext('2d'); 
            // ctx.beginPath(); 
            // ctx.arc(50, 50, 30, 0, Math.PI*2, true);
            // ctx.arc(50, 50, 15, 0, Math.PI*2, true);
            // ctx.fill("evenodd");

            //动画
            // var sun = new Image();
            // var moon = new Image();
            // var earth = new Image();
            // function init(){
            //     sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
            //     moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
                // earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
            //     window.requestAnimationFrame(draw);
            // }

            //     ctx.globalCompositeOperation = 'destination-over';
            //     ctx.clearRect(0,0,300,300); // clear canvas

            //     ctx.fillStyle = 'rgba(0,0,0,0.4)';
            //     ctx.strokeStyle = 'rgba(0,153,255,0.4)';
            //     ctx.save();
            //     ctx.translate(150,150);

            //     // Earth
            //     var time = new Date();
            //     ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
            //     ctx.translate(105,0);
            //     ctx.fillRect(0,-12,50,24); // Shadow
            //     ctx.drawImage(earth,-12,-12);

            //     // Moon
            //     ctx.save();
            //     ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
            //     ctx.translate(0,28.5);
            //     ctx.drawImage(moon,-3.5,-3.5);
            //     ctx.restore();

            //     ctx.restore();
                
            //     ctx.beginPath();
            //     ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
            //     ctx.stroke();
                
            //     ctx.drawImage(sun,0,0,300,300);

            //     window.requestAnimationFrame(draw);
            // init();

            //笑脸
            // ctx.beginPath()
            // ctx.arc(150, 150, 80, 0, Math.PI*2, true)
            // ctx.moveTo(200, 150)
            // ctx.arc(150, 150, 50, 0, Math.PI, false)
            // ctx.moveTo(130, 120)
            // ctx.arc(120, 120, 10, 0, Math.PI*2, true)
            // ctx.moveTo(190, 120)
            // ctx.arc(180, 120, 10, 0, Math.PI*2, true)
            // ctx.stroke()

            //涂鸦
            canvas.onmousedown = function(e) {
                var e = e | window.event;
                var x = e.clientX - canvas.offsetLeft
                var y = e.clientY - canvas.offsetTop
                ctx.beginPath()
                // ctx.font = '10px'
                ctx.lineWidth = '5'
                ctx.strokeStyle = 'rgb(100, 200, 100)'
                ctx.moveTo(x, y)
                canvas.onmousemove = function(e) {
                    var a = e.clientX - canvas.offsetLeft
                    var b = e.clientY - canvas.offsetTop 
                    ctx.lineTo(a, b)
                    ctx.stroke()
                }
            }
            window.onmouseup = function() {
                canvas.onmousemove = null
            }
        }
    }

    render() {
        return ( 
            <div>
                <br />
                <br />
                <canvas id = 'canvas' width='300px' height='300px'>浏览器不支持!</canvas> 
            </div>
        );
    }
}

export default New;