export default function HandonghoonPage() {
  const items = [
    {
      id: 1,
      type: "뉴스",
      source: "네이버 뉴스",
      title: "한동훈 관련 주요 기사 예시 1",
      time: "10분 전",
      summary: "전용 주소로 들어왔을 때 관련 기사와 유튜브를 한눈에 모아보는 허브 화면입니다.",
      mood: "의견 엇갈림",
    },
    {
      id: 2,
      type: "유튜브",
      source: "YouTube",
      title: "한동훈 관련 유튜브 영상 예시 1",
      time: "25분 전",
      summary: "카톡에 링크 하나만 보내고 들어오면 관련 콘텐츠가 모여 보이게 만드는 예시입니다.",
      mood: "관심 높음",
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
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ fontSize: 28, margin: "0 0 18px 0", color: "#0f172a" }}>
            한동훈 링크 허브
          </h2>

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
