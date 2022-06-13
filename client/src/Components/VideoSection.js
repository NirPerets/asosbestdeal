import Fade from 'react-reveal/Fade';

function VideoSection() {
    return(
        <div className="video__wrapper">
            <Fade bottom>
            <div className="video">
                <iframe
                className="desktop__video" 
                src="https://player.vimeo.com/video/707965702?title=0&byline=0&portrait=0&sidedock=0" 
                width="100%" 
                height="450" 
                frameborder="0">
                </iframe>    
                <iframe
                className="mobile__video" 
                src="https://player.vimeo.com/video/708126006?title=0&byline=0&portrait=0&sidedock=0" 
                width="100%" 
                height="450" 
                frameborder="0">
                </iframe>    
                <p>החלפת מדינה באפליקציה ובאתר אסוס</p>
            </div>
            </Fade>
        </div>
    )
}

export default VideoSection