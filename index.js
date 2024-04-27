const express = require('express');
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;
const cors = require('cors');

dotenv.config({ path: './config.env' });

app.use(cors({
  origin: [
    // 'http://127.0.0.1:5500',
    'https://business-activities-tool.netlify.app',
  ]
}));

const SendEmailModel = require("./Messages/SendEmail")
app.use(express.json())

app.get("/", async (req, res) => {
  res.send("Running")
})

app.post("/request-quote", async (req, res) => {

  try {
    let { Fname, Lname, Email, Phone, PlanningToStart, FamiliarToOpen, Company, Site, BusinessActivitiesContent, NumberOfYears, NeedVISA, HowManyVISA, Cost, InterestedinPurchasing, InterestedinDubaiMArket, AnythingElse } = req.body;

    await SendEmail(Fname, Lname, Email, Phone, PlanningToStart, FamiliarToOpen, Company, Site, BusinessActivitiesContent, NumberOfYears, NeedVISA, HowManyVISA, Cost, InterestedinPurchasing, InterestedinDubaiMArket, AnythingElse);

    res.send("Sent")
  } catch (error) {
    console.log(error);
    res.send("Error")
  }


})

async function SendEmail(Fname, Lname, Email, Phone, PlanningToStart, FamiliarToOpen, Company, Site, BusinessActivitiesContent, NumberOfYears, NeedVISA, HowManyVISA, Cost, InterestedinPurchasing, InterestedinDubaiMArket, AnythingElse) {
  const sender = {
    email: 'info@tailllc.com',
    name: `${Fname} - New Quote Request`,
  }

  let content = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
      /* Styles for the email template */
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        color:black;
        background-color: #f6f6f6;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
      .row {
        display: flex;
        flex-wrap: wrap;
        margin: 10px -10px;
      }
      .column {
        width: 100%;
        padding: 10px;
      }
      .vertical-column {
        width: 33.33%;
        padding: 5px;
      }
      h2, p, h3 {
        color: black;
      }
      .header-row {
        background-color: #FF6F61;
        color: #ffffff;
        text-align: center;
        padding: 20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      .subheader-row {
        background-color: #49A6E9;
        color: #ffffff;
        text-align: center;
        padding: 20px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      .vertical-column-content {
        background-color: #AD88C6;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 5px;
        text-align: center;
      }
      @media screen and (max-width: 500px) {
        .column {
          width: 100%;
        }

        .vertical-column {
            width: 50%;
          }
      }
    </style>
    </head>
    <body>
      <div class="container">
        
        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>First Name</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${Fname}</h3>
            </div>
          </div>
          
        </div>

        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Last Name</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${Lname}</h3>
            </div>
          </div>
          
        </div>

        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Email</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${Email}</h3>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Phone</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${Phone}</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Planning to Start your Business</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${PlanningToStart}</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Opening a business in UAE</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${FamiliarToOpen}</h3>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Company Name</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${Company}</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Website</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${Site}</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Business Activities</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${BusinessActivitiesContent}</h3>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Number Of Years(License)</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${NumberOfYears}</h3>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>NeedVISA?</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${NeedVISA}</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>How Many VISA</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${HowManyVISA}</h3>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Interested in Purchasing</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${InterestedinPurchasing}</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Interested in Dubai Market</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${InterestedinDubaiMArket}</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Anything Else</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${AnythingElse}</h3>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #FFE6E6;">
              <h3>Summary Cost</h3>
            </div>
          </div>
          <div class="vertical-column">
            <div class="vertical-column-content" style="background-color: #E1AFD1;">
              <h3>${Cost}</h3>
            </div>
          </div>
        </div>

      </div>
    </body>
    </html>
    
    `

  await SendEmailModel(sender, 'rahul.rastogi.216000@gmail.com', `${Fname} - New Quote Request`, content)
  await SendEmailModel(sender, 'consulting@tailllc.com', `${Fname} - New Quote Request`, content)

}

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
  } else {
    console.log('Server not started ' + error);
  }

});