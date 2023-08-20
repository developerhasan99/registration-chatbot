import { useChat } from "./contexts/chatContext";
import MessageElement from "./Components/MessageElement";
import Header from "./Components/Header/Header";

export default function App() {
	const { chat } = useChat();

	return (
		<>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="App">
							{chat.contents.map((node, index) => (
								<div
									key={index}
									className={
										node.type === "buttonGroup"
											? "message-wrapper buttonGroup"
											: "message-wrapper"
									}
								>
									<MessageElement node={node} />
								</div>
							))}
						</div>
					</div>
					<div className="col-md-6 d-md-none">
						<div className="sticky">
							<img src="src/assets/start-journey.svg" alt="Registration" />
							<h1>Your Journey Starts Here</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
