import {createPortal} from "react-dom";

const Modal = (() => {


	return createPortal((
			<div className="overlay">
				<div className="content">
					Modal content
				</div>
			</div>
		), document.body);
});

export default Modal;
