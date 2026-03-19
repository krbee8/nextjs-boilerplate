"use client";

import { useState } from "react";

type Item = {
  id: number;
  type: string;
  source: string;
  title: string;
  time: string;
  summary: string;
  mood: string;
};

export default function HandonghoonPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("방금 전");
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      type: "뉴스",
      source: "네이버 뉴스",
      title: "불러오기 전 기본 항목",
      time: "대기 중",
      summary: "새로고침을 누르면 서버에서 최신 유튜브 데이터를 받아옵니다.",
      mood: "대기중",
    },
  ]);

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);

      const response = await fetch("/api/refresh");
      const data = await response.json();

      if (data.success) {
        setItems(data.items);
        setLastUpdated(data.lastUpdated);
      }
    } catch (error) {
      console.error("새로고침 실패:", error);
      alert("업데이트에 실패했어요.");
    } finally {
      setIsRefreshing(false);
    }
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
            이제부터는 메인 주소가 아니라 전용 주소로 한동훈 관련 링크 허브를 볼 수 있습니다.
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
