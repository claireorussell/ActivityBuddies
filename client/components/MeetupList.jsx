import React from 'react'
import { connect } from 'react-redux'
// import { IfAuthenticated } from  './Authenticated'
import { getUpComingPosts } from '../actions/postListActions'
import MeetupPost from './MeetupPost'


class MeetupList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            testPosts: [1, 2, 3, 4, 5, 6, 7, 8],
            skillLevel: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            skillLevel: e.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location == undefined && nextProps.location != undefined) {
            this.props.dispatch(getUpComingPosts(nextProps.location.id)) //dispatch the action from postListActions
        }
    }

    render() {
        let today = new Date();
        let upPosts = this.props.upcomingposts.filter((newestposts) => {
            let postTime = new Date(newestposts.dateTime.split(' ').join(''))
            return postTime.getTime() > today.getTime()
        })

        return (
            <div className="meetupList">
                <h2>{this.props.location.name}</h2>

                <div className='skillAdd'>
                    <form className="">
                        <select className="skillDropdown" value={this.setState.skillLevel} onChange={this.handleChange}>
                            <option value="">Skill</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Expert">Expert</option>
                        </select>
                    </form>
                    <button onClick={this.props.handleClick} className="addButton"> + </button>
                </div>

                <div className="cardList">
                    {upPosts.map(((newposts, idx) => {

                        return <MeetupPost key={idx} currentPost={newposts} activeSkill={this.state.skillLevel} />
                    })
                    )}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.postList,
        location: state.currentLocation,
        upcomingposts: state.postList, // from PostListReduer reducer
    }
}

export default connect(mapStateToProps)(MeetupList)