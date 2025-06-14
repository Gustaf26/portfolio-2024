
import { useState, useContext, useEffect } from 'react'

import { GithubContext } from '../../contexts/GithubContext.jsx'

const DataWheel = (data) => {
    return (<span class="loader">Repositories</span>)
}

const GithubData = () => {

    const { gitUserData, gitRepoEvents } = useContext(GithubContext)
    const [commits, setCommits] = useState(0)
    const [repos, setRepos] = useState(0)

    useEffect(() => {

        if (gitUserData) {
            let index = 0
            const reposInterval = setInterval(() => {
                if (index <= Number(gitUserData.data?.public_repos))
                    setRepos(index)
                else clearInterval(reposInterval)
                index += 1
            }, 100)
        }

    }, [gitUserData])

    useEffect(() => {


        if (gitRepoEvents) {

            let events = gitRepoEvents.data
            let allCommits = events.map((a) => {
                return (a.payload.commits.length)
            })
            let commitsQty = allCommits.reduce((a, b) => a + b)

            let index = 0
            const commitsInterval = setInterval(() => {
                if (index <= commitsQty)
                    setCommits(index)
                else clearInterval(commitsInterval)
                index += 1
            }, 100)
        }

    }, [gitRepoEvents])

    return (<div id="github-data-container">
        <div className="loader-container">
            <h6>Repositories</h6>
            <span className="loader"><span>{repos && repos}</span></span></div>
        <div className="loader-container">
            <h6>Commits On This Page</h6>
            <span className="loader"><span>{commits && commits}</span></span></div>
        <div className="loader-container">
            <span className="loader"></span></div>
        <div className="loader-container">
            <span className="loader"></span></div>
    </div>)
}

export default GithubData