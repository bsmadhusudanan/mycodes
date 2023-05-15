using Application.Features.CompanyFeature.DTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Portal.Common;
using System.Net;
using static Portal.Common.ResponseMessage;

namespace Portal.Controllers.Company
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<CompanyController> _logger;
        private ResponseMessage _responseMessage = null;
        public CompanyController(ILogger<CompanyController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
            _responseMessage = new ResponseMessage();
        }
        [HttpGet]
        [Route("GetAll")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Produces("application/json", Type = typeof(HttpAPIResponse<CompanyListItemDTO>))]
        public async Task<IActionResult> GetAllLookupData()
        {
            try
            {
                //string userName = HttpContext.User.Identity.Name;
                //var FRId = HttpContext.User.FindFirst("companyCode");

                List<CompanyListItemDTO> response = new List<CompanyListItemDTO>() { new CompanyListItemDTO() };
                return Ok(value: new HttpAPIResponse<List<CompanyListItemDTO>>(true, "Company/Franchisee List.", response));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return BadRequest(new HttpAPIErrorResponse(ex.Message, null));
            }
        }
    }
}
