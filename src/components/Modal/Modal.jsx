import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div onClick={props.onClose} className={classes.modalClose}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const Modal = props => {
  return <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.body)}
    {ReactDOM.createPortal( <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>, document.body)}
  </>
}

export default Modal;