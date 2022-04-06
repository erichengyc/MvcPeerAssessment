using Microsoft.AspNetCore.Mvc;

namespace MvcPeerAssessment.Controllers
{
    public class HomeController : Controller
    {
        [Route("home/index")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
