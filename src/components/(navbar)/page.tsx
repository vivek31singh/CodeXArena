"use client";

import * as React from "react";
import { useTheme } from "next-themes";

// NAVBAR RELATED IMPORTS
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// SCROLL RELATED
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavbarItem {
  label: string;
  to: string;
  show: boolean;
}

interface HamburgerItem extends NavbarItem {
  description: string;
}

const NavbarItems: NavbarItem[] = [
  { to: "HeroSection", label: "Home", show: true },
  { to: "HowItWorks", label: "Get Started", show: true },
  { to: "Challenges", label: "Challenges", show: true },
  { to: "Playground", label: "Playground", show: true },
  { to: "Leaderboard", label: "Leaderboard", show: true },
  { to: "About", label: "About", show: true },
  { to: "ContactUs", label: "Contact Us", show: true },
];

const HamburgerItems: HamburgerItem[] = [
  {
    to: "HeroSection",
    label: "Home",
    show: true,
    description: "Navigate to the homepage and explore the main features.",
  },
  {
    to: "HowItWorks",
    label: "Get Started",
    show: true,
    description: "Learn how the platform works and get started with ease.",
  },
  {
    to: "Challenges",
    label: "Challenges",
    show: true,
    description: "Participate in various challenges and test your skills.",
  },
  {
    to: "Playground",
    label: "Playground",
    show: true,
    description: "Explore the playground for hands-on practice and learning.",
  },
  {
    to: "Leaderboard",
    label: "Leaderboard",
    show: true,
    description:
      "Check the leaderboard to see the top performers and rankings.",
  },
  {
    to: "About",
    label: "About",
    show: true,
    description: "Learn more about the platform and its mission.",
  },
  {
    to: "ContactUs",
    label: "Contact Us",
    show: true,
    description: "Get in touch with us for inquiries or support.",
  },
];

const NavbarMenu: React.FC = () => {
  return (
    <>
      {NavbarItems.map((item) => (
        <NavigationMenu key={item.label}>
          <NavigationMenuList>
            <NavigationMenuItem className="cursor-pointer text-sm mx-5">
              {item.label}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}
    </>
  );
};

const HamburgerMenu: React.FC = () => {
  return (
    <>
      {HamburgerItems.map((item) => (
        <NavigationMenu key={item.label}>
          <NavigationMenuList>
            <NavigationMenuItem className="p-5">
              <div className="flex flex-col">
                <h3 className="cursor-pointer text-sm sm:text-md">{item.label}</h3>

                <p className="cursor-pointer text-xs sm:text-sm">{`(${item.description})`}</p>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}
    </>
  );
};

export default function Navbar() {
  // const { setTheme } = useTheme();

  // const [openModel, setOpenModel] = React.useState(true);
  const [openModel, setOpenModel] = React.useState(false);
  //   <DropdownMenu>
  //   <DropdownMenuTrigger asChild>
  //     <Button variant="outline" size="icon">
  //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  //       <span className="sr-only">Toggle theme</span>
  //     </Button>
  //   </DropdownMenuTrigger>
  //   <DropdownMenuContent align="end">
  //     <DropdownMenuItem onClick={() => setTheme("light")}>
  //       Light
  //     </DropdownMenuItem>
  //     <DropdownMenuItem onClick={() => setTheme("dark")}>
  //       Dark
  //     </DropdownMenuItem>
  //     <DropdownMenuItem onClick={() => setTheme("system")}>
  //       System
  //     </DropdownMenuItem>
  //   </DropdownMenuContent>
  // </DropdownMenu>

  // MODEL REALTED OPERATIONS

  const hamburgerModelRef = React.useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      hamburgerModelRef.current &&
      !hamburgerModelRef.current.contains(event.target as Node)
    ) {
      setOpenModel(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openHamburgerMenu = (): void => {
    setOpenModel(true);
  };

  const closeHamburgerMenu = (): void => {
    setOpenModel(false);
  };

  return (
    <nav className="flex items-center justify-between h-16 border-b-2 border-slate-300 w-full">
      <div className="flex items-center justify-start m-5">
        <p className="cursor-pointer text-lg sm:text-xl">CodeXArena</p>
      </div>

      <div className="hidden sm:flex justify-center items-center m-5">
        <NavbarMenu />
      </div>

      <div className="flex items-center justify-end m-5">
        {openModel && (
          <>
            <div
              className="fixed right-0 top-0 h-full w-[75vw] sm:w-[30vw] z-50 bg-black dark:bg-white flex flex-col items-center justify-start border-2 border-white border-dashed"
              ref={hamburgerModelRef}
            >
              <div className="w-full min-h-16 border-2 border-white border-dashed flex items-center justify-between px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                  onClick={closeHamburgerMenu}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>

                <h1>Menu</h1>
              </div>

              <div className="flex flex-col w-full h-full border-2">
                <ScrollArea className="h-full w-full overflow-hidden pb-16">
                  <HamburgerMenu />
                </ScrollArea>
              </div>
            </div>
          </>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
          onClick={openHamburgerMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
    </nav>
  );
}
