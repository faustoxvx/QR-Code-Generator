import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQRCode] = useState("");

  const generateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 600,
        margin: 2,
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQRCode(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>AVL DiTEST QR Code Generator</h1>
      <input
        type="text"
        placeholder="AVL target URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
