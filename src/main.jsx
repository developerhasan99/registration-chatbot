import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChatProvider from "./contexts/chatContext";
import UserProvider from "./contexts/userInfoContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserProvider>
		<ChatProvider>
			<App />
		</ChatProvider>
	</UserProvider>
);
