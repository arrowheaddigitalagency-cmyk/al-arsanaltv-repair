"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface CustomSelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  options: CustomSelectOption[];
  value: string;
  onChange: (value: string) => void;
  id?: string;
  placeholder?: string;
  className?: string;
}

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
  id,
  placeholder = "Select an option",
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label
          htmlFor={id}
          className="block text-[11px] sm:text-xs font-bold tracking-wider text-slate-700 uppercase mb-1.5 font-display"
        >
          {label}
        </label>
      )}

      {/* Dropdown Trigger Box */}
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-2xl bg-white border text-left flex items-center justify-between transition-all duration-200 cursor-pointer shadow-xs ${
          isOpen
            ? "border-[#0052EA] ring-2 ring-[#0052EA]/20 shadow-md shadow-blue-500/5"
            : "border-slate-300 hover:border-slate-400"
        }`}
      >
        <span
          className={`text-sm font-semibold truncate ${
            selectedOption ? "text-slate-900" : "text-slate-400"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <span
          className={`ml-2 w-5 h-5 flex items-center justify-center text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#0052EA]" : ""
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-blue-900/15 overflow-hidden p-1.5 max-h-64 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
          <ul role="listbox" className="space-y-0.5">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium cursor-pointer transition-colors duration-150 ${
                    isSelected
                      ? "bg-blue-50/90 text-[#0052EA] font-bold"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[#0052EA] shrink-0 ml-2 stroke-[2.5]" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
