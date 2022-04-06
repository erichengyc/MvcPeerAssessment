using Microsoft.AspNetCore.Mvc;
using MvcPeerAssessment.Models;
using System.Collections.Generic;
using System.Linq;

namespace MvcPeerAssessment.Controllers
{
    public class ProjectsController : Controller
    {
        [HttpGet]
        [Route("api/projects")]
        public List<Project> Get()
        {
            PeerAssessmentDbContext db = new PeerAssessmentDbContext();
            List<Project> projects = db.Projects.ToList();
            return projects;
        }
    }
}
