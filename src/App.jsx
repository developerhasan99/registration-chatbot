import { useChat } from "./contexts/chatContext";
import MessageElement from "./Components/MessageElement";
import Header from "./Components/Header/Header";

import illustration from "./assets/start-your-journey.svg";

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
							<img src={illustration} alt="Registration" />
							<h1>Your Journey Starts Here</h1>
							<p style={{ textAlign: "center" }}>
								&copy; {new Date().getFullYear()} Mehedi Hasan - All rights
								reserved!
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
