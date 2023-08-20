import { motion } from "framer-motion";
import { useChat } from "../contexts/chatContext";
import { useUserInfo } from "../contexts/userInfoContext";
import insertChat from "../insertChat";
import { chatContents } from "../lib/chatContents";
import inputReplacer from "./inputReplacer";

export default function ButtonGroup({ node }) {
	const { chat, setChat } = useChat();
	const { userInfo, setUserInfo } = useUserInfo();

	const handleClick = (event) => {
		const insertedValue = event.target.innerText;
		// Conditionally Handle Button event and response messages
		if (node.name && node.name !== "island") {
			// Scaffold the Content arr and object
			const prevContents = chat.contents.slice(0, chat.contents.length - 1);
			const pushAbleObj = {
				message: insertedValue,
				sender: "user",
				editIndex: chat.history.length,
				contentStep: chat.step,
				type: "userMessage",
			};
			const specialMessage = {
				sender: "bot",
				message: "",
				type: "p",
			};

			// Check the button group name and response accordingly to input value
			if (node.name === "employees") {
				if (insertedValue === "No") {
					specialMessage.message =
						"Cool! You are off to a great start as a solopreneur!";
				} else {
					specialMessage.message =
						"Well alright! Hiring employees can be exciting! MyBizVI can help in providing the right documents the employee onboarding process.";
				}
				// Store the value into the user inside userInfo object
				setUserInfo({
					...userInfo,
					[node.name]: insertedValue
						.replace("Yes, ", "")
						.replace("!", "")
						.replace("No", ""),
				});
			}

			if (node.name === "addressConfirmation") {
				if (insertedValue === "No") {
					setChat(
						{
							...chat,
							step: chat.step + 2,
							contents: [...prevContents, pushAbleObj],
							history: [...chat.history, chat.contents],
						},
						(chat) => {
							setTimeout(() => {
								insertChat(chatContents[chat.step], chat, setChat);
							}, 1000);
						}
					);
					return;
				}
				setChat(
					{
						...chat,
						contents: [...prevContents, pushAbleObj],
						history: [...chat.history, chat.contents],
					},
					(chat) => {
						setTimeout(() => {
							insertChat(chatContents[chat.step], chat, setChat);
						}, 1000);
					}
				);
				return;
			}

			setChat(
				{
					...chat,
					contents: [...prevContents, pushAbleObj, specialMessage],
					history: [...chat.history, chat.contents],
				},
				(chat) => {
					setTimeout(() => {
						insertChat(chatContents[chat.step], chat, setChat);
					}, 1000);
				}
			);
			return;
		}

		// Store the value into the user inside userInfo object
		setUserInfo({
			...userInfo,
			[node.name]: insertedValue,
		});

		// replace and render default message
		inputReplacer(insertedValue, chat, setChat);
	};

	return (
		<>
			{node.buttons.map((button, index) => {
				return (
					<div className="button-wrapper" key={index}>
						<motion.button
							initial={{ opacity: 0, scale: 0.5, translateX: 200 }}
							animate={{ opacity: 1, scale: 1, translateX: 0 }}
							transition={{ duration: 0.3 }}
							onClick={handleClick}
							className={button.sender}
						>
							{button.message}
						</motion.button>
					</div>
				);
			})}
		</>
	);
}
