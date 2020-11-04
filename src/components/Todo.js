import React from 'react'
import Item from './Item'
import Loading from './Loading'

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contentLoaded:true,
            name: "Cristiam",
            currentTodo:{
                id:null,
                title:"",
                isCompleted:false,
                quantity:1,
                isEdited:false,
            },
            todos:[]
        }
    }

    getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


    fetchFunc = () => {
        fetch('https://cristiamportfolioapis.herokuapp.com/todo/')
        .then(response=>response.json())
        .then(data => {
            this.setState({todos:data, contentLoaded:true})
        })
        .catch(err => console.log("Error: ", err))
    }


    componentDidMount(){
        this.setState({contentLoaded:false})
        this.fetchFunc()
    }

    handleChange= (event) =>{
        const title = event.target.value
        this.setState({
            currentTodo:{
            ...this.state.currentTodo, title:title}
        })

    }

    handleSubmit= (event) => {
        event.preventDefault()
        const csrftoken = this.getCookie('csrftoken')
        const initObject = {
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(this.state.currentTodo)
        }

        fetch('https://cristiamportfolioapis.herokuapp.com/todo/create-task', initObject)
        .then(data =>{
            console.log(data)
            this.fetchFunc()
            this.setState({
                currentTodo:{id:null, title:"", isCompleted:false, quantity:1, isEdited:false}
            })
        })
    }



    changeStatus = (task,name) =>{
        const csrftoken = this.getCookie('csrftoken')
        if(name === "delete"){
            const initObject = {
                method: 'DELETE',
                headers:{
                    'Content-type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
            }

            fetch(`https://cristiamportfolioapis.herokuapp.com/todo/delete-task/${task.id}`, initObject)
            .then(data =>{
                console.log(data)
                this.fetchFunc()
            }).catch(err => console.log(err))
        }
        else{
            let completedTask = {
                id:task.id,
                title:task.title,
                isCompleted: task.isCompleted,
                quantity:task.quantity,
                isEdited:false
            }

            if(name=== "isComplete"){
                
                completedTask.isCompleted = !task.isCompleted;
            }
            else if(name === 'increase'){
                completedTask.quantity = task.quantity + 1;
            }
            else if(name === 'decrease'){
                completedTask.quantity = task.quantity - 1;
            }
            const initObject = {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(completedTask)
            }

            fetch(`https://cristiamportfolioapis.herokuapp.com/todo/edit-task/${task.id}`, initObject)
            .then(data =>{
                console.log(data)
                this.fetchFunc()
            }).catch(err => console.log(err))
        }
        
    }

    render(){
        const todoList = this.state.todos.map((item,index)=>{
            console.log(index)
            return(
            <Item key={index} id={index} task={item} index={index} isCompleted={item.isCompleted} quantity={item.quantity}
                changeStatus={this.changeStatus} title={item.title}/>
            )
        })
                
        return(
            <div className="App">
                <div className="content">
                    <form onSubmit={this.handleSubmit} id="todo-form">
                        <div className="input">
                            <input id="inp" onChange={this.handleChange} 
                            name="title" type="text" 
                            value={this.state.currentTodo.title} 
                            placeholder="New Item?"
                            maxLength={15}
                            />

                            <button  className="btn" id="sub-btn" type="submit">Add Item</button>
                        </div>
                    </form>
                    
                    {!this.state.contentLoaded ? <Loading /> : todoList}
                    
                </div>
            </div>
        )
    }
}

export default Todo