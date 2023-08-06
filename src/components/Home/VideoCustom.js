import React, {useState} from 'react';
import ModalVideo from 'react-modal-video';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const VideoCustom = (props) => {
    const { idVideo } = props;
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="video-area" >
            <div className="container">
                <div className="row">
                    <ModalVideo channel='youtube' isOpen={isOpen} videoId={idVideo} onClose={() => {
                        openModal();
                    }}/>
                        <div className="video-img">
                            <img src="assets/img/bg/video-repeat.jpeg" alt=""/>
                            <div className="video-icon">
                                <a className="popup-video" onClick={() => {
                                    openModal();
                                }}><i><FontAwesomeIcon icon={['fas', 'play']}/></i></a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCustom;
