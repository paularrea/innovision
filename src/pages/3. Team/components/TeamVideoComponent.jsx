import FadeInOnScroll from '../../../components/FadeInOnScroll';
import React, {Component} from 'react';

class TeamVideoComponent extends Component {
    constructor (props) {
        super(props);

        this.state = {
            // videoURL: 'https://firebasestorage.googleapis.com/v0/b/innovision-248ab.appspot.com/o/team%2FJOSIE.mp4?alt=media&token=037636e5-2107-4553-bcfc-8bb6420a0835'
        }
    }

    render () {
        return (
            <FadeInOnScroll>
            <video className='video-component' id="background-video" loop autoPlay muted>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            </FadeInOnScroll>
        )
    }
};

export default TeamVideoComponent;