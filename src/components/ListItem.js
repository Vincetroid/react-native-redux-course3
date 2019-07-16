import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {
        console.log('this.props')
        console.log(this.props)
        const { library, selectedLibraryId } = this.props;

        console.log('library')
        console.log(library)
        console.log('selectedLibraryId')
        console.log(selectedLibraryId)
        if (library.item.id === selectedLibraryId) {
            console.log('funciona')
            return (
                <Text>{library.item.description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;

        return (
            <TouchableWithoutFeedback 
                onPress={() => console.log(this.props.selectLibrary(id))}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#000',
  }
};

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);