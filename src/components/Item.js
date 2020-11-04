import React from 'react'


function Item(props){
    
    return(
        
        <div key={props.id} className={ `todo ${props.isCompleted ? "done" : ""}`} style={{
            'animationDelay':`calc(${props.index * 200} ms)`}}>
            <div>
                <p style={{textDecoration: props.isCompleted ? "line-through" : "none" }}>{props.title}</p>
            </div>
            <div className="button-wrapper">
                
                <div className="quantity-box">
                    <button id="decrease-btn" className="quant-btn btn" onClick={()=> props.changeStatus(props.task, "decrease")}  disabled={props.quantity <= 1 ? true : false } value="decrease" name="decrease"> - </button>
                    <div className="quantity" id="quantity">{props.quantity}</div>
                    <button id="increase-btn" className="quant-btn btn" onClick={()=> props.changeStatus(props.task, "increase")}  value="increase" name="delete"> + </button>
                </div>
                <div>
                <button id="del-btn" onClick={()=> props.changeStatus(props.task, "delete")}  value="delete" name="delete"> del </button>
                </div>
                <input onChange={()=> props.changeStatus(props.task, "isComplete")} type="checkbox" checked={props.isCompleted}></input>
            </div>
        </div>
        
        
    )
}

export default Item