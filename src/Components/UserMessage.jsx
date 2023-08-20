import { useChat } from "../contexts/chatContext";

export default function UserMessage({ node }) {
	const { chat, setChat } = useChat();
	const handleClick = (event) => {
		const historyIndex = event.target.getAttribute("data-index");
		const contentStep = event.target.getAttribute("data-step");
		const newHistory = chat.history.slice(0, historyIndex + 1);
		setChat({
			...chat,
			step: contentStep,
			contents: chat.history[historyIndex],
			history: newHistory,
		});
	};

	return (
		<div className="user-message">
			<p className={node.sender}>{node.message}</p>
			<button
				data-index={node.editIndex}
				data-step={node.contentStep}
				onClick={handleClick}
			>
				Edit
			</button>
		</div>
	);
}
