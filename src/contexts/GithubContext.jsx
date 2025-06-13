import { useState, createContext, useEffect } from 'react'
import { Octokit } from "@octokit/rest";

const GithubContext = createContext()

export const GithubContextProv = (props) => {

    const octokit = new Octokit({
        auth: import.meta.env.VITE_ACCESS_TOKEN
    });
    const [gitUserData, setGitUserData] = useState()
    const [gitRepoEvents, setRepoEvents] = useState()

    useEffect(() => {

        const getUserData = new Promise(async (resolve, reject) => {

            // Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
            const userData = await octokit.request('GET /user', {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })

            resolve(userData)
        })

        const getEventsData = new Promise(async (resolve, reject) => {
            const octokit = new Octokit({
                auth: import.meta.env.VITE_ACCESS_TOKEN
            })

            const eventsData = await octokit.request('GET /repos/Gustaf26/portfolio-2024/events', {
                owner: 'Gustaf26',
                repo: 'https://github.com/Gustaf26/portfolio-2024',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })

            resolve(eventsData)

        })


        const promises = Promise.all([getEventsData, getUserData])
        promises.then(res => { setGitUserData(res[1]); setRepoEvents(res[0]) })

    }, [])


    return (<GithubContext.Provider value={{ gitUserData, gitRepoEvents }}>

        {props.children}
    </GithubContext.Provider>)
}

export { GithubContext, GithubContextProv as default } 
