import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import styles from './shoppinglist.module.css'

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    const products ={
      
      width: "100%",
      display: "flex",
      justifyContent: "center",
      textShadow: "0px 0px 20px black"
        
    }
    
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name, company, price }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
               
                  
                     
                      
                      
                      <div className={styles.table}>
                      <div className={styles.company}>
                    
                              {company}
                              </div> 
                              <div className={styles.name}>{name}</div>
                              <div className={styles.price}>{price}</div>  
                      </div>
                       
                    
                   
                  
                
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);