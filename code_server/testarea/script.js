document.getElementById('generateBtn').addEventListener('click', function () {
    const shortNumber = document.getElementById('shortNumber').value;
    const codeEmbed = document.getElementById('codeEmbed').value;
    const contentEmbed = document.getElementById('contentEmbed').value;
    const title = document.getElementById('title').value;
    const imageFile = document.getElementById('imageFile').files[0]; 
    const folderName = `code${shortNumber}`;

    const zip = new JSZip();

    // Create code.html file
    const codeHTMLContent = getCodeHTML(codeEmbed);
    zip.file('code.html', codeHTMLContent);

    // Create download.html file
    const downloadHTMLContent = getDownloadHTML();
    zip.file('download.html', downloadHTMLContent);

    // Add the image file to the zip
    if (imageFile) {
        zip.file('image.png', imageFile);
    }

    // Generate the zip file
    zip.generateAsync({ type: 'blob' })
        .then(function (content) {
            // Trigger the download
            saveAs(content, `${folderName}.zip`);
        });


    function getCodeHTML(codeEmbed) {
        return `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Pacifico"
            />
            <title>${shortNumber}</title>
            <style>
              @import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@700&display=swap");
        
              body {
                margin: 0;
                padding: 50px;
                background-color: black;
                font-family: "Exo 2", sans-serif;
                font-family: "Pacifico", cursive;
              }
        
              .code {
                background: linear-gradient(30deg, black, red, orange, black);
                border-radius: 30px;
                padding-top: 15px;
                padding-bottom: 15px;
                padding-left: 15px;
                padding-right: 15px;
                border: 2px solid white;
                box-shadow: 7px 5px 100px rgba(255, 255, 255, 0.989);
              }
        
              .head h1 {
                text-align: center;
                color: white;
                font-size: 60px;
                text-shadow: 20px 20px 10px rgb(0, 0, 0);
              }
            </style>
          </head>
        
          <body>
            <div class="head">
              <h1>Codename Origin 💻</h1>
            </div>
            <hr />
            <div class="code">
            ${codeEmbed}
              <div>
              <script
                async
                src="https://cpwebassets.codepen.io/assets/embed/ei.js"
              ></script>
            </div>
          </body>
        </html>
        `;
    }

    function getDownloadHTML() {
        // Convert the image file to a data URL using FileReader
        const reader = new FileReader();
        let imageDataURL = '';

        if (imageFile) {
            reader.onload = function (event) {
                imageDataURL = event.target.result;
            };
            reader.readAsDataURL(imageFile);
        }
        return `<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2866700727662490"
      crossorigin="anonymous">
  </script>
  <meta charset="utf-8" />
  <title>Generate Your Code</title>
  <link rel="stylesheet" href="style.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <!-- <script src="script.js" defer></script> -->
  <style>
      /* Import Google font - Poppins */
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
      }

      body {
          display: flex;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
          background: linear-gradient(45deg, red, orange);
      }

      .download-btn {
          outline: none;
          border: none;
          color: #0e0d0d;
          font-weight: bolder;
          font-size: 40px;
          font-style: oblique;
          display: flex;
          cursor: pointer;
          padding: 16px 25px;
          border-radius: 25px;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          background: #afcdf1;
          transition: all 0.2s ease;
          border: 5px solid #1e1f21;
          box-shadow: 7px 5px 100px rgba(255, 255, 255, 0.989);
      }

      .download-btn:hover {
          background: #8d9195;
          color: #f7fb04;
          border: 5px solid #1e1f21;
          font-weight: bolder;
          font-size: 45px;
      }

      .download-btn.timer {
          color: #000;
          background: white;
          transition: none;
          font-size: 1.6rem;
          pointer-events: none;
      }

      .download-btn.timer:hover {
          background: rgb(175, 74, 74);
          color: #000;
      }

      .download-btn.timer b {
          color: #f40808;
          padding: 0 8px;
          text-align: center;
      }

      .download-btn .icon {
          font-size: 2rem;
      }

      .download-btn .text {
          font-size: 1.5rem;
          padding-left: 10px;
      }

      .head h1 {
          text-align: center;
          color: white;
          font-size: 60px;
      }

      .flex {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
      }

      .flex p {
          color: rgb(255, 255, 255);
          font-weight: 600;
          font-size: 20px;
          padding-bottom: 30px;
      }
      .content{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-evenly;
        text-align: center;
        margin: 50px;
        border: 10px solid #000;
        border-radius: 30px;
        padding: 30px;
      
      }

      .left{
        padding: 30px;
        border: 10px solid black;
        background-color: #0000004b;
        border-radius: 30px;
        filter: drop-shadow(10px 10px 10px rgba(255, 255, 255, 0.51));
      }

      img{
        width: 100%;
        height: 100%;
      }

      .right{
        background-color: white;
        border-radius: 30px;
        padding: 30px;
        width: 50%;
        height: 100%;
        box-shadow: 10px 10px 10px #000;
      }

      .right .title{
        font-size: 40px;
        font-weight: 600;
        padding-bottom: 30px;
      }

      .right .info{
        font-size: 20px;
        font-weight: 500;
        text-align: justify;
      }

      @media screen and (max-width:1400px) {
        .content{
          display: block;
          border: 0px solid black;
          padding: 4px;
        }
        .left{
          width: 100%;
          height: 100%;
          border: 1px solid black;
        }
        .right{
          width: 100%;
          height: 100%;
          margin-top: 20px;
          border: 1px solid black;
        }
        .title{
          font-size: 10px;
        }
        .info{
          font-size: 5px;
          text-align:left;
        }
        
      }
  </style>
</head>

<body>
<div class="flex">
<div class="head">
  <h1>Codename Origin 💻</h1>
</div>
<p>Click the button below to generate your code</p>
<button class="download-btn" data-timer="10">
  <span class="icon material-symbols-rounded">vertical_align_bottom</span>
  <span class="text">Get Your Code</span>
</button>
<div class="content">
  <div class="left">
    <img src="./image.png" alt="" />
  </div>
  <div class="right">
    <h1>${title}</h1>
    <div class="info">
      ${contentEmbed}
    </div>
  </div>
</div>
</div>

  <script>
      const downloadBtn = document.querySelector(".download-btn");
      const fileLink = "./code";

      const initTimer = () => {
          if (downloadBtn.classList.contains("disable-timer")) {
              return (location.href = fileLink);
          }
          let timer = downloadBtn.dataset.timer;
          downloadBtn.classList.add("timer");
          downloadBtn.innerHTML = \`Generating Code in <b>\${timer}</b> sec\`;
          const initCounter = setInterval(() => {
              if (timer > 0) {
                  timer--;
                  return (downloadBtn.innerHTML = \`Generating Code in <b>\${timer}</b> sec\`);
              }
              clearInterval(initCounter);
              location.href = fileLink;
              downloadBtn.innerText = "Redirecting...";
              setTimeout(() => {
                  downloadBtn.classList.replace("timer", "disable-timer");
                  downloadBtn.innerHTML = \`<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                   <span class="text">Generate Again</span>\`;
              }, 3000);
          }, 1000);
      };

      downloadBtn.addEventListener("click", initTimer);
  </script>
</body>

</html>`;
    }
});