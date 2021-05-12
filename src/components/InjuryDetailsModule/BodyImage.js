/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import update from "react-addons-update";
import "react-tabs/style/react-tabs.css";
import "../../App.css";
import { deletePOBDetails, getPOBDetails } from "../../services/api";
import LocalStorageService from "../../services/localStorageService";
//import 'react-notifications/lib/notifications.css';

const localStorageService = new LocalStorageService();

const BackMAP = {
  //joint: "my-map",
  orientation: "Back",
  areas: [
    {
      jointId: 26,
      joint: "Head",
      desc: "Right head back",
      side: "Right",
      shape: "rect",
      coords: [95, 6, 125, 28],
    }, //0
    {
      jointId: 26,
      joint: "Head",
      desc: "Left head back",
      side: "Left",
      shape: "rect",
      coords: [125, 6, 155, 28],
    }, //1
    {
      jointId: 26,
      joint: "Head",
      desc: "Central head back",
      side: "Central",
      shape: "rect",
      coords: [95, 30, 155, 56]
    }, //2

    {
      jointId: 1,
      joint: "Cervical",
      desc: "Cervical back",
      side: "Central",
      shape: "rect",
      coords: [95, 57, 155, 75]
    }, //3
    {
      jointId: 21,
      joint: "Cervicothoracic",
      desc: "Cervicothoracic",
      side: "Central",
      shape: "rect",
      coords: [95, 75, 155, 90],
    }, //4

    {
      jointId: 7,
      joint: "Shoulder",
      desc: "Left Shoulder Back",
      side: "Left",
      shape: "rect",
      coords: [163, 88, 211, 130],
    }, //5
    {
      jointId: 7,
      joint: "Shoulder",
      desc: "Right Shoulder Back",
      side: "Right",
      shape: "rect",
      coords: [44, 88, 92, 130],
    }, //6

    {
      jointId: 2,
      joint: "Thoracic",
      desc: "Left Thoracic",
      side: "Left",
      shape: "rect",
      coords: [92, 88, 127, 130]
    }, //7
    {
      jointId: 2,
      joint: "Thoracic",
      desc: "Right Thoracic",
      side: "Right",
      shape: "rect",
      coords: [127, 88, 163, 130],
    }, //8

    {
      jointId: 13,
      joint: "Upper Arm",
      desc: "Right Upper Arm Back",
      side: "Right",
      shape: "rect",
      coords: [170, 130, 210, 170],
    }, //9

    {
      jointId: 13,
      joint: "Upper Arm",
      desc: "Left Upper Arm Back",
      side: "Left",
      shape: "rect",
      coords: [44, 130, 80, 170],
    }, //10

    {
      jointId: 19,
      joint: "Ribs",
      desc: "Left Ribs Back",
      side: "Left",
      shape: "rect",
      coords: [85, 130, 127, 170],
    }, //11
    {
      jointId: 19,
      joint: "Ribs",
      desc: "Right Ribs Back",
      side: "Right",
      shape: "rect",
      coords: [127, 130, 170, 170],
    },//12
    {
      jointId: 2,
      joint: "Thoracic",
      desc: "Central Thoracic",
      side: "Central",
      shape: "rect",
      coords: [127, 130, 170, 170],
    }, //13

    {
      jointId: 8,
      joint: "Elbow",
      desc: "Left Elbow Back",
      side: "Left",
      shape: "rect",
      coords: [30, 170, 80, 200],
    }, //14
    {
      jointId: 22,
      joint: "Thoracolumbar",
      desc: "Thoracolumbar",
      side: "Central",
      shape: "rect",
      coords: [80, 170, 175, 240],
    },
    {
      jointId: 8,
      joint: "Elbow",
      desc: "Right Elbow Back",
      side: "Right",
      shape: "rect",
      coords: [170, 170, 220, 200],
    },

    {
      jointId: 12,
      joint: "Forearm",
      desc: "Left Forearm Back",
      side: "Left",
      shape: "rect",
      coords: [20, 190, 80, 240],
    }, //17
    {
      jointId: 12,
      joint: "Forearm",
      desc: "Right Forearm Back",
      side: "Right",
      shape: "rect",
      coords: [175, 190, 240, 240],
    }, //18

    {
      jointId: 23,
      joint: "Lumbosacral",
      desc: "Left Lumbosacral",
      side: "Left",
      shape: "rect",
      coords: [175, 190, 240, 240],
    }, //19
    {
      jointId: 23,
      joint: "Lumbosacral",
      desc: "Right Lumbosacral",
      side: "Right",
      shape: "rect",
      coords: [175, 190, 240, 240],
    }, //20

    {
      jointId: 9,
      joint: "Wrist",
      desc: "Left Wrist Back",
      side: "Left",
      shape: "rect",
      coords: [24, 240, 60, 270],
    }, //21
    {
      jointId: 9,
      joint: "Wrist",
      desc: "Right Wrist Back",
      side: "Right",
      shape: "rect",
      coords: [200, 240, 240, 270],
    }, //22

    {
      jointId: 18,
      joint: "Pelvis",
      desc: "Left Pelvis Back",
      side: "Left",
      shape: "rect",
      coords: [80, 240, 130, 270],
    }, //23
    {
      jointId: 18,
      joint: "Pelvis",
      desc: "Right Pelvis Back",
      side: "Right",
      shape: "rect",
      coords: [130, 240, 180, 270],
    }, //24

    {
      jointId: 10,
      joint: "Thumb",
      desc: "Right Thumb Back",
      side: "Right",
      shape: "rect",
      coords: [8, 270, 20, 300],
    }, // 25
    {
      jointId: 10,
      joint: "Thumb",
      desc: "Left Thumb Back",
      side: "Left",
      shape: "rect",
      coords: [240, 270, 250, 300],
    }, //26

    {
      jointId: 20,
      joint: "Hand",
      desc: "Right Hand Back",
      side: "Right",
      shape: "rect",
      coords: [25, 270, 50, 290],
    }, //27
    {
      jointId: 20,
      joint: "Hand",
      desc: "Left Hand Back",
      side: "Left",
      shape: "rect",
      coords: [205, 270, 230, 290],
    }, //28

    {
      jointId: 4,
      joint: "Hip",
      desc: "Right Hip Back",
      side: "Right",
      shape: "rect",
      coords: [80, 270, 130, 285],
    }, //29
    {
      jointId: 4,
      joint: "Hip",
      desc: "Left Hip Back",
      side: "Left",
      shape: "rect",
      coords: [125, 270, 178, 285],
    }, //30

    {
      jointId: 11,
      joint: "Fingers",
      desc: "Right Fingers Back",
      side: "Right",
      shape: "rect",
      coords: [15, 290, 50, 320],
    }, //31
    {
      jointId: 11,
      joint: "Fingers",
      desc: "Left Fingers Back",
      side: "Left",
      shape: "rect",
      coords: [210, 285, 240, 315],
    }, //32

    {
      jointId: 14,
      joint: "Upper Leg",
      desc: "Right Upper Leg Back",
      side: "Right",
      shape: "rect",
      coords: [75, 280, 128, 360],
    }, //33
    {
      jointId: 14,
      joint: "Upper Leg",
      desc: "Left Upper Leg Back",
      side: "Left",
      shape: "rect",
      coords: [127, 280, 180, 360],
    }, //34

    {
      jointId: 5,
      joint: "Knee",
      desc: "Right Knee Back",
      side: "Right",
      shape: "rect",
      coords: [85, 360, 130, 400],
    }, //35
    {
      jointId: 5,
      joint: "Knee",
      desc: "Left Knee Back",
      side: "Left",
      shape: "rect",
      coords: [127, 360, 170, 400],
    }, //36

    //{ joint: "Pelvis  ", shape: "rect", coords: [80,240,130,270 ]},

    {
      jointId: 15,
      joint: "Lower Leg",
      desc: "Right Lower Leg Back",
      side: "Right",
      shape: "rect",
      coords: [90, 400, 130, 470],
    }, // 37
    {
      jointId: 15,
      joint: "Lower Leg",
      desc: "Left Lower Leg Back",
      side: "Left",
      shape: "rect",
      coords: [130, 400, 170, 470],
    }, // 38
    {
      jointId: 6,
      joint: "Ankle",
      desc: "Right Ankle Back",
      side: "Right",
      shape: "rect",
      coords: [100, 470, 135, 490]
    }, //39
    {
      jointId: 6,
      joint: "Ankle",
      desc: "Left Ankle Back",
      side: "Left",
      shape: "rect",
      coords: [125, 470, 160, 490]
    }, //40
    {
      jointId: 16,
      joint: "Foot",
      desc: "Right Foot Back",
      side: "Right",
      shape: "rect",
      coords: [100, 485, 130, 495]
    }, //41
    {
      jointId: 16,
      joint: "Foot",
      desc: "Left Foot Back",
      side: "Left",
      shape: "rect",
      coords: [130, 485, 160, 500]
    }, //42
    {
      jointId: 17,
      joint: "Toes",
      desc: "Right Toes Back",
      side: "Right",
      shape: "rect",
      coords: [95, 496, 135, 510]
    }, //43
    {
      jointId: 17,
      joint: "Left",
      desc: "Left Toes Back",
      side: "Left",
      shape: "rect",
      coords: [130, 496, 167, 510]
    }, //44
  ],
};

