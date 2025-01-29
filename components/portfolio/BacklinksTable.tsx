// src/components/portfolio/BacklinksTable.tsx
import React from "react";
import { Mail, MessageSquare, Link2 } from "lucide-react";

interface BacklinksTableProps {
  data: any[][];
}

export const BacklinksTable = ({ data }: BacklinksTableProps) => {
  if (!data || data.length === 0) return null;

  // Function to extract contact information
  const getContactInfo = (data: any[][]) => {
    const contactRow = data.find(
      (row) =>
        row[0] &&
        typeof row[0] === "string" &&
        row[0].includes("Contact Information")
    );

    if (contactRow) {
      const contactInfo = contactRow[0].toString();
      const emailMatch = contactInfo.match(/Email:([^\s]+)/);
      const skypeMatch = contactInfo.match(/Skype ID:([^\s]+)/);

      return {
        email: emailMatch ? emailMatch[1] : "iumairanwarr@gmail.com",
        skype: skypeMatch ? skypeMatch[1] : "live:.cid.a0d23f86b32ea8ac",
      };
    }

    return null;
  };

  // Function to get main data (excluding contact info and empty rows)
  const getMainData = (data: any[][]) => {
    return data.filter(
      (row) =>
        row[0] &&
        typeof row[0] === "string" &&
        !row[0].includes("Contact Information") &&
        row.some((cell) => cell !== null && cell !== "")
    );
  };

  const contactInfo = getContactInfo(data);
  const mainData = getMainData(data);

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      {contactInfo && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/40 rounded-lg p-4 flex items-center gap-3">
            <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
            <div>
              <div className="text-sm text-slate-400">Email</div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div className="bg-slate-900/40 rounded-lg p-4 flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-blue-400 flex-shrink-0" />
            <div>
              <div className="text-sm text-slate-400">Skype ID</div>
              <a
                href={`skype:${contactInfo.skype}?chat`}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {contactInfo.skype}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Data */}
      <div className="overflow-hidden rounded-lg border border-slate-800/60 bg-slate-900/40">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-800/60">
                {mainData[0]?.map((header: any, index: number) => (
                  <th
                    key={index}
                    className="text-left p-4 text-sm font-medium text-slate-300 bg-slate-900/60"
                  >
                    <div className="flex items-center gap-2">
                      <Link2 className="h-4 w-4 text-blue-400" />
                      {header}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mainData.slice(1).map((row: any[], rowIndex: number) => (
                <tr
                  key={rowIndex}
                  className="border-b border-slate-800/60 last:border-0 hover:bg-slate-800/40 transition-colors"
                >
                  {row.map((cell: any, cellIndex: number) => (
                    <td key={cellIndex} className="p-4 text-sm text-slate-300">
                      {typeof cell === "string" && cell.startsWith("http") ? (
                        <a
                          href={cell}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors hover:underline flex items-center gap-2"
                        >
                          {cell.length > 50
                            ? `${cell.substring(0, 50)}...`
                            : cell}
                          <Link2 className="h-3 w-3" />
                        </a>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
