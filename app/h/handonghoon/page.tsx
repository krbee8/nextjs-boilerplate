"use client";

import { useState } from "react";

type Item = {
  id: string;
  type: string;
  source: string;
  title: string;
  time: string;
  summary: string;
  mood: string;
  url: string;
};

export default function HandonghoonPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("방금 전");

  const [youtubeItems, setYoutubeItems] = useState<Item[]>([]);
  const [newsItems, setNewsItems] = useState<Item[]>([]);

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);

      const response = await fetch("/api/refresh");
      const data = await response.json();

      if (data.success) {
        setYoutubeItems(data.youtubeItems || []);
        setNewsItems(data.newsItems || []);
        setLastUpdated(data.lastUpdated);
      }
    } catch (error) {
      console.error("새로고침 실패:", error);
      alert("업데이트에 실패했어요.");
    } finally {
      setIsRefreshing(false);
    }
  };

  const renderCard = (item: Item) => (
    <a
      key={item.id}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        border: "1px solid #e2e8f0",
        borderRadius: 16,
        padding: 16,
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 8,
          marginBottom: 10,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: 13,
            color: "#475569",
            fontWeight: 700,
          }}
        >
          {item.source}
        </span>

        <span
          style={{
            fontSize: 12,
            padding: "4px 8px",
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
          margin: "0 0 8px 0",
          fontSize: 18,
          lineHeight: 1.4,
          color: "#0f172a",
        }}
      >
        {item.title}
      </h3>

      <div
        style={{
          fontSize: 13,
          color: "#64748b",
          marginBottom: 10,
        }}
      >
        {item.type} · {item.time}
      </div>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.6,
          color: "#334155",
          margin: 0,
        }}
      >
        {item.summary}
      </p>
    </a>
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "30px 16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: 24,
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: 999,
              background: "#111827",
              color: "#ffffff",
              fontSize: 13,
              marginBottom: 14,
            }}
          >
            전용 링크 허브
          </div>

          <h1
            style={{
              fontSize: 34,
              lineHeight: 1.2,
              margin: "0 0 12px 0",
              color: "#0f172a",
            }}
          >
            /h/handonghoon
          </h1>

          <p
            style={{
              fontSize: 16,
              color: "#475569",
              lineHeight: 1.6,
              marginBottom: 18,
            }}
          >
            한동훈 관련 네이버 기사와 유튜브 영상을 분리해서 볼 수 있는 전용 페이지입니다.
          </p>

          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            style={{
              border: "none",
              background: isRefreshing ? "#475569" : "#111827",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 12,
              cursor: isRefreshing ? "default" : "pointer",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            {isRefreshing ? "업데이트 중..." : "새로고침"}
          </button>
        </div>

        <div
          style={{
            marginBottom: 16,
            color: "#64748b",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          마지막 업데이트: {lastUpdated}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          <section
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: 20,
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <h2
              style={{
                margin: "0 0 16px 0",
                fontSize: 24,
                color: "#0f172a",
              }}
            >
              네이버 기사
            </h2>

            <div style={{ display: "grid", gap: 12 }}>
              {newsItems.length > 0 ? (
                newsItems.map(renderCard)
              ) : (
                <div style={{ color: "#64748b", fontSize: 14 }}>
                  아직 불러온 뉴스가 없습니다. 새로고침을 눌러주세요.
                </div>
              )}
            </div>
          </section>

          <section
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: 20,
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <h2
              style={{
                margin: "0 0 16px 0",
                fontSize: 24,
                color: "#0f172a",
              }}
            >
              유튜브 영상
            </h2>

            <div style={{ display: "grid", gap: 12 }}>
              {youtubeItems.length > 0 ? (
                youtubeItems.map(renderCard)
              ) : (
                <div style={{ color: "#64748b", fontSize: 14 }}>
                  아직 불러온 영상이 없습니다. 새로고침을 눌러주세요.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
