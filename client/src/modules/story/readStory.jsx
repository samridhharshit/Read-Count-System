import React, {useEffect, useState} from "react";
import axios from 'axios'
import {Link, Redirect, useParams} from "react-router-dom";
import { connect } from 'react-redux'

// socket imports
import socketIOClient from 'socket.io-client'
const ENDPOINT = "http://localhost:5000"
const socket = socketIOClient(ENDPOINT)

function ReadStory(props) {
    const { StoryId } = useParams()
    const [loading, setLoading] = useState(true)
    const [story, setStory] = useState(null)
    const [readCount, setReadCount] = useState(0)
    const [socketId, setSocketId] = useState('')
    const [liveCount, setLiveCount] = useState(0)

    useEffect(() => {
        // set up socket connection
        const socket = socketIOClient(ENDPOINT)
        socket.on('connect', () => {
            socket.emit('room', StoryId)
        })

        socket.on('updateCount', async (data) => {
            console.log(data)
            if (!data.removedUser) {
                await setSocketId(data.currentUser)
            }
            await setLiveCount(data.clientsCount)
        })

        socket.on('disconnect', () => {
            socket.emit('room', StoryId)
        })

        async function getStory() {
            const response = await axios.get(`/api/story/getStory/${props.user.id}/${StoryId}`)
            console.log(response)

            if (response.status === 200) {
                await setStory(response.data.story)
                await setReadCount(response.data.readCount.data)
            } else {
                alert('Unable to fetch Story! Refresh the page')
            }
            setLoading(false)
        }
        getStory()
    }, [loading])

    const unmountUser = () => {

        socket.emit('unmountUser', {
            roomId: StoryId,
            userIdToRemove: socketId
        })
    }
    if (loading) {
        if (Object.keys(props.user).length === 0) {
            return <Redirect push={true} to={'/'} />
        }
        return (
            <div className="list_story_header fixed-top">
                <h1 className={'homelink'}>Loading your Story...</h1>
            </div>
        )
    }

    return (
        <div className="container col-lg-9 align-content-center">
            <div className="list_story_header fixed-top">
                <h1 className={'homelink logo'}><Link onClick={unmountUser} to={'/storiesList'} >Read Stories</Link></h1>
                <button type="button" className="btn btn-outline-secondary log-out">Log Out</button>
            </div>
            <h2>
                {story ? story.title : null}
            </h2>
            <br />
            <div className="view_icon">
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-eye-fill" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path fillRule="evenodd"
                          d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
            </div>

            <div className="view_text">{ readCount } Views</div>
            <div className="reading_icon">
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-laptop"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fillRule="evenodd"
                          d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
                    <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
                </svg>
            </div>
            <div className="reading_text">{liveCount} Current Reading</div>
            <br />
            <br />
            <p>{story ? story.text : null}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ReadStory)
