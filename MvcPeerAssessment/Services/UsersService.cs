using MvcPeerAssessment.Identity;
using MvcPeerAssessment.ViewModels;
using MvcPeerAssessment.ServiceContracts;
using System.Threading.Tasks;

namespace MvcPeerAssessment.Services
{
    public class UsersService: IUsersService
    {

        private readonly ApplicationUserManager _applicationUserManager;
        private readonly ApplicationSignInManager _applicationSignInManager;

        public UsersService(ApplicationUserManager applicationUserManager, ApplicationSignInManager applicationSignInManager)
        {
            this._applicationUserManager = applicationUserManager;
            this._applicationSignInManager = applicationSignInManager;
        }

    public async Task<ApplicationUser>Authenticate(LoginViewModel loginViewModel)
        {
            var result = await _applicationSignInManager.PasswordSignInAsync(loginViewModel.Username, loginViewModel.Password, false, false);
            if (result.Succeeded)
            {
                var applicationUser = await _applicationUserManager.FindByNameAsync(loginViewModel.Username);
                applicationUser.PasswordHash = null;
                return applicationUser;
            }
            else
            {
                return null;
            }
        }
    }
}


