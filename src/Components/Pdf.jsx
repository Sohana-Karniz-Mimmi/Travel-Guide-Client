import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';

// Define your PDF document component
const MyDocument = ({ jobDetails }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.name} >{jobDetails.userName}</Text>
        <Text style={styles.email} > {jobDetails.email}</Text>
        <Text style={styles.title}>Applied Job Summary</Text>
        <View style={styles.info}>
          <Text style={styles.dName}>Job Title: {jobDetails.job_title}</Text>
          <Text style={styles.dName}>Apply Date: {format(jobDetails.deadline, 'dd-MM-yyyy')}</Text>
          <Text style={styles.dName}>Salary: ${jobDetails.salary}</Text>
          <Text style={styles.dName}>Category: {jobDetails.category}</Text>
          <Text style={styles.dName}>Resume Link: {jobDetails.resumeLink}</Text>
          {/* Render other job details */}
        </View>
      </View>
    </Page>
  </Document>
);


const JobPage = ({ job }) => {
  const pdfRef = useRef(null);

  const downloadPdf = () => {
    if (pdfRef.current) {
      pdfRef.current.updateContainer(<MyDocument jobDetails={job} />);
      pdfRef.current.save();
    }
  };

  return (
    <div>
      {/* <PDFViewer width="100%" height={600}>
        <MyDocument />
      </PDFViewer> */}
      <button onClick={downloadPdf}></button>
      <PDFDownloadLink document={<MyDocument jobDetails={job} />} fileName="job_details.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download'
        }
      </PDFDownloadLink>
    </div>
  );
};


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  name: {
    textAlign: 'center',
    paddingBottom: 3,
    paddingTop: 10,
  },
  email: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#fe9703',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 4,
  },
  dName: {
    fontSize: 14,
    paddingBottom: 3,
  },
  info: {
    marginBottom: 10,
  },
});

export default JobPage;