const MAP = {
  //joint: "my-map",
  orientation: "Front",
  areas: [
    {
      jointId: 26,
      desc: "Right head front",
      joint: "Head",
      side: "Right",
      shape: "rect",
      coords: [95, 6, 125, 28]
    }, //0
    {
      jointId: 26,
      desc: "Left head front",
      joint: "Head",
      side: "Left",
      shape: "rect",
      coords: [125, 6, 155, 28]
    }, //1
    {
      jointId: 26,
      desc: "Central head front",
      joint: "Head",
      side: "Central",
      shape: "rect",
      coords: [95, 30, 155, 56]
    }, //2

    {
      jointId: 24,
      joint: "Jaw",
      desc: "Jaw front",
      side: "Central",
      shape: "rect",
      coords: [95, 57, 155, 75]
    }, //3

    {
      jointId: 1,
      joint: "Cervical",
      desc: "Cervial front",
      side: "Central",
      shape: "rect",
      coords: [95, 75, 155, 90]
    }, //4
    {
      jointId: 7,
      joint: "Shoulder",
      desc: "Right Shoulder front",
      side: "Right",
      shape: "rect",
      coords: [44, 88, 92, 130]
    }, //5
    {
      jointId: 7,
      joint: "Shoulder",
      desc: "Left Shoulder front",
      side: "Left",
      shape: "rect",
      coords: [163, 88, 211, 130],
    }, //6
    {
      jointId: 25,
      joint: "Chest",
      desc: "Right Chest front",
      side: "Right",
      shape: "rect",
      coords: [92, 88, 127, 130]
    }, //7
    {
      jointId: 25,
      joint: "Chest",
      desc: "Left Chest front",
      side: "Left",
      shape: "rect",
      coords: [127, 88, 163, 130]
    }, //8

    {
      jointId: 13,
      joint: "Arm",
      desc: "Left Arm front",
      side: "Left",
      shape: "rect",
      coords: [44, 130, 80, 170]
    }, //9
    {
      jointId: 13,
      joint: "Arm",
      desc: "Right Arm front",
      side: "Right",
      shape: "rect",
      coords: [170, 130, 210, 170]
    }, //10

    {
      jointId: 19,
      joint: "Ribs",
      desc: "Right Ribs Front",
      side: "Right",
      shape: "rect",
      coords: [85, 130, 127, 170],
    }, //11
    {
      jointId: 19,
      joint: "Ribs",
      desc: "Left Ribs Front",
      side: "Left",
      shape: "rect",
      coords: [127, 130, 170, 170],
    },//12 

    {
      jointId: 8,
      joint: "Elbow",
      desc: "Right Elbow Front",
      side: "Right",
      shape: "rect",
      coords: [30, 170, 80, 200],
    },//13
    {
      jointId: 8,
      joint: "Elbow",
      desc: "Left Elbow Front",
      side: "Left",
      shape: "rect",
      coords: [170, 170, 220, 200],
    }, //14

    {
      jointId: 27,
      joint: "Abdomen",
      desc: "Abdomen Front",
      side: "Central",
      shape: "rect",
      coords: [80, 170, 175, 240],
    }, //15

    {
      jointId: 12,
      joint: "Forearm",
      desc: "Right Forearm Front",
      side: "Right",
      shape: "rect",
      coords: [20, 190, 80, 240],
    }, //16
    {
      jointId: 12,
      joint: "Forearm",
      desc: "Left Forearm Front",
      side: "Left",
      shape: "rect",
      coords: [175, 190, 240, 240],
    }, //17

    {
      jointId: 9,
      joint: "Wrist",
      desc: "Left Wrist Front",
      side: "Left",
      shape: "rect",
      coords: [24, 240, 60, 270],
    }, // 18
    {
      jointId: 9,
      joint: "Wrist",
      desc: "Right Wrist Front",
      side: "Right",
      shape: "rect",
      coords: [200, 240, 240, 270],
    }, //19

    {
      jointId: 18,
      joint: "Pelvis",
      desc: "Right Pelvis Front",
      side: "Right",
      shape: "rect",
      coords: [80, 240, 130, 270],
    }, //20
    {
      jointId: 18,
      joint: "Pelvis",
      desc: "Left Pelvis Front ",
      side: "Left",
      shape: "rect",
      coords: [130, 240, 180, 270],
    }, //21

    {
      jointId: 10,
      joint: "Thumb",
      desc: "Right Thumb Front",
      side: "Right",
      shape: "rect",
      coords: [8, 270, 20, 300],
    }, //22
    {
      jointId: 10,
      joint: "Thumb",
      desc: "Left Thumb Front ",
      side: "Left",
      shape: "rect",
      coords: [240, 270, 250, 300],
    }, //23

    {
      jointId: 20,
      joint: "Hand",
      desc: "Left Hand Front",
      side: "Left",
      shape: "rect",
      coords: [205, 270, 230, 290],
    }, //24

    {
      jointId: 20,
      joint: "Hand",
      desc: "Right Hand Front",
      side: "Right",
      shape: "rect",
      coords: [25, 270, 50, 290],
    }, //25

    {
      jointId: 4,
      joint: "Hip",
      desc: "Right Hip Front",
      side: "Right",
      shape: "rect",
      coords: [80, 270, 130, 285],
    }, //26
    {
      jointId: 4,
      joint: "Hip",
      desc: "Left Hip Front",
      side: "Left",
      shape: "rect",
      coords: [125, 270, 178, 285],
    }, //27

    {
      jointId: 11,
      joint: "Fingers",
      desc: "Right Fingers Front",
      side: "Right",
      shape: "rect",
      coords: [15, 290, 50, 320],
    }, //28
    {
      jointId: 11,
      joint: "Fingers",
      desc: "Left Fingers Front ",
      side: "Left",
      shape: "rect",
      coords: [210, 285, 240, 315],
    }, //29

    {
      jointId: 14,
      joint: "Upper Leg",
      desc: "Right Upper Leg Front",
      side: "Right",
      shape: "rect",
      coords: [75, 280, 128, 360],
    }, //30
    {
      jointId: 14,
      joint: "Upper Leg",
      desc: "Left Upper Leg front",
      side: "Left",
      shape: "rect",
      coords: [127, 280, 180, 360],
    }, //31

    {
      jointId: 5,
      joint: "Knee",
      desc: "Right Knee Front",
      side: "Right",
      shape: "rect",
      coords: [85, 360, 130, 400],
    }, //32
    {
      jointId: 5,
      joint: "Knee",
      desc: "Left Knee Front",
      side: "Left",
      shape: "rect",
      coords: [127, 360, 170, 400],
    }, //33

    //{ joint: "Pelvis  ", shape: "rect", coords: [80,240,130,270 ]},
    {
      jointId: 15,
      joint: "Lower Leg",
      desc: "Right Lower Leg Front",
      side: "Right",
      shape: "rect",
      coords: [90, 400, 130, 470],
    }, //34
    // { jointId: 14, joint: "Right Leg", shape: "rect", coords: [75, 280, 128, 360] },
    // { jointId: 14, joint: "Left Leg", shape: "rect", coords: [127, 280, 180, 360] },

    {
      jointId: 15,
      joint: "Lower Leg",
      desc: "Left Lower Leg Front",
      side: "Left",
      shape: "rect",
      coords: [130, 400, 170, 470],
    }, // 35
    {
      jointId: 6,
      joint: "Ankle",
      desc: "Right Ankle Front",
      side: "Right",
      shape: "rect",
      coords: [100, 470, 135, 490]
    }, //36
    {
      jointId: 6,
      joint: "Ankle",
      desc: "Left Ankle Front",
      side: "Left",
      shape: "rect",
      coords: [125, 470, 160, 490]
    }, //37
    {
      jointId: 16,
      joint: "Foot",
      desc: "Right Foot Front",
      side: "Right",
      shape: "rect",
      coords: [100, 485, 130, 495]
    }, //38
    {
      jointId: 16,
      joint: "Foot",
      desc: "Left Foot Front",
      side: "Left",
      shape: "rect",
      coords: [130, 485, 160, 500]
    }, //39
    {
      jointId: 17,
      joint: "Toes",
      desc: "Right Toes Front",
      side: "Right",
      shape: "rect",
      coords: [95, 496, 135, 510]
    }, //40
    {
      jointId: 17,
      joint: "Toes",
      desc: "Left Toes Front",
      side: "Left",
      shape: "rect",
      coords: [130, 496, 167, 510]
    }, //41
  ],
};
class BodyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      hoveredArea: "",
      click: true,
      first1: "",
      body_area: this.props.state.body_area1,
      body_region_id: this.props.state.body_region_id1,
      body_side: this.props.state.body_side1,
      body_orientation: this.props.state.body_orientation1,
      body_desc: this.props.state.body_desc1,
      data_id: this.props.state.data_id1,
      checkedA: false,
      workflowID: this.props.state.workflowID

    };
  }
  componentDidMount() {
    const temp = [];
    const temp1 = [];
    const temp2 = [];
    const temp3 = [];
    const temp4 = [];
    const temp5 = [];
    // axios
    //   .get(
    //     // "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/POBdetails",
    //     "https://localhost:44338/api/POBdetails",

    //     {
    //       params: { value: localStorage.getItem("KNC") },
    //     }
    //   )
    getPOBDetails({ value: localStorageService.getKNC() })
      .then((response) => {
        console.log(response.data[0]);
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].painRegionID) {
            temp1.push(response.data[i].painRegionID);
            temp.push(response.data[i].painWhere);
            temp3.push(response.data[i].painSide);
            temp4.push(response.data[i].painOrientation);
            temp5.push(response.data[i].painBodyMapDescription)
            this.setState({
              //body_area: body_area,
              body_region_id: update(this.state.body_region_id, {
                $splice: [[i - 1, 1, temp1[i]]],
              }),
              body_area: update(this.state.body_area, {
                $splice: [[i - 1, 1, temp[i]]],
              }),
              body_side: update(this.state.body_side, {
                $splice: [[i - 1, 1, temp3[i]]],
              }),
              body_orientation: update(this.state.body_orientation, {
                $splice: [[i - 1, 1, temp4[i]]],
              }),
              body_desc: update(this.state.body_desc, {
                $splice: [[i - 1, 1, temp5[i]]],
              }),
            });

            //   continue;
          }
          temp2.push(response.data[i].pobcpRegionID);

          this.setState({
            //body_area: body_area,
            // body_region_id: update(this.state.body_region_id, {
            //   $splice: [[i - 1, 1, temp[i]]],
            // }),
            data_id: update(this.state.data_id, {
              $splice: [[i - 1, 1, temp2[i]]],
            })
            // body_area: update(this.state.body_area, {
            //   $splice: [[i - 1, 1, temp[i]]],
            // }),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // body_area_bind() {
  //     const body_area_bind=this.props.state.body_area1;

  //     this.setState({
  //         body_area: body_area_bind
  //     });
  // }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep1(
      this.state.body_area,
      this.state.body_region_id,
      this.state.data_id,
      this.state.body_side,
      this.state.body_orientation,
      this.state.body_desc
    );
  };

  clicked(area) {
    // const temp=[]
    // temp.push({
    //     id:this.state.counter,
    //     body_region:area.name,
    //     region_id:area.id,
    // })
    if (this.state.body_area.length < 3) {
      //use the checkedA flag to determine BACKMAP or MAP, then use it
      var orientation = this.state.checkedA ? BackMAP.orientation : MAP.orientation;
      this.setState({
        hoveredArea: "",
        first1: area.name, //first1 reflects primary region, all others when asking for more than 1 are secondary
        body_area: [...this.state.body_area, area.joint],
        body_region_id: [...this.state.body_region_id, area.jointId],
        body_side: [...this.state.body_side, area.side],
        body_orientation: [...this.state.body_side, orientation],
        body_desc: [...this.state.body_desc, area.desc]
        // data_id: [...this.state.data_id, -1],
      });
      //NotificationManager.success("", 'Added selected region');
    } else {
      alert("Cannot select more than one region");
    }
  }
  // function to perform shading on selecting different body parts
  onSelect(e, map_index, backMap_index) {
    if (this.state.body_desc.length === 0) {
      this.state.checkedA
        ? this.clicked(BackMAP.areas[backMap_index])
        : this.clicked(MAP.areas[map_index]);
    }
    else if ((map_index && this.state.body_desc.includes(MAP.areas[map_index].desc)) ||
      (backMap_index && this.state.body_desc.includes(BackMAP.areas[backMap_index].desc))) {
      this.delete_region(e, 0);
    }
    else if (this.state.body_desc.length !== 0) {
      this.delete_region(e, 0).then(() => {
        this.state.checkedA
          ? this.clicked(BackMAP.areas[backMap_index])
          : this.clicked(MAP.areas[map_index]);
      })

    }
    // let selectClone = this.state.select.slice(); //creates the clone of the state
    // for (var i=0; i< this.state.select.length; i++){
    //   if(i !== index){
    //     this.delete_region(e, 0);
    //     selectClone[i] = false;
    //     this.setState({select: selectClone})
    //   }
    // }
    // if(!this.state.select[index]){
    // this.state.checkedA
    //   ? this.clicked(BackMAP.areas[index])
    //   : this.clicked(MAP.areas[index]);
    // }

    // selectClone[index] = !this.state.select[index];
    // this.setState({ select: selectClone });
    // this.setState({ select: !this.state.select});
    // this.state.select[index] ?
    //   this.delete_region(e, 0)
    //   : e.preventDefault();
  }

  delete_api(val, next_val, index) {
    // axios
    //   .delete(
    //     //"https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/POBdetails",
    //     "https://localhost:44338/api/POBdetails",
    //     {
    //       params: { value: val, next_val: next_val, index: index },
    //     }
    //   )
    deletePOBDetails({ value: val, next_val: next_val, index: index })
      .then((response) => {
        console.log(response.data[0]);
        this.delete_array(index);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  delete_array(index) {
    var array = [...this.state.body_area];
    var array_id = [...this.state.body_region_id];
    var side = [...this.state.body_side];
    var orientation = [...this.state.body_orientation];
    var desc = [...this.state.body_desc];
    // var id = [...this.state.data_id];
    array.splice(index, 1);
    this.setState({ body_area: array });
    array_id.splice(index, 1);
    this.setState({ body_region_id: array_id });
    side.splice(index, 1);
    this.setState({ body_side: side })
    orientation.splice(index, 1);
    this.setState({ body_orientation: orientation })
    desc.splice(index, 1);
    this.setState({ body_desc: desc })
    // id.splice(index, 1);
    // this.setState({ data_id: id });
  }

  delete_region = async (event, index) => {
    event.preventDefault();

    // var str = "Delete Body Region -" + this.state.body_area[index] + "?";
    // if (window.confirm(str)) {
    // if (this.state.data_id[index] !== -1) {
    // this.delete_api(
    //   this.state.data_id[index],
    //   this.state.data_id[index + 1],
    //   index
    // );
    // } else {
    this.delete_array(index);
    // }
    //  }
  };
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
    return {
      top: `${area.coords[0]}px`,
      center: `${area.coords[1]}px`,
      left: `${area.coords[2]}px`,
      right: "inherit",
    };
  }

  bodyStyle = (hover, frontname, backname) => {
    if (hover) {
      return { opacity: "50%" };
    }
    else if (this.state.body_desc.includes(frontname) ||
      this.state.body_desc.includes(backname)) {
      return { opacity: "100%" };
    }
    else {
      return { opacity: "0%" };
    }
  }
  render() {
    const { Leftarrow } = this.props;

    return (
      <div id="MainDiv">
        <div className="page-title lg">
          <div className="title">
            {Leftarrow("/")}
            <div style={{ float: "right", marginLeft: "15px" }}>
              <h1>Body Chart</h1>
            </div>
            {/* <p>
              {" "}
              Please select where your most important problem is first
             {" "}
            </p>
            <p> (Select up to 3 areas of pain)</p> */}
          </div>
        </div>
        <div className="row has-form-forms">
          <label style={{ marginBottom: "35px" }} className="abc">
            Please select where your most important problem is first. <br></br>{" "}
            (Select 1 area of pain)
          </label>
        </div>

        <div
          className="form-group custom-radio-wrapper"
          style={{ textAlign: "center" }}
        >
          <div id="radio">
            <div className="custom-radio">
              <input
                type="radio"
                className="custom-input"
                name="radio1"
                value="Front"
                id="Front"
                checked={this.state.checkedA === false ? true : false}
                onChange={() =>
                  this.setState({ checkedA: !this.state.checkedA })
                }
              />
              <span>Front</span>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                className="custom-input"
                name="radio1"
                value="Back"
                id="Back"
                checked={this.state.checkedA}
                onChange={() =>
                  this.setState({ checkedA: !this.state.checkedA })
                }
              />
              <span>Back</span>
            </div>
          </div>
        </div>

        <div className="pain-selector-block" style={this.state.workflowID < 0 ? { pointerEvents: "none" } : {}}>
          <div className="human-body-block-outer">
            <div id="front-body" className="human-body-block">
              {/* <NotificationContainer /> */}

              {/* <img src={require("./../../body-front/body-front.png")} class="zoom-thumb"/> */}
              <div
                className={
                  this.state.checkedA ? "fullbodyback" : "fullbodyfront"
                }
              >
                <div className="bodymap">
                  <div className="topheadfront">
                    <a
                      id={this.state.checkedA ? "lnkBLeftHead" : "lnkRightHead"}
                      onClick={(e) => { this.onSelect(e, 0, 1) }}
                      className={
                        this.state.checkedA
                          ? "left-head-back"
                          : "right-head-front"
                      }
                      title={
                        this.state.checkedA
                          ? "left head back"
                          : "right head front"
                      }
                      data-toggle="tooltip"
                      //   style={{ float: "left", paddingLeft: "17px" }}
                      onMouseEnter={() => this.setState({ hover: true })}
                      onMouseLeave={() => this.setState({ hover: false })}
                    >
                      {" "}
                      <i></i>
                      <img alt=""
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-head.png")
                            : require("./../../body-front/right-head.png")
                        }
                        style={this.bodyStyle(this.state.hover, MAP.areas[0].desc, BackMAP.areas[1].desc)}
                      />{" "}
                    </a>

                    <a
                      id={this.state.checkedA ? "lnkBRightHead" : "lnkLeftHead"}
                      onClick={(e) => { this.onSelect(e, 1, 0) }}
                      className={
                        this.state.checkedA
                          ? "right-head-back"
                          : "left-head-front"
                      }
                      title={
                        this.state.checkedA
                          ? "right head back"
                          : "left head front"
                      }
                      onMouseEnter={() => this.setState({ hover1: true })}
                      onMouseLeave={() => this.setState({ hover1: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-head.png")
                            : require("./../../body-front/left-head.png")
                        }
                        style={this.bodyStyle(this.state.hover1, MAP.areas[1].desc, BackMAP.areas[0].desc)}
                        alt=""
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      id={this.state.checkedA ? "lnkBHead" : "lnkHead"}
                      onClick={(e) => { this.onSelect(e, 2, 2) }}
                      className={
                        this.state.checkedA ? "head-back" : "head-front"
                      }
                      title={this.state.checkedA ? "Head Back" : "Head Front"}
                      //   style={{ paddingLeft: "9px" }}
                      onMouseEnter={() => this.setState({ hover2: true })}
                      onMouseLeave={() => this.setState({ hover2: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-head.png")
                            : require("./../../body-front/head.png")
                        }
                        style={this.bodyStyle(this.state.hover2, MAP.areas[2].desc,
                          BackMAP.areas[2].desc)}
                        alt=""
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      id={this.state.checkedA ? "lnkBCervical" : "lnkJaw"}
                      onClick={(e) => { this.onSelect(e, 3, 3) }}
                      className={
                        this.state.checkedA ? "b-cervical" : "jaw-front"
                      }
                      title={this.state.checkedA ? "Cervical Back" : "Jaw"}
                      //  style={{ paddingLeft: "23px" }}
                      onMouseEnter={() => this.setState({ hover3: true })}
                      onMouseLeave={() => this.setState({ hover3: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-cervical.png")
                            : require("./../../body-front/jaw.png")
                        }
                        style={this.bodyStyle(this.state.hover3, MAP.areas[3].desc,
                          BackMAP.areas[3].desc)}
                        alt=""
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBCervicothoracic"
                          : "lnkCervical"
                      }
                      onClick={(e) => { this.onSelect(e, 4, 4) }}
                      className={
                        this.state.checkedA ? "cervical-back" : "cervical-front"
                      }
                      title={
                        this.state.checkedA
                          ? "Cervicothoracic"
                          : "Cervical Front"
                      }
                      onMouseEnter={() => this.setState({ hover4: true })}
                      onMouseLeave={() => this.setState({ hover4: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-cervicothoracic.png")
                            : require("./../../body-front/cervical.png")
                        }
                        style={this.bodyStyle(this.state.hover4, MAP.areas[4].desc,
                          BackMAP.areas[4].desc)}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="belowhead">
                  <div
                    className="shoulderRegion"
                    style={{ marginLeft: "-71px" }}
                  >
                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBLeftShoulder"
                          : "lnkRightShoulder"
                      }
                      onClick={(e) => { this.onSelect(e, 5, 5) }}
                      className={
                        this.state.checkedA
                          ? "left-shoulder-back"
                          : "right-shoulder-front"
                      }
                      title={
                        this.state.checkedA
                          ? "Left Shoulder Back"
                          : "Right Shoulder Front"
                      }
                      data-toggle="tooltip"
                      // style={{ float: "left"}}
                      onMouseEnter={() => this.setState({ hover5: true })}
                      onMouseLeave={() => this.setState({ hover5: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-shoulder.png")
                            : require("./../../body-front/right-shoulder.png")
                        }
                        alt=""
                        style={this.bodyStyle(this.state.hover5, MAP.areas[5].desc,
                          BackMAP.areas[5].desc)}
                      />{" "}
                    </a>

                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBLeftThoracic"
                          : "lnkRightChest"
                      }
                      onClick={(e) => { this.onSelect(e, 7, 7) }}
                      className={
                        this.state.checkedA
                          ? "left-thoracic"
                          : "right-chest-front"
                      }
                      title={
                        this.state.checkedA ? "Left Thoracic" : "Right Chest"
                      }
                      // style={{ float: "left" }}
                      onMouseEnter={() => this.setState({ hover6: true })}
                      onMouseLeave={() => this.setState({ hover6: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-thoracic.png")
                            : require("./../../body-front/right-chest.png")
                        }
                        style={this.bodyStyle(this.state.hover6, MAP.areas[7].desc,
                          BackMAP.areas[7].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBRightThoracic"
                          : "lnkLeftChest"
                      }
                      onClick={(e) => { this.onSelect(e, 8, 8) }}
                      className={
                        this.state.checkedA
                          ? "right-thoracic"
                          : "left-chest-front"
                      }
                      title={
                        this.state.checkedA ? "Right Thoracic" : "Left Chest"
                      }
                      // style={{ float: "left" }}
                      onMouseEnter={() => this.setState({ hover7: true })}
                      onMouseLeave={() => this.setState({ hover7: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-thoracic.png")
                            : require("./../../body-front/left-chest.png")
                        }
                        style={this.bodyStyle(this.state.hover7, MAP.areas[8].desc,
                          BackMAP.areas[8].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBRightShoulder"
                          : "lnkLeftShoulder"
                      }
                      onClick={(e) => { this.onSelect(e, 6, 6) }}
                      className={
                        this.state.checkedA
                          ? "right-shoulder-back"
                          : "left-shoulder-front"
                      }
                      title={
                        this.state.checkedA
                          ? "Right Shoulder Back"
                          : "Left Shoulder Front"
                      }
                      onMouseEnter={() => this.setState({ hover8: true })}
                      onMouseLeave={() => this.setState({ hover8: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-shoulder.png")
                            : require("./../../body-front/left-shoulder.png")
                        }
                        style={this.bodyStyle(this.state.hover8, MAP.areas[6].desc,
                          BackMAP.areas[6].desc)}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="ArmRibsRegion">
                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBLeftUpperArm"
                          : "lnkRightUpperArm"
                      }
                      onClick={(e) => { this.onSelect(e, 10, 10) }}
                      className={
                        this.state.checkedA
                          ? "left-upper-arm-back"
                          : "right-upper-arm-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Upper Arm Back"
                          : "Right Upper Arm Front"
                      }
                      onMouseEnter={() => this.setState({ hover9: true })}
                      onMouseLeave={() => this.setState({ hover9: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-upper-arm.png")
                            : require("./../../body-front/right-upper-arm.png")
                        }
                        style={this.bodyStyle(this.state.hover9, MAP.areas[10].desc,
                          BackMAP.areas[10].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={this.state.checkedA ? "lnkBLeftRibs" : "lnkRightRibs"}
                      onClick={(e) => { this.onSelect(e, 11, 11) }}
                      className={
                        this.state.checkedA
                          ? "left-ribs-back"
                          : "right-ribs-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Ribs Back"
                          : "Right Ribs Front"
                      }
                      onMouseEnter={() => this.setState({ hover10: true })}
                      onMouseLeave={() => this.setState({ hover10: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-ribs.png")
                            : require("./../../body-front/right-ribs.png")
                        }
                        style={this.bodyStyle(this.state.hover10, MAP.areas[11].desc,
                          BackMAP.areas[11].desc)}
                        alt=""
                      />
                    </a>

                    {this.state.checkedA ? (
                      <a
                        id="lnkBCentralThoracic"
                        onClick={(e) => { this.onSelect(e, 13, 13) }}
                        className="central-thoracic"
                        style={{ float: "left" }}
                        title="Central Thoracic"
                        onMouseEnter={() => this.setState({ hover11: true })}
                        onMouseLeave={() => this.setState({ hover11: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={require("./../../body-back/b-central-thoracic.png")}
                          style={this.bodyStyle(this.state.hover11, MAP.areas[13].desc,
                            BackMAP.areas[13].desc)}
                          alt=""
                        />
                      </a>
                    ) : null}

                    <a
                      id={this.state.checkedA ? "lnkBRightRibs" : "lnkLeftRibs"}
                      onClick={(e) => { this.onSelect(e, 12, 12) }}
                      className={
                        this.state.checkedA
                          ? "right-ribs-back"
                          : "left-ribs-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Ribs Back"
                          : "Left Ribs Front"
                      }
                      onMouseEnter={() => this.setState({ hover12: true })}
                      onMouseLeave={() => this.setState({ hover12: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-ribs.png")
                            : require("./../../body-front/left-ribs.png")
                        }
                        style={this.bodyStyle(this.state.hover12, MAP.areas[12].desc,
                          BackMAP.areas[12].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBRightUpperArm"
                          : "lnkLeftUpperAre"
                      }
                      onClick={(e) => { this.onSelect(e, 9, 9) }}
                      className={
                        this.state.checkedA
                          ? "right-upper-arm-back"
                          : "left-upper-arm-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Upper Arm Back"
                          : "Left Upper Arm Front"
                      }
                      onMouseEnter={() => this.setState({ hover13: true })}
                      onMouseLeave={() => this.setState({ hover13: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-upper-arm.png")
                            : require("./../../body-front/left-upper-arm.png")
                        }
                        style={this.bodyStyle(this.state.hover13, MAP.areas[9].desc,
                          BackMAP.areas[9].desc)}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="elbowAbdomen">
                    <a
                      id={
                        this.state.checkedA ? "lnkBLeftElbow" : "lnkRightElbow"
                      }
                      onClick={(e) => { this.onSelect(e, 13, 14) }}
                      className={
                        this.state.checkedA
                          ? "left-elbow-back"
                          : "right-elbow-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Elbow Back"
                          : "Right Elbow Front"
                      }
                      onMouseEnter={() => this.setState({ hover14: true })}
                      onMouseLeave={() => this.setState({ hover14: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-elbow.png")
                            : require("./../../body-front/right-elbow.png")
                        }
                        style={this.bodyStyle(this.state.hover14, MAP.areas[13].desc,
                          BackMAP.areas[14].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA ? "lnkBThoracolumbar" : "lnkAbdomen"
                      }
                      onClick={(e) => { this.onSelect(e, 15, 15) }}
                      className={
                        this.state.checkedA ? "thoracolumbar" : "abdomen-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA ? "Thoracolumbar" : "Abdomen Front"
                      }
                      onMouseEnter={() => this.setState({ hover15: true })}
                      onMouseLeave={() => this.setState({ hover15: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-thoracolumbar.png")
                            : require("./../../body-front/abdomen.png")
                        }
                        style={this.bodyStyle(this.state.hover15, MAP.areas[15].desc,
                          BackMAP.areas[15].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA ? "lnkBRightElbow" : "lnkLEftElbow"
                      }
                      onClick={(e) => { this.onSelect(e, 14, 16) }}
                      className={
                        this.state.checkedA
                          ? "right-elbow-back"
                          : "left-elbow-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Elbow Back"
                          : "Left Elbow Front"
                      }
                      onMouseEnter={() => this.setState({ hover16: true })}
                      onMouseLeave={() => this.setState({ hover16: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-elbow.png")
                            : require("./../../body-front/left-elbow.png")
                        }
                        style={this.bodyStyle(this.state.hover16, MAP.areas[14].desc,
                          BackMAP.areas[16].desc)}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="forearmPelvis">
                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBLeftForearm"
                          : "lnkRightForearm"
                      }
                      onClick={(e) => { this.onSelect(e, 16, 17) }}
                      className={
                        this.state.checkedA
                          ? "left-forearm-back"
                          : "right-forearm-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Forearm Back"
                          : "Right Forearm Front"
                      }
                      onMouseEnter={() => this.setState({ hover17: true })}
                      onMouseLeave={() => this.setState({ hover17: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-forearm.png")
                            : require("./../../body-front/right-forearm.png")
                        }
                        style={this.bodyStyle(this.state.hover17, MAP.areas[16].desc,
                          BackMAP.areas[17].desc)}
                        alt=""
                      />
                    </a>

                    {this.state.checkedA ? (
                      <div>
                        <a
                          id="lnkBLeftLumbosacral"
                          onClick={(e) => { this.onSelect(e, null, 19) }}
                          className="left-lumbosacral"
                          style={{ float: "left" }}
                          title="Left Lumbosacral"
                          onMouseEnter={() => this.setState({ hover18: true })}
                          onMouseLeave={() => this.setState({ hover18: false })}
                        >
                          {" "}
                          <i></i>
                          <img
                            src={require("./../../body-back/b-left-lumbosacral.png")}
                            style={this.bodyStyle(this.state.hover18, null,
                              BackMAP.areas[19].desc)}
                            alt=""
                          />
                        </a>

                        <a
                          id="lnkBRightLumbosacral"
                          onClick={(e) => { this.onSelect(e, null, 20) }}
                          className="right-lumbosacral"
                          style={{ float: "left" }}
                          title="Right Lumbosacral"
                          onMouseEnter={() => this.setState({ hover19: true })}
                          onMouseLeave={() => this.setState({ hover19: false })}
                        >
                          {" "}
                          <i></i>
                          <img
                            src={require("./../../body-back/b-right-lumbosacral.png")}
                            style={this.bodyStyle(this.state.hover19, null,
                              BackMAP.areas[20].desc)}
                            alt=""
                          />
                        </a>
                      </div>
                    ) : null}

                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBRightForearm"
                          : "lnkLEftForearm"
                      }
                      onClick={(e) => { this.onSelect(e, 17, 18) }}
                      className={
                        this.state.checkedA
                          ? "right-forearm-back"
                          : "left-forearm-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Forearm Back"
                          : "Left Forearm Front"
                      }
                      onMouseEnter={() => this.setState({ hover20: true })}
                      onMouseLeave={() => this.setState({ hover20: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-forearm.png")
                            : require("./../../body-front/left-forearm.png")
                        }
                        style={this.bodyStyle(this.state.hover20, MAP.areas[17].desc,
                          BackMAP.areas[18].desc)}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="wristpelvis">
                    <a
                      id={
                        this.state.checkedA ? "lnkBLeftWrist" : "lnkRightWrist"
                      }
                      onClick={(e) => { this.onSelect(e, 19, 21) }}
                      className={
                        this.state.checkedA
                          ? "left-wrist-back"
                          : "right-wrist-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Wrist Back"
                          : "Right Wrist Front"
                      }
                      onMouseEnter={() => this.setState({ hover21: true })}
                      onMouseLeave={() => this.setState({ hover21: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-wrist.png")
                            : require("./../../body-front/right-wrist.png")
                        }
                        style={this.bodyStyle(this.state.hover21, MAP.areas[19].desc,
                          BackMAP.areas[21].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBLeftPelvis"
                          : "lnkRightPelvis"
                      }
                      onClick={(e) => { this.onSelect(e, 20, 23) }}
                      className={
                        this.state.checkedA
                          ? "left-pelvis-back"
                          : "right-pelvis-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Pelvis Back"
                          : "Right Pelvis Front"
                      }
                      onMouseEnter={() => this.setState({ hover22: true })}
                      onMouseLeave={() => this.setState({ hover22: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-pelvis.png")
                            : require("./../../body-front/right-pelvis.png")
                        }
                        style={this.bodyStyle(this.state.hover22, MAP.areas[20].desc,
                          BackMAP.areas[23].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBRightPelvis"
                          : "lnkLEftPelvis"
                      }
                      onClick={(e) => { this.onSelect(e, 21, 24) }}
                      className={
                        this.state.checkedA
                          ? "right-pelvis-back"
                          : "left-pelvis-front"
                      }
                      style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Pelvis Back"
                          : "Left Pelvis Front"
                      }
                      onMouseEnter={() => this.setState({ hover23: true })}
                      onMouseLeave={() => this.setState({ hover23: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-pelvis.png")
                            : require("./../../body-front/left-pelvis.png")
                        }
                        style={this.bodyStyle(this.state.hover23, MAP.areas[21].desc,
                          BackMAP.areas[24].desc)}
                        alt=""
                      />
                    </a>
                    <a
                      id={
                        this.state.checkedA ? "lnkBRightWrist" : "lnkLeftWrist"
                      }
                      onClick={(e) => { this.onSelect(e, 18, 22) }}
                      className={
                        this.state.checkedA
                          ? "right-wrist-back"
                          : "left-wrist-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Wrist Back"
                          : "Left Wrist Front"
                      }
                      onMouseEnter={() => this.setState({ hover24: true })}
                      onMouseLeave={() => this.setState({ hover24: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-wrist.png")
                            : require("./../../body-front/left-wrist.png")
                        }
                        style={this.bodyStyle(this.state.hover24, MAP.areas[18].desc,
                          BackMAP.areas[22].desc)}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="thumbHandHip">
                    <a
                      id={
                        this.state.checkedA ? "lnkBLeftThumb" : "lnkRightThumb"
                      }
                      onClick={(e) => { this.onSelect(e, 22, 26) }}
                      className={
                        this.state.checkedA
                          ? "left-thumb-back"
                          : "right-thumb-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Thumb Back"
                          : "Right Thumb Front"
                      }
                      onMouseEnter={() => this.setState({ hover25: true })}
                      onMouseLeave={() => this.setState({ hover25: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-thumb.png")
                            : require("./../../body-front/right-thumb.png")
                        }
                        style={this.bodyStyle(this.state.hover25, MAP.areas[22].desc,
                          BackMAP.areas[26].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={this.state.checkedA ? "lnkBLeftHand" : "lnkRightHand"}
                      onClick={(e) => { this.onSelect(e, 25, 28) }}
                      className={
                        this.state.checkedA
                          ? "left-hand-back"
                          : "right-hand-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Hand Back"
                          : "Right Hand Front"
                      }
                      onMouseEnter={() => this.setState({ hover26: true })}
                      onMouseLeave={() => this.setState({ hover26: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-hand.png")
                            : require("./../../body-front/right-hand.png")
                        }
                        style={this.bodyStyle(this.state.hover26, MAP.areas[25].desc,
                          BackMAP.areas[28].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={this.state.checkedA ? "lnkBLeftHip" : "lnkRightHip"}
                      onClick={(e) => { this.onSelect(e, 26, 30) }}
                      className={
                        this.state.checkedA
                          ? "left-hip-back"
                          : "right-hip-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Hip Back"
                          : "Right Hip Front"
                      }
                      onMouseEnter={() => this.setState({ hover27: true })}
                      onMouseLeave={() => this.setState({ hover27: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-hip.png")
                            : require("./../../body-front/right-hip.png")
                        }
                        style={this.bodyStyle(this.state.hover27, MAP.areas[26].desc,
                          BackMAP.areas[30].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={this.state.checkedA ? "lnkBRightHip" : "lnkLeftHip"}
                      onClick={(e) => { this.onSelect(e, 27, 29) }}
                      className={
                        this.state.checkedA
                          ? "right-hip-back"
                          : "left-hip-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Hip Back"
                          : "Left Hip Front"
                      }
                      onMouseEnter={() => this.setState({ hover28: true })}
                      onMouseLeave={() => this.setState({ hover28: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-hip.png")
                            : require("./../../body-front/left-hip.png")
                        }
                        style={this.bodyStyle(this.state.hover28, MAP.areas[27].desc,
                          BackMAP.areas[29].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={this.state.checkedA ? "lnkBRightHand" : "lnkLeftHand"}
                      onClick={(e) => { this.onSelect(e, 24, 27) }}
                      className={
                        this.state.checkedA
                          ? "right-hand-back"
                          : "left-hand-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Hand Back"
                          : "Left Hand Front"
                      }
                      onMouseEnter={() => this.setState({ hover29: true })}
                      onMouseLeave={() => this.setState({ hover29: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-hand.png")
                            : require("./../../body-front/left-hand.png")
                        }
                        style={this.bodyStyle(this.state.hover29, MAP.areas[24].desc,
                          BackMAP.areas[27].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA ? "lnkBRightThumb" : "lnkLedtThumb"
                      }
                      onClick={(e) => { this.onSelect(e, 23, 25) }}
                      className={
                        this.state.checkedA
                          ? "right-thumb-back"
                          : "left-thumb-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Thumb Back"
                          : "Left Thumb Front"
                      }
                      onMouseEnter={() => this.setState({ hover30: true })}
                      onMouseLeave={() => this.setState({ hover30: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-thumb.png")
                            : require("./../../body-front/left-thumb.png")
                        }
                        style={this.bodyStyle(this.state.hover30, MAP.areas[23].desc,
                          BackMAP.areas[25].desc)}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="fingerUppperleg">
                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBLeftFingers"
                          : "lnkRightFingers"
                      }
                      onClick={(e) => { this.onSelect(e, 28, 32) }}
                      className={
                        this.state.checkedA
                          ? "left-fingers-back"
                          : "right-fingers-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Fingers Back"
                          : "Right Fingers Front"
                      }
                      onMouseEnter={() => this.setState({ hover31: true })}
                      onMouseLeave={() => this.setState({ hover31: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-fingers.png")
                            : require("./../../body-front/right-fingers.png")
                        }
                        style={this.bodyStyle(this.state.hover31, MAP.areas[28].desc,
                          BackMAP.areas[32].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBLeftUpperLeg"
                          : "lnkRightUpperLeg"
                      }
                      onClick={(e) => { this.onSelect(e, 30, 34) }}
                      className={
                        this.state.checkedA
                          ? "left-upper-leg-back"
                          : "right-upper-leg-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Left Upper Leg Back"
                          : "Right Upper Leg Front"
                      }
                      onMouseEnter={() => this.setState({ hover32: true })}
                      onMouseLeave={() => this.setState({ hover32: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-upper-leg.png")
                            : require("./../../body-front/right-upper-leg.png")
                        }
                        style={this.bodyStyle(this.state.hover32, MAP.areas[30].desc,
                          BackMAP.areas[34].desc)}

                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBRightUpperLeg"
                          : "lnkLeftUpperLeg"
                      }
                      onClick={(e) => { this.onSelect(e, 31, 33) }}
                      className={
                        this.state.checkedA
                          ? "right-upper-leg-back"
                          : "left-upper-leg-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Upper Leg Back"
                          : "Left Upper Leg Front"
                      }
                      onMouseEnter={() => this.setState({ hover33: true })}
                      onMouseLeave={() => this.setState({ hover33: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-upper-leg.png")
                            : require("./../../body-front/left-upper-leg.png")
                        }
                        style={this.bodyStyle(this.state.hover33, MAP.areas[31].desc,
                          BackMAP.areas[33].desc)}
                        alt=""
                      />
                    </a>

                    <a
                      id={
                        this.state.checkedA
                          ? "lnkBRightFingers"
                          : "lnkLeftFingers"
                      }
                      onClick={(e) => { this.onSelect(e, 29, 31) }}
                      className={
                        this.state.checkedA
                          ? "right-fingers-back"
                          : "left-fingers-front"
                      }
                      //  style={{ float: "left" }}
                      title={
                        this.state.checkedA
                          ? "Right Fingers Back"
                          : "Left Fingers Front"
                      }
                      onMouseEnter={() => this.setState({ hover34: true })}
                      onMouseLeave={() => this.setState({ hover34: false })}
                    >
                      {" "}
                      <i></i>
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-right-fingers.png")
                            : require("./../../body-front/left-fingers.png")
                        }
                        style={this.bodyStyle(this.state.hover34, MAP.areas[29].desc,
                          BackMAP.areas[31].desc)}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="lowerPartleg">
                    <div className="knee">
                      <a
                        id={
                          this.state.checkedA ? "lnkBleftKnee" : "lnkRightKnee"
                        }
                        onClick={(e) => { this.onSelect(e, 32, 36) }}
                        className={
                          this.state.checkedA
                            ? "left-knee-back"
                            : "right-knee-front"
                        }
                        //  style={{ float: "left" }}
                        title={
                          this.state.checkedA
                            ? "Left Knee Back"
                            : "Right Knee Front"
                        }
                        onMouseEnter={() => this.setState({ hover35: true })}
                        onMouseLeave={() => this.setState({ hover35: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={
                            this.state.checkedA
                              ? require("./../../body-back/b-left-knee.png")
                              : require("./../../body-front/right-knee.png")
                          }
                          style={this.bodyStyle(this.state.hover35, MAP.areas[32].desc,
                            BackMAP.areas[36].desc)}
                          alt=""
                        />
                      </a>

                      <a
                        id={
                          this.state.checkedA ? "lnkBRightKnee" : "lnkLeftKnee"
                        }
                        onClick={(e) => { this.onSelect(e, 33, 35) }}
                        className={
                          this.state.checkedA
                            ? "right-knee-back"
                            : "left-knee-front"
                        }
                        //  style={{ float: "left" }}
                        title={
                          this.state.checkedA
                            ? "Right Knee Back"
                            : "Left Knee Front"
                        }
                        onMouseEnter={() => this.setState({ hover36: true })}
                        onMouseLeave={() => this.setState({ hover36: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={
                            this.state.checkedA
                              ? require("./../../body-back/b-right-knee.png")
                              : require("./../../body-front/left-knee.png")
                          }
                          style={this.bodyStyle(this.state.hover36, MAP.areas[33].desc,
                            BackMAP.areas[35].desc)}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="lowerleg">
                      <a
                        id={
                          this.state.checkedA
                            ? "lnkBLeftLowerLeg"
                            : "lnkRightLowerLeg"
                        }
                        onClick={(e) => { this.onSelect(e, 34, 38) }}
                        className={
                          this.state.checkedA
                            ? "left-lower-leg-back"
                            : "right-lower-leg-front"
                        }
                        //  style={{ float: "left" }}
                        title={
                          this.state.checkedA
                            ? "Left Lower Leg Back"
                            : "Right Lower Leg Front"
                        }
                        onMouseEnter={() => this.setState({ hover37: true })}
                        onMouseLeave={() => this.setState({ hover37: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={
                            this.state.checkedA
                              ? require("./../../body-back/b-left-lower-leg.png")
                              : require("./../../body-front/right-lower-leg.png")
                          }
                          style={this.bodyStyle(this.state.hover37, MAP.areas[34].desc,
                            BackMAP.areas[38].desc)}
                          alt=""
                        />
                      </a>

                      <a
                        id={
                          this.state.checkedA
                            ? "lnkBRightLowerLeg"
                            : "lnkLeftLowerLeg"
                        }
                        onClick={(e) => { this.onSelect(e, 35, 37) }}
                        className={
                          this.state.checkedA
                            ? "right-lower-leg-back"
                            : "left-lower-leg-front"
                        }
                        //  style={{ float: "left" }}
                        title={
                          this.state.checkedA
                            ? "Right Lower Leg Back"
                            : "Left Lower Leg Front"
                        }
                        onMouseEnter={() => this.setState({ hover38: true })}
                        onMouseLeave={() => this.setState({ hover38: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={
                            this.state.checkedA
                              ? require("./../../body-back/b-right-lower-leg.png")
                              : require("./../../body-front/left-lower-leg.png")
                          }
                          style={this.bodyStyle(this.state.hover38, MAP.areas[35].desc,
                            BackMAP.areas[37].desc)}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="anklefoot">
                      <a
                        id={
                          this.state.checkedA
                            ? "lnkBleftAnkle"
                            : "lnkRightAnkle"
                        }
                        onClick={(e) => { this.onSelect(e, 36, 40) }}
                        className={
                          this.state.checkedA
                            ? "left-ankle-back"
                            : "right-ankle-front"
                        }
                        //  style={{ float: "left" }}
                        title={
                          this.state.checkedA
                            ? "Left Ankle Back"
                            : "Right Ankle Front"
                        }
                        onMouseEnter={() => this.setState({ hover39: true })}
                        onMouseLeave={() => this.setState({ hover39: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={
                            this.state.checkedA
                              ? require("./../../body-back/b-left-ankle.png")
                              : require("./../../body-front/right-ankle.png")
                          }
                          style={this.bodyStyle(this.state.hover39, MAP.areas[36].desc,
                            BackMAP.areas[40].desc)}
                          alt=""
                        />
                      </a>

                      <a
                        id={
                          this.state.checkedA
                            ? "lnkBRightAnkle"
                            : "lnkLeftAnkle"
                        }
                        onClick={(e) => { this.onSelect(e, 37, 39) }}
                        className={
                          this.state.checkedA
                            ? "right-ankle-back"
                            : "left-ankle-front"
                        }
                        //  style={{ float: "left" }}
                        title={
                          this.state.checkedA
                            ? "Right Ankle Back"
                            : "Left Ankle Front"
                        }
                        onMouseEnter={() => this.setState({ hover40: true })}
                        onMouseLeave={() => this.setState({ hover40: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={
                            this.state.checkedA
                              ? require("./../../body-back/b-right-ankle.png")
                              : require("./../../body-front/left-ankle.png")
                          }
                          style={this.bodyStyle(this.state.hover40, MAP.areas[37].desc,
                            BackMAP.areas[39].desc)}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="foot">
                      <a
                        id={
                          this.state.checkedA ? "lnkBLeftFoot" : "lnkRightFoot"
                        }
                        onClick={(e) => { this.onSelect(e, 38, 42) }}
                        className={
                          this.state.checkedA
                            ? "left-foot-back"
                            : "right-foot-front"
                        }
                        //  style={{ float: "left" }}
                        title={
                          this.state.checkedA
                            ? "Left Foot Back"
                            : "Right Foot Front"
                        }
                        onMouseEnter={() => this.setState({ hover41: true })}
                        onMouseLeave={() => this.setState({ hover41: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={
                            this.state.checkedA
                              ? require("./../../body-back/b-left-foot.png")
                              : require("./../../body-front/right-foot.png")
                          }
                          style={this.bodyStyle(this.state.hover41, MAP.areas[38].desc,
                            BackMAP.areas[42].desc)}
                          alt=""
                        />
                      </a>

                      <a
                        id={
                          this.state.checkedA ? "lnkBrightFoot" : "lnkLeftFoot"
                        }
                        onClick={(e) => { this.onSelect(e, 39, 41) }}
                        className={
                          this.state.checkedA
                            ? "right-foot-back"
                            : "left-foot-front"
                        }
                        //  style={{ float: "left" }}
                        title={
                          this.state.checkedA
                            ? "Right Foot Back"
                            : "Left Foot Front"
                        }
                        onMouseEnter={() => this.setState({ hover42: true })}
                        onMouseLeave={() => this.setState({ hover42: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={
                            this.state.checkedA
                              ? require("./../../body-back/b-right-foot.png")
                              : require("./../../body-front/left-foot.png")
                          }
                          style={this.bodyStyle(this.state.hover42, MAP.areas[39].desc,
                            BackMAP.areas[41].desc)}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="toe">
                      <a
                        id={this.state.checkedA ? "lnkBleftToe" : "lnkRightToe"}
                        onClick={(e) => { this.onSelect(e, 40, 44) }}
                        className={
                          this.state.checkedA
                            ? "left-toe-back"
                            : "right-toe-front"
                        }
                        //  style={{ float: "left" }}
                        title={
                          this.state.checkedA
                            ? "Left Foot Back"
                            : "Right Toe Front"
                        }
                        onMouseEnter={() => this.setState({ hover43: true })}
                        onMouseLeave={() => this.setState({ hover43: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={
                            this.state.checkedA
                              ? require("./../../body-back/b-left-toe.png")
                              : require("./../../body-front/right-toe.png")
                          }
                          style={this.bodyStyle(this.state.hover43, MAP.areas[40].desc,
                            BackMAP.areas[44].desc)}
                          alt=""
                        />
                      </a>

                      <a
                        id={this.state.checkedA ? "lnkBRightToe" : "lnkLeftToe"}
                        onClick={(e) => { this.onSelect(e, 41, 43) }}
                        className={
                          this.state.checkedA
                            ? "right-toe-back"
                            : "left-toe-front"
                        }
                        //  style={{ float: "left" }}
                        title={
                          this.state.checkedA
                            ? "Right Toe Back"
                            : "Left Toe Front"
                        }
                        onMouseEnter={() => this.setState({ hover44: true })}
                        onMouseLeave={() => this.setState({ hover44: false })}
                      >
                        {" "}
                        <i></i>
                        <img
                          src={
                            this.state.checkedA
                              ? require("./../../body-back/b-right-toe.png")
                              : require("./../../body-front/left-toe.png")
                          }
                          style={this.bodyStyle(this.state.hover44, MAP.areas[41].desc,
                            BackMAP.areas[43].desc)}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div style={this.state.workflowID < 0 ? { pointerEvents: "none" } : {}}>
          <ul
            className="list-group"
            style={{ maxWidth: `300px`, margin: "0 auto" }}
          >
            {this.state.body_desc.map((listitem, index) => (
              <div key={index}>
                {listitem === "" ? (
                  this.setState({ body_area: [] })
                ) : (
                  <li className="list-group-item list-group-item-action">
                    {/* {listitem}

                    <button
                      style={{
                        float: "right",
                        "margin-top": "-3px",
                        "border-color": "transparent",
                        background: "transparent",
                      }}
                      id={index}
                      onClick={(e) => this.delete_region(e, index)}
                    >
                      <img src={require("../../images/cross.svg")} />
                    </button> */}
                    <div>
                      {listitem}

                      <button
                        style={{
                          borderColor: "transparent",
                          background: "transparent",
                        }}
                        id={index}
                        onClick={(e) => this.delete_region(e, index)}
                      >
                        <img src={require("../../images/cross.svg")} alt="" />
                      </button>
                    </div>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>

        <br />
        {this.state.body_area.length !== 0 && (
          <div className="row has-form-forms text-center">
            <button
              className="btn btn-primary btn-block"
              onClick={this.continue}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default BodyImage;
