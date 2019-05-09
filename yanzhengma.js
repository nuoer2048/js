function verCode(w,h,line,dot,len) {
    function rn(max,min) {
        return parseInt(Math.random()*(max-min)+min)
    }
    function rnColor(max,min) {
        var r = rn(max,min);
        var g = rn(max,min);
        var b = rn(max,min);
        var str = 'rgb('+r+','+g+','+b+')';
        return str;

    }

    ctx.fillStyle=rnColor(230,180);
    ctx.fillRect(0,0,w,h);

    var str='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    for(var i=0;i<len;i++){
        var c=str[rn(0,str.length)];//随机的字
        var fs=rn(18,40);//字体的大小
        var deg=rn(-30,30);//字体的旋转角度
        ctx.font=fs+'px Simhei';
        ctx.textBaseline="top";
        ctx.fillStyle=rnColor(80,150);
        ctx.save();
        ctx.translate(30*i+20,30);
        ctx.rotate(deg*Math.PI/180);
        ctx.fillText(c,-20+5,-30);
        ctx.restore();
    }

    for(var j=0;j<line;j++){
        ctx.beginPath();
        ctx.moveTo(rn(w,0),rn(h,0));
        ctx.lineTo(rn(w,0),rn(h,0));
        ctx.fillStyle=rnColor(130,240);
        ctx.closePath();
        ctx.stroke();
    }

    for(var d=0;d<dot;d++){
        var x = rn(0,w);
        var y = rn(0,h);
        ctx.arc(x,y,1,0,2*Math.PI,true);
        ctx.closePath();
        ctx.fillStyle=rnColor(140,250);
        ctx.fill();
    }
}