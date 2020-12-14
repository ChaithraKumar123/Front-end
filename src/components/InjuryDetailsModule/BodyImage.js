import React, { Component } from "react";
import update from "react-addons-update";
import "react-tabs/style/react-tabs.css";
import "../../App.css";
import axios from "axios";
//import 'react-notifications/lib/notifications.css';

const BackMAP = {
  name: "my-map",
  areas: [
    {
      id: 26,
      name: "Right head back",
      shape: "rect",
      coords: [95, 6, 125, 28],
    },
    {
      id: 26,
      name: "Left head back",
      shape: "rect",
      coords: [125, 6, 155, 28],
    },
    { id: 26, name: "head back", shape: "rect", coords: [95, 30, 155, 56] },

    { id: 1, name: "Cervical back", shape: "rect", coords: [95, 57, 155, 75] }, //
    {
      id: 21,
      name: "Cervicothoracic",
      shape: "rect",
      coords: [95, 75, 155, 90],
    }, //

    {
      id: 7,
      name: "Left Shoulder Back",
      shape: "rect",
      coords: [163, 88, 211, 130],
    },
    {
      id: 7,
      name: "Right Shoulder Back",
      shape: "rect",
      coords: [44, 88, 92, 130],
    },

    { id: 2, name: "Left Thoracic", shape: "rect", coords: [92, 88, 127, 130] }, //
    {
      id: 2,
      name: "Right Thoracic",
      shape: "rect",
      coords: [127, 88, 163, 130],
    }, //

    {
      id: 13,
      name: "Right Upper Arm Back",
      shape: "rect",
      coords: [170, 130, 210, 170],
    },

    {
      id: 13,
      name: "Left Upper Arm Back",
      shape: "rect",
      coords: [44, 130, 80, 170],
    },

    {
      id: 19,
      name: "Left Ribs Back",
      shape: "rect",
      coords: [85, 130, 127, 170],
    },
    {
      id: 19,
      name: "Right Ribs Back",
      shape: "rect",
      coords: [127, 130, 170, 170],
    },
    {
      id: 2,
      name: "Central Thoracic",
      shape: "rect",
      coords: [127, 130, 170, 170],
    },

    {
      id: 8,
      name: "Left Elbow Back",
      shape: "rect",
      coords: [30, 170, 80, 200],
    },
    {
      id: 22,
      name: "Thoracolumbar ",
      shape: "rect",
      coords: [80, 170, 175, 240],
    },
    {
      id: 8,
      name: "Right Elbow Back",
      shape: "rect",
      coords: [170, 170, 220, 200],
    },

    {
      id: 12,
      name: "Left Forearm Back  ",
      shape: "rect",
      coords: [20, 190, 80, 240],
    }, //17
    {
      id: 12,
      name: "Right Forearm Back  ",
      shape: "rect",
      coords: [175, 190, 240, 240],
    }, //18

    {
      id: 23,
      name: "Left Lumbosacral  ",
      shape: "rect",
      coords: [175, 190, 240, 240],
    }, //19
    {
      id: 23,
      name: "Right Lumbosacral  ",
      shape: "rect",
      coords: [175, 190, 240, 240],
    }, //20

    {
      id: 9,
      name: "Left Wrist Back  ",
      shape: "rect",
      coords: [24, 240, 60, 270],
    }, //21
    {
      id: 9,
      name: "Right Wrist Back  ",
      shape: "rect",
      coords: [200, 240, 240, 270],
    }, //22

    {
      id: 18,
      name: "Left Pelvis Back  ",
      shape: "rect",
      coords: [80, 240, 130, 270],
    }, //23
    {
      id: 18,
      name: "Right Pelvis Back  ",
      shape: "rect",
      coords: [130, 240, 180, 270],
    }, //24

    {
      id: 10,
      name: "Right Thumb Back  ",
      shape: "rect",
      coords: [8, 270, 20, 300],
    }, // 25
    {
      id: 10,
      name: "Left Thumb Back  ",
      shape: "rect",
      coords: [240, 270, 250, 300],
    }, //26

    {
      id: 20,
      name: "Right Hand Back  ",
      shape: "rect",
      coords: [25, 270, 50, 290],
    }, //27
    {
      id: 20,
      name: "Left Hand Back",
      shape: "rect",
      coords: [205, 270, 230, 290],
    }, //28

    {
      id: 4,
      name: "Right Hip Back",
      shape: "rect",
      coords: [80, 270, 130, 285],
    }, //29
    {
      id: 4,
      name: "Left Hip Back",
      shape: "rect",
      coords: [125, 270, 178, 285],
    }, //30

    {
      id: 11,
      name: "Right Fingers Back  ",
      shape: "rect",
      coords: [15, 290, 50, 320],
    }, //31
    {
      id: 11,
      name: "Left Fingers Back  ",
      shape: "rect",
      coords: [210, 285, 240, 315],
    }, //32

    {
      id: 14,
      name: "Right Upper Leg Back",
      shape: "rect",
      coords: [75, 280, 128, 360],
    }, //33
    {
      id: 14,
      name: "Left Upper Leg Back",
      shape: "rect",
      coords: [127, 280, 180, 360],
    }, //34

    {
      id: 5,
      name: "Right Knee Back",
      shape: "rect",
      coords: [85, 360, 130, 400],
    }, //35
    {
      id: 5,
      name: "Left Knee Back",
      shape: "rect",
      coords: [127, 360, 170, 400],
    }, //36

    //{ name: "Pelvis  ", shape: "rect", coords: [80,240,130,270 ]},

    {
      id: 15,
      name: "Right Lower Leg",
      shape: "rect",
      coords: [90, 400, 130, 470],
    }, // 37
    {
      id: 15,
      name: "Left Lower Leg",
      shape: "rect",
      coords: [130, 400, 170, 470],
    }, // 38
    { id: 6, name: "Right Ankle", shape: "rect", coords: [100, 470, 135, 490] }, //39
    { id: 6, name: "Left Ankle", shape: "rect", coords: [125, 470, 160, 490] }, //40
    { id: 16, name: "Right Foot", shape: "rect", coords: [100, 485, 130, 495] }, //41
    { id: 16, name: "Left Foot", shape: "rect", coords: [130, 485, 160, 500] }, //42
    { id: 17, name: "Right Toes", shape: "rect", coords: [95, 496, 135, 510] }, //43
    { id: 17, name: "Left Toes", shape: "rect", coords: [130, 496, 167, 510] }, //44
  ],
};

