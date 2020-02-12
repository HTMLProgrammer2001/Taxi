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
        this.elem.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.elem.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.elem.addEventListener('touchstart', this.onTouchStart.bind(this));
        this.elem.addEventListener('touchmove', this.onTouchMove.bind(this));

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
        this.elem.removeEventListener('mousedown', this.onMouseDown.bind(this));
        this.elem.removeEventListener('mousemove', this.onMouseMove.bind(this));
        this.elem.removeEventListener('touchstart', this.onTouchStart.bind(this));
        this.elem.removeEventListener('touchmove', this.onTouchMove.bind(this));
    }
    
    onTouchStart(e){
        e.preventDefault();
        let touches = e.targetTouches,
            offsetY = touches[0].clientY - e.target.getBoundingClientRect().top,
            offsetX = touches[0].clientX - e.target.getBoundingClientRect().left;

        this.touch = {
            x: offsetX,
            y: offsetY,
            dot: Math.sqrt(
                (this.selected.x + this.selected.w - offsetX)**2 + (this.selected.y + this.selected.h - offsetY)**2
            ) < this.opts.circleRadius
        };
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

    onMove(point){
        let w = this.elem.offsetWidth,
            h = this.elem.offsetHeight;

        if(this.touch.dot){
            //resize image
            this.selected.w = point.offsetX - this.selected.x;
            this.selected.h = point.offsetY - this.selected.y;

            if(this.selected.w + this.selected.x > w)
                this.selected.w = w - this.selected.x;

            if(this.selected.h + this.selected.y > h)
                this.selected.h = h - this.selected.y;
        }
        else{
            //move image
            this.selected.x += point.offsetX - this.touch.x;
            this.selected.y += point.offsetY - this.touch.y;

            if(this.selected.x < 0)
                this.selected.x = 0;
            if(this.selected.y < 0)
                this.selected.y = 0;

            if(this.selected.x + this.selected.w > w)
                this.selected.x = w - this.selected.w;

            if(this.selected.y + this.selected.h > h)
                this.selected.y = h - this.selected.h;
        }
    }

    onTouchMove(e){
        let touch = e.targetTouches[0];

        touch.offsetX = touch.clientX - this.elem.getBoundingClientRect().left;
        touch.offsetY = touch.clientY - this.elem.getBoundingClientRect().top;

        this.onMove(touch);

        this.touch = {
            x: touch.offsetX,
            y: touch.offsetY,
            dot: this.touch.dot
        };

        this.draw();
    }

    onMouseMove(e){
        if(!e.which)
            return;

        this.onMove(e);

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