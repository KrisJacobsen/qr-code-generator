import { useState } from "react"
import { Button, TextField, Stack, Card } from "@mui/material"
import QRCode from "qrcode"

function App() {
  const [urlInput, setUrlInput] = useState("")

  const createQRCode = (input:string) => {
    QRCode.toCanvas(document.getElementById('canvas'), input, function (error) {
      if (error) console.error(error)
      console.log('success!');
    })
    console.log(urlInput)
  }

  return (
    <>
      <Stack spacing={4} sx={{alignItems: "center", justifyContent:"center", height:"100vh"}}>
        <h1>Simple QR code generator</h1>
        <Card sx={{width:"min-content"}}><canvas style={{width: "0px"}} id="canvas"></canvas></Card>
        <TextField id="inputbox" onChange={() => setUrlInput((document.getElementById("inputbox") as HTMLInputElement).value)}/>
        <Button variant="contained" onClick={() => createQRCode(urlInput)}>
          Generate
        </Button>
      </Stack>
    </>
  )
}

export default App