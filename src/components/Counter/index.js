import  './index.css'
import {Component} from 'react'

class Counter extends Component{
    state={count :0}

    onIncrease = () =>{
        this.setState(prevState =>({count: prevState.count +1}));
    }
    onDecrease = () => {
        this.setState(prevState =>({count : prevState.count-1}))
    }
    render (){
        const {count} = this.state

        return(
            <div className="app-container">
                <h1 className="count">Count -  {count}</h1>
                <button type="button" className="button" onClick={this.onIncrease}>Increase</button>
                <button type="button" className="button" onClick={this.onDecrease}>Decrease</button>
                </div>
        )
    }
}
export default Counter;