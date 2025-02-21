import { createContext, useState, ReactNode } from "react"

interface ThemeContextType {
    theme: string;
    changeTheme: () => void;
}

const defaultContextValue: ThemeContextType = {
    theme: "dark",
    changeTheme: () => {}
};

export const ThemeContex = createContext<ThemeContextType>(defaultContextValue)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState("dark")


    const changeTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        
        document.documentElement.style.setProperty(
            "--background-color",
            newTheme === "dark" ? "black" : "white"
        );
        document.documentElement.style.setProperty(
            "--text-color",
            newTheme === "dark" ? "white" : "black"
        );
    }

    return (     
        <ThemeContex.Provider value= {{theme, changeTheme}}>
            {children}
        </ThemeContex.Provider>
    )
}

