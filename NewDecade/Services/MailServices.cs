using System.Net;
using System.Net.Mail;

namespace NewDecade.Services
{
    public class MailServices
    {
        private readonly string _smtpServer;
        private readonly int _smtpPort;
        private readonly string _smtpUsername;
        private readonly string _smtpPassword;

        public MailServices(IConfiguration configuration)
        {
            _smtpServer = configuration["Logging:SMTPSettings:Server"];
            _smtpPort = int.Parse(configuration["Logging:SMTPSettings:Port"]);
            _smtpUsername = configuration["Logging:SMTPSettings:Username"];
            _smtpPassword = configuration["Logging:SMTPSettings:Password"];
        }

        public async Task<bool> SendVerificationEmail(string email, string verificationCode)
        {
            try
            {
                using (var client = new SmtpClient(_smtpServer, _smtpPort))
                {
                    client.EnableSsl = true;
                    client.Credentials = new NetworkCredential(_smtpUsername, _smtpPassword);

                    var fromAddress = new MailAddress(_smtpUsername, "New Decade");
                    var toAddress = new MailAddress(email);

                    var message = new MailMessage(fromAddress, toAddress)
                    {
                        Subject = "New Decade Verification Code",
                        IsBodyHtml = true,
                        Body = $@"
                <html>
                <head>
                    <style>
                        body {{
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                        }}
                        .container {{
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #f9f9f9;
                            border-radius: 5px;
                        }}
                        h1 {{
                            color: #333;
                        }}
                        p {{
                            font-size: 16px;
                        }}
                    </style>
                </head>
                <body>
                    <div class='container'>
                        <h1>New Decade Verification Code</h1>
                        <p>Dear User,</p>
                        <p>Your Verification Code is: <strong>{verificationCode}</strong></p>
                        <p>Please use this code to verify your account. This code will expire in 3 minutes.</p>
                        <p>Thank you,</p>
                        <p>The New Decade Team</p>
                    </div>
                </body>
                </html>"
                    };
                    await client.SendMailAsync(message);
                }
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to send verification email: {ex.Message}");
                return false;
            }
        }

    }
}
