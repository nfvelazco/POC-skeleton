import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextAdder from '../../components/textAdder';
import ListText from '../../components/listText';

import {
    addText
  } from '../../actions';
function mapStateToProps(state) {
    return {
        texts: state.textReducer.texts,
        text: state.textReducer.text,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addText: (value) => dispatch(addText(value)),
    };
}

class Text extends Component {
    
    render() {
        return (
            <div>
                <TextAdder text={this.props.text} submmitText={this.props.addText}></TextAdder>
                <ListText texts={this.props.texts}></ListText>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Text);