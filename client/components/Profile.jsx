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
        // Fix getProfile to get by userId not ProfilesId
    }


    render() {
        return (
            <div>
                {/* userName
                    List of meetUp posts */}
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