// // import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
// // import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// // import { useRef } from 'react';

// // Define your PDF document component
// // const MyDocument = () => (
// //   <Document>
// //     <Page style={styles.page}>
// //       <View style={styles.section}>
// //         <Text>Job Summary</Text>
// //         {/* Add your summary information here */}
// //       </View>
// //     </Page>
// //   </Document>
// // );

// const JobPage = () => {
//   // const pdfRef = useRef(null);

//   const downloadPdf = () => {
//     // URL of the PDF file
//     const pdfUrl = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D';
//     // const pdfUrl = 'https://www.nu.ac.bd/uploads/notices/notice_5201_pub_date_13052024.pdf';
//     // const pdfUrl = 'https://drive.google.com/uc?export=download&id=1DcrtNBJ7Br7gLD25z6dNLTZs2NRftZft';

//     // Create an anchor element
//     const anchor = document.createElement('a');
//     anchor.href = pdfUrl;
//     anchor.target = '_blank'; // Open in a new tab
//     anchor.download = 'job_summary.pdf'; // File name to download

//     // Trigger a click event on the anchor element
//     anchor.click();
//   };

//   return (
//     <div>
//       {/* <PDFViewer width="100%" height={600}>
//         <MyDocument />
//       </PDFViewer> */}
//       <button onClick={downloadPdf}>Download</button>
//       {/* <PDFDownloadLink document={<MyDocument />} fileName="job_summary.pdf">
//         {({ blob, url, loading, error }) =>
//           loading ? 'Loading document...' : 'Download'
//         }
//       </PDFDownloadLink> */}
//     </div>
//   );
// };

// // const styles = StyleSheet.create({
// //   page: {
// //     flexDirection: 'row',
// //     backgroundColor: 'white',
// //   },
// //   section: {
// //     margin: 10,
// //     padding: 10,
// //     flexGrow: 1,
// //   },
// // });

// export default JobPage;
