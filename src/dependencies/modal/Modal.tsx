import {FaTimes} from 'react-icons/fa';
import './Modal.css';

type IModal = {
  onResponse?: (arg: any) => void;
  msg?: string;
  onClosed: () => void;
  active?: boolean;
  className?: string
  style?: any
  off?: boolean;
  children: any;
  showMenu?: boolean;
}
const Modal = ({onResponse, msg, onClosed, active, className= '', style = {}, off = false, children, showMenu = false}: IModal) => {
  const style1 = 'view-modal'; const style2 = 'modal-display-none';

  const handleResponse = (val: boolean) => {
    if (onResponse !== undefined) {
      onResponse(val);
    } else if (onClosed !== undefined) {
      onClosed();
    }
  };

  const handleClose = () => {
    onClosed();
  };


  return (
        off? null:
            <div className={`${className} ${active ? style1 : style2} `}>
              <div style={{...style}} className="modal-content">
                  {showMenu && <span onClick={() => handleClose()} className="close"><FaTimes/></span>}
                  {msg? msg: children? children: null}
                {
                  showMenu &&
                        <span className="modal-option-btn">
                          <span onClick={() => handleResponse(true)}>OK</span>
                          <span onClick={() => handleResponse(false)}>CANCEL</span>
                        </span>
                }
              </div>
            </div>
  );
}

export default Modal;