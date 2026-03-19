export default function Home() {
  const items = [
    {
      id: 1,
      type: "뉴스",
      source: "네이버 뉴스",
      title: "한동훈 관련 주요 기사 예시 1",
      time: "10분 전",
      summary: "카톡 링크 하나로 들어와 관련 기사와 유튜브를 한눈에 보는 허브 화면 예시입니다.",
      mood: "의견 엇갈림",
    },
    {
      id: 2,
      type: "유튜브",
      source: "YouTube",
      title: "한동훈 관련 유튜브 영상 예시 1",
      time: "25분 전",
      summary: "검색된 관련 영상들을 카드형으로 모아 보여주는 예시입니다.",
      mood: "관심 높음",
    },
    {
      id: 3,
      type: "뉴스",
      source: "네이버 뉴스",
      title: "한동훈 관련 심층 기사 예시 2",
      time: "1시간 전",
      summary: "최신 기사, 관련 링크, 간단 요약을 한 화면에서 볼 수 있게 구성했습니다.",
      mood: "팩트체크 요구",
    },
    {
      id: 4,
      type: "유튜브",
      source: "YouTube",
      title: "한동훈 관련 반응 영상 예시 2",
      time: "2시간 전",
      summary: "원할 때 새로고침해서 최신 목록으로 갱신하는 구조를 가정한 화면입니다.",
      mood: "비판 우세",
    },
  ];

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
            카톡 공유형 링크 허브
          </div>

          <h1
            style={{
              fontSize: 42,
              lineHeight: 1.2,
              margin: "0 0 16px 0",
              color: "#0f172a",
            }}
          >
            한동훈 관련 기사와 유튜브를
            <br />
            한눈에 보는 링크 허브
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#475569",
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            카톡에는 링크 하나만 보내고, 들어오면 관련 뉴스와 유튜브를
            한 화면에서 모아보는 서비스 예시입니다.
          </p>

          <div
            style={{
              background: "#f1f5f9",
              padding: 16,
              borderRadius: 16,
              marginBottom: 16,
              color: "#0f172a",
              fontWeight: 600,
            }}
          >
            공유 링크: https://내서비스.kr/h/handonghoon
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              style={{
                border: "none",
                background: "#111827",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: 14,
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              새로고침
            </button>
            <button
              style={{
                border: "1px solid #cbd5e1",
                background: "#fff",
                color: "#0f172a",
                padding: "12px 18px",
                borderRadius: 14,
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              최신순
            </button>
            <button
              style={{
                border: "1px solid #cbd5e1",
                background: "#fff",
                color: "#0f172a",
                padding: "12px 18px",
                borderRadius: 14,
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              반응 많은 순
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: 24,
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ color: "#64748b", marginBottom: 8 }}>전체 링크</div>
            <div style={{ fontSize: 34, fontWeight: 800 }}>24</div>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: 24,
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ color: "#64748b", marginBottom: 8 }}>뉴스</div>
            <div style={{ fontSize: 34, fontWeight: 800 }}>12</div>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: 24,
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ color: "#64748b", marginBottom: 8 }}>유튜브</div>
            <div style={{ fontSize: 34, fontWeight: 800 }}>12</div>
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
              마지막 업데이트: 방금 전
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

                <button
                  style={{
                    border: "none",
                    background: "#111827",
                    color: "#fff",
                    padding: "10px 14px",
                    borderRadius: 12,
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  원문 열기
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
