
import { useState, useContext, useEffect } from 'react'

import { GithubContext } from '../contexts/GithubContext.jsx'


const GithubData = () => {

    const { gitUserData, gitRepoEvents } = useContext(GithubContext)
    const [commits, setCommits] = useState(0)
    const [repos, setRepos] = useState(0)
    const [lastUpdated, setLastUpdated] = useState(gitUserData?.data?.updated_at || new Date().toDateString('yyy-mm-dd'))

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

            let events = [...gitRepoEvents.data]
            let allCommits = events.map((event) => {
                return (event.payload?.commits?.length ? event.payload.commits.length : 0)
            })

            let commitsQty = allCommits && allCommits.reduce((a, b) => a + b)

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
            <h6>Public Repos</h6>
            <span className="loader repos-loader"><span>{repos && repos}</span></span></div>
        <div className="loader-container">
            <h6>Contributions</h6>
            <span className="loader"><span>{commits && commits}</span></span></div>
        <div className="loader-container">
            <h6>Available</h6>
            <span className="loader not-numbers">Now</span></div>
        <div className="loader-container">
            <h6>Updated</h6>
            <span className="loader not-numbers">{lastUpdated && lastUpdated.slice(4, 11)}</span></div>
    </div>)
}

export default GithubData