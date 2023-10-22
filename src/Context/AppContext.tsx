import { createContext } from "react";
import { AppContextIF } from "../Interfaces/AppContext.interface";

export const AppContext = createContext<AppContextIF>({} as AppContextIF);
