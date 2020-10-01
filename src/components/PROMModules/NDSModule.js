//  import "../../css/main.css"
import React,{Component} from 'react'
import axios from 'axios'
import { withRouter} from "react-router-dom";
import auth from "../auth";

class RadioButton extends Component
{
    render() {
        const{handleChange,Q, variable ,state,question,option1,option2,option3,option4,option5,option6}=this.props
          return (
            
            <div className="row has-form-forms">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">{question}</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="0" id="titleOpt" checked={Q ==="0"} onChange={handleChange(variable)}  />
                <span>{option1}</span>
              </div>
              <br/>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="1" id="Radio1" checked={Q ==="1"} onChange={handleChange(variable)}/>
                <span>{option2}</span>
              </div>
              <br/>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="2" id="Radio2" checked={Q ==="2"} onChange={handleChange(variable)}/>
                <span>{option3}</span>
              </div>
              <br/>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="3" id="Radio3" checked={Q ==="3"} onChange={handleChange(variable)}/>
                <span>{option4}</span>
              </div>
              <br/>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="4" id="Radio3" checked={Q ==="4"} onChange={handleChange(variable)}/>
                <span>{option5}</span>
              </div>
              <br/>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name={variable} value="5" id="Radio3" checked={Q ==="5"} onChange={handleChange(variable)}/>
                <span>{option6}</span>
              </div>
              <div className="errorMessage">{Q===-1 && state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
         
    
          );
      }
}
class NDSModule extends Component
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
       step:1


    }
    componentDidMount()
    {
        axios
        .get(
            // 'https://localhost:44338/api/NDIDetails',
            'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/NDIDetails',

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
                id: (response.data[0].ndiid),

                
            
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
        if ((this.state.step===1 && (val.Q1===-1 ||val.Q2===-1||val.Q3===-1||val.Q4===-1||val.Q5===-1))||
            (this.state.step===2 && (val.Q6===-1||val.Q7===-1||val.Q8===-1 || val.Q9===-1||val.Q10===-1))){
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
        axios
            .post(
                // 'https://localhost:44338/api/NDIDetails', 
                'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/NDIDetails', 

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
            })


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
        return (
          <div id="MainDiv">
            <div className="page-title lg">
              <div className="title">
                {Leftarrow("/")}
                <div style={{ float: "right", marginLeft: "15px" }}>
                  <h1>Neck Disability Index</h1>
                </div>
              </div>
            </div>
            <div>
            <div class="row has-form-forms">
         
            <label className="abc">
            This questionnaire has been designed to give us information as
                to how your neck pain has affected your ability to manage in
                everyday life. Please answer every question by selecting the
                appropriate option.</label>
            </div>
            <hr></hr>
            {this.state.step === 1 && (
              <div>
                <RadioButton
                  state={this.state}
                  handleChange={this.handleChange}
                  question="Pain Intensity"
                  Q={this.state.Q1}
                  variable="Q1"
                  option1="I have no pain at the moment"
                  option2="The pain is very mild at the moment"
                  option3="The pain is moderate at the moment"
                  option4="The pain is fairly severe at the moment"
                  option5="The pain is very severe at the moment"
                  option6="The pain is the worst imaginable at the moment"
                />

                <RadioButton
                  state={this.state}
                  handleChange={this.handleChange}
                  question="Personal Care(Washing,Dressing,etc..,)"
                  Q={this.state.Q2}
                  variable="Q2"
                  option1="I can look after myself normally without causing extra pain"
                  option2="I can look after myself normally but it causes extra pain"
                  option3="It is painful to look after myself and I am slow and careful"
                  option4="I need some help but can manage most of my personal care"
                  option5="I need help every day in most aspects of self care"
                  option6="I do not get dressed, I wash with difficulty and stay in bed"
                />

                <RadioButton
                  state={this.state}
                  handleChange={this.handleChange}
                  question="Lifting"
                  Q={this.state.Q3}
                  variable="Q3"
                  option1="I can lift heavy weights without extra pain"
                  option2="I can lift heavy weights but it gives extra pain"
                  option3="Pain prevents me lifting heavy weights off the floor, but I can manage if they are
                    conveniently placed, for example on a table"
                  option4="Pain prevents me from lifting heavy weights but I can manage light to medium
                    weights if they are conveniently positioned"
                  option5="I can only lift very light weights"
                  option6="I cannot lift or carry anything"
                />

                <RadioButton
                  state={this.state}
                  handleChange={this.handleChange}
                  question="Reading"
                  Q={this.state.Q4}
                  variable="Q4"
                  option1="I can read as much as I want to with no pain in my neck"
                  option2="I can read as much as I want to with slight pain in my neck"
                  option3="I can read as much as I want with moderate pain in my neck"
                  option4="I can’t read as much as I want because of moderate pain in my neck"
                  option5="I can hardly read at all  because of severe pain in my neck"
                  option6="I cannot read at all"
                />

                <RadioButton
                  state={this.state}
                  handleChange={this.handleChange}
                  question="Headaches"
                  Q={this.state.Q5}
                  variable="Q5"
                  option1="I have no headaches at all"
                  option2="I have slight headaches, which come infrequently"
                  option3="I have moderate headaches, which come infrequently"
                  option4="I have moderate headaches, which come frequently"
                  option5="I have severe headaches, which come frequently"
                  option6="I have headaches almost all the time"
                />
                <div className = "row has-form-forms">
                <button
                    style = {{"position": "relative"}}
                    className="btn btn-primary btn-block"
                    onClick={this.nextStep}
                >
            Continue
          </button>
                </div>


                  {/* <button
                    className="btn btn-outline-primary"
                    data-modal-id="sampleModal"
                    onClick={this.nextStep}
                  >
                    Continue
                  </button> */}
                </div>
            )}
            {this.state.step === 2 && (
              <div>
                <RadioButton
                  state={this.state}
                  handleChange={this.handleChange}
                  question="Concentration"
                  Q={this.state.Q6}
                  variable="Q6"
                  option1="I can concentrate fully when I want to with no difficulty"
                  option2="I can concentrate fully when I want to with slight difficulty"
                  option3="I have a fair degree of difficulty in concentrating when I want to"
                  option4="I have a lot of difficulty in concentrating when I want to"
                  option5="I have a great deal of difficulty in concentrating when I want to"
                  option6="I cannot concentrate at all"
                />

                <RadioButton
                  state={this.state}
                  handleChange={this.handleChange}
                  question="Work"
                  Q={this.state.Q7}
                  variable="Q7"
                  option1="I can do as much work as I want to"
                  option2="I can only do my usual work, but no more"
                  option3="I can do most of my usual work, but no more"
                  option4="I cannot do my usual work"
                  option5="I can hardly do any work at all"
                  option6="I can’t do any work at all"
                />

                <RadioButton
                  state={this.state}
                  handleChange={this.handleChange}
                  question="Driving"
                  Q={this.state.Q8}
                  variable="Q8"
                  option1="I can drive my car without any neck pain"
                  option2="I can drive my car as long as I want with slight pain in my neck"
                  option3="I can drive my car as long as I want with moderate pain in my neck"
                  option4="I can’t drive my car as long as I want because of moderate pain in my neck"
                  option5="I can hardly drive at all because of severe pain in my neck"
                  option6="I can’t drive my car at all"
                />

                <RadioButton
                  state={this.state}
                  handleChange={this.handleChange}
                  question="Sleeping"
                  Q={this.state.Q9}
                  variable="Q9"
                  option1="I have no trouble sleeping"
                  option2="My sleep is slightly disturbed (less than 1 hr sleepless)"
                  option3="My sleep is mildly disturbed (1-2 hrs sleepless)"
                  option4="My sleep is moderately disturbed (2-3 hrs sleepless)"
                  option5="My sleep is greatly disturbed (3-5 hrs sleepless)"
                  option6="My sleep is completely disturbed (5-7 hrs sleepless)"
                />

                <RadioButton
                  state={this.state}
                  handleChange={this.handleChange}
                  question="Recreation"
                  Q={this.state.Q10}
                  variable="Q10"
                  option1="I am able to engage in all my recreation activities with no neck pain at all"
                  option2="I am able to engage in all my recreation activities, with some pain in my neck"
                  option3="I am able to engage in most, but not all of my usual recreation activities because of
                    pain in my neck"
                  option4="I am able to engage in a few of my usual recreation activities because of pain in
                    my neck"
                  option5="I can hardly do any recreation activities because of pain in my neck"
                  option6="I can’t do any recreation activities at all"
                />
                <div className = "row has-form-forms">
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


              </div>
            )}
          </div>
          </div>
        );
    }

}
export default withRouter(NDSModule)
