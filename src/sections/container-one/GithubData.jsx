
import { useState, useContext } from 'react'

import { GithubContext } from '../../contexts/GithubContext.jsx'


const GithubData = () => {

    const { gitUserData, gitRepoEvents } = useContext(GithubContext)

    console.log(gitUserData, gitRepoEvents)

    return (<div id="github-data-container">
        <span class="loader">Repositories</span>
        <span class="loader">Commits</span>
        <span class="loader"></span>
        <span class="loader"></span>
    </div>)
}

export default GithubData