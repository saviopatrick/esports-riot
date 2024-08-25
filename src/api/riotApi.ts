import api from '../services/api';

export async function fetchSummonerData(summonerName: string, summonerID: string) {
  try {
    const response = await api.get(`/account/v1/accounts/by-riot-id/by-riot-id/${summonerName}/${summonerID}`, {
      baseURL: process.env.API_BASE_URL
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching summoner data:', error);
    return null;
  }
}
