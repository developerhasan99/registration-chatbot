import { useChat } from "../../contexts/chatContext";
import { chatContents } from "../../lib/chatContents";

export default function ProgressBar() {
	const { chat } = useChat();
	return (
		<div className="progress">
			<div
				className="bar"
				style={{ width: (chat.step / chatContents.length) * 100 + "%" }}
			></div>
		</div>
	);
}
