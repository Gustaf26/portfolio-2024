
import { useState, useContext, useEffect, useRef } from 'react'

import { GithubContext } from '../../contexts/GithubContext.jsx'

// const DataWheel = (data) => {
//     return (<span class="loader">Repositories</span>)
// }

const GithubData = () => {

    const { gitUserData, gitRepoEvents } = useContext(GithubContext)
    const [commits, setCommits] = useState(0)
    const [repos, setRepos] = useState(0)
    const hirable = true
    const [lastUpdated, setLastUpdated] = useState('')

    useEffect(() => {

        if (gitUserData) {
            let index = 0
            const reposInterval = setInterval(() => {
                if (index <= Number(gitUserData.data?.public_repos))
                    setRepos(index)
                else clearInterval(reposInterval)
                index += 1
            }, 100)

            let updatedDate = gitUserData.data?.updated_at

            setLastUpdated(new Date(updatedDate).toDateString('yyy-mm-dd'))
        }

    }, [gitUserData])

    useEffect(() => {

        if (gitRepoEvents) {

            let events = gitRepoEvents.data
            let allCommits = events.map((a) => {
                return (a.payload.commits?.length)
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
            <h6>Github Repos</h6>
            <span className="loader repos-loader"><span>{repos && repos}</span></span></div>
        <div className="loader-container">
            <h6>Commits Here</h6>
            <span className="loader"><span>{commits && commits}</span></span></div>
        <div className="loader-container">
            <h6>Available</h6>
            <span className="loader not-numbers">Now</span></div>
        <div className="loader-container">
            <h6>Latest Update</h6>
            <span className="loader not-numbers">{lastUpdated && lastUpdated.slice(4, 11)}</span></div>
    </div>)
}

export default GithubData