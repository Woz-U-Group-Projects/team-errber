import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
    company: '',
    price: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.company]: e.target.value });
    this.setState({ [e.target.price]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      company: this.state.company,
      price: this.state.price
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  };

  render() {
    const input = {
      color: 'yellow',
      
    }
    return (
      <div>
            <Form onSubmit={this.onSubmit}>
              <FormGroup >
                <Label for="item">Item</Label>
                <Input
                  style={input}
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add shopping item"
                  onChange={this.onChange}
                />
                <Input
                  style={input}
                  type="text"
                  name="company"
                  id="ite"
                  placeholder="Company"
                  onChange={this.onChange}
                />
                <Input
                  style={input}
                  type="text"
                  name="price"
                  id="it"
                  placeholder="price"
                  onChange={this.onChange}
                />

                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
