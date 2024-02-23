using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewDecade.DTO;
using NewDecade.IServices;
using NewDecade.Model;

namespace NewDecade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IAuthenticationServices _authenticationServices;

        public UserController(IAuthenticationServices authenticationServices)
        {
            _authenticationServices = authenticationServices;
        }

        [HttpPost("createUser")]
        [AllowAnonymous]
        public async Task<ActionResult<string>> Create(UserDTOs.UserDTO user)
        {
            var result = await _authenticationServices.CreateUser(user);
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult> Login(UserLogin userLogin)
        {
            try
            {
                var user = await _authenticationServices.Authenticate(userLogin);
                if (user != null)
                {
                    var token = await _authenticationServices.GenerateToken(user);
                    if (token != null)
                    {
                        DateTimeOffset expireTime = DateTimeOffset.UtcNow.AddHours(1);

                        return Ok(new { Token = token, Expires = expireTime });
                    }
                    else
                    {
                        return BadRequest("Failed to generate token.");
                    }
                }
                else
                {
                    return Unauthorized("Login Failed. Invalid credentials.");
                }
            }
            catch(Exception ex)
            {
                return BadRequest($"An error occurred: {ex.Message}");
            }
        }
    }
}
