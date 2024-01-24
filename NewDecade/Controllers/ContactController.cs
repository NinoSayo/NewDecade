using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NewDecade.Data;
using NewDecade.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NewDecade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly DatabaseContext _db;
        private readonly ILogger<ContactController> _logger;

        public ContactController(DatabaseContext db, ILogger<ContactController> logger)
        {
            this._db = db;
            this._logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Contact contact)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _db.Contacts.Add(contact);
                    await _db.SaveChangesAsync();

                    await SendMailAsync(contact);

                    _logger.LogInformation($"Contact request saved and email sent successfully. ContactId: {contact.ContactId}");

                    return Ok(new { Success = true, Message = "Liên hệ đã được gửi và email đã được chuyển đi thành công!" });
                }
                else
                {
                    _logger.LogWarning("Dữ liệu liên hệ không hợp lệ.");
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Đã xảy ra lỗi khi xử lý yêu cầu liên hệ.");
                return StatusCode(500, new { Message = "Đã xảy ra lỗi khi xử lý yêu cầu liên hệ.", Error = ex.Message });
            }
        }


        private async Task SendMailAsync(Contact contact)
        { 
            try
            {
                string smtpServer = "smtp.gmail.com";
                int smtpPort = 587;
                string smtpUsername = "";
                string smtpPassword = "";

                string toEmail = "";

                using (MailMessage mail = new MailMessage())
                {
                    mail.From = new MailAddress(smtpUsername);
                    mail.To.Add(toEmail);
                    mail.Subject = $"New Contact: {contact.Subject}";
                    mail.Body = $"Name: {contact.FullName}\nEmail: {contact.Email}\nMessage: {contact.Message}";

                    using (SmtpClient smtpClient = new SmtpClient(smtpServer, smtpPort))
                    {
                        smtpClient.Credentials = new NetworkCredential(smtpUsername, smtpPassword);
                        smtpClient.EnableSsl = true;
                        await smtpClient.SendMailAsync(mail);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error when sending email: {ex.Message}");
            }
        }
    }
}

