import axios, { AxiosResponse } from 'axios';

interface Leaderboard {
  _id?: string;
  username: string;
  score: number;
}

interface GetResponse {
  leaderboard: Leaderboard[];
  hasError: boolean;
  error?: { message: string };
}

const url = process.env.REACT_APP_BACKEND_URL;

export const getLeaderboard = (): Promise<AxiosResponse<GetResponse>> => axios.get(`${url}/leaderboard`);
export const postLeaderboard = ({ username, score }: Leaderboard): Promise<AxiosResponse> =>
  axios.post(`${url}/leaderboard`, { username, score });
