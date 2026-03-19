export async function GET() {
  const API_KEY = "AIzaSyBrPfL_wLnPu_Rs44kqG1tlB0lvW5YWAic";

  const query = "한동훈";

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        query
      )}&type=video&maxResults=6&key=${API_KEY}`
    );

    const data = await res.json();

    const items = data.items.map((item: any, index: number) => ({
      id: index + 1,
      type: "유튜브",
      source: "YouTube",
      title: item.snippet.title,
      time: "방금 전",
      summary: item.snippet.description || "유튜브 영상입니다.",
      mood: "실시간",
    }));

    return Response.json({
      success: true,
      lastUpdated: "지금 막 업데이트됨",
      items,
    });
  } catch (error) {
    return Response.json({
      success: false,
      items: [],
    });
  }
}
