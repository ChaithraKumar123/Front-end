// import "../../../css/main.css"
import React,{Component} from 'react'

class RadioBtn extends Component{



  render() {
    const{handleChange,Q, variable ,state,question}=this.props
      return (
        
        <div className="row">
        <div className="col-md-12">
        <div className="form-group custom-radio-wrapper">
      <label className = "abc">{question}</label>
          <div className="errorMessage">{Q===-1 && state.nameError}</div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable} value="0" checked={Q ==="0"} onChange={handleChange(variable)} />
            <span>0</span>
          </div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable} value="1" checked={Q ==="1"} onChange={handleChange(variable)}/>
            <span>1</span>
          </div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable} value="2" checked={Q ==="2"} onChange={handleChange(variable)}/>
            <span>2</span>
          </div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable} value="3" checked={Q ==="3"} onChange={handleChange(variable)}/>
            <span>3</span>
          </div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable} value="4" checked={Q ==="4"} onChange={handleChange(variable)}/>
            <span>4</span>
          </div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable} value="5" checked={Q ==="5"} onChange={handleChange(variable)}/>
            <span>5</span>
          </div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable} value="6" checked={Q ==="6"} onChange={handleChange(variable)}/>
            <span>6</span>
          </div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable} value="7" checked={Q ==="7"} onChange={handleChange(variable)}/>
            <span>7</span>
          </div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable}  value="8" checked={Q ==="8"} onChange={handleChange(variable)}/>
            <span>8</span>
          </div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable} value="9" checked={Q ==="9"} onChange={handleChange(variable)}/>
            <span>9</span>
          </div>
          <div className="custom-radio secondary">
            <input type="radio" className="custom-input" name={variable} value="10" checked={Q ==="10"} onChange={handleChange(variable)}/>
            <span>10</span>
          </div>
          
          <div className="radio-indicators">
            <span>Completely disagree</span>
            <span>Completely agree</span>
          </div>
        </div>
      </div>
      
    </div>
     

      );
  }
}
export default RadioBtn