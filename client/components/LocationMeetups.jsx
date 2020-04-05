import React from 'react'
import MeetupList from './MeetupList'
import AddPostForm from './AddPostForm'

import { connect } from 'react-redux'
import { gotPostsByLocationID } from '../actions/postListActions'
import { setCurrentLocation, setCurrentActivity } from '../actions'
import { getCurrentActivity, getCurrentLocation } from '../actions/index'

//check if the user is authenticated.


//check if the user is authenticated.


class LocationMeetups extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDifficulty: 0,
            addingMeetup: false,
            loading: true,
        }
    }

    activateMeetingForm = () => {
        this.setState({
            addingMeetup: true
        })
    }

    deactivateMeetingForm = () => {
        this.setState({
            addingMeetup: false
        })
    }

    componentDidMount() {
        // this.props.dispatch(gotPostsByLocationID(this.props.location.id))
        this.props.dispatch(getCurrentLocation(this.props.match.params.location))
        this.props.dispatch(getCurrentActivity(this.props.match.params.activity))

        setTimeout(this.handleLoad, 3000)
    }

    handleLoad = () => {
        this.setState({
            loading: false
        })
    }

    render() {

        return (

            <div className="wrapper">
                
                    <div className='activityTitle'>
                        <h1 className='activityName'>{this.props.currentLocation.name}</h1>
                    </div>
                    <div className='wrapperBody'>
                    <div className="widgetWrapper">
                        {
                            this.props.currentActivity.id == 1
                                ? <div style={{ display: this.state.loading ? 'none' : 'block' }}><link href="//www.surf-forecast.com/stylesheets/widget.css" className='locationMap' media="screen" rel="stylesheet" type="text/css" /><div class="wf-width-cont surf-fc-widget"><div class="widget-container"><div class="external-cont"><iframe class="surf-fc-i" allowtransparency="true" src={this.props.currentLocation.widget} scrolling="no" frameborder="0" marginwidth="0" marginheight="0"></iframe></div></div></div></div>
                                : <div style={{ display: this.state.loading ? 'none' : 'block' }}><iframe className='locationMap' src={this.props.currentLocation.widget} scrolling="no" frameborder="0" allowfullscreen="1" width="400px" height="800px" id="map0" /></div>
                        }
                        {this.state.loading ? 'loading' : ''}
                    </div>

                    <div className="rightColumn">
                        {this.state.addingMeetup ? <AddPostForm goBack={this.deactivateMeetingForm} /> : <MeetupList handleClick={this.activateMeetingForm} posts={'hi'} />}

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postList,
        currentLocation: state.currentLocation,
        currentActivity: state.currentActivity,
    }
}

export default connect(mapStateToProps)(LocationMeetups)




