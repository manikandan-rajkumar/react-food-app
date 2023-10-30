import React, { Fragment } from 'react';
import classes from './Model.module.css';
import { ReactDOM } from 'react';
const Backdrop = props =>{
    return <div className={classes.Backdrop} />
}

const ModalOverlay = props =>{
    return <div className={classes.modal}>
        <div className={classes.context}>{props.children}</div>
    </div>
}
const portalElement = document.getElementById('overlays')

const Model = props => {
    return <Fragment>
       {ReactDOM.createPortal()}
    </Fragment>
};

export default Model;