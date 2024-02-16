using static NewDecade.DTOs.UserDTOs;

namespace NewDecade.Services
{
    public class Authentication
    {
        private readonly HashingPassword _hasingPassword;

        public Authentication(HashingPassword hasingPassword)
        {
            _hasingPassword = hasingPassword;
        }

        public bool Authenticate(LoginDTO LoginDTOs,string hashedPassword)
        {
            return _hasingPassword.VerifyPassword(LoginDTOs.Password,hashedPassword);
        }
    }
}
