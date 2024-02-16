using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewDecade.DTOs;
using NewDecade.IServices;

namespace NewDecade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserServices _userServices;

        public UserController(IUserServices userServices)
        {
            _userServices = userServices;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTOs.LoginResponseDTO>> Login(UserDTOs.LoginDTO loginDTO)
        {
            var loginResponse = await _userServices.LoginUser(loginDTO);
            if(loginResponse == null)
            {
                return Unauthorized("Invalid Username or Password");
            }
            return Ok(loginResponse);
        }

        [HttpPost("register")]
        public async Task<ActionResult<int>> Register(UserDTOs.RegisterDTO registerDTO)
        {
            var userID = await _userServices.RegisterUser(registerDTO);
            return Ok(userID);
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            return Ok("Logged out successfully");
        }
    }
}
