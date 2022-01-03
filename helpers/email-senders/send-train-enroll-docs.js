// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
// "use strict";
// const nodemailer = require("nodemailer");

require('dotenv').config();
const { format } = require('date-fns')

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')

function sendTraingEnrollDocs(trainingDetails) {

    console.log(trainingDetails)

    const recipients = []

    for (let i = 0; i < trainingDetails.recipients.length; i++) {
        recipients.push(trainingDetails.recipients[i].email)
    }

    const htmlMsg = `

            <html>
        <head>
        <style>
        .main {direction:rtl;}
        </style>
        </head>
        <body>

                <div class="main">
                
                        <h3>לכבוד ${trainingDetails.training.range_name},</h3>

                        ${trainingDetails.training.order_number !== "" ? `<p> מספר הזמנה :  ${trainingDetails.training.order_number}</p>` : ""}
                
                        <p>מייל זה מכיל את מסמכי המאבטחים שרשומים ל${trainingDetails.training.train_type} "<b>${trainingDetails.training.title}</b>" אשר יתקיים בתאריך ${format(new Date(trainingDetails.training.start), 'dd/MM/yyyy')}</p>

                        <ol>
                        ${trainingDetails.enrollGuards.map(guard => `<li><h3>${guard.first_name} ${guard.last_name} - ת.ז ${guard.id}</h3></li>
                        
                            <ol>
                            
                            ${guard.uploaded_docs_arr.map((doc, i) => `<li><a clicktracking=off href ="${doc.link}">${doc.doc_name}</a></li>`)}
                            
                            </ol>

                            <br/>
                        
                        `)}
                        </ol>
                        
                        <p>לכלל המאבטחים קיים אישור כספת</p>

                        <p>בברכה,</p>
                        <p>${trainingDetails.sender.fullname}</p>
                        <p>${trainingDetails.sender.job} - חברת מיקוד</p>
                        <p>${trainingDetails.sender.phone}</p>
                        <p>${trainingDetails.sender.email}</p>
                    
                    </div>
        </body>
        </html>
    `
    async function main() {
        try {
          
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)

            const msg = {
                to: [...recipients, trainingDetails.sender.email], // Change to your recipient
                from: process.env.EMAIL, // Change to your verified sender
                subject: `לכבוד ${trainingDetails.training.range_name}, מסמכי מאבטחים ל${trainingDetails.training.train_type} ${trainingDetails.training.title} בתאריך ${format(new Date(trainingDetails.training.start), 'dd/MM/yyyy')}`,
                // text: `מסמכי המאבטח ${guard.first_name} ${guard.last_name}`,
                html: htmlMsg,
            }

            sgMail
                .send(msg)
                .then(() => {
                    console.log('Email sent')
                })
                .catch((error) => {
                    console.error(error)
                })

        }
        catch (err) {
            console.log(err)
        }
    }

    main().catch(console.error);
}

module.exports = sendTraingEnrollDocs