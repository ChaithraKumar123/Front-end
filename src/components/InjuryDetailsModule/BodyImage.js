import React,{Component} from 'react'

import 'react-tabs/style/react-tabs.css';
import ImageMapper from  'react-image-mapper'
import '../../App.css'
import axios from 'axios'


const MAP = {
    name: "my-map",
    areas: [
      { id:26,name: "Right head", shape: "rect", coords: [95,6,125,28]},
      { id:26,name: "Left head", shape: "rect", coords: [125,6, 155, 28 ] },
      { id:26, name: "Central head", shape: "rect", coords: [95,30, 155,56  ]},
      { id:24,name: "Jaw", shape: "rect", coords: [95,57, 155,75 ]},
      {id:1, name: "Cervical", shape: "rect", coords: [95,75, 155, 90 ] },
      { id:7,name: "Right Shoulder", shape: "rect", coords: [44,88,92,130 ]},
      {id:7, name: "Left Shoulder", shape: "rect", coords: [163,88, 211,130 ]},
      { id:25,name: "Chest", shape: "rect", coords: [92,88,127,130 ]},
      { id:25,name: "Chest", shape: "rect", coords: [127,88,163,130 ]},
      { id:13,name: "Left Arm", shape: "rect", coords: [44,130,80,170 ]},
      { id:13,name: "Right Arm", shape: "rect", coords: [170,130,210,170 ]},
      { id:19,name: "Ribs", shape: "rect", coords: [85,130,127,170]},
      { id:19,name: "Ribs", shape: "rect", coords: [127,130,170,170 ]},
      {  id:8,name: "Elbow", shape: "rect", coords: [30,170,80,200 ]},
      {id:8, name: "Elbow", shape: "rect", coords: [170,170,220,200 ]},
      { id:27,name: "Abdomen ", shape: "rect", coords: [80,170,175,240 ]},
      { id:12,name: "Forearm  ", shape: "rect", coords: [20,190,80,240 ]},
      { id:12,name: "Forearm  ", shape: "rect", coords: [175,190,240,240 ]},
      {id:9, name: "Wrist  ", shape: "rect", coords: [24,240,60,270 ]},
      { id:9,name: "Wrist  ", shape: "rect", coords: [200,240,240,270 ]},
      { id:11,name: "Right Fingers  ", shape: "rect", coords: [15,290,50,320 ]},
      { id:11,name: "Left Fingers  ", shape: "rect", coords: [210,285,240,315 ]},
      { id:20,name: "Right Hand  ", shape: "rect", coords: [25,270,50,290 ]},
      {id:20, name: "Left Hand", shape: "rect", coords: [205,270,230,290 ]},
      { id:10,name: "Right Thumb  ", shape: "rect", coords: [8,270,20,300 ]},
      { id:10,name: "Left Thumb  ", shape: "rect", coords: [240,270,250,300 ]},
      { id:18,name: "Pelvis  ", shape: "rect", coords: [80,240,130,270 ]},
      { id:18,name: "Pelvis  ", shape: "rect", coords: [130,240,180,270 ]},
      //{ name: "Pelvis  ", shape: "rect", coords: [80,240,130,270 ]},
      { id:4,name: "Right Hip", shape: "rect", coords: [80,270,130,285 ]},
      {id:4, name: "Left Hip", shape: "rect", coords: [125,270,178,285 ]},
      {id:14, name: "Right Leg", shape: "rect", coords: [75,280,128,360 ]},
      { id:14,name: "Left Leg", shape: "rect", coords: [127,280,180,360 ]},
      { id:5,name: "Right Knee", shape: "rect", coords: [85,360,130,400 ]},
      { id:5,name: "Left Knee", shape: "rect", coords: [127,360,170,400 ]},
      { id:15,name: "Right Lower Leg", shape: "rect", coords: [90,400,130,470 ]},
      { id:15,name: "Left Lower Leg", shape: "rect", coords: [130,400,170,470 ]},
      { id:6,name: "Right Ankle", shape: "rect", coords: [100,470,135,490 ]},
      { id:6,name: "Left Ankle", shape: "rect", coords: [125,470,160,490 ]},
      { id:16,name: "Right Foot", shape: "rect", coords: [100,485,130,495 ]},
      { id:16,name: "Left Foot", shape: "rect", coords: [130,485,160,500 ]},
      { id:17,name: "Right Toes", shape: "rect", coords: [95,496,135,510 ]},
      { id:17,name: "Left Toes", shape: "rect", coords: [130,496,167,510 ]},
      /*{ name: "Right Shoulder", shape: "circle", coords: [64, 105, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Shoulder", shape: "circle", coords: [190, 105, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Right Elbow", shape: "circle", coords: [57, 180, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Elbow", shape: "circle", coords: [188, 180, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Right Wrist", shape: "circle", coords: [40, 258, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Wrist", shape: "circle", coords: [215, 258, 5 ],preFillColor: "rgb(211,211,211)"  },
      { name: "Right Hand", shape: "circle", coords: [34, 277, 5 ],preFillColor: "rgb(211,211,211)"  },
      { name: "Left Hand", shape: "circle", coords: [219, 277, 5 ],preFillColor: "rgb(211,211,211)"  },
      { name: "Right Thumb", shape: "circle", coords: [12, 285, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Thumb", shape: "circle", coords: [245, 285, 5 ] ,preFillColor: "rgb(211,211,211)"},
      { name: "Right Middle Back", shape: "circle", coords: [90, 200, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Middle Back", shape: "circle", coords: [165, 200, 5 ] ,preFillColor: "rgb(211,211,211)"},
      { name: "Right Lower Back", shape: "circle", coords: [100, 225, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Lower Back", shape: "circle", coords: [158, 225, 5 ] ,preFillColor: "rgb(211,211,211)"},
      { name: "Right Hip/Thigh", shape: "circle", coords: [90, 300, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Hip/Thigh", shape: "circle", coords: [165, 300, 5 ] ,preFillColor: "rgb(211,211,211)"},
      { name: "Right Knee", shape: "circle", coords: [110, 378, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Knee", shape: "circle", coords: [145, 378, 5 ] ,preFillColor: "rgb(211,211,211)"},
      { name: "Right Lower Leg", shape: "circle", coords: [100, 450, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Lower Leg", shape: "circle", coords: [155, 450, 5 ] ,preFillColor: "rgb(211,211,211)"},
      { name: "Right Ankle", shape: "circle", coords: [110, 480, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Ankle", shape: "circle", coords: [150, 480, 5 ] ,preFillColor: "rgb(211,211,211)"},
      { name: "Right Foot", shape: "circle", coords: [110, 500, 5 ] ,preFillColor: "rgb(211,211,211)" },
      { name: "Left Foot", shape: "circle", coords: [150, 500, 5 ] ,preFillColor: "rgb(211,211,211)"},
    */
    ]
  }

