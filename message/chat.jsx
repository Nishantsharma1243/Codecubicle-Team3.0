"use client";

import * as Ably from "ably";
import ChatBox from "./chat-box.jsx";

export default function Chat() {
  const client = new Ably.Realtime({
    key: "hH2pEw.dQ7V_g:Wb8gBlR1wl5vRmpUbtio1XW7StOZCZkre75zW1_F-S8",
  });
  return <ChatBox />;
}
