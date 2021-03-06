// import "../../css/main.css"
import React,{Component} from 'react'
import axios from 'axios'

import { withRouter} from "react-router-dom";
import auth from "../auth";


class PSSModule extends Component
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
       entityId:"",
       id:-1,
       nameError:'',


    }
    componentDidMount()
    {
        axios
        .get(
          // 'https://localhost:44338/api/PSSDetails',
          'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/PSSDetails',

        {
            params: { value : localStorage.getItem("KNC")}
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
                id: (response.data[0].pssid),

                
            
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
            .post(
              // 'https://localhost:44338/api/PSSDetails', 
              'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/PSSDetails', 

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
                EntityID :  localStorage.getItem("KNC"),
                OMPQID: this.state.id,
                
    
            }
            
            )
            .then(response => {
                console.log(response)
                // alert('Submitted')
            })
            .catch(error => {
                console.log(error)
            });
            axios
            .post(
              "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/saveWorkflow",
              // "https://localhost:44338/api/saveWorkflow",
        
              {
                KNC: localStorage.getItem("KNC"),
                DateCompleted: new Date(),
                processID: localStorage.getItem("WorkFlowId")
              }
            )
            .then((response) => {
              if (response.data === "Success")
              {
                console.log(response);
            auth.login(() => {
              this.props.history.push("/Home");
            });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
    }
    render()
    {
      const {Leftarrow, loadingCircle} = this.props.pageProps

        return(
            <div id="MainDiv">
                        <div className="page-title lg">
          <div className="title">
          {Leftarrow("/")}
          <div style = {{float: "right", marginLeft : "15px"}}>
          <h1>PSS Form</h1>
            </div>
          </div>
        </div>
            <div className="row has-form-forms">

            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">In the last month, how often have you been upset because of something that happened unexpectedly?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="0" id="titleOpt" checked={this.state.Q1 ==="0"} onChange={this.handleChange('Q1')}  />
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="1" id="Radio1" checked={this.state.Q1 ==="1"} onChange={this.handleChange('Q1')}/>
                <span>Almost Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="2" id="Radio2" checked={this.state.Q1 ==="2"} onChange={this.handleChange('Q1')}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="3" id="Radio3" checked={this.state.Q1 ==="3"} onChange={this.handleChange('Q1')}/>
                <span>Fairly Often</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="4" id="Radio4" checked={this.state.Q1 ==="4"} onChange={this.handleChange('Q1')}/>
                <span>Very Often</span>
              </div></div>
              <div className="errorMessage">{this.state.Q1===-1 && this.state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">In the last month, how often have you felt that you were unable to control the important things in your life?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="0" id="titleOpt" checked={this.state.Q2 ==="0"} onChange={this.handleChange('Q2')}/>
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="1" id="Radio1" checked={this.state.Q2 ==="1"} onChange={this.handleChange('Q2')}/>
                <span>Almost Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="2" id="Radio2" checked={this.state.Q2 ==="2"} onChange={this.handleChange('Q2')}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="3" id="Radio3" checked={this.state.Q2 ==="3"} onChange={this.handleChange('Q2')}/>
                <span>Fairly Often</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="4" id="Radio4" checked={this.state.Q2 ==="4"} onChange={this.handleChange('Q2')}/>
                <span>Very Often</span>
              </div></div>
            <div className="errorMessage">{this.state.Q2===-1 && this.state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">In the last month, how often have you felt nervous and ???stressed????</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="0" id="titleOpt" checked={this.state.Q3 ==="0"}   onChange={this.handleChange('Q3')}/>
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="1" id="Radio1" checked={this.state.Q3 ==="1"} onChange={this.handleChange('Q3')}/>
                <span>Almost Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="2" id="Radio2" checked={this.state.Q3 ==="2"} onChange={this.handleChange('Q3')}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="3" id="Radio3" checked={this.state.Q3 ==="3"} onChange={this.handleChange('Q3')}/>
                <span>Fairly Often</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="4" id="Radio4" checked={this.state.Q3 ==="4"} onChange={this.handleChange('Q3')}/>
                <span>Very Often</span>
              </div></div>
              <div className="errorMessage">{this.state.Q3===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">In the last month, how often have you felt confident about your ability to handle your personal problems?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="0" id="titleOpt" checked={this.state.Q4 ==="0"}   onChange={this.handleChange('Q4')}/>
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="1" id="Radio1" checked={this.state.Q4 ==="1"} onChange={this.handleChange('Q4')}/>
                <span>Almost Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="2" id="Radio2" checked={this.state.Q4 ==="2"} onChange={this.handleChange('Q4')}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="3" id="Radio3" checked={this.state.Q4 ==="3"} onChange={this.handleChange('Q4')}/>
                <span>Fairly Often</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="4" id="Radio4" checked={this.state.Q4 ==="4"} onChange={this.handleChange('Q4')}/>
                <span>Very Often</span>
              </div></div>
              <div className="errorMessage">{this.state.Q4===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">In the last month, how often have you felt that things were going your way?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="0" id="titleOpt" checked={this.state.Q5 ==="0"}   onChange={this.handleChange('Q5')}/>
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="1" id="Radio1" checked={this.state.Q5 ==="1"} onChange={this.handleChange('Q5')}/>
                <span>Almost Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="2" id="Radio2" checked={this.state.Q5 ==="2"} onChange={this.handleChange('Q5')}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="3" id="Radio3" checked={this.state.Q5 ==="3"} onChange={this.handleChange('Q5')}/>
                <span>Fairly Often</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="4" id="Radio4" checked={this.state.Q5 ==="4"} onChange={this.handleChange('Q5')}/>
                <span>Very Often</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q5===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">In the last month, how often have you found that you could not cope with all the things that you had to do?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="0" id="titleOpt" checked={this.state.Q6 ==="0"}   onChange={this.handleChange('Q6')}/>
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="1" id="Radio1" checked={this.state.Q6 ==="1"} onChange={this.handleChange('Q6')}/>
                <span>Almost Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="2" id="Radio2" checked={this.state.Q6 ==="2"} onChange={this.handleChange('Q6')}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="3" id="Radio3" checked={this.state.Q6 ==="3"} onChange={this.handleChange('Q6')}/>
                <span>Fairly Often</span>
              </div>
              <div>

              
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="4" id="Radio4" checked={this.state.Q6 ==="4"} onChange={this.handleChange('Q6')}/>
                <span>Very Often</span>
              </div> </div>
              <div className="errorMessage">{this.state.Q6===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">In the last month, how often have you been able to control irritations in your life?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="0" id="titleOpt" checked={this.state.Q7 ==="0"}   onChange={this.handleChange('Q7')}/>
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="1" id="Radio1" checked={this.state.Q7 ==="1"} onChange={this.handleChange('Q7')}/>
                <span>Almost Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="2" id="Radio2" checked={this.state.Q7 ==="2"} onChange={this.handleChange('Q7')}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="3" id="Radio3" checked={this.state.Q7 ==="3"} onChange={this.handleChange('Q7')}/>
                <span>Fairly Often</span>
              </div>
              <div>

              
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="4" id="Radio4" checked={this.state.Q7 ==="4"} onChange={this.handleChange('Q7')}/>
                <span>Very Often</span>
              </div></div>
              <div className="errorMessage">{this.state.Q7===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">In the last month, how often have you felt that you were on top of things?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="0" id="titleOpt" checked={this.state.Q8 ==="0"}   onChange={this.handleChange('Q8')}/>
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="1" id="Radio1" checked={this.state.Q8 ==="1"} onChange={this.handleChange('Q8')}/>
                <span>Almost Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="2" id="Radio2" checked={this.state.Q8 ==="2"} onChange={this.handleChange('Q8')}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="3" id="Radio3" checked={this.state.Q8 ==="3"} onChange={this.handleChange('Q8')}/>
                <span>Fairly Often</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="4" id="Radio4" checked={this.state.Q8 ==="4"} onChange={this.handleChange('Q8')}/>
                <span>Very Often</span>
              </div>
              </div>
              
              <div className="errorMessage">{this.state.Q8===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">In the last month, how often have you been angered because of things that were outside of your control?</label>
            <div id="radio">
                
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="0" id="titleOpt" checked={this.state.Q9 ==="0"}   onChange={this.handleChange('Q9')}/>
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="1" id="Radio1" checked={this.state.Q9 ==="1"} onChange={this.handleChange('Q9')}/>
                <span>Almost Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="2" id="Radio2" checked={this.state.Q9 ==="2"} onChange={this.handleChange('Q9')}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="3" id="Radio3" checked={this.state.Q9 ==="3"} onChange={this.handleChange('Q9')}/>
                <span>Fairly Often</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="4" id="Radio4" checked={this.state.Q9 ==="4"} onChange={this.handleChange('Q9')}/>
                <span>Very Often</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q9===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
           
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="0" id="titleOpt" checked={this.state.Q10 ==="0"}   onChange={this.handleChange('Q10')}/>
                <span>Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="1" id="Radio1" checked={this.state.Q10 ==="1"} onChange={this.handleChange('Q10')}/>
                <span>Almost Never</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="2" id="Radio2" checked={this.state.Q10 ==="2"} onChange={this.handleChange('Q10')}/>
                <span>Sometimes</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="3" id="Radio3" checked={this.state.Q10 ==="3"} onChange={this.handleChange('Q10')}/>
                <span>Fairly Often</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="4" id="Radio4" checked={this.state.Q10 ==="4"} onChange={this.handleChange('Q10')}/>
                <span>Very Often</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q10===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>

            <div className = "row">
                <button
                    style = {{"position": "relative"}}
                    className="btn btn-primary btn-block"
                    onClick={this.completeForm}
                >
            Submit
          </button>
                </div>
            
            {/* <button className="btn btn-outline-primary" data-modal-id="sampleModal" onClick={this.completeForm}>Submit</button> */}

            </div>
            </div>

       
        
        );
    }

}
export default withRouter(PSSModule)
