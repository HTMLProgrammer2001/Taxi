import { DateRange } from 'react-date-range';

class Test extends React.Component{
    onChange(range){
        console.log(+Date.parse(range.startDate));
    }

    render(){
        return <DateRange calendarWidth={50} onChange = {this.onChange} onInput={this.onChange}/>;
    }
}

export default Test;