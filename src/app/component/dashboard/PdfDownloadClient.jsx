"use client";

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MonthlyReportPdf from './MonthlyReportPdf';

export default function PdfDownloadClient({
  reportData,
  selectedMonth,
  selectedYear,
}) {
  if (!reportData) {
    return <p className="text-sm text-gray-500">Select month/year to generate report</p>;
  }

  const monthYearString = `${new Date(0, selectedMonth - 1).toLocaleString('en', { month: 'long' })} ${selectedYear}`;
  const fileName = `Monthly_Business_Report_${selectedYear}-${String(selectedMonth).padStart(2, '0')}.pdf`;

  return (
    <PDFDownloadLink
      document={<MonthlyReportPdf reportData={reportData} monthYear={monthYearString} />}
      fileName={fileName}
    >
      {({ loading }) =>
        loading ? (
          'Loading document...'
        ) : (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Download PDF
          </button>
        )
      }
    </PDFDownloadLink>
  );
}
