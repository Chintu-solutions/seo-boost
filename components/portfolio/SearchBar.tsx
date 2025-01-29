// src/components/portfolio/SearchBar.tsx
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative">
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg opacity-50 blur group-hover:opacity-75 transition duration-200" />

      <div className="relative flex items-center">
        <Search className="absolute left-3 h-5 w-5 text-slate-400" />
        <Input
          type="text"
          placeholder="Search backlinks..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-slate-900/90 border-slate-800 pl-10 pr-4 py-2 text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
        />
      </div>
    </div>
  );
};