class BodyImage extends Component
{   
    constructor(props) {
    super(props);
    this.state=
    {
        msg :'',
        hoveredArea:'',
        click :true,
        first1:'',
        body_area: this.props.state.body_area1,
        body_region_id : this.props.state.body_region_id1,
    }
    
}
componentDidMount()
{
    const temp=[]
    const temp1=[]
    axios
    .get('https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/POBdetails',
    {
        params: { value : 60 }
    }) 
    .then(response => {
        console.log(response.data[0])
        for(let i=0;i<response.data.length; i++)
        {
            temp.push(response.data[0].painWhere)
            temp1.push(response.data[0].painRegionID)

        }
        
        this.setState({
            
          body_area:temp,
          body_region_id:temp1

        })
        
       
       
    })
    .catch(error => {
        console.log(error)
    })
}

// body_area_bind() {
//     const body_area_bind=this.props.state.body_area1;
    
//     this.setState({
//         body_area: body_area_bind
//     });
// }

     continue=e=>
    {
    e.preventDefault();
    this.props.nextStep1(this.state.body_area,this.state.body_region_id);
    
    
    }
	
	clicked(area){
    // const temp=[]
    // temp.push({
    //     id:this.state.counter,
    //     body_region:area.name,
    //     region_id:area.id,
    // })
    if(this.state.body_area.length<=3)
    {
		this.setState({
            
            hoveredArea: '',
            first1 : area.name,
            body_area :[...this.state.body_area,area.name],
            body_region_id :[...this.state.body_region_id,area.id]
			
    });
  }
    else
    {
      alert('Cannot select more than three regions')
    }
	}
 
	enterArea(area) {
		this.setState({
			hoveredArea: area,
			
		});
	}
	leaveArea(area) {
		this.setState({
			hoveredArea: null,
		
		});
	}


	getTipPosition(area) {
    
		return {top: `${area.center[1]}px`, center: `${area.center[0]}px`,left:`${area.center[0]}px`,right:'inherit'};
	}
    
   
    render()
    {
        
        return(
       
        <div id="MainDiv" >
            <p id = "Stepscolor">Pain Indicator</p> 
                <p>Click Body region to indicate Pain(Can select upto 3 regions)</p>
            
    <ImageMapper src="/Images/BodyImage.jpeg" map={MAP}  
    onClick={area => this.clicked(area)}
    onMouseEnter={(area,event) => this.enterArea(area,event)}
    onMouseLeave={area => this.leaveArea(area)}/>
     <br/>
    <ul className="list-group" style={{width:`40%`}}>
          {this.state.body_area.map(listitem => (
            <li className="list-group-item list-group-item-action">
              {listitem}
              
            </li>
          ))}
        </ul>

       

    {
    	this.state.hoveredArea &&
    	<span id="tooltip" 
    	    style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
    		{ this.state.hoveredArea && this.state.hoveredArea.name}
    	</span>
    }
    <br/>
   { this.state.body_area.length!==0 && <button className="next" onClick={this.continue}>Confirm and Fill Details</button>}
   
    
    
   </div>);
    }
   
}

export default BodyImage 