import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHide} />
}

const ModalOverlay = props => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onHide}>Close warning</Button>
        </footer>
    </Card>
}

const ErrorModal = props => {

    return <Fragment>
        {ReactDOM.createPortal(
            <Backdrop onHide={props.onHide} />,
            document.getElementById('backdrop-root'))}

        {ReactDOM.createPortal(
            <ModalOverlay title={props.title}
                message={props.message}
                onHide={props.onHide} />,
            document.getElementById('overlay-root')
        )}
    </Fragment>
}

export default ErrorModal;