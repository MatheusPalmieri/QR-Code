import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import { useState } from 'react';
import './App.css';

function App() {

  var [link, setLink] = useState('')
  var [qrcodelink, setQrcodelink] = useState('')

  function handleGenerate(link) {
    QRCodeLink.toDataURL(link, {
      width: 600,
      margin: 3,
    }, function (error, url) {
      setQrcodelink(url)
    })
  }

  function handleQrcode(event) {
    setLink(event.target.value)
    handleGenerate(event.target.value)
  }

  return (
    <main>
      <QRCode
        value={link}
      />

      <input 
        placeholder='Digite o seu link'
        value={link}
        onChange={(event) => handleQrcode(event)}
      />

      <a 
        href={qrcodelink}
        download={`qrcode.png`}
      >Baixar QRCode</a>
    </main>
  );
}

export default App;
