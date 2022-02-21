const KEY = require("../config.json").KEY;

export default async function fetchVideo(vidid) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=player,snippet,statistics&id=${vidid}&maxHeight=480&key=${KEY}`
  );
  const resJson = await res.json();
  return {
    embedHtml: resJson.items[0].player.embedHtml,
    title: resJson.items[0].snippet.title,
    publishedAt: resJson.items[0].snippet.publishedAt,
    views: resJson.items[0].statistics.viewCount,
  };
}
