import "../../css/main.css"
import React,{Component} from 'react'
import axios from 'axios'
class FOSQModule extends Component
{   
    state=
    {
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
       entityId:60,
       id:-1,
       nameError:'',


    }
    componentDidMount()
    {
        axios
        .get('https://localhost:44338/api/FOSQDetails',
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
                id: (response.data[0].fosqid),

                
            
            })
           
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    validate = () => 
    {
        let nameError = "";
        
        const val = this.state
        if (val.Q1===-1 ||val.Q2===-1||val.Q3===-1||val.Q4===-1||val.Q5===-1||val.Q6===-1||val.Q7===-1
            ||val.Q8===-1 || val.Q9===-1||val.Q10===-1) {
          nameError = "This field is required";
        }
        if (nameError) {
            this.setState({nameError });
            return false;
          }
        else
        {
            this.setState(
                {
                    nameError:''
                }
            );
            return true;
        }
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

    completeForm=event=>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid)
        {
            this.setState(this.initialState);
            
    
        axios
            .post('https://localhost:44338/api/FOSQDetails', 
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
        return(
            <div className="container">
            <div className="row">
            <div className="col-md-12">
            <div className="page-title title"> 
            <h1>Functional Outcomes of Sleep</h1>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">Do you have difficulty concentrating on the things you do because you are sleepy or tired?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="1" id="Radio1" checked={this.state.Q1 ==="1"} onChange={this.handleChange('Q1')}/>
                <span>Yes, extreme</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="2" id="Radio2" checked={this.state.Q1 ==="2"} onChange={this.handleChange('Q1')}/>
                <span>Yes, moderate</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="3" id="Radio3" checked={this.state.Q1 ==="3"} onChange={this.handleChange('Q1')}/>
                <span>Yes, a little</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="4" id="Radio4" checked={this.state.Q1 ==="4"} onChange={this.handleChange('Q1')}/>
                <span>No</span>
              </div>
              <div className="errorMessage">{this.state.Q1===-1 && this.state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">Do you generally have difficulty remembering things because you are sleepy or tired?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="1" id="Radio1" checked={this.state.Q2 ==="1"} onChange={this.handleChange('Q2')}/>
                <span>Yes, extreme</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="2" id="Radio2" checked={this.state.Q2 ==="2"} onChange={this.handleChange('Q2')}/>
                <span>Yes, moderate</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="3" id="Radio3" checked={this.state.Q2 ==="3"} onChange={this.handleChange('Q2')}/>
                <span>Yes, a little</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="4" id="Radio4" checked={this.state.Q2 ==="4"} onChange={this.handleChange('Q2')}/>
                <span>No</span>
              </div>
            <div className="errorMessage">{this.state.Q2===-1 && this.state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">Do you have difficulty operating a motor vehicle for short distances (less than 100 miles) because you become sleepy?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="1" id="Radio1" checked={this.state.Q3 ==="1"} onChange={this.handleChange('Q3')}/>
                <span>Yes, extreme</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="2" id="Radio2" checked={this.state.Q3 ==="2"} onChange={this.handleChange('Q3')}/>
                <span>Yes, moderate</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="3" id="Radio3" checked={this.state.Q3 ==="3"} onChange={this.handleChange('Q3')}/>
                <span>Yes, a little</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="4" id="Radio4" checked={this.state.Q3 ==="4"} onChange={this.handleChange('Q3')}/>
                <span>No</span>
              </div>
              <div className="errorMessage">{this.state.Q3===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">Do you have difficulty operating a motor vehicle for long distances (greater than 100 miles) because you become sleepy?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="1" id="Radio1" checked={this.state.Q4 ==="1"} onChange={this.handleChange('Q4')}/>
                <span>Yes, extreme</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="2" id="Radio2" checked={this.state.Q4 ==="2"} onChange={this.handleChange('Q4')}/>
                <span>Yes, moderate</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="3" id="Radio3" checked={this.state.Q4 ==="3"} onChange={this.handleChange('Q4')}/>
                <span>Yes, a little</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="4" id="Radio4" checked={this.state.Q4 ==="4"} onChange={this.handleChange('Q4')}/>
                <span>No</span>
              </div>
              <div className="errorMessage">{this.state.Q4===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">Do you have difficulty visiting your family or friends in their home because you become sleepy or tired?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="1" id="Radio1" checked={this.state.Q5 ==="1"} onChange={this.handleChange('Q5')}/>
                <span>Yes, extreme</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="2" id="Radio2" checked={this.state.Q5 ==="2"} onChange={this.handleChange('Q5')}/>
                <span>Yes, moderate</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="3" id="Radio3" checked={this.state.Q5 ==="3"} onChange={this.handleChange('Q5')}/>
                <span>Yes, a little</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="4" id="Radio4" checked={this.state.Q5 ==="4"} onChange={this.handleChange('Q5')}/>
                <span>No</span>
              </div>
              <div className="errorMessage">{this.state.Q5===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">Has your relationship with family, friends or work colleagues been affected because you are sleepy or tired?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="1" id="Radio1" checked={this.state.Q6 ==="1"} onChange={this.handleChange('Q6')}/>
                <span>Yes, extreme</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="2" id="Radio2" checked={this.state.Q6 ==="2"} onChange={this.handleChange('Q6')}/>
                <span>Yes, moderate</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="3" id="Radio3" checked={this.state.Q6 ==="3"} onChange={this.handleChange('Q6')}/>
                <span>Yes, a little</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="4" id="Radio4" checked={this.state.Q6 ==="4"} onChange={this.handleChange('Q6')}/>
                <span>No</span>
              </div>
              <div className="errorMessage">{this.state.Q6===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">Do you have difficulty watching a movie or video because you become sleepy or tired?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="1" id="Radio1" checked={this.state.Q7 ==="1"} onChange={this.handleChange('Q7')}/>
                <span>Yes, extreme</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="2" id="Radio2" checked={this.state.Q7 ==="2"} onChange={this.handleChange('Q7')}/>
                <span>Yes, moderate</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="3" id="Radio3" checked={this.state.Q7 ==="3"} onChange={this.handleChange('Q7')}/>
                <span>Yes, a little</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="4" id="Radio4" checked={this.state.Q7 ==="4"} onChange={this.handleChange('Q7')}/>
                <span>No</span>
              </div>
              <div className="errorMessage">{this.state.Q7===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">Do you have difficulty being as active as you want to be in the evening because you are sleepy or tired?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="1" id="Radio1" checked={this.state.Q8 ==="1"} onChange={this.handleChange('Q8')}/>
                <span>Yes, extreme</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="2" id="Radio2" checked={this.state.Q8 ==="2"} onChange={this.handleChange('Q8')}/>
                <span>Yes, moderate</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="3" id="Radio3" checked={this.state.Q8 ==="3"} onChange={this.handleChange('Q8')}/>
                <span>Yes, a little</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="4" id="Radio4" checked={this.state.Q8 ==="4"} onChange={this.handleChange('Q8')}/>
                <span>No</span>
              </div>
              <div className="errorMessage">{this.state.Q8===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">Do you have difficulty being as active as you want to be in the morning because you are sleepy or tired?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="1" id="Radio1" checked={this.state.Q9 ==="1"} onChange={this.handleChange('Q9')}/>
                <span>Yes, extreme</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="2" id="Radio2" checked={this.state.Q9 ==="2"} onChange={this.handleChange('Q9')}/>
                <span>Yes, moderate</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="3" id="Radio3" checked={this.state.Q9 ==="3"} onChange={this.handleChange('Q9')}/>
                <span>Yes, a little</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="4" id="Radio4" checked={this.state.Q9 ==="4"} onChange={this.handleChange('Q9')}/>
                <span>No</span>
              </div>
              <div className="errorMessage">{this.state.Q9===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>    
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">Has your mood been affected because you are sleepy or tired?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="1" id="Radio1" checked={this.state.Q10 ==="1"} onChange={this.handleChange('Q10')}/>
                <span>Yes, extreme</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="2" id="Radio2" checked={this.state.Q10 ==="2"} onChange={this.handleChange('Q10')}/>
                <span>Yes, moderate</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="3" id="Radio3" checked={this.state.Q10 ==="3"} onChange={this.handleChange('Q10')}/>
                <span>Yes, a little</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="4" id="Radio4" checked={this.state.Q10 ==="4"} onChange={this.handleChange('Q10')}/>
                <span>No</span>
              </div>
              <div className="errorMessage">{this.state.Q10===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            
            <button className="btn btn-outline-primary" data-modal-id="sampleModal" onClick={this.completeForm}>Submit</button>

            </div>

       
        
        );
    }

}
export default FOSQModule
