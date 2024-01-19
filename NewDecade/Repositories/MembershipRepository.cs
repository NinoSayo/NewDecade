using NewDecade.IRepositories;
using NewDecade.Models;

namespace NewDecade.Repositories
{
    public class MembershipRepository : IMembershipRepository
    {
        public Task<IEnumerable<Membership>> GetAllPackages()
        {
            throw new NotImplementedException();
        }

        public Task<Membership> GetPackageById(int packageId)
        {
            throw new NotImplementedException();
        }

        public Task<int> RegisterMembership(int userId, int packageId)
        {
            throw new NotImplementedException();
        }
    }
}
