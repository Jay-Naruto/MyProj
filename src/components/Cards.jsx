import React, { Component } from 'react';
import './CardsPopup.css'
import './CPop.js'
import Modal from 'react-awesome-modal';
class Cards extends Component {
    state = { visible : false }
    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
    render() { 
        return ( 
           
            <>
            
            
           
            
               <div className="col-lg-4 d-flex align-items-lg-center">
                <div className="card">
                    <img className="card-img-top" src={this.props.imgsrc} alt={this.props.imgsrc}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.details}</p>
                        
                        <a href="#" onClick={() => this.openModal()} className="btn btn-primary">{this.props.btn}</a>
                        <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div style={{marginLeft:'7px'}}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.details}</p>
                        <p>{this.props.mobile}</p>
                        <p>{this.props.address}</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
                    </div>
                    </div>
                    </div>
            </>
         );
    }
}
 
export default Cards;