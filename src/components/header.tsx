import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";
import { CitySearch } from "./city-search";

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/logo6.png" : "/logo5.png"}
            alt="WeatherHive logo"
            className="h-16 ml-[-12px]"
          />
        </Link>

        <div className="flex gap-4">
          <div className="hidden md:block">
            <CitySearch />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
