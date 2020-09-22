import React ,{Component}from 'react';
import BodyImage from './BodyImage'
import BodyImageTabs from './BodyImageTabs'



class BodyImageMain extends Component {
    
    state={
    step:1,
    body_area1:[],
    body_region_id1:[],
    data_id1:[],
    POBPatientID:60
}
nextStep1=(body_area,body_region,data_id)=>{
    const{step}=this.state;
    this.setState({
        step:step+1,
        body_area1:body_area,
        data_id1:data_id,
        body_region_id1:body_region,
    })
    
}


render_main=()=>{
   
    this.setState({
        step:1,
        
        
    })
    
}
showStep =()=>{
    const{step}=this.state;
    if(step===1)
    return (<BodyImage Leftarrow = {this.props.pageProps.Leftarrow}  nextStep1={this.nextStep1} state={this.state}/>);
    else
    return (<BodyImageTabs state={this.state} render_main={this.render_main}/>)
    }
  render()
  {
    //const {Leftarrow} = this.props.pageProps
  
      return (
    
        <div><p>{this.step}</p>{
            this.showStep()}</div>
      
  );
  }
}

export default BodyImageMain;
