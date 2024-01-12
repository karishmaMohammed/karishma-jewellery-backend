const { clientDetailsModel } = require("../models/clientDetails");
const {adminModel} = require("../models/admin");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "karishmamohammed43@gmail.com",
    pass: "nfwndhllwflydcie",
  },
});

async function jewelleryClientDetails(req, res) {
  let responseData;
  try {
    const { clientName, clientEmail, clientPhoneNumber, clientMessage } =
      req.body;

    // Save the message to MongoDB
    const savedMessage = await clientDetailsModel.create({
      clientName,
      clientEmail,
      clientPhoneNumber,
      clientMessage,
    });

    // Send an email
    const userMailOptions = {
      from: "karishmamohammed43@gmail.com",
      to: clientEmail,
      subject: "Your Message Received",
      html: `<html>
  
      <body>
          <div style="
                        width: 100%;
                        height:60vh;
                        background-image: url('https://images6.alphacoders.com/406/406888.jpg');
                        background-size: cover;
                      ">
      
              <table style="width: 100%;height:60vh; background-color: rgba(0, 19, 37, 0.5);">
                  <!-- <tr style="text-align: center;;">
                              
                                <span style="font-size: 75px; color: white; font-weight: 800;">
                                  THANK
                                </span>
                                <span style="font-size: 75px; color: purple;">YOU!</span>
                              
                            </tr> -->
                  <tr>
                      <td style="text-align: center;">
                          <span style="font-size: 60px; color: white; font-weight: 500;">
                              THANK
                          </span>
                          <span style="font-size: 60px;font-weight: 500; color:  purple;">YOU!</span>
                         
                      </td>
                  </tr>
                  <tr>
                      <td style="
                          width: 60%;
                          font-size: 25px;
                          text-align: left;
                          word-break: break-all;
                          color: white;
                          padding-left: 150px;
                        ">
                          <span>Hope you liked my Jewellery Website.</span>
                      </td>
                  </tr>
                  <tr>
                      <td style="
                          width: 60%;
                          font-size: 25px;
                          text-align: left;
                          word-break: break-all;
                          color: white;
                          padding-left: 150px;
                          padding-right: 150px;
                        ">
                          <span>
                              Your getting this email to inform you that we received your
                              details that you have filled in contact Us form on my
                              Jewellery Website.
                          </span>
                      </td>
                  </tr>
                  <tr>
                      <td style="
                          width: 60%;
                          font-size: 25px;
                          text-align: left;
                          word-break: break-all;
                          color: white;
                          padding-left: 150px;
                        ">
                          <span>I'll reach you out.</span>
                      </td>
                  </tr>
                  <tr>
                      <td style="
                          width: 60%;
                          font-size: 25px;
                          text-align: left;
                          word-break: break-all;
                          color: white;
                          padding-left: 150px;
                        ">
                          <span>Thank you so much.</span>
                      </td>
                  </tr>
      
                  <tr>
                      <td style="text-align: center;">
                          <span style="font-size: 50px; color: white;">${clientName}</span>
                      </td>
                  </tr>
              </table>
      
      
          </div>
      </body>
      
      </html>
    
    `,
    };

    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent to user: " + info.response);
      }
    });

    // Send an email to abc@mail.com
    const adminMailOptions = {
      from: "karishmamohammed43@gmail.com",
      to: "karishmamohammed43@gmail.com",
      subject: ` New Message Received from ${clientEmail}`,
      html: `<html>
  
      <body>
          <div style="
                        width: 100%;
                        background-image: url('https://images6.alphacoders.com/406/406888.jpg');
                        background-size: cover;
                      ">
      
              <table style="width: 100%;height:50vh; background-color: rgba(0, 19, 37, 0.5);">
                 
                  <tr>
                      <td style="text-align: center;">
                          <span style="font-size: 60px; color: white; font-weight: 500;">
                              RECIEVED
                          </span>
                          <span style="font-size: 60px;font-weight: 500; color:  blue;">DETAILS</span>
                          
                      </td>
                  </tr>
                  <tr>
                      <td style="
                          width: 60%;
                          font-size: 25px;
                          text-align: left;
                          word-break: break-all;
                          color: white;
                          padding-left: 150px;
                        ">
                          <span>Name:${clientName}</span>
                      </td>
                  </tr>
                  <tr>
                      <td style="
                          width: 60%;
                          font-size: 25px;
                          text-align: left;
                          word-break: break-all;
                          color: white;
                          padding-left: 150px;
                          padding-right: 150px;
                        ">
                          <span>
                          Message:${clientMessage}
                              
                          </span>
                      </td>
                  </tr>
                  <tr>
                      <td style="
                          width: 60%;
                          font-size: 25px;
                          text-align: left;
                          word-break: break-all;
                          color: white;
                          padding-left: 150px;
                        ">
                          <span>Phone Number: ${clientPhoneNumber}</span>
                      </td>
                  </tr>
  
              </table>
      
      
          </div>
      </body>
      
      </html>`,
    };

    transporter.sendMail(adminMailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent to admin: " + info.response);
      }
    });
    responseData = {
      meta: {
        code: 200,
        success: true,
        message: "Succesfull.",
      },
    };
    return res.status(responseData.meta.code).json(responseData);
  } catch (error) {
    console.log(error);
    responseData = {
      meta: {
        code: 200,
        success: false,
        message: "Something went wrong",
      },
    };
    return res.status(responseData.meta.code).json(responseData);
  }
}

async function createDetails(req, res) {
  let responseData;
  try {
    const { fullName,photo, email, phoneNumber, aboutMe } = req.body;
    const details = await adminModel.create({fullName,photo, email, phoneNumber, aboutMe})
    // const updatedDetails = await adminModel.findOneAndUpdate(
    //     { email: email },
    //     { $set: { fullName, photo, phoneNumber, aboutMe } },
    //     { new: true }
    //   );
      responseData = {
        meta: {
          code: 200,
          success: true,
          message: "Succesfull.",
        },
      };
      return res.status(responseData.meta.code).json(responseData);
  } catch (error) {
    console.log(error);
    responseData = {
      meta: {
        code: 200,
        success: false,
        message: "Something went wrong",
      },
    };
    return res.status(responseData.meta.code).json(responseData);
  }
}

async function getDetails(req, res){
    let responseData;
    try {
        const UserDetails = await memberModel.adminModel({_id : "659d4227c2c4b8e33eeb3240"});
        responseData = {
            meta: {
              code: 200,
              success: true,
              message: "Succesfull.",
            },
            data:{
                user_details: UserDetails,
            }
          };
          return res.status(responseData.meta.code).json(responseData);
    } catch (error) {
        console.log(error);
    responseData = {
      meta: {
        code: 200,
        success: false,
        message: "Something went wrong",
      },
    };
    return res.status(responseData.meta.code).json(responseData);
    }
}

module.exports = {
  jewelleryClientDetails,
  createDetails,
  getDetails,
};
