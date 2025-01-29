// lib/excel.ts
import * as XLSX from 'xlsx';

export const readExcelFile = async (filePath: string): Promise<XLSX.WorkBook> => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    
    return XLSX.read(arrayBuffer, {
      type: 'array',
      cellDates: true,
      cellNF: true,
      sheetStubs: true
    });
  } catch (error) {
    console.error('Error reading Excel file:', error);
    throw new Error('Failed to read Excel file');
  }
};

export const getSheetData = (workbook: XLSX.WorkBook, sheetName: string): any[][] => {
  try {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) {
      throw new Error(`Sheet ${sheetName} not found`);
    }
    
    return XLSX.utils.sheet_to_json(sheet, { 
      header: 1,
      defval: '', // Use empty string for empty cells
      blankrows: false // Skip empty rows
    });
  } catch (error) {
    console.error('Error getting sheet data:', error);
    return [];
  }
};

// Helper function to check if a row is a section header
export const isSectionHeader = (row: any[]): boolean => {
  return (
    row[0] &&
    typeof row[0] === 'string' &&
    (row[0].includes('Sample') || row[0].includes('Contact Information'))
  );
};

// Helper function to check if a row is contact information
export const isContactInfo = (row: any[]): boolean => {
  return (
    row[0] &&
    typeof row[0] === 'string' &&
    row[0].includes('Contact Information')
  );
};