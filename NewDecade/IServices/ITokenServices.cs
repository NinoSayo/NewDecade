namespace NewDecade.IServices
{
    public interface ITokenServices
    {
        Task<bool> SendTokenCode(string email,string verificationCode);
    }
}
