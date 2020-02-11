require('babel-polyfill');

let defaultOpts = {
    backColor: '#000',
    backAlpha: .8,
    borderWidth: 1,
    borderColor: '#fff',
    circleRadius: 10,
    circleBg: '#fff'
};

class CropAnimation{
    constructor(elem, img, opts){
        this.elem = elem;
        this.img = img;
        this.ctx = elem.getContext('2d');
        this.touch = null;
        this.opts = Object.assign(defaultOpts, opts);
        this.selected = {
            x: 0,
            y: 0,
            w: 100,
            h: 100
        };

        this.close = this.close.bind(this);
        this.draw = this.draw.bind(this);

        //bind events
        this.elem.onmousedown = this.onMouseDown.bind(this);
        this.elem.onmousemove = this.onMouseMove.bind(this);

        this.draw();
    }

    draw(){
        this.img.width = this.elem.offsetWidth;
        this.img.height = this.elem.offsetHeight;

        let w = this.elem.width = this.elem.offsetWidth,
            h = this.elem.height = this.elem.offsetHeight;

        this.ctx.clearRect(0, 0, w, h);
        this.ctx.drawImage(this.img, 0, 0, w, h);

        //draw back
        this.ctx.beginPath();
        this.ctx.rect(0, 0, w, h);
        this.ctx.rect(this.selected.x, this.selected.y, this.selected.w, this.selected.h);

        this.ctx.globalAlpha = this.opts.backAlpha;
        this.ctx.fillStyle = this.opts.backColor;
        this.ctx.fill('evenodd');

        this.ctx.globalAlpha = 1;

        //draw circle
        this.ctx.beginPath();
        this.ctx.moveTo(this.selected.x + this.selected.w, this.selected.y + this.selected.h);
        this.ctx.arc(
            this.selected.x + this.selected.w,
            this.selected.y + this.selected.h,
            this.opts.circleRadius, 0, Math.PI*2);

        this.ctx.fillStyle = this.opts.circleBg;
        this.ctx.fill();

        //draw border
        this.ctx.strokeStyle = this.opts.borderColor;
        this.ctx.lineWidth = this.opts.borderWidth;
        this.ctx.strokeRect(this.selected.x, this.selected.y, this.selected.w, this.selected.h);
    }

    close(){
        this.elem.onmousedown = null;
        this.elem.onmousemove = null;
    }

    onMouseDown(e){
        this.touch = {
            x: e.offsetX,
            y: e.offsetY,
            dot: Math.sqrt(
                (this.selected.x + this.selected.w - e.offsetX)**2 + (this.selected.y + this.selected.h - e.offsetY)**2
            ) < this.opts.circleRadius
        };
    }

    onMouseMove(e){
        if(!e.which)
            return;

        let w = this.elem.offsetWidth,
            h = this.elem.offsetHeight;

        if(this.touch.dot){
            //resize image
            this.selected.w = e.offsetX - this.selected.x;
            this.selected.h = e.offsetY - this.selected.y;

            if(this.selected.w + this.selected.x > w)
                this.selected.w = w - this.selected.x;

            if(this.selected.h + this.selected.y > h)
                this.selected.h = h - this.selected.y;
        }
        else{
            //move image
            this.selected.x += e.offsetX - this.touch.x;
            this.selected.y += e.offsetY - this.touch.y;

            if(this.selected.x < 0)
                this.selected.x = 0;
            if(this.selected.y < 0)
                this.selected.y = 0;

            if(this.selected.x + this.selected.w > w)
                this.selected.x = w - this.selected.w;

            if(this.selected.y + this.selected.h > h)
                this.selected.y = h - this.selected.h;
        }

        this.touch = {
            x: e.offsetX,
            y: e.offsetY,
            dot: this.touch.dot
        };

        this.draw();
    }

    getData(){
        //draw image
        this.ctx.drawImage(this.img, 0, 0, this.elem.offsetWidth, this.elem.offsetHeight);

        //get img
        let canv = document.createElement('canvas'),
            imgData = this.ctx.getImageData(this.selected.x, this.selected.y, this.selected.w, this.selected.h);

        canv.width = this.selected.w;
        canv.height = this.selected.h;

        canv.getContext('2d').putImageData(imgData, 0, 0);


        return new Promise( (resolve, reject) => {
            canv.toBlob( (blob) => {
                canv.remove();
                this.draw();

               resolve(blob);
            });
        });
    }
}

export default CropAnimation;