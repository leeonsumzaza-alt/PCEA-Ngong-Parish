import axios from "axios";

const API_KEY = "AIzaSyDvZMQkfRaHTp5s2s1pY9oZDumdGy7wKaI";
const CHANNEL_ID = "UCWDnVkbGNEsFN3x6f0gyGKA";

export const getLatestVideos = async () => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        key: API_KEY,
        channelId: CHANNEL_ID,
        part: "snippet",
        order: "date",
        maxResults: 6,
        type: "video",
      },
    }
  );

  return response.data.items;
};