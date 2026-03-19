const cleanText = (text: string) =>
  text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/<b>/g, "")
    .replace(/<\/b>/g, "");

export async function GET() {
const YOUTUBE_API_KEY = "AIzaSyBrPfL_wLnPu_Rs44kqG1tlB0lvW5YWAic";
const NAVER_CLIENT_ID = "swFmilpW_zhWu_1dqJuY";
const NAVER_CLIENT_SECRET = "NqhFmTT7Um";

  const query = "한동훈";

  try {
    const youtubePromise = fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        query
      )}&type=video&maxResults=6&key=${YOUTUBE_API_KEY}`
    ).then((res) => res.json());

    const naverPromise = fetch(
      `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(
        query
      )}&display=6&sort=date`,
      {
        headers: {
          "X-Naver-Client-Id": NAVER_CLIENT_ID || "",
          "X-Naver-Client-Secret": NAVER_CLIENT_SECRET || "",
        },
      }
    ).then((res) => res.json());

    const [youtubeData, naverData] = await Promise.all([
      youtubePromise,
      naverPromise,
    ]);

    const youtubeItems =
      youtubeData.items?.map((item: any, index: number) => ({
        id: `yt-${index + 1}`,
        type: "유튜브",
        source: "YouTube",
        title: cleanText(item.snippet.title),
        time: "방금 전",
        summary: cleanText(item.snippet.description || "유튜브 영상입니다."),
        mood: "실시간",
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      })) || [];

    const newsItems =
      naverData.items?.map((item: any, index: number) => ({
        id: `news-${index + 1}`,
        type: "뉴스",
        source: "네이버 뉴스",
        title: cleanText(item.title),
        time: "방금 전",
        summary: cleanText(item.description || "네이버 뉴스 기사입니다."),
        mood: "최신",
        url: item.originallink || item.link,
      })) || [];

    return Response.json({
      success: true,
      lastUpdated: "지금 막 업데이트됨",
      youtubeItems,
      newsItems,
    });
  } catch (error) {
    console.error("refresh api error", error);

    return Response.json({
      success: false,
      lastUpdated: "업데이트 실패",
      youtubeItems: [],
      newsItems: [],
    });
  }
}
