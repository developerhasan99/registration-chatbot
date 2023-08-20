import { createContext, useContext } from "react";
import { useStateWithCallbackLazy } from "use-state-with-callback";

const userInfoContext = createContext();

export const useUserInfo = () => {
	return useContext(userInfoContext);
};

export default function UserProvider({ children }) {
	const [userInfo, setUserInfo] = useStateWithCallbackLazy({
		businessName: "",
		island: "",
		firstName: "",
		employees: "",
		physicalAddress: "",
		mailingAddress: "",
		industry: "",
		lastName: "",
		email: "",
		phone: "",
	});

	return (
		<userInfoContext.Provider value={{ userInfo, setUserInfo }}>
			{children}
		</userInfoContext.Provider>
	);
}
