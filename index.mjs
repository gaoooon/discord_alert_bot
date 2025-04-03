export const handler = async (event) => {
    const webhookId = "webhookId";
    const webhookToken ="webhookToken";
    
    try {
      await fetch(
        `https://discord.com/api/webhooks/${webhookId}/${webhookToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: "📢 정기 배포 PR을 생성해주세요!",
          }),
        }
      );
      console.log("success");
    } catch (error) {
      console.error("error", error);
    }
  };
