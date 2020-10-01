// import "../../css/main.css"
import React,{Component} from 'react'
import axios from 'axios'

import { withRouter} from "react-router-dom";
import auth from "../auth";

class RadioButton extends Component
{
    render() {
        const{handleChange,Q, variable ,state,question,option1,option2,option3,option4,option5}=this.props
          return (
            
            
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">{question}</label>
            <div id="radio">
  
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="1" id="Radio1" checked={Q ==="1"} onChange={handleChange(variable)}/>
                <span>{option1}</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="2" id="Radio2" checked={Q ==="2"} onChange={handleChange(variable)}/>
                <span>{option2}</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="3" id="Radio3" checked={Q ==="3"} onChange={handleChange(variable)}/>
                <span>{option3}</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="4" id="Radio4" checked={Q ==="4"} onChange={handleChange(variable)}/>
                <span>{option4}</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="5" id="Radio5" checked={Q ==="5"} onChange={handleChange(variable)}/>
                <span>{option5}</span>
              </div>
              <div className="errorMessage">{Q===-1 && state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
         
    
          
         
    
          );
      }
}

class RadioButtonSTEPfour extends Component
{
    render() {
        const{handleChange,Q, variable ,state,question,option1,option2,option3,option4,option5}=this.props
          return (
            
            
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">{question}</label>
            <div id="radio">
  
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="1" id="Radio1" checked={Q ==="1"} onChange={handleChange(variable)}/>
                <span>{option1}</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="2" id="Radio2" checked={Q ==="2"} onChange={handleChange(variable)}/>
                <span>{option2}</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="3" id="Radio3" checked={Q ==="3"} onChange={handleChange(variable)}/>
                <span>{option3}</span>
              </div>
              <div>

              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="4" id="Radio4" checked={Q ==="4"} onChange={handleChange(variable)}/>
                <span>{option4}</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="5" id="Radio5" checked={Q ==="5"} onChange={handleChange(variable)}/>
                <span>{option5}</span>
              </div></div>
              <div className="errorMessage">{Q===-1 && state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
         
    
          
         
    
          );
      }
}
class DASHModule extends Component
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
       Q11:-1,
       Q12:-1,
       Q13:-1,
       Q14:-1,
       Q15:-1,
       Q16:-1,
       Q17:-1,
       Q18:-1,
       Q19:-1,
       Q20:-1,
       Q21:-1,
       Q22:-1,
       Q23:-1,
       Q24:-1,
       Q25:-1,
       Q26:-1,
       Q27:-1,
       Q28:-1,
       Q29:-1,
       Q30:-1,
       work :'',
       work_check:false,
       work_Q1:-1,
       work_Q2:-1,
       work_Q3:-1,
       work_Q4:-1,
       entityId: "",
       id:-1,
       nameError:'',
       step:1


    }
    componentDidMount()
    {
        axios
        .get(
            // 'https://localhost:44338/api/DASHDetails',
            'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/DASHDetails',

        {
            params: { value : localStorage.getItem("KNC") }
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
                Q17: (response.data[0].q17).toString(),
                Q18: (response.data[0].q18).toString(),
                Q19 : (response.data[0].q19).toString(),
                Q20: (response.data[0].q20).toString(),
                Q21: (response.data[0].q21).toString() ,
                Q22: (response.data[0].q22).toString(),
                Q23: (response.data[0].q23).toString(),
                Q24: (response.data[0].q24).toString(),
                Q25: (response.data[0].q25).toString(),
                Q26: (response.data[0].q26).toString(),
                Q27: (response.data[0].q27).toString(),
                Q28: (response.data[0].q28).toString(),
                Q29 : (response.data[0].q29).toString(),
                Q30: (response.data[0].q30).toString(),
                work: response.data[0].wmJobDescription,
                work_check: response.data[0].workModuleAnswered===1 ?true :false,
                work_Q2: (response.data[0].wmUsualWorkPain).toString(),
                work_Q1: (response.data[0].wmUsualTechnique).toString(),
                work_Q3: (response.data[0].wmUsualWorkIntended).toString(),
                work_Q4:(response.data[0].wmUsualWorkTime).toString(),
                id: (response.data[0].dashID),


                
            
            })
           
        })
        .catch(error => {
            console.log(error)
        })
    }
    nextStep=()=>{
        const{step}=this.state;
        const isValid = this.validate();
        if(isValid)
        {
        this.setState({
            step:step+1
        })
      }
        
    }
    back=()=>{
        const{step}=this.state;
        
        this.setState({
            step:step-1
        })
        
    }
    validate = () => 
    {
        let nameError = "";
        
        const val = this.state
        if ((this.state.step===1 && (val.Q1===-1 ||val.Q2===-1||val.Q3===-1||val.Q4===-1||val.Q5===-1||val.Q6===-1||val.Q7===-1
            ||val.Q8===-1 || val.Q9===-1||val.Q10===-1))||
            (this.state.step===2 && (val.Q11===-1 ||val.Q12===-1||val.Q13===-1||val.Q14===-1||val.Q15===-1||val.Q16===-1||val.Q17===-1
                ||val.Q18===-1 || val.Q19===-1||val.Q20===-1||val.Q21===-1))||
           (this.state.step===3 && (val.Q24===-1|| val.Q25===-1||val.Q26===-1||val.Q27===-1||val.Q28===-1)) ||
           (this.state.step===4 && (val.Q22===-1|| val.Q23===-1||val.Q29===-1||val.Q30===-1))|| 
           (this.state.step===5 && (val.work_check===true && (val.work===""||val.work_Q1===-1||val.work_Q2===-1||val.work_Q3===-1||val.work_Q4===-1)))
           
           ){
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
    handleChangeCheck = input =>e=>
    {
       
                this.setState(
                    {
                        [input] :e.target.checked 
                    }
                )
        
            
    }
    completeForm=event=>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid)
        {
        axios
            .post(
                // 'https://localhost:44338/api/DASHDetails', 
                'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/DASHDetails',
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
                Q17: this.state.Q17,
                Q18: this.state.Q18,
                Q19: this.state.Q19,
                Q20: this.state.Q20,
                Q21: this.state.Q21, 
                Q22: this.state.Q22,
                Q23: this.state.Q23,
                Q24: this.state.Q24 ,
                Q25: this.state.Q25,
                Q26: this.state.Q26,
                Q27: this.state.Q27,
                Q28: this.state.Q28,
                Q29: this.state.Q29,
                Q30: this.state.Q30,
                WMJobDescription :this.state.work,
                WorkModuleAnswered:this.state.work_check===true?1:0,
                WMUsualTechnique:this.state.work_check===true?this.state.work_Q1:0,
                WMUsualWorkPain:this.state.work_check===true?this.state.work_Q2:-0,
                WMUsualWorkIntended:this.state.work_check===true?this.state.work_Q3:0,
                WMUsualWorkTime:this.state.work_check===true?this.state.work_Q4:0,
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
            //   "https://localhost:44338/api/saveWorkflow",
        
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
          <h2 style = {{marginTop: "0px"}}>Disability of the Arm, shoulder, hand</h2>
          <p>Step {this.state.step} of 5</p>
            </div>
          </div>     
        </div>
        <div className = "row has-form-forms">
            
            { this.state.step===1 &&
            
            <div>  
                <div className="row">
                <label className="abc">Please rate your difficulty in completing the following activities during the last week</label>
                </div>
            <hr></hr>              
                <RadioButton state={this.state} handleChange={this.handleChange} question="Open a tight or new jar" 
                    Q={this.state.Q1} variable="Q1"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Write" 
                    Q={this.state.Q2} variable="Q2"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Turn a key" 
                    Q={this.state.Q3} variable="Q3"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

<               RadioButton state={this.state} handleChange={this.handleChange} question="Prepare a meal" 
                    Q={this.state.Q4} variable="Q4"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Push open a heavy door" 
                    Q={this.state.Q5} variable="Q5"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Place an object on a shelf above your head" 
                    Q={this.state.Q6} variable="Q6"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Do heavy household chores (e.g., wash walls, wash floors)" 
                    Q={this.state.Q7} variable="Q7"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Garden or do yard work" 
                    Q={this.state.Q8} variable="Q8"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Make a bed" 
                    Q={this.state.Q9} variable="Q9"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Carry a shopping bag or briefcase" 
                    Q={this.state.Q10} variable="Q10"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <div className = "row has-form-forms">
                <button
                    style = {{"position": "relative"}}
                    className="btn btn-primary btn-block"
                    onClick={this.nextStep}
                >
                    Continue
                </button>
                </div>

                {/* <div className="btn-block prev-back-btn">
                <button className="btn btn-outline-primary" data-modal-id="sampleModal" onClick={this.nextStep}>Continue</button>
                </div> */}
            </div>
            }
            { this.state.step===2 &&
            <div>
                <div className="row">
                <label className = "abc">Please rate your difficulty in completing the following activities during the last week</label>
                </div>
                <hr></hr>
                 <RadioButton state={this.state} handleChange={this.handleChange} question="Carry a heavy object (over 10 lbs)" 
                    Q={this.state.Q11} variable="Q11"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Change a lightbulb overhead" 
                    Q={this.state.Q12} variable="Q12"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Wash or blow dry your hair" 
                    Q={this.state.Q13} variable="Q13"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

<               RadioButton state={this.state} handleChange={this.handleChange} question="Wash your back" 
                    Q={this.state.Q14} variable="Q14"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Put on a pullover sweater" 
                    Q={this.state.Q15} variable="Q15"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>


                <RadioButton state={this.state} handleChange={this.handleChange} question="Use a knife to cut food" 
                    Q={this.state.Q16} variable="Q16"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Recreational activities which require little effort(e.g., cardplaying, knitting, etc.). " 
                    Q={this.state.Q17} variable="Q17"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question=" Recreational activities in which you take some force or impact through your arm, shoulder or hand (e.g., golf, hammering, tennis, etc.)." 
                    Q={this.state.Q18} variable="Q18"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Recreational activities in which you move your arm freely (e.g., playing frisbee, badminton, etc.)." 
                    Q={this.state.Q19} variable="Q19"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Manage transportation needs (getting from one place to another)" 
                    Q={this.state.Q20} variable="Q20"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Sexual activities." 
                    Q={this.state.Q21} variable="Q21"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <div>
                <button style = {{ "min-width": "241px"}} className="btn btn-outline-primary" onClick={this.back}>
                 Back
                </button>

                <button
                    style = {{ minWidth: "241px", marginLeft: "4px"}}
                    className="btn btn-primary modal-btn"
                    data-modal-id="sampleModal"
                    onClick={this.nextStep}
                >
              Continue
            </button>
                </div>


                {/* <div className="btn-block prev-back-btn">
                <button className="btn btn-outline-primary" onClick={this.back}>Back</button>
                <button className="btn btn-primary modal-btn" data-modal-id="sampleModal" onClick={this.nextStep}>Continue</button>
                </div> */}

            </div>
            }
             { this.state.step===3 &&
            <div>
                <div className="row">
                <label className = "abc"> Please rate the severity of the following symptoms in the last week.</label>
                </div>
                <hr></hr>
                 <RadioButton state={this.state} handleChange={this.handleChange} question="Arm, shoulder or hand pain" 
                    Q={this.state.Q24} variable="Q24"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Arm, shoulder or hand pain when you performed any specific activity" 
                    Q={this.state.Q25} variable="Q25"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Tingling (pins and needles) in your arm, shoulder or hand." 
                    Q={this.state.Q26} variable="Q26"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Weakness in your arm, shoulder or hand" 
                    Q={this.state.Q27} variable="Q27"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="Stiffness in your arm, shoulder or hand" 
                    Q={this.state.Q28} variable="Q28"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable to do"/>

                
                <div>
                <button style = {{ "min-width": "241px"}} className="btn btn-outline-primary" onClick={this.back}>
                 Back
                </button>

                <button
                    style = {{ minWidth: "241px", marginLeft: "4px"}}
                    className="btn btn-primary modal-btn"
                    data-modal-id="sampleModal"
                    onClick={this.nextStep}
                >
              Continue
            </button>
                </div>

{/*                 

                <div className="btn-block prev-back-btn">
                <button className="btn btn-outline-primary" onClick={this.back}>Back</button>
                <button className="btn btn-primary modal-btn" data-modal-id="sampleModal" onClick={this.nextStep}>Continue</button>
                </div> */}

            </div>
            }
              
            { this.state.step===4 &&
            <div>
                 <RadioButtonSTEPfour state={this.state} handleChange={this.handleChange} question="During the past week, to what extent has your arm,shoulder or hand problem interfered with your normal social activities with family, friends, neighbours or groups?" 
                    Q={this.state.Q22} variable="Q22"
                    option1="Not at all"
                    option2="Slightly"
                    option3="Moderately"
                    option4="Quite"
                    option5="Extremely"/>

                <RadioButtonSTEPfour state={this.state} handleChange={this.handleChange} question="During the past week, were you limited in your work or other regular daily activities as a result of your arm, shoulder or hand problem? (circle" 
                    Q={this.state.Q23} variable="Q23"
                    option1="Not limited"
                    option2="Slightly limited"
                    option3="Moderately limited"
                    option4="Quite limited"
                    option5="Unable "/>

                <RadioButtonSTEPfour state={this.state} handleChange={this.handleChange} question="During the past week, how much difficulty have you had sleeping because of the pain in your arm, shoulder or hand?" 
                    Q={this.state.Q29} variable="Q29"
                    option1="No difficulty"
                    option2="Mild difficulty"
                    option3="Moderate difficulty"
                    option4="Severe difficulty"
                    option5="So much difficulty that i can't sleep"/>

                <RadioButtonSTEPfour state={this.state} handleChange={this.handleChange} question="I feel less capable, less confident or less useful because of my arm, shoulder or hand problem" 
                    Q={this.state.Q30} variable="Q30"
                    option1="Strongly disagree"
                    option2="Disagree"
                    option3="Neither disagree or agree"
                    option4="Agree"
                    option5="Strongly agree"/>
                    
                <div>
                <button style = {{ "min-width": "241px"}} className="btn btn-outline-primary" onClick={this.back}>
                 Back
                </button>

                <button
                    style = {{ minWidth: "241px", marginLeft: "4px"}}
                    className="btn btn-primary modal-btn"
                    data-modal-id="sampleModal"
                    onClick={this.nextStep}
                >
              Continue
            </button>
                </div>

{/* 
                <div className="btn-block prev-back-btn">
                <button className="btn btn-outline-primary" onClick={this.back}>Back</button>
                <button className="btn btn-primary modal-btn" data-modal-id="sampleModal" onClick={this.nextStep}>Continue</button>
                </div> */}

            </div>
            }
             { this.state.step===5 &&
            <div>
                <div className="row">
                <label className = "abc"> WORK MODULE - The following questions ask about the impact of your arm, shoulder or hand problem on your ability to work (including homemaking if that is your main work role).</label>
                </div>
                <hr></hr>

                <div className="row">
                    <div className="col-md-6 col-lg-3">
                    <div className="form-group">
                        <label>Your job/work is</label>
                        <input className="form-control" type="text" value={this.state.work} onChange={this.handleChange("work")}/>
                    </div>
                    </div>
                    <div className="errorMessage">{(this.state.work_check===true && this.state.work==='') && this.state.nameError}</div>
                </div>
                <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="custom-radio square">
                        <input type="checkbox" id="intermediateCheckbox" className="custom-input" checked={this.state.work_check} onChange={this.handleChangeCheck("work_check")}/>
                        <span>I do not work</span>
                    </div>
                </div>
                </div>
             <br/>
             { this.state.work_check === false && <div>
                <p>Select that best describes your physical ability in the past week. Did you have any difficulty:</p>
                <hr/>
                 <RadioButton state={this.state} handleChange={this.handleChange} question="using your usual technique for your work?" 
                    Q={this.state.work_Q1} variable="work_Q1"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="doing your usual work because of arm, shoulder or hand pain?" 
                    Q={this.state.work_Q2} variable="work_Q2"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="doing your work as well as you would like?" 
                    Q={this.state.work_Q3} variable="work_Q3"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable"/>

                <RadioButton state={this.state} handleChange={this.handleChange} question="spending your usual amount of time doing your work?" 
                    Q={this.state.work_Q4} variable="work_Q4"
                    option1="None"
                    option2="Mild"
                    option3="Moderate"
                    option4="Severe"
                    option5="Unable"/>
                    
             </div>}

             
             <div>
                <button style = {{ "min-width": "241px"}} className="btn btn-outline-primary" onClick={this.back}>
                 Back
                </button>

                <button
                    style = {{ minWidth: "241px", marginLeft: "4px"}}
                    className="btn btn-primary modal-btn"
                    data-modal-id="sampleModal"
                    onClick={this.completeForm}
                >
              Submit
            </button>
                </div>

                {/* <div className="btn-block prev-back-btn">
                <button className="btn btn-outline-primary" onClick={this.back}>Back</button>
                <button className="btn btn-primary modal-btn" data-modal-id="sampleModal" onClick={this.completeForm}>Submit</button>
                </div> */}

            </div>
            }
           

            </div>
            </div>
        
        
        );
    }

}
export default withRouter(DASHModule)
