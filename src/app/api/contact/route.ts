export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    if (!name || !phone || !message) {
      return Response.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    const discordPayload = {
      embeds: [
        {
          title: "새로운 문의가 접수되었습니다",
          color: 0x2d6a4f,
          fields: [
            { name: "이름", value: name, inline: true },
            { name: "연락처", value: phone, inline: true },
            { name: "문의내용", value: message },
          ],
          timestamp: new Date().toISOString(),
          footer: { text: "Korea Park Golf 문의폼" },
        },
      ],
    };

    const discordRes = await fetch(
      "https://discord.com/api/webhooks/1457406206602776741/A-dGhbpVt6HzwSNJVguZ1OLf-ngkyO1NkucsW_aE8p4sIa_b_CG93Cbf-FKjDZWf7ZMS",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordPayload),
      }
    );

    if (!discordRes.ok) {
      return Response.json(
        { error: "디스코드 전송에 실패했습니다." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
