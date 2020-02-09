import Animation from './loadAnimation';

export default class extends React.Component{
    constructor(props){
        super(props);

        this.elem = React.createRef();
        this.animation = null;
    }

    componentDidMount(){
        if(this.elem.current)
            this.animation = new Animation(this.elem.current);
    }

    render(){
        return <canvas id = "load" ref = {this.elem}>Загружаю контент...</canvas>;
    }

    componentWillUnmount(){
        this.animation.close();
    }
}