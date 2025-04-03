import axios from 'axios'
import { GithubSearchResponse } from '../types/githubSearchResponse'

export const fetchRepositories = async (
  query: string
): Promise<GithubSearchResponse> => {
  const response = await axios.get<GithubSearchResponse>(
    'https://api.github.com/search/repositories',
    { params: { q: query, per_page: 40 } }
  )
  return response.data
}
