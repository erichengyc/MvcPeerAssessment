using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcPeerAssessment.Identity
{
    public class ApplicationUser: IdentityUser<String>
    {
        [NotMapped]
        public string Token { get; set; }


        [NotMapped]
        public string Role { get; set; }
    }
}
