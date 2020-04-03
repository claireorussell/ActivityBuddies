import React from 'react'
import { connect } from 'react-redux'
import { addRsvp } from '../actions/postListActions'
import { gotPostsByLocationID } from '../actions/postListActions'
import { sendEmail } from '../api.js'

class MeetupPost extends React.Component {
    constructor(props) {
        super(props)
    }

    buttonClicked = () => {
        this.props.dispatch(addRsvp(this.props.currentPost))
        this.props.dispatch(gotPostsByLocationID(this.props.location.id))
        sendEmail()
        .then(stuff => {
            console.log('woohoo')
        })
      }

    render() {
        let active = !this.props.activeSkill || this.props.currentPost.skill == this.props.activeSkill
        return(
            <div className={active ? "meetupCard" : "meetupCardInActive"}>
                <h3> {this.props.currentPost.tracks} - {this.props.currentPost.user_name} </h3>
                <p className="meetupSkill"> <span> Skill level: </span> {this.props.currentPost.skill} </p>
                <p className="meetupTime"> <span> Meet at: </span> {this.props.currentPost.dateTime} </p>
                <p className="meetupNotes"> <span> Notes: </span> {this.props.currentPost.notes} </p>

                <p>Attendees: {this.props.currentPost.attendees}</p>
                
                
                   <button className="flagButton" onClick={this.buttonClicked}> RSVP </button>
                

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        location: state.currentLocation
    }
}


export default connect(mapStateToProps)(MeetupPost)