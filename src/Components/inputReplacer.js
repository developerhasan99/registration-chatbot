import insertChat from "../insertChat";
import { chatContents } from "../lib/chatContents";

export default function inputReplacer(insertedValue, chat, setChat) {
	const prevContents = chat.contents.slice(0, chat.contents.length - 1);
	const pushAbleObj = {
		message: insertedValue,
		sender: "user",
		editIndex: chat.history.length,
		contentStep: chat.step,
		type: "userMessage",
	};

	setChat(
		{
			...chat,
			contents: [...prevContents, pushAbleObj],
			history: [...chat.history, chat.contents],
		},
		(chat) => {
			insertChat(chatContents[chat.step], chat, setChat);
		}
	);
}
