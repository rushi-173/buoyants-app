import './App.css';
import {Navbar, Sidebar} from "./components";
import {Home, ShareNews, SearchAndExplore} from "./Pages";
import {Routes, Route} from "react-router-dom";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { useState,  useEffect } from 'react';

const REACT_APP_SPREADSHEET_ID = "1k7shL1D6ye_CxU5C5lLEC5vFLMzr-wu9vF4NkQQms4A"
// const REACT_APP_SHEET_ID = "492812941"
// const REACT_APP_GOOGLE_CLIENT_EMAIL = "rushi-211@buoyants.iam.gserviceaccount.com"

// // Config variables
const SPREADSHEET_ID = REACT_APP_SPREADSHEET_ID;
// const SHEET_ID = REACT_APP_SHEET_ID;
// const CLIENT_EMAIL = REACT_APP_GOOGLE_CLIENT_EMAIL;
// const PRIVATE_KEY = REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
const user = {
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKnEGFunYaVaci\nnMhzr6c5fscAvvr5/k5d+wSqQsD56dbuz1bhG2l76WStWxZrURjeCh6OW+EYIQsu\nG4cau5zPz5Is0GjINx2FkhI+ZMsu5fBxYS7A8Ih1sUaWBwUn5Mfx+8JwTiS7S0rg\n747LC9FS64mOicEK72mGVCpik8GTI2+Xufc9VtucOIKEpfLobkWkJcWyugImevPf\nsPzGUmJx8hf0Qk6Lca2aOq0Ve9H/ZFgWjXOgXyoMUAwkSZqFojAX0RI3ciPoVgYS\ncugAnAxiiB7/b/sS0m/+Od3s91XLysdtajlVTobTnXn9oIOneEUbEUQh0jk7a3Kz\nbrrFOuoPAgMBAAECggEAFBUo6Xhx/GpBBs1DkTP3/1rxnsFPXzg1zFr1O2sidaMY\nCtPCaM2uxvl7YTOGJV0Eef3GyZWR2jJsSUWxPpUaFf8dHhQKTs4nvvWbmVOkUCG6\nk4Juf/FXlVLdDEHl4O5sYy/xNfCI84ejBGi6XqXtOarfF6HP4KWacBYnnV3H8i2D\n1XIpNFWEdi/Iq6IBKq+6KIXuczE+lDimPuEkXc0xNiJlgqcXljyjagVLHgns01E1\nmYmU3gqDkbOUgUHOHksRHDOQYkN0WmZzRptjHJXr60E4qIGJHiea5OmHwd+A44Ym\n581jsYcxEyYGf67w58YFX8FMjhpELl3iztsO8AtSAQKBgQDrkafhGUm/HBr6Hu0j\nf4JDsdfMyZqxW7xAKi27EsW/6ZDIx0BRTvwwwwwUyYXQF3PN0C8xsv1fyeKaJdBO\nwmcwCkxkWZpi5OdAz4nBD2O9yG42y7cQM7Y4eV/tsRBbbHOYOgn58X0CxeQiREbI\nDn91mIUgUSYMlfcYdK+URuvB1wKBgQDcLtHTDCQYQYY/b2PQK7lfknVr8LNsUgbN\nQ7la9vS2lDfderLEl7iTRxNHdL9aSmGvrxIGWx7joVuLp9dFdAz+gVqRQzVxplE6\nBw/c2suEyD5TAsTVcf98YqCwuvxOvufMSUaSqgKYdDj2ZUYprYHAJjmvMD8AKwxE\nTfa5mkeCiQKBgBqz/yjIGhD82Z4CxXThrl2IGmNPcyaptHQ9k8OCBEKV8mCgHY1Z\n+8J3SbZNhcqp7emlsMPce1ZRZ0t7/9n9tX6/nBtAAP0233P8Uqw811ybDMtPWmgO\nxJgwQgyKpsUGTTAzXBAmLLqUviCYRsHEyvQEnwqjyEFi+oieKY0QYQcvAoGBALlx\noX1MI3ZecZAp4/onaViKROVlc+iOaXYmTQ3FIzRHP4oFVl1nn6hDW4R6WtPUA9Rw\n8hByXGDBvRWxhgjUBkGwdrQT1AZlWtIxsnWDvZeXA47srRVMjy6W7toKkohMF3Si\nXpMWJ1t5v6QeheqCXN6WE01uqBEfMJSyyVNnEkVpAoGBALSe9qlUrMYXz9l+b05Y\nR1uwqZaSb+za1Eowpue9y06hjoNfIVb808GFYWGgs2KhGUtlbuydkMzMucqIDbx1\nIUbtDAgtwquEJShylRQn0v1WC45HbkIu2f6+TI/aX41+VoEQOEPZXkw/mivQfvvE\nWVI6VPnJ3WZzqaYZnR5reIi7\n-----END PRIVATE KEY-----\n",
  "client_email": "rushi-211@buoyants.iam.gserviceaccount.com",
}


// const appendSpreadsheet = async (row) => {
//   try {
//     await doc.useServiceAccountAuth({
//       client_email: CLIENT_EMAIL,
//       private_key: PRIVATE_KEY,
//     });
//     // loads document properties and worksheets
//     await doc.loadInfo();

//     const sheet = doc.sheetsById[SHEET_ID];
//     const result = await sheet.addRow(row);
//   } catch (e) {
//     console.error('Error: ', e);
//   }
// };
const readSheet = async () =>{
  try {
    await doc.useServiceAccountAuth({
      client_email: user["client_email"],
      private_key: user["private_key"],
    });
    // loads document properties and worksheets
    await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc);

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  console.log(sheet.title);
  const sheetRows = await sheet.getRows();
  return {sheetRows, doc};
  } catch (e) {
    console.error('Error: ', e);
  }
  return [];
}
// const newRow = { Name: "new name", Value: "new value" };

// appendSpreadsheet(newRow);

function App() {
  const [data, setData] = useState([]);
  const [dataRows, setDataRows] = useState([]);

  useEffect(()=>{
    async function getData () {
      const tempDetails = await readSheet();
      setData(tempDetails.sheetRows); 
      console.log(tempDetails)
      setDataRows(tempDetails.doc._rawSheets["492812941"]["headerValues"]);
    }
    getData();
  }, [])


  return (
    <div className="App">
			<Navbar />
			<div className="main-window">
        <Sidebar/>
		
				<div className="main-window-container">
					<Routes>
            <Route path="/" element={<Home data={data} dataRows={dataRows}/>}/>
            <Route path="/share" element={<ShareNews/>}/>
            <Route path="/search" element={<SearchAndExplore data={data} dataRows={dataRows}/>}/>
					</Routes>
				</div>
			</div>
		</div>
  );
}

export default App;
