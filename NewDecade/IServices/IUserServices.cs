using NewDecade.DTOs;

namespace NewDecade.IServices
{
    public interface IUserServices
    {
        Task<int> RegisterUser(UserDTOs.RegisterDTO registerDTO);
        Task<UserDTOs.LoginResponseDTO> LoginUser(UserDTOs.LoginDTO loginDTO);
        Task<bool> LogoutUser();
        Task<UserDTOs.UserDTO> GetUser(int id);
    }
}
