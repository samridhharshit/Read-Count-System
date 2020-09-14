import React, {useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios'
import { connect } from 'react-redux'

function StoriesCollection(props) {
    const [stories, setStories] = useState(null)

    useEffect(() => {
        async function getStories() {
            const response = await axios.get('/api/story/collection/')
            console.log(response.data)
            setStories([...response.data])

        }
        getStories()
        // console.log(props.user)
    }, [])

    if (Object.keys(props.user).length === 0) {
        return <Redirect push={true} to={'/'} />
    }

    return (
        <div className="container col-lg-9 col-sm-12">

            <div className="list_story_header fixed-top">
                <h1 className="logo">Read Stories</h1>
                <button type="button" className="btn btn-outline-secondary log-out">Log Out</button>
            </div>
            <div className="row row-cols-1 row-cols-md-1">
                {
                    (stories !== null) ?
                        stories.map((story, index) =>{
                            return (
                                <div key={story.id} className="col mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">{story.title}</h4>
                                            <div className="text">{story.text}</div>
                                            {/*<div className={'card-link'}><Link to={`/story/${story.id}`} >Read more...</Link></div>*/}
                                        </div>
                                        <div className="card-footer">
                                            <div className={'card-link'}><Link to={`/story/${story.id}`} >Read more...</Link></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : (
                            <div className="col mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">No Stories to show...</h4>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(StoriesCollection)