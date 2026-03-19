export async function GET() {
  return Response.json({
    success: true,
    lastUpdated: "지금 막 업데이트됨",
    items: [
      {
        id: 1,
        type: "뉴스",
        source: "네이버 뉴스",
        title: "한동훈 관련 서버 응답 기사 예시 A",
        time: "방금 전",
        summary: "이 데이터는 이제 페이지 안이 아니라 서버 API에서 내려주는 예시입니다.",
        mood: "의견 엇갈림",
      },
      {
        id: 2,
        type: "유튜브",
        source: "YouTube",
        title: "한동훈 관련 서버 응답 유튜브 예시 B",
        time: "1분 전",
        summary: "다음 단계에서는 이 자리에 실제 유튜브 검색 결과를 연결할 예정입니다.",
        mood: "관심 높음",
      },
      {
        id: 3,
        type: "뉴스",
        source: "네이버 뉴스",
        title: "한동훈 관련 서버 응답 기사 예시 C",
        time: "3분 전",
        summary: "지금은 임시 서버 데이터지만, 구조는 실제 API 연결용으로 맞춰두는 단계입니다.",
        mood: "팩트체크 요구",
      },
    ],
  });
}
