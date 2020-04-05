import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getActivities } from '../actions/index'
import { setCurrentActivity } from '../actions/index'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getActivities())
    }

    handleClick(activity) {
        this.props.dispatch(setCurrentActivity(activity)) // sets the global state of currentActivity
    }

    render() {
        return (
            <div className='activity-container'>
                {this.props.activities.map(activity => {
                    return <Link className='act-btn hover-1' to={'/move/'+activity.name} onClick={() => this.handleClick(activity)}><p className='home-btn-links' key={activity.id}>{activity.name}</p></Link>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activities: state.activities,
        currentActivity: state.currentActivity
    }
}

export default connect(mapStateToProps)(Home)
