"use client";

import { useState } from "react";

export default function HandonghoonPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("방금 전");
  const [items, setItems] = useState([
    {
      id: 1,
      type: "뉴스",
      source: "네이버 뉴스",
      title: "한동훈 관련 주요 기사 예시 1",
      time: "10분 전",
      summary:
        "전용 주소로 들어왔을 때 관련 기사와 유튜브를 한눈에 모아보는 허브 화면입니다.",
      mood: "의견 엇갈림",
    },
    {
      id: 2,
      type: "유튜브",
      source: "YouTube",
      title: "한동훈 관련 유튜브 영상 예시 1",
      time: "25분 전",
      summary:
        "카톡에 링크 하나만 보내고 들어오면 관련 콘텐츠가 모여 보이게 만드는 예시입니다.",
      mood: "관심 높음",
    },
  ]);

  const handleRefresh = async () => {
    setIsRefreshing(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setItems([
      {
        id: 1,
        type: "뉴스",
        source: "네이버 뉴스",
        title: "한동훈 관련 최신 기사 예시 A",
        time: "방금 전",
        summary:
          "새로고침 버튼을 눌렀을 때 최신 콘텐츠가 들어온 것처럼 보이게 만드는 예시입니다.",
        mood: "의견 엇갈림",
      },
      {
        id: 2,
        type: "유튜브",
        source: "YouTube",
        title: "한동훈 관련 최신 유튜브 영상 예시 B",
        time: "1분 전",
        summary:
          "나중에는 이 자리에 실제 유튜브 검색 결과가 들어오도록 연결할 예정입니다.",
        mood: "관심 높음",
      },
      {
        id: 3,
        type: "뉴스",
        source: "네이버 뉴스",
        title: "한동훈 관련 추가 기사 예시 C",
        time: "3분 전",
        summary:
          "지금은 임시 데이터지만, 다음 단계에서 네이버 뉴스 API와 연결하기 쉽게 만든 구조입니다.",
        mood: "팩트체크 요구",
      },
    ]);

    setLastUpdated("지금 막 업데이트됨");
    setIsRefreshing(false);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            background: "#ffffff",
            borderRadius: 24,
            padding: 32,
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: 999,
              background: "#111827",
              color: "#ffffff",
              fontSize: 14,
              marginBottom: 18,
            }}
          >
            전용 링크 허브
          </div>

          <h1
            style={{
              fontSize: 42,
              lineHeight: 1.2,
              margin: "0 0 16px 0",
              color: "#0f172a",
            }}
          >
            /h/handonghoon
            <br />
            전용 페이지
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#475569",
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            이제부터는 메인 주소가 아니라 전용 주소로 한동훈 관련 링크 허브를
            볼 수 있습니다.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              style={{
                border: "none",
                background: isRefreshing ? "#475569" : "#111827",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: 14,
                cursor: isRefreshing ? "default" : "pointer",
                fontWeight: 700,
              }}
            >
              {isRefreshing ? "업데이트 중..." : "새로고침"}
            </button>
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ marginBottom: 18 }}>
            <h2 style={{ fontSize: 28, margin: "0 0 8px 0", color: "#0f172a" }}>
              한동훈 링크 허브
            </h2>
            <p style={{ color: "#64748b", margin: 0 }}>
              마지막 업데이트: {lastUpdated}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 20,
                  padding: 20,
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                    marginBottom: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      color: "#475569",
                      fontWeight: 700,
                    }}
                  >
                    {item.source}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "#eff6ff",
                      color: "#1d4ed8",
                      fontWeight: 700,
                    }}
                  >
                    {item.mood}
                  </span>
                </div>

                <h3
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: 20,
                    lineHeight: 1.4,
                    color: "#0f172a",
                  }}
                >
                  {item.title}
                </h3>

                <div
                  style={{
                    fontSize: 14,
                    color: "#64748b",
                    marginBottom: 12,
                  }}
                >
                  {item.type} · {item.time}
                </div>

                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#334155",
                    marginBottom: 16,
                  }}
                >
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
