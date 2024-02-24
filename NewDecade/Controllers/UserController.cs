using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NewDecade.DTO;
using NewDecade.IRepository;
using NewDecade.IServices;
using NewDecade.Model;

namespace NewDecade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IAuthenticationServices _authenticationServices;
        private readonly IUserRepository _userRepository;

        public UserController(IAuthenticationServices authenticationServices, IUserRepository userRepository)
        {
            _authenticationServices = authenticationServices;
            _userRepository = userRepository;
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
            catch (Exception ex)
            {
                return BadRequest($"An error occurred: {ex.Message}");
            }
        }
        [HttpPost("verify/{email}/{VerificationCode}")]
        public async Task<IActionResult> VerifyEmail([FromBody] UserDTOs.VerifyDTO verifyDTO)
        {
            try
            {
                bool result = await _authenticationServices.VerifyEmail(verifyDTO.Email, verifyDTO.VerificationCode);
                if (result)
                {
                    return Ok("Email verified successfully");
                }
                else
                {
                    return BadRequest("Verification failed. Either the code is incorrect or expired.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
        [HttpGet("{userId}")]
        public async Task<ActionResult<UserDTOs.UserDTO>> GetUser(int userId)
        {
            try
            {
                var user = await _userRepository.GetUserById(userId);
                if (user != null)
                {
                    return Ok(user);
                }
                else
                {
                    return NotFound("User not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred:{ex.Message}");
            }
        }
    }
}
