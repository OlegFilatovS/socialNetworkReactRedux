import React,{Component} from "react";

const withData = (ComposedComponent, data) => {
    class withData extends Component {
        state = {
            data: []
        };

        componentWillMount() {
            this.setState(data);
        }

        render() {
            return <ComposedComponent {...this.state}/>
        }
    }

};

export default withData;