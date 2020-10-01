// import "../../css/main.css"
import React,{Component} from 'react'
import axios from 'axios'

import {withRouter} from "react-router-dom";
import auth from "../auth";

class PainScaleModule extends Component
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
       entityId:"",
       id:-1,
       nameError:'',


    }
    componentDidMount()
    {
        axios
        .get(
          // 'https://localhost:44338/api/PainScaleDetails',
          'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/PainScaleDetails',

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
                Q11:(response.data[0].q11).toString(),
                Q12:(response.data[0].q12).toString(),
                Q13:(response.data[0].q13).toString(),
                id: (response.data[0].pcsid),

                
            
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
            ||val.Q8===-1 || val.Q9===-1||val.Q10===-1||val.Q11===-1||val.Q12===-1||val.Q13===-1) {
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
              // 'https://localhost:44338/api/PainScaleDetails', 
              'https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/PainScaleDetails', 

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
          <h1>Pain Catastrophizing Scale</h1>
            </div>
          </div>
        </div>
            <div className = "row has-form-forms">
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">I worry all the time about whether the pain will end.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="0" id="titleOpt" checked={this.state.Q1 ==="0"} onChange={this.handleChange('Q1')}  />
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="1" id="Radio1" checked={this.state.Q1 ==="1"} onChange={this.handleChange('Q1')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="2" id="Radio2" checked={this.state.Q1 ==="2"} onChange={this.handleChange('Q1')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="3" id="Radio3" checked={this.state.Q1 ==="3"} onChange={this.handleChange('Q1')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q1" value="4" id="Radio4" checked={this.state.Q1 ==="4"} onChange={this.handleChange('Q1')}/>
                <span>All the time</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q1===-1 && this.state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">I feel I can’t go on.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="0" id="titleOpt" checked={this.state.Q2 ==="0"} onChange={this.handleChange('Q2')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="1" id="Radio1" checked={this.state.Q2 ==="1"} onChange={this.handleChange('Q2')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="2" id="Radio2" checked={this.state.Q2 ==="2"} onChange={this.handleChange('Q2')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="3" id="Radio3" checked={this.state.Q2 ==="3"} onChange={this.handleChange('Q2')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q2" value="4" id="Radio4" checked={this.state.Q2 ==="4"} onChange={this.handleChange('Q2')}/>
                <span>All the time</span>
              </div>
              </div>
            <div className="errorMessage">{this.state.Q2===-1 && this.state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">It’s terrible and I think it’s never going to get any better.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="0" id="titleOpt" checked={this.state.Q3 ==="0"}   onChange={this.handleChange('Q3')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="1" id="Radio1" checked={this.state.Q3 ==="1"} onChange={this.handleChange('Q3')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="2" id="Radio2" checked={this.state.Q3 ==="2"} onChange={this.handleChange('Q3')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="3" id="Radio3" checked={this.state.Q3 ==="3"} onChange={this.handleChange('Q3')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q3" value="4" id="Radio4" checked={this.state.Q3 ==="4"} onChange={this.handleChange('Q3')}/>
                <span>All the time</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q3===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">It’s awful and I feel that it overwhelms me.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="0" id="titleOpt" checked={this.state.Q4 ==="0"}   onChange={this.handleChange('Q4')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="1" id="Radio1" checked={this.state.Q4 ==="1"} onChange={this.handleChange('Q4')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="2" id="Radio2" checked={this.state.Q4 ==="2"} onChange={this.handleChange('Q4')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="3" id="Radio3" checked={this.state.Q4 ==="3"} onChange={this.handleChange('Q4')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q4" value="4" id="Radio4" checked={this.state.Q4 ==="4"} onChange={this.handleChange('Q4')}/>
                <span>All the time</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q4===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">I feel I can’t stand it anymore.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="0" id="titleOpt" checked={this.state.Q5 ==="0"}   onChange={this.handleChange('Q5')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="1" id="Radio1" checked={this.state.Q5 ==="1"} onChange={this.handleChange('Q5')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="2" id="Radio2" checked={this.state.Q5 ==="2"} onChange={this.handleChange('Q5')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="3" id="Radio3" checked={this.state.Q5 ==="3"} onChange={this.handleChange('Q5')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q5" value="4" id="Radio4" checked={this.state.Q5 ==="4"} onChange={this.handleChange('Q5')}/>
                <span>All the time</span>
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
            <label className="abc">I become afraid that the pain will get worse.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="0" id="titleOpt" checked={this.state.Q6 ==="0"}   onChange={this.handleChange('Q6')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="1" id="Radio1" checked={this.state.Q6 ==="1"} onChange={this.handleChange('Q6')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="2" id="Radio2" checked={this.state.Q6 ==="2"} onChange={this.handleChange('Q6')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="3" id="Radio3" checked={this.state.Q6 ==="3"} onChange={this.handleChange('Q6')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q6" value="4" id="Radio4" checked={this.state.Q6 ==="4"} onChange={this.handleChange('Q6')}/>
                <span>All the time</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q6===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">I keep thinking of other painful events.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="0" id="titleOpt" checked={this.state.Q7 ==="0"}   onChange={this.handleChange('Q7')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="1" id="Radio1" checked={this.state.Q7 ==="1"} onChange={this.handleChange('Q7')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="2" id="Radio2" checked={this.state.Q7 ==="2"} onChange={this.handleChange('Q7')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="3" id="Radio3" checked={this.state.Q7 ==="3"} onChange={this.handleChange('Q7')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q7" value="4" id="Radio4" checked={this.state.Q7 ==="4"} onChange={this.handleChange('Q7')}/>
                <span>All the time</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q7===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">I anxiously want the pain to go away</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="0" id="titleOpt" checked={this.state.Q8 ==="0"}   onChange={this.handleChange('Q8')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="1" id="Radio1" checked={this.state.Q8 ==="1"} onChange={this.handleChange('Q8')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="2" id="Radio2" checked={this.state.Q8 ==="2"} onChange={this.handleChange('Q8')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="3" id="Radio3" checked={this.state.Q8 ==="3"} onChange={this.handleChange('Q8')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q8" value="4" id="Radio4" checked={this.state.Q8 ==="4"} onChange={this.handleChange('Q8')}/>
                <span>All the time</span>
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
            <label className="abc">I can’t seem to keep it our of my mind</label>
            <div id="radio">
                
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="0" id="titleOpt" checked={this.state.Q9 ==="0"}   onChange={this.handleChange('Q9')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="1" id="Radio1" checked={this.state.Q9 ==="1"} onChange={this.handleChange('Q9')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="2" id="Radio2" checked={this.state.Q9 ==="2"} onChange={this.handleChange('Q9')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="3" id="Radio3" checked={this.state.Q9 ==="3"} onChange={this.handleChange('Q9')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q9" value="4" id="Radio4" checked={this.state.Q9 ==="4"} onChange={this.handleChange('Q9')}/>
                <span>All the time</span>
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
            <label className="abc">I keep thinking about how much it hurts.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="0" id="titleOpt" checked={this.state.Q10 ==="0"}   onChange={this.handleChange('Q10')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="1" id="Radio1" checked={this.state.Q10 ==="1"} onChange={this.handleChange('Q10')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="2" id="Radio2" checked={this.state.Q10 ==="2"} onChange={this.handleChange('Q10')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="3" id="Radio3" checked={this.state.Q10 ==="3"} onChange={this.handleChange('Q10')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q10" value="4" id="Radio4" checked={this.state.Q10 ==="4"} onChange={this.handleChange('Q10')}/>
                <span>All the time</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q10===-1 && this.state.nameError}</div>
            </div>
            
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">I keep thinking about how badly I want the pain to stop.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q11" value="0" id="titleOpt" checked={this.state.Q11 ==="0"}   onChange={this.handleChange('Q11')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q11" value="1" id="Radio1" checked={this.state.Q11 ==="1"} onChange={this.handleChange('Q11')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q11" value="2" id="Radio2" checked={this.state.Q11 ==="2"} onChange={this.handleChange('Q11')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q11" value="3" id="Radio3" checked={this.state.Q11 ==="3"} onChange={this.handleChange('Q11')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q11" value="4" id="Radio4" checked={this.state.Q11 ==="4"} onChange={this.handleChange('Q11')}/>
                <span>All the time</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q11===-1 && this.state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">There’s nothing I can do to reduce the intensity of the pain.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q12" value="0" id="titleOpt" checked={this.state.Q12 ==="0"}   onChange={this.handleChange('Q12')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q12" value="1" id="Radio1" checked={this.state.Q12 ==="1"} onChange={this.handleChange('Q12')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q12" value="2" id="Radio2" checked={this.state.Q12 ==="2"} onChange={this.handleChange('Q12')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q12" value="3" id="Radio3" checked={this.state.Q12 ==="3"} onChange={this.handleChange('Q12')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q12" value="4" id="Radio4" checked={this.state.Q12 ==="4"} onChange={this.handleChange('Q12')}/>
                <span>All the time</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q12===-1 && this.state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            <div className="form-group custom-radio-wrapper">
            <label className="abc">I wonder whether something serious may happen.</label>
            <div id="radio">
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q13" value="0" id="titleOpt" checked={this.state.Q13 ==="0"}   onChange={this.handleChange('Q13')}/>
                <span>Not at all</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q13" value="1" id="Radio1" checked={this.state.Q13 ==="1"} onChange={this.handleChange('Q13')}/>
                <span>To a slight degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q13" value="2" id="Radio2" checked={this.state.Q13 ==="2"} onChange={this.handleChange('Q13')}/>
                <span>To a moderate degree</span>
              </div>
              <div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q13" value="3" id="Radio3" checked={this.state.Q13 ==="3"} onChange={this.handleChange('Q13')}/>
                <span>To a great degree</span>
              </div>
              <div className="custom-radio rounded">
                <input type="radio" className="custom-input" name="Q13" value="4" id="Radio4" checked={this.state.Q13 ==="4"} onChange={this.handleChange('Q13')}/>
                <span>All the time</span>
              </div>
              </div>
              <div className="errorMessage">{this.state.Q13===-1 && this.state.nameError}</div>
            </div>
            </div>
            </div>
            </div>
            <div className = "row has-form-forms">
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
export default withRouter(PainScaleModule)
