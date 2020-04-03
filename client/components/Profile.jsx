import React from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions'
import { getDecodedToken } from 'authenticare/client'

class Profile extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.dispatch(getProfile(getDecodedToken().id))
    }


    render() {
        console.log(this.props.userPosts[0])
        let profile = this.props.profile
        let userPosts = this.props.userPosts
        //console.log(this.props.userPosts)
        return (
            <div className='profileWrapper'>

                <div className='profColOne'>
                    <img className='profImg' src={profile.image_url} alt="" />
                    <h2 className='profile-title'> {profile.name} </h2>
                    <div className='profInfo'>
                        
                        <p>{profile.email}</p>
                        <h4>A bit about me</h4>
                        <p className='profileBlurb'>{profile.about}</p>

                    </div>
                </div>
                <div className='profColTwo'>
                    <h2> Your Meetups </h2>
                    <div className='profCardList'>
                    {/*map through props of posts and display some info.... */}
                    {userPosts.map(post => {
                        return (
                            <div className='profilePostCard'>
                                <div className='profileCardHeader'>
                                <p>{post.name} :</p>
                                <p>{post.dateTime}</p>
                                </div>
                                <p className='meetupP'><span className='cardTitle'> Notes: </span>{post.notes}</p>
                                <p className='meetupP'><span className='cardTitle'> The Plan: </span>{post.tracks}</p>
                            </div>
                        )
                    })}
                    </div>

                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile,
        userPosts: state.postList
    }
}

export default connect(mapStateToProps)(Profile) 