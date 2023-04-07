import { WebClient } from "@slack/web-api";

export default async function handler(req: any, res: any) {
  try {
    const token = "xoxb-xxxxxxxxxxxx-xxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxx";
    // #チャンネル名 of @ユーザー名
    const channel = "#test_channel";
    // メッセージ
    const text = "*Hello World*";

    const client = new WebClient(token);
    const response = await client.chat.postMessage({ channel, text });
  } catch (e) {
    console.log("test");
  }

  res.status(200).json({ name: "John Doe" });
}
