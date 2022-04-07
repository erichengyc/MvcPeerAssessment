﻿using Microsoft.AspNetCore.Mvc;
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

        [HttpPost]
        [Route("api/projects")]
        public Project Post([FromBody]Project project)
        {
            PeerAssessmentDbContext db = new PeerAssessmentDbContext();
            db.Projects.Add(project);
            db.SaveChanges();
            return project;
        }

        [HttpPut]
        [Route("api/projects")]
        public Project Put([FromBody] Project project)
        {
            PeerAssessmentDbContext db = new PeerAssessmentDbContext();
            Project existingProject = db.Projects.Where(temp => temp.ProjectID == project.ProjectID).FirstOrDefault();
            if(existingProject != null)
            {
                existingProject.ProjectName = project.ProjectName;
                existingProject.DateOfStart = project.DateOfStart;
                existingProject.TeamSize = project.TeamSize;
                db.SaveChanges();
                return existingProject;
            }
            else
            {
                return null;
            }
        }

        [HttpDelete]
        [Route("api/projects")]
        public int Delete(int ProjectID)
        {
            PeerAssessmentDbContext db = new PeerAssessmentDbContext();
            Project existingProject = db.Projects.Where(temp => temp.ProjectID == ProjectID).FirstOrDefault();
            if (existingProject != null)
            {
                db.Projects.Remove(existingProject);
                db.SaveChanges();
                return ProjectID;
            }
            else
            {
                return -1;
            }
        }
    }
}
