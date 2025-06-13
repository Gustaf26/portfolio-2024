import { useState, createContext, useEffect } from 'react'
import { Octokit } from "@octokit/rest";

const GithubContext = createContext()

export const GithubContextProv = (props) => {

    const octokit = new Octokit({
        auth: 'YOUR-TOKEN'
    });
    const [gitData, setGitData] = useState()

    console.log(import.meta.env.VITE_ACCESS_TOKEN)

    useEffect(() => {

        async function getData() {

            // Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
            const data = await octokit.request('GET /user', {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })

            console.log(data)
        }

        getData()

    }, [])


    return (<GithubContext.Provider value={gitData}>

        {props.children}
    </GithubContext.Provider>)
}

export { GithubContext, GithubContextProv as default } 
