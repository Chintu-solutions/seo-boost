// app/portfolio/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BacklinksTable } from "@/components/portfolio/BacklinksTable";
import { SearchBar } from "@/components/portfolio/SearchBar";
import { BacklinksData } from "@/types/backlinks";
import { readExcelFile, getSheetData } from "@/lib/excel";
import { Loader2, Database, FileSpreadsheet } from "lucide-react";
import React from "react";

export default function PortfolioPage() {
  const [sheets, setSheets] = useState<BacklinksData>({});
  const [activeSheet, setActiveSheet] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        console.log("Starting to load Excel file...");

        const workbook = await readExcelFile(
          "/data/Authority Backlinks samples 1.xlsx"
        );
        console.log("Excel file loaded successfully:", workbook.SheetNames);

        const sheetsData: BacklinksData = {};
        workbook.SheetNames.forEach((sheetName) => {
          const sheetData = getSheetData(workbook, sheetName);
          if (sheetData && sheetData.length > 0) {
            console.log(
              `Loaded data for sheet ${sheetName}:`,
              sheetData.length,
              "rows"
            );
            sheetsData[sheetName] = sheetData;
          }
        });

        setSheets(sheetsData);
        if (workbook.SheetNames.length > 0) {
          setActiveSheet(workbook.SheetNames[0]);
        }
      } catch (error) {
        console.error("Error in loadData:", error);
        setError(
          "Error loading Excel file. Please make sure the file exists in the correct location."
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredData = React.useMemo(() => {
    if (!activeSheet || !sheets[activeSheet]) return [];

    return sheets[activeSheet].filter((row: any[]) => {
      // Skip empty rows
      if (!row || row.length === 0 || row.every((cell) => !cell)) return false;

      // Always include headers and sections
      if (
        row[0] &&
        typeof row[0] === "string" &&
        (row[0].includes("Sample") || row[0].includes("Contact Information"))
      ) {
        return true;
      }

      // Filter by search term
      if (!searchTerm) return true;

      return row.some((cell: any) => {
        if (!cell) return false;
        return cell.toString().toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }, [activeSheet, sheets, searchTerm]);

  if (isLoading) {
    return (
      <div className="relative flex items-center justify-center min-h-screen bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-blue-950/90" />
        <div className="relative flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 text-blue-400 animate-spin" />
          <p className="text-blue-100/90">Loading backlinks data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex items-center justify-center min-h-screen bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-red-950/90" />
        <div className="text-red-400 flex items-center gap-2">
          <Database className="h-6 w-6" />
          {error}
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-slate-950 py-12">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-blue-950/90" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full bg-slate-900/50 border-slate-800 backdrop-blur">
          <CardHeader className="border-b border-slate-800">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <FileSpreadsheet className="h-6 w-6 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
                My Portfolio - Client Work
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <Tabs
                value={activeSheet}
                onValueChange={setActiveSheet}
                className="w-full"
              >
                <TabsList className="w-full bg-slate-900/90 p-1 gap-1">
                  {Object.keys(sheets).map((sheetName) => (
                    <TabsTrigger
                      key={sheetName}
                      value={sheetName}
                      className="flex-1 data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-100 py-2"
                    >
                      {sheetName}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="mt-6">
                  <SearchBar value={searchTerm} onChange={setSearchTerm} />
                </div>

                {Object.keys(sheets).map((sheetName) => (
                  <TabsContent
                    key={sheetName}
                    value={sheetName}
                    className="mt-6 focus-visible:outline-none focus-visible:ring-0"
                  >
                    <BacklinksTable data={filteredData} />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
