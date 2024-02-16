using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using NewDecade.IServices;
using NewDecade.Models;

namespace NewDecade.Services
{
    public class TokenServices : ITokenServices
    {
        private readonly string _smtpServer;
        private readonly int _smtpPort;
        private readonly string _smtpUsername;
        private readonly string _smtpPassword;

        public TokenServices(string smtpServer, int smtpPort, string smtpUsername, string smtpPassword)
        {
            _smtpServer = smtpServer;
            _smtpPort = smtpPort;
            _smtpUsername = smtpUsername;
            _smtpPassword = smtpPassword;
        }

        public async Task<bool> SendTokenCode(string email, string verificationCode)
        {
            try
            {
                using (var client = new SmtpClient(_smtpServer, _smtpPort))
                {
                    client.EnableSsl = true;
                    client.Credentials = new NetworkCredential(_smtpUsername, _smtpPassword);

                    var message = new MailMessage(_smtpUsername, email)
                    {
                        Subject = "NewDecade Verification Code",
                        Body = $"Your verification code is {verificationCode}"
                    };

                    await client.SendMailAsync(message);
                }
                return true;
            }catch (Exception ex)
            {
                Console.WriteLine($"Failed to send verification email: {ex.Message}");
                return false;
            }
        }
    }
}
