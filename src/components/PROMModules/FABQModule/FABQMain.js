import React,{Component} from 'react'
import axios from 'axios'
import 'react-dropdown/style.css';
import FABQStep1 from './FABQStep1';

class FABQMain extends Component
{
state=
{
       step:1,
       Q1:-1,
       Q2:-1,
       Q3:-1,
       Q4:-1,
       Q5:-1,
       Q6:-1,
       Q7:-1,
       Q8:-1,
       Q9:-1,
       Q10:-1,
       Q11:-1,
       Q12:-1,
       Q13:-1,
       Q14:-1,
       Q15:-1,
       Q16:-1,
       entityId:60,
       id:-1,
       


    
}
componentDidMount()
{
    axios
    .get('https://localhost:44338/api/FABQDetails',
    {
        params: { value : this.state.entityId }
    }) 
    .then(response => {
        console.log(response.data[0])
        this.setState({
            Q1: (response.data[0].q1).toString() ,
            Q2: (response.data[0].q2).toString(),
            Q3: (response.data[0].q3).toString(),
            Q4: (response.data[0].q4).toString(),
            Q5: (response.data[0].q5).toString(),
            Q6: (response.data[0].q6).toString(),
            Q7: (response.data[0].q7).toString(),
            Q8: (response.data[0].q8).toString(),
            Q9 : (response.data[0].q9).toString(),
            Q10: (response.data[0].q10).toString(),
            Q11: (response.data[0].q11).toString() ,
            Q12: (response.data[0].q12).toString(),
            Q13: (response.data[0].q13).toString(),
            Q14: (response.data[0].q14).toString(),
            Q15: (response.data[0].q15).toString(),
            Q16: (response.data[0].q16).toString(),
            id: (response.data[0].fabqid),

            
        
        })
       
    })
    .catch(error => {
        console.log(error)
    })
}

nextStep=()=>{
    const{step}=this.state;
    if(step<3)
    {
    this.setState({
        step:step+1
    })
    }
    else
    {
        alert('submitted')
    }
    
}


prevStep=()=>{
    const{step}=this.state;
    this.setState({
        step:step-1
    })
    
}
handleChange= input=>e=>
{
   


    if(e.target)
    {
    this.setState(
        {
           [input]:e.target.value 
        }
    )
    }
    else{
        this.setState({
            [input]: e.value
          })  
    }
}
showStep =()=>{
    
    return (<FABQStep1
        handleChange={this.handleChange}
        radioChange ={this.radioChange}
        prevStep={this.prevStep}
        nextStep={this.nextStep}
        state={this.state}
        completeForm={this.completeForm}
        />);
   
 
    

}
completeForm=event=>{
    //event.preventDefault();
    const isValid = true;
    if (isValid)
    {
    axios
        .post('https://localhost:44338/api/FABQDetails', 
        {
            Q1: this.state.Q1,
            Q2: this.state.Q2,
            Q3: this.state.Q3,
            Q4: this.state.Q4 ,
            Q5: this.state.Q5,
            Q6: this.state.Q6,
            Q7: this.state.Q7,
            Q8: this.state.Q8,
            Q9: this.state.Q9,
            Q10: this.state.Q10,
            Q11: this.state.Q11,
            Q12: this.state.Q12,
            Q13: this.state.Q13,
            Q14: this.state.Q14 ,
            Q15: this.state.Q15,
            Q16: this.state.Q16,
            EntityID :  this.state.entityId,
            OMPQID: this.state.id,
            

        }
        
        )
        .then(response => {
            console.log(response)
            alert('Submitted')
        })
        .catch(error => {
            console.log(error)
        })
    }
}
render()
{ 
    return(<div>{this.showStep()}</div>);
}
}

export default  FABQMain