import { useState } from "react";
import { motion } from "framer-motion";
import typingImg from "../assets/typing-animation-3x.gif";
import { useUserInfo } from "../contexts/userInfoContext";
import Button from "./Button";
import Form from "./Form";
import ButtonGroup from "./ButtonGroup";
import UserMessage from "./UserMessage";
import ActionBtn from "./ActionBtn";

export default function MessageElement({ node }) {
	const { userInfo } = useUserInfo();

	const [isLoading, setLoading] = useState(true);
	setTimeout(() => {
		setLoading(false);
	}, 1000);

	const renderNode = () => {
		// Scroll to bottom
		window.scrollTo(0, document.body.scrollHeight);

		if (node.type === "button") return <Button node={node} />;
		if (node.type === "form") return <Form node={node} />;
		if (node.type === "buttonGroup") return <ButtonGroup node={node} />;
		if (node.type === "userMessage") return <UserMessage node={node} />;
		if (node.type === "actionBtn") return <ActionBtn node={node} />;
		return (
			<motion.p
				initial={{ opacity: 0, scale: 0.5, translateX: -200 }}
				animate={{ opacity: 1, scale: 1, translateX: 0 }}
				transition={{ duration: 0.3 }}
				className={node.sender}
				dangerouslySetInnerHTML={{
					__html: node.message
						.replace("__first_name", userInfo.firstName)
						.replace("__business_name", userInfo.businessName)
						.replace("__industry", userInfo.industry),
				}}
			></motion.p>
		);
	};

	return (
		<>
			{isLoading ? (
				<img src={typingImg} height="25" alt="Typing..." />
			) : (
				renderNode()
			)}
		</>
	);
}
