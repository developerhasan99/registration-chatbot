import { motion } from "framer-motion";
import { useChat } from "../contexts/chatContext";
import insertChat from "../insertChat";
import { chatContents } from "../lib/chatContents";

export default function Button({ node }) {
	const { chat, setChat } = useChat();

	const handleClick = (event) => {
		insertChat(chatContents[chat.step], chat, setChat);
		event.target.setAttribute("disabled", true);
	};

	return (
		<motion.button
			initial={{ opacity: 0, scale: 0.5, translateX: 200 }}
			animate={{ opacity: 1, scale: 1, translateX: 0 }}
			transition={{ duration: 0.3 }}
			onClick={handleClick}
			className={node.sender}
		>
			{node.message}
		</motion.button>
	);
}
