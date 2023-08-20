import { createContext, useContext, useEffect } from "react";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import insertChat from "../insertChat";
import { chatContents } from "../lib/chatContents";

const chatContext = createContext();

export const useChat = () => {
	return useContext(chatContext);
};

export default function ChatProvider({ children }) {
	const [chat, setChat] = useStateWithCallbackLazy({
		step: 0,
		contents: [],
		history: [],
	});

	// Render initial messages
	useEffect(() => {
		insertChat(chatContents[chat.step], chat, setChat);
	}, []);

	return (
		<chatContext.Provider value={{ chat, setChat }}>
			{children}
		</chatContext.Provider>
	);
}
