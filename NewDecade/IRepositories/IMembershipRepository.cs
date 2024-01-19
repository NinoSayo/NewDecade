using NewDecade.Models;

namespace NewDecade.IRepositories
{
    public interface IMembershipRepository
    {
        Task<int> RegisterMembership(int userId, int packageId);
        Task<IEnumerable<Membership>> GetAllPackages();
        Task<Membership> GetPackageById(int packageId);
    }
}
