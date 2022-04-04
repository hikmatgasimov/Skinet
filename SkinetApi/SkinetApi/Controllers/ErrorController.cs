using Microsoft.AspNetCore.Mvc;
using SkinetApi.Errors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkinetApi.Controllers
{
    [Route("errors/{code}")]
    //[ApiController]
    [ApiExplorerSettings(IgnoreApi =true)]
    
    public class ErrorController : BaseApiController
    {
        public IActionResult Error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}
