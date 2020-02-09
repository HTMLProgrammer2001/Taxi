let defaultOpts = {
    amount: 10,
    radius: 50,
    minRadius: 3,
    addedRadius: 12,
    speed: 0.04
};

class Animate{
    constructor(elem, opts){
        this.elem = elem;
        this.ctx = elem.getContext('2d');
        this.opts = Object.assign(defaultOpts, opts);
        this.frame = null;
        this.particles = new Array(this.opts.amount + 1).fill().map((e, i) => {
            let opts = this.opts;
            return {
                th: Math.PI*2/opts.amount * i,
                added: 0
            }
        });

        this.close = this.close.bind(this);
        this.draw = this.draw.bind(this);

        this.draw();
    }

    draw(){
        let w = this.elem.width = this.elem.offsetWidth,
            h = this.elem.height = this.elem.offsetHeight;

        this.ctx.fillStyle = "#222";
        this.ctx.fillRect(0, 0, w, h);

        this.particles.forEach((P) => {
            P.th += this.opts.speed;
            P.added = Math.abs(Math.PI - P.th%(Math.PI*2))*this.opts.addedRadius/Math.PI;

            this.ctx.beginPath();
            this.ctx.arc(Math.cos(P.th) * this.opts.radius + w/2,
                Math.sin(P.th) * this.opts.radius + h/2,
                this.opts.minRadius + P.added, 0, Math.PI * 2);

            this.ctx.fillStyle = "hsl(" + P.th*30 + ", 50%, 50%)";
            this.ctx.fill();
        });

        this.frame = window.requestAnimationFrame(this.draw);
    }

    close(){
        window.cancelAnimationFrame(this.frame);
    }
}

export default Animate;