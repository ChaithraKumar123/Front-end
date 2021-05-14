import React, { Component } from 'react';
import BodyImage from './BodyImage';
import BodyImageTabs from './BodyImageTabs';
import LocalStorageService from '../../services/localStorageService';



class BodyImageMain extends Component {
    localStorageService = new LocalStorageService();
    state = {
        step: 1,
        body_area1: [],
        body_region_id1: [],
        body_side1: [],
        body_orientation1: [],
        body_desc1: [],
        data_id1: [],
        POBPatientID: "",
        workflowID: JSON.parse(this.localStorageService.getWorkFlowId()),
        workflow: this.props.location.state.workflow
    }
    nextStep1 = (body_area, body_region, data_id, body_side, body_orientation, body_desc) => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
            body_area1: body_area,
            data_id1: data_id,
            body_region_id1: body_region,
            body_side1: body_side,
            body_orientation1: body_orientation,
            body_desc1: body_desc
        })

    }


    render_main = () => {

        this.setState({
            step: 1,


        })

    }
    showStep = () => {
        const { step } = this.state;
        if (step === 1)
            return (<BodyImage Leftarrow={this.props.pageProps.Leftarrow} nextStep1={this.nextStep1} state={this.state} />);
        else
            return (<BodyImageTabs state={this.state} render_main={this.render_main} />)
    }
    render() {
        //const {Leftarrow} = this.props.pageProps

        return (

            <div><p>{this.step}</p>{
                this.showStep()}</div>

        );
    }
}

export default BodyImageMain;
