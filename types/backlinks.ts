// types/backlinks.ts
export interface BacklinksData {
    [sheetName: string]: any[][];
  }
  // Add window.fs type definition
  declare global {
    interface Window {
      fs: {
        readFile: (path: string) => Promise<ArrayBuffer>;
      };
    }
  }