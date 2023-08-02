document.getElementById('generateBtn').addEventListener('click', function () {
    const shortNumber = document.getElementById('shortNumber').value;
    const codeEmbed = document.getElementById('codeEmbed').value;
    const contentEmbed = document.getElementById('contentEmbed').value;
    const folderName = `short${shortNumber}`;

    const zip = new JSZip();

    // Create code.html file
    const codeHTMLContent = getCodeHTML(codeEmbed);
    zip.file('code.html', codeHTMLContent);

    // Create download.html file
    const downloadHTMLContent = getDownloadHTML();
    zip.file('download.html', downloadHTMLContent);

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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pacifico">
  <title>Document</title>
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@700&display=swap');

      body {
          margin: 0;
          padding: 50px;
          background-color: black;
          font-family: 'Exo 2', sans-serif;
          font-family: 'Pacifico', cursive;

      }

      .code {
          background: linear-gradient(to right, red, orange);
          border-radius: 30px;
          padding-top: 15px;
          padding-bottom: 15px;
          padding-left: 15px;
          padding-right: 15px;
      }

      .head h1 {
          text-align: center;
          color: white;
          font-size: 60px;
      }
  </style>

</head>

<body>
  <div class="head">
      <h1>Codename Origin 💻</h1>
  </div>
  <hr>
  <div class="code">
      ${codeEmbed}
  </div>

</body>

</html>`;
    }

    function getDownloadHTML() {
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
  </style>
</head>

<body>
  <div class="flex">
      <div class="head">
          <h1>Codename Origin 💻</h1>
          <p>
          ${contentEmbed}
        </p>
          <p>Click the button below to generate your code</p>
      </div>
      <button class="download-btn" data-timer="10">
          <span class="icon material-symbols-rounded">vertical_align_bottom</span>
          <span class="text">Get Your Code</span>
      </button>
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