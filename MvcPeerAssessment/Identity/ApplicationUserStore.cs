using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace MvcPeerAssessment.Identity
{
    public class ApplicationUserStore : UserStore<ApplicationUser>
    {
        public ApplicationUserStore(ApplicationDbContext applicationDbContext) : base(applicationDbContext)
        {
        }
    }
}
