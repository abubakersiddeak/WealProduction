import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register a font to support Bengali characters if needed, or use a standard font
// For example, if you have a font file like 'NotoSansBengali-Regular.ttf'
// Font.register({
//   family: 'Noto Sans Bengali',
//   src: '/fonts/NotoSansBengali-Regular.ttf'
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
    padding: 30,
    fontFamily: 'Helvetica', // Use a standard font or a registered font
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#666',
  },
  summaryBox: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  summaryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00796b',
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: 10,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderBottomColor: '#cccccc',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    padding: 5,
    fontSize: 10,
    fontWeight: 'bold',
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderBottomColor: '#eeeeee',
    borderWidth: 1,
    padding: 5,
    fontSize: 10,
  },
});

const MonthlyReportPdf = ({ reportData, monthYear }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Monthly Business Summary Report</Text>
      <Text style={styles.subHeader}>For: {monthYear}</Text>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Financial Overview</Text>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>Total Sales: {reportData.totalSales?.toFixed(2) || '0.00'} TK</Text>
          <Text style={styles.summaryText}>Total Profit: {reportData.totalProfit?.toFixed(2) || '0.00'} TK</Text>
          <Text style={styles.summaryText}>Total Expenses: {reportData.totalExpenses?.toFixed(2) || '0.00'} TK</Text>
          <Text style={styles.summaryText}>Total Due: {reportData.totalDue?.toFixed(2) || '0.00'} TK</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Order Summary</Text>
        <Text style={styles.text}>Total Orders: {reportData.totalOrders || 0}</Text>
        <Text style={styles.text}>Total Order Amount: {reportData.totalOrderAmount?.toFixed(2) || '0.00'} TK</Text>
        <Text style={styles.text}>Total Order Profit: {reportData.totalorderProfit?.toFixed(2) || '0.00'} TK</Text>
        <Text style={styles.text}>Orders by Status:</Text>
        {reportData.ordersByStatus && Object.entries(reportData.ordersByStatus).map(([status, count]) => (
          <Text key={status} style={styles.text}>  - {status}: {count}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Expense Details</Text>
        <Text style={styles.text}>Expenses by Category:</Text>
        {reportData.expensesByCategory && Object.entries(reportData.expensesByCategory).map(([category, amount]) => (
          <Text key={category} style={styles.text}>  - {category}: {amount?.toFixed(2)} TK</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Additional Information</Text>
        <Text style={styles.text}>Extra Profit: {reportData.extraProfit?.toFixed(2) || '0.00'} TK</Text>
      </View>

    </Page>
  </Document>
);

export default MonthlyReportPdf;
