let comments = ["Ужасно", "Плохо", "Нормально", "Хорошо", "Прекрасно"];

class Rating extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            currentRating: props.rat || 0,
            isMarked: !!props.rat
        };

        this.onMove = this.onMove.bind(this);
        this.onLeave = this.onLeave.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onMove(e){
        let offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left;

        if(!this.state.isMarked)
            this.setState({
                currentRating: Math.ceil(offsetX/30)
            });
    }

    onLeave(){
        if(!this.state.isMarked)
            this.setState({
                currentRating: this.props.rat
            });
    }

    onClick(){
        this.setState({
            isMarked: true
        });

        return this.props.rat ? false : this.props.onRating(this.state.currentRating);
    }

    render(){
        return(
            <div
                className = "rating"
                title = {this.props.rat}
                style = {{cursor: 'pointer'}}
                onMouseMove = {this.onMove}
                onMouseLeave = {this.onLeave}
                onClick = {this.onClick}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width = "150px" height = "30px"
                     viewBox="0 0 2135 427">
                    <clipPath id = "clip">
                        <polygon transform = "translate(0)" points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
						81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                        <polygon transform = "translate(854)" points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
						81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                        <polygon className = "f" transform = "translate(1281)" points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
						81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                        <polygon transform = "translate(1708)" points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
						81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                        <polygon transform = "translate(427)" points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
						81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                    </clipPath>
                    <polygon className="star" transform = "translate(0)" points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
						81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                    <polygon className="star" transform = "translate(854)" fill="none" stroke="yellow" style={{strokeWidth: 10}} points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
						81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                    <polygon className="star"  transform = "translate(1281)" fill="none" stroke="yellow" style={{strokeWidth: 10}} points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
						81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                    <polygon className="star" transform = "translate(1708)" fill="none" stroke="yellow" style={{strokeWidth: 10}} points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
						81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                    <polygon className="star" transform = "translate(427)" fill="none" stroke="yellow" style={{strokeWidth: 10}} points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
						81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                    <rect x = "0" y = "0" width = {2135 * this.state.currentRating/5} height = "427" style = {{clipPath: "url(#clip)"}} fill = "yellow"/>
                </svg>

                <div className="text-center text-muted">{comments[this.state.currentRating - 1]}</div>
            </div>
        );
    }
}

export default Rating;