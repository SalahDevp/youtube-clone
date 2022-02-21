const KEY = require("../config.json").KEY;

/**
 * if "query" is undefined the functions searches the videos related to the specified id
 */
export default async function search(query, relatedToId) {
  const videos = [];
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?${
      query ? `q=${query}` : `relatedToVideoId=${relatedToId}`
    }&part=snippet&maxResults=${query ? "40" : "5"}&type=video&key=${KEY}`
  );
  const resJson = await res.json();
  for (let item of resJson.items) {
    if (!item.snippet) continue; //sometimes one of the videos isn't available
    const obj = {
      id: item.id.videoId,
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails,
    };
    videos.push(obj);
  }
  return videos;
}