const MAP = {
  name: "my-map",
  areas: [
    { id: 26, name: "Right head", shape: "rect", coords: [95, 6, 125, 28] },
    { id: 26, name: "Left head", shape: "rect", coords: [125, 6, 155, 28] },
    { id: 26, name: "Central head", shape: "rect", coords: [95, 30, 155, 56] },

    { id: 24, name: "Jaw", shape: "rect", coords: [95, 57, 155, 75] },

    { id: 1, name: "Cervical", shape: "rect", coords: [95, 75, 155, 90] },
    { id: 7, name: "Right Shoulder", shape: "rect", coords: [44, 88, 92, 130] },
    {
      id: 7,
      name: "Left Shoulder",
      shape: "rect",
      coords: [163, 88, 211, 130],
    },
    { id: 25, name: "Right Chest", shape: "rect", coords: [92, 88, 127, 130] },
    { id: 25, name: "Left Chest", shape: "rect", coords: [127, 88, 163, 130] },

    { id: 13, name: "Left Arm", shape: "rect", coords: [44, 130, 80, 170] },
    { id: 13, name: "Right Arm", shape: "rect", coords: [170, 130, 210, 170] },

    {
      id: 19,
      name: "Right Ribs Front",
      shape: "rect",
      coords: [85, 130, 127, 170],
    },
    {
      id: 19,
      name: "Left Ribs Front",
      shape: "rect",
      coords: [127, 130, 170, 170],
    },

    {
      id: 8,
      name: "Right Elbow Front",
      shape: "rect",
      coords: [30, 170, 80, 200],
    },
    {
      id: 8,
      name: "Left Elbow Front",
      shape: "rect",
      coords: [170, 170, 220, 200],
    },

    {
      id: 27,
      name: "Abdomen Front",
      shape: "rect",
      coords: [80, 170, 175, 240],
    },

    {
      id: 12,
      name: "Right Forearm Front  ",
      shape: "rect",
      coords: [20, 190, 80, 240],
    }, //16
    {
      id: 12,
      name: "Left Forearm Front  ",
      shape: "rect",
      coords: [175, 190, 240, 240],
    }, //17

    {
      id: 9,
      name: "Left Wrist Front  ",
      shape: "rect",
      coords: [24, 240, 60, 270],
    }, // 18
    {
      id: 9,
      name: "Right Wrist Front  ",
      shape: "rect",
      coords: [200, 240, 240, 270],
    }, //19

    {
      id: 18,
      name: "Right Pelvis Front  ",
      shape: "rect",
      coords: [80, 240, 130, 270],
    }, //20
    {
      id: 18,
      name: "Left Pelvis Front  ",
      shape: "rect",
      coords: [130, 240, 180, 270],
    }, //21

    {
      id: 10,
      name: "Right Thumb Front  ",
      shape: "rect",
      coords: [8, 270, 20, 300],
    }, //22
    {
      id: 10,
      name: "Left Thumb Front ",
      shape: "rect",
      coords: [240, 270, 250, 300],
    }, //23

    {
      id: 20,
      name: "Left Hand Front",
      shape: "rect",
      coords: [205, 270, 230, 290],
    }, //24

    {
      id: 20,
      name: "Right Hand Front  ",
      shape: "rect",
      coords: [25, 270, 50, 290],
    }, //25

    {
      id: 4,
      name: "Right Hip Front",
      shape: "rect",
      coords: [80, 270, 130, 285],
    }, //26
    {
      id: 4,
      name: "Left Hip Front",
      shape: "rect",
      coords: [125, 270, 178, 285],
    }, //27

    {
      id: 11,
      name: "Right Fingers Front  ",
      shape: "rect",
      coords: [15, 290, 50, 320],
    }, //28
    {
      id: 11,
      name: "Left Fingers Front ",
      shape: "rect",
      coords: [210, 285, 240, 315],
    }, //29

    {
      id: 14,
      name: "Right Upper Leg Front",
      shape: "rect",
      coords: [75, 280, 128, 360],
    }, //30
    {
      id: 14,
      name: "Left Upper Leg front",
      shape: "rect",
      coords: [127, 280, 180, 360],
    }, //31

    {
      id: 5,
      name: "Right Knee Front",
      shape: "rect",
      coords: [85, 360, 130, 400],
    }, //32
    {
      id: 5,
      name: "Left Knee Front",
      shape: "rect",
      coords: [127, 360, 170, 400],
    }, //33

    //{ name: "Pelvis  ", shape: "rect", coords: [80,240,130,270 ]},
    {
      id: 15,
      name: "Right Lower Leg",
      shape: "rect",
      coords: [90, 400, 130, 470],
    }, //34
    // { id: 14, name: "Right Leg", shape: "rect", coords: [75, 280, 128, 360] },
    // { id: 14, name: "Left Leg", shape: "rect", coords: [127, 280, 180, 360] },

    {
      id: 15,
      name: "Left Lower Leg",
      shape: "rect",
      coords: [130, 400, 170, 470],
    }, // 35
    { id: 6, name: "Right Ankle", shape: "rect", coords: [100, 470, 135, 490] }, //36
    { id: 6, name: "Left Ankle", shape: "rect", coords: [125, 470, 160, 490] }, //37
    { id: 16, name: "Right Foot", shape: "rect", coords: [100, 485, 130, 495] }, //38
    { id: 16, name: "Left Foot", shape: "rect", coords: [130, 485, 160, 500] }, //39
    { id: 17, name: "Right Toes", shape: "rect", coords: [95, 496, 135, 510] }, //40
    { id: 17, name: "Left Toes", shape: "rect", coords: [130, 496, 167, 510] }, //41
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
      data_id: this.props.state.data_id1,
      checkedA: false,
    };
  }
  componentDidMount() {
    const temp = [];
    const temp1 = [];
    const temp2 = [];
    axios
      .get(
        "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/POBdetails",
        // "https://localhost:44338/api/POBdetails",

        {
          params: { value: localStorage.getItem("KNC") },
        }
      )
      .then((response) => {
        console.log(response.data[0]);
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].painRegionID === 0) {
            continue;
          }
          temp.push(response.data[i].painWhere);
          temp1.push(response.data[i].painRegionID);
          temp2.push(response.data[i].pobcpRegionID);

          this.setState({
            //body_area: body_area,
            body_region_id: update(this.state.body_region_id, {
              $splice: [[i - 1, 1, temp1[i - 1]]],
            }),
            data_id: update(this.state.data_id, {
              $splice: [[i - 1, 1, temp2[i - 1]]],
            }),
            body_area: update(this.state.body_area, {
              $splice: [[i - 1, 1, temp[i - 1]]],
            }),
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
      this.state.data_id
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
      this.setState({
        hoveredArea: "",
        first1: area.name,
        body_area: [...this.state.body_area, area.name],
        body_region_id: [...this.state.body_region_id, area.id],
        data_id: [...this.state.data_id, -1],
      });
      //NotificationManager.success("", 'Added selected region');
    } else {
      alert("Cannot select more than three regions");
    }
  }

  delete_api(val, next_val, index) {
    axios
      .delete(
        "https://1pdfjy5bcg.execute-api.ap-southeast-2.amazonaws.com/Prod/api/POBdetails",
        {
          params: { value: val, next_val: next_val, index: index },
        }
      )
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
    var id = [...this.state.data_id];
    array.splice(index, 1);
    this.setState({ body_area: array });
    array_id.splice(index, 1);
    this.setState({ body_region_id: array_id });
    id.splice(index, 1);
    this.setState({ data_id: id });
  }

  delete_region = (event, index) => {
    event.preventDefault();

    var str = "Delete Body Region -" + this.state.body_area[index] + "?";
    if (window.confirm(str)) {
      if (this.state.data_id[index] !== -1) {
        this.delete_api(
          this.state.data_id[index],
          this.state.data_id[index + 1],
          index
        );
      } else {
        this.delete_array(index);
      }
    }
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
            (Select up to 3 areas of pain)
          </label>
        </div>

        <div
          className="form-group custom-radio-wrapper"
          style={{ "text-align": "center" }}
        >
          <div id="radio">
            <div class="custom-radio">
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
            <div class="custom-radio">
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

        <div class="pain-selector-block">
          <div class="human-body-block-outer">
            <div id="front-body" class="human-body-block">
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
                      Id={this.state.checkedA ? "lnkBLeftHead" : "lnkRightHead"}
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[0])
                          : this.clicked(MAP.areas[0]);
                      }}
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
                      <img
                        src={
                          this.state.checkedA
                            ? require("./../../body-back/b-left-head.png")
                            : require("./../../body-front/right-head.png")
                        }
                        style={
                          this.state.hover
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                      />{" "}
                    </a>

                    <a
                      Id={this.state.checkedA ? "lnkBRightHead" : "lnkLeftHead"}
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[1])
                          : this.clicked(MAP.areas[1]);
                      }}
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
                        style={
                          this.state.hover1
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      Id={this.state.checkedA ? "lnkBHead" : "lnkHead"}
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[2])
                          : this.clicked(MAP.areas[2]);
                      }}
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
                        style={
                          this.state.hover2
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      Id={this.state.checkedA ? "lnkBCervical" : "lnkJaw"}
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[3])
                          : this.clicked(MAP.areas[3]);
                      }}
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
                        style={
                          this.state.hover3
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBCervicothoracic"
                          : "lnkCervical"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[4])
                          : this.clicked(MAP.areas[4]);
                      }}
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
                        style={
                          this.state.hover4
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="belowhead">
                  <div
                    className="shoulderRegion"
                    style={{ "margin-left": "-71px" }}
                  >
                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBLeftShoulder"
                          : "lnkRightShoulder"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[5])
                          : this.clicked(MAP.areas[5]);
                      }}
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
                        style={
                          this.state.hover5 && this.state.checkedA
                            ? { opacity: "100%" }
                            : { opacity: "0%" } &&
                              this.state.hover5 &&
                              !this.state.checkedA
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                      />{" "}
                    </a>

                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBLeftThoracic"
                          : "lnkRightChest"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[7])
                          : this.clicked(MAP.areas[7]);
                      }}
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
                        style={
                          this.state.hover6
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBRightThoracic"
                          : "lnkLeftChest"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[8])
                          : this.clicked(MAP.areas[8]);
                      }}
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
                        style={
                          this.state.hover7
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBRightShoulder"
                          : "lnkLeftShoulder"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[6])
                          : this.clicked(MAP.areas[6]);
                      }}
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
                        style={
                          this.state.hover8 && this.state.checkedA
                            ? { opacity: "100%" }
                            : { opacity: "0%" } &&
                              this.state.hover8 &&
                              !this.state.checkedA
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="ArmRibsRegion">
                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBLeftUpperArm"
                          : "lnkRightUpperArm"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[10])
                          : this.clicked(MAP.areas[10]);
                      }}
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
                        style={
                          this.state.hover9
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={this.state.checkedA ? "lnkBLeftRibs" : "lnkRightRibs"}
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[11])
                          : this.clicked(MAP.areas[11]);
                      }}
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
                        style={
                          this.state.hover10
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    {this.state.checkedA ? (
                      <a
                        Id="lnkBCentralThoracic"
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[13])
                            : this.clicked(MAP.areas[13]);
                        }}
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
                          style={
                            this.state.hover11
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>
                    ) : null}

                    <a
                      Id={this.state.checkedA ? "lnkBRightRibs" : "lnkLeftRibs"}
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[12])
                          : this.clicked(MAP.areas[12]);
                      }}
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
                        style={
                          this.state.hover12
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBRightUpperArm"
                          : "lnkLeftUpperAre"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[9])
                          : this.clicked(MAP.areas[9]);
                      }}
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
                        style={
                          this.state.hover13
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="elbowAbdomen">
                    <a
                      Id={
                        this.state.checkedA ? "lnkBLeftElbow" : "lnkRightElbow"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[14])
                          : this.clicked(MAP.areas[13]);
                      }}
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
                        style={
                          this.state.hover14
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA ? "lnkBThoracolumbar" : "lnkAbdomen"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[15])
                          : this.clicked(MAP.areas[15]);
                      }}
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
                        style={
                          this.state.hover15
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA ? "lnkBRightElbow" : "lnkLEftElbow"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[16])
                          : this.clicked(MAP.areas[14]);
                      }}
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
                        style={
                          this.state.hover16
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="forearmPelvis">
                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBLeftForearm"
                          : "lnkRightForearm"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[17])
                          : this.clicked(MAP.areas[16]);
                      }}
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
                        style={
                          this.state.hover17
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    {this.state.checkedA ? (
                      <div>
                        <a
                          Id="lnkBLeftLumbosacral"
                          onClick={() => this.clicked(BackMAP.areas[19])}
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
                            style={
                              this.state.hover18
                                ? { opacity: "100%" }
                                : { opacity: "0%" }
                            }
                            alt=""
                          />
                        </a>

                        <a
                          Id="lnkBRightLumbosacral"
                          onClick={() => this.clicked(BackMAP.areas[20])}
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
                            style={
                              this.state.hover19
                                ? { opacity: "100%" }
                                : { opacity: "0%" }
                            }
                            alt=""
                          />
                        </a>
                      </div>
                    ) : null}

                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBRightForearm"
                          : "lnkLEftForearm"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[18])
                          : this.clicked(MAP.areas[17]);
                      }}
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
                        style={
                          this.state.hover20
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="wristpelvis">
                    <a
                      Id={
                        this.state.checkedA ? "lnkBLeftWrist" : "lnkRightWrist"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[21])
                          : this.clicked(MAP.areas[19]);
                      }}
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
                        style={
                          this.state.hover21
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBLeftPelvis"
                          : "lnkRightPelvis"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[23])
                          : this.clicked(MAP.areas[20]);
                      }}
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
                        style={
                          this.state.hover22
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBRightPelvis"
                          : "lnkLEftPelvis"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[24])
                          : this.clicked(MAP.areas[21]);
                      }}
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
                        style={
                          this.state.hover23
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                    <a
                      Id={
                        this.state.checkedA ? "lnkBRightWrist" : "lnkLeftWrist"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[22])
                          : this.clicked(MAP.areas[18]);
                      }}
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
                        style={
                          this.state.hover24
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="thumbHandHip">
                    <a
                      Id={
                        this.state.checkedA ? "lnkBLeftThumb" : "lnkRightThumb"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[26])
                          : this.clicked(MAP.areas[22]);
                      }}
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
                        style={
                          this.state.hover25
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={this.state.checkedA ? "lnkBLeftHand" : "lnkRightHand"}
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[28])
                          : this.clicked(MAP.areas[25]);
                      }}
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
                        style={
                          this.state.hover26
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={this.state.checkedA ? "lnkBLeftHip" : "lnkRightHip"}
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[30])
                          : this.clicked(MAP.areas[26]);
                      }}
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
                        style={
                          this.state.hover27
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={this.state.checkedA ? "lnkBRightHip" : "lnkLeftHip"}
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[29])
                          : this.clicked(MAP.areas[27]);
                      }}
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
                        style={
                          this.state.hover28
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={this.state.checkedA ? "lnkBRightHand" : "lnkLeftHand"}
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[27])
                          : this.clicked(MAP.areas[24]);
                      }}
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
                        style={
                          this.state.hover29
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA ? "lnkBRightThumb" : "lnkLedtThumb"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[25])
                          : this.clicked(MAP.areas[23]);
                      }}
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
                        style={
                          this.state.hover30
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="fingerUppperleg">
                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBLeftFingers"
                          : "lnkRightFingers"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[32])
                          : this.clicked(MAP.areas[28]);
                      }}
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
                        style={
                          this.state.hover31
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBLeftUpperLeg"
                          : "lnkRightUpperLeg"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[34])
                          : this.clicked(MAP.areas[30]);
                      }}
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
                        style={
                          this.state.hover32
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBRightUpperLeg"
                          : "lnkLeftUpperLeg"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[33])
                          : this.clicked(MAP.areas[31]);
                      }}
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
                        style={
                          this.state.hover33
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>

                    <a
                      Id={
                        this.state.checkedA
                          ? "lnkBRightFingers"
                          : "lnkLeftFingers"
                      }
                      onClick={() => {
                        this.state.checkedA
                          ? this.clicked(BackMAP.areas[31])
                          : this.clicked(MAP.areas[29]);
                      }}
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
                        style={
                          this.state.hover34
                            ? { opacity: "100%" }
                            : { opacity: "0%" }
                        }
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="lowerPartleg">
                    <div className="knee">
                      <a
                        Id={
                          this.state.checkedA ? "lnkBleftKnee" : "lnkRightKnee"
                        }
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[36])
                            : this.clicked(MAP.areas[32]);
                        }}
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
                          style={
                            this.state.hover35
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>

                      <a
                        Id={
                          this.state.checkedA ? "lnkBRightKnee" : "lnkLeftKnee"
                        }
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[35])
                            : this.clicked(MAP.areas[33]);
                        }}
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
                          style={
                            this.state.hover36
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="lowerleg">
                      <a
                        Id={
                          this.state.checkedA ? "lnkBleftKnee" : "lnkRightKnee"
                        }
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[36])
                            : this.clicked(MAP.areas[32]);
                        }}
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
                          style={
                            this.state.hover35
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>

                      <a
                        Id={
                          this.state.checkedA ? "lnkBRightKnee" : "lnkLeftKnee"
                        }
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[35])
                            : this.clicked(MAP.areas[33]);
                        }}
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
                          style={
                            this.state.hover36
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="lowerleg">
                      <a
                        Id={
                          this.state.checkedA
                            ? "lnkBLeftLowerLeg"
                            : "lnkRightLowerLeg"
                        }
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[38])
                            : this.clicked(MAP.areas[34]);
                        }}
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
                          style={
                            this.state.hover37
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>

                      <a
                        Id={
                          this.state.checkedA
                            ? "lnkBRightLowerLeg"
                            : "lnkLeftLowerLeg"
                        }
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[37])
                            : this.clicked(MAP.areas[35]);
                        }}
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
                          style={
                            this.state.hover38
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="anklefoot">
                      <a
                        Id={
                          this.state.checkedA
                            ? "lnkBleftAnkle"
                            : "lnkRightAnkle"
                        }
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[40])
                            : this.clicked(MAP.areas[36]);
                        }}
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
                          style={
                            this.state.hover39
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>

                      <a
                        Id={
                          this.state.checkedA
                            ? "lnkBRightAnkle"
                            : "lnkLeftAnkle"
                        }
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[39])
                            : this.clicked(MAP.areas[37]);
                        }}
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
                          style={
                            this.state.hover40
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="foot">
                      <a
                        Id={
                          this.state.checkedA ? "lnkBLeftFoot" : "lnkRightFoot"
                        }
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[42])
                            : this.clicked(MAP.areas[38]);
                        }}
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
                          style={
                            this.state.hover41
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>

                      <a
                        Id={
                          this.state.checkedA ? "lnkBrightFoot" : "lnkLeftFoot"
                        }
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[41])
                            : this.clicked(MAP.areas[39]);
                        }}
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
                          style={
                            this.state.hover42
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="toe">
                      <a
                        Id={this.state.checkedA ? "lnkBleftToe" : "lnkRightToe"}
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[44])
                            : this.clicked(MAP.areas[40]);
                        }}
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
                          style={
                            this.state.hover43
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
                          alt=""
                        />
                      </a>

                      <a
                        Id={this.state.checkedA ? "lnkBRightToe" : "lnkLeftToe"}
                        onClick={() => {
                          this.state.checkedA
                            ? this.clicked(BackMAP.areas[43])
                            : this.clicked(MAP.areas[41]);
                        }}
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
                          style={
                            this.state.hover44
                              ? { opacity: "100%" }
                              : { opacity: "0%" }
                          }
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

        <div>
          <ul
            className="list-group"
            style={{ maxWidth: `300px`, margin: "0 auto" }}
          >
            {this.state.body_area.map((listitem, index) => (
              <div>
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
                            "border-color": "transparent",
                            background: "transparent",
                          }}
                          id={index}
                          onClick={(e) => this.delete_region(e, index)}
                        >
                          <img src={require("../../images/cross.svg")} />
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
