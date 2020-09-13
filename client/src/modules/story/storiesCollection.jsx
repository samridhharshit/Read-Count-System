import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'

export default function StoriesCollection() {
    const [stories, setStories] = useState(null)

    useEffect(() => {
        async function getStories() {
            const response = await axios.get('/api/story/collection/')
            console.log(response.data)
            setStories([...response.data])

        }
        getStories()
    }, [])

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
                                            {/*<div className="view_icon">*/}
                                            {/*    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye-fill" fill="currentColor"*/}
                                            {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                            {/*        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>*/}
                                            {/*        <path fillRule="evenodd"*/}
                                            {/*              d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>*/}
                                            {/*    </svg>*/}
                                            {/*</div>*/}
                                            <div className={'card-link'}><Link to={`/story/${story.id}`} >Read more...</Link></div>
                                            {/*<div className="reading_icon">*/}
                                            {/*    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-laptop" fill="currentColor"*/}
                                            {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                            {/*        <path fillRule="evenodd"*/}
                                            {/*              d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>*/}
                                            {/*        <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>*/}
                                            {/*    </svg>*/}
                                            {/*</div>*/}
                                            {/*<div className="reading_text">245 Current Reading</div>*/}


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