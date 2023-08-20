import { useState } from "react";
import { motion } from "framer-motion";
import { useChat } from "../contexts/chatContext";
import { useUserInfo } from "../contexts/userInfoContext";
import inputReplacer from "./inputReplacer";

export default function Form({ node }) {
	const { chat, setChat } = useChat();
	const { userInfo, setUserInfo } = useUserInfo();

	const [value, setValue] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		// Store the value into the user inside userInfo object
		setUserInfo({
			...userInfo,
			[node.name]: value,
		});

		inputReplacer(value, chat, setChat);
	};

	const handleClick = (event) => {
		event.preventDefault();
		setValue(userInfo.physicalAddress);
	};

	return (
		<motion.form
			initial={{ opacity: 0, scale: 0.5, translateX: 200 }}
			animate={{ opacity: 1, scale: 1, translateX: 0 }}
			transition={{ duration: 0.3 }}
			onSubmit={handleSubmit}
			className={node.sender}
		>
			<input
				name={node.name}
				placeholder={node.message}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			{node.name === "mailingAddress" && (
				<button onClick={handleClick} className="inherit-btn">
					Or, Same as Physical Address
				</button>
			)}
			<button type="submit" disabled={value.length < 1 ? true : false}>
				Submit
			</button>
		</motion.form>
	);
}
