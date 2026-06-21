'use client';

import { useEffect, useState, useMemo } from "react";
import { Home, User, LaptopMinimal, Briefcase, Mail, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Represents a single navigation menu item configuration.
 */
interface NavigationItem {
  /** The unique element ID of the corresponding target section in the DOM */
  id: string;
  /** The user-facing label text displayed in the navigation item tab */
  label: string;
  /** The Lucide icon component class used to render the tab's icon */
  icon: LucideIcon;
}

/**
 * Properties accepted by the NavItem component.
 */
interface NavItemProps {
  /** The data model representing this specific navigation tab segment */
  item: NavigationItem;
  /** Flag determining if this navigation tab is currently active/selected */
  isActive: boolean;
  /** Callback event function triggered when this navigation tab is clicked */
  onClick: () => void;
}

/**
 * Static navigation configuration defined outside the component to prevent re-creation on renders.
 */
const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: LaptopMinimal },
  { id: "experience", label: "Experiences", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail }
];

/**
 * Custom hook to monitor scroll position and track the active section in view
 */
function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState("home");

  // Options memoized to maintain observer target boundaries stably
  const observerOptions = useMemo(() => ({
    root: null,
    rootMargin: "-20% 0px -40% 0px", // Detect section hits near center screen
    threshold: 0.2,
  }), []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [sectionIds, observerOptions]);

  return activeSection;
}

/**
 * Sub-component representing a single tab item in the floating navbar
 */
function NavItem({ item, isActive, onClick }: NavItemProps) {
  const Icon = item.icon;

  return (
    <motion.button
      layout
      onClick={onClick}
      className={`
        relative flex items-center justify-center md:justify-start gap-2 h-10 rounded-full z-10 focus:outline-none
        w-10 px-0
        md:w-auto md:px-4
        ${isActive ? "text-black font-medium" : "text-gray hover:text-white"}
      `}
      animate={{
        maxWidth: isActive ? 150 : 44,
      }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
      {/* Sliding active background indicator */}
      {isActive && (
        <motion.div
          layoutId="active-navbar-pill"
          className="absolute inset-0 bg-white rounded-full -z-10"
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        />
      )}

      {/* Icon rendering */}
      <Icon className="w-5 h-5 shrink-0" />

      {/* Label rendering with active state width transitions (hidden on mobile) */}
      <motion.span
        layout
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.95,
          maxWidth: isActive ? 80 : 0,
        }}
        className="hidden md:inline-block overflow-hidden text-sm whitespace-nowrap"
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
      >
        {item.label}
      </motion.span>
    </motion.button>
  );
}

/**
 * Main floating Navbar navigation component
 */
export default function Navbar() {
  const sectionIds = useMemo(() => NAVIGATION_ITEMS.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-4 md:bottom-auto md:top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 bg-black/80 backdrop-blur-md rounded-full border border-gray/20">
      {NAVIGATION_ITEMS.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          isActive={activeSection === item.id}
          onClick={() => handleScrollToSection(item.id)}
        />
      ))}
    </nav>
  );
}