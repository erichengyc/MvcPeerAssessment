using Microsoft.AspNetCore.Mvc;
using MvcPeerAssessment.ViewModels;
using MvcPeerAssessment.ServiceContracts;
using System.Threading.Tasks;

namespace MvcPeerAssessment.Controllers
{
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IUsersService _usersService;

        public AccountController(IUsersService usersService)
        {
            this._usersService = usersService;
        }

        [HttpPost]
        [Route("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] LoginViewModel loginViewModel)
        {
            var user = await _usersService.Authenticate(loginViewModel);
            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });
            return Ok(user);

        }
    }
}
