using Application.Common;
using Application.Features.DriverFeature.Queries;
using Application.Features.DriverFeature.ViewModels;
using Application.Features.FleetManagementFeature.Driver.DTO;
using Application.Features.WebUserFeature.Commands;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Portal.Helpers;
using Portal.Model;

namespace Portal.Controllers.FleetManagement.Driver
{
    [Route("api/FleetManagement/[controller]")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        private readonly ILogger<DriverController> _logger;
        private readonly IMediator _mediator;

        public DriverController(ILogger<DriverController> logger, IMediator mediator)
        {
            _logger = logger;
            this._mediator = mediator;
        }

        /// <summary>
        /// Lists all the Drivers
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// Sample Parameters are, <br/><br/>
        /// searchField = Leave it empty or dm.driverId <br/>
        /// searchText = empty or based on searchField<br/>
        /// pageNo = 0<br/>
        /// pageSize = 20<br/>
        /// </remarks>
        [HttpGet]
        [Route("GetAll")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetAll(string? searchField, string? searchText, int pageNo, int pageSize)
        {
            try
            {
                string userName = new RequestExtractor().GetByName(HttpContext, RequestQueryModelEnum.Name.ToString());
                string Frid = new RequestExtractor().GetByName(HttpContext, RequestQueryModelEnum.CompanyCode.ToString());
                //return await _mediator.Send(new DriverGetListQuery(new DriverGetListViewModel()
                //{
                //    User_ID = userName,
                //    FR_ID = Frid,
                //    Search_Field = searchField,
                //    Search_Text = searchText,
                //    Page_No = pageNo,
                //    Page_Size = pageSize
                //}));

                return generateExceptionResponse(new Exception());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                CommonResponseModel response = new();
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// View particular Driver
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// Sample Parameter: <br/><br/>
        /// driverID = 131811
        /// </remarks>
        [HttpGet]
        [Route("GetById")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetById(string driverID)
        {
            try
            {
                return await _mediator.Send(new DriverGetDriverQuery(driverID));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// Driver Status Dropdown
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// 
        /// </remarks>
        [HttpGet]
        [Route("GetDriverStatus")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetDriverStatus()
        {
            try
            {
                string userName = HttpContext.User.Identity.Name;
                var FRId = HttpContext.User.FindFirst("companyCode");
                return await _mediator.Send(new DriverGetDriverStatusQuery(FRId.Value, userName, "1"));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// Set Driver PIN
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// Parameters,<br/>
        /// DriverId<br/>
        /// Pin (Numeric) <br/>
        /// 
        /// Return Values: <br/>
        /// Success = 1 and its message
        /// Failure = 2 and its message.
        /// </remarks>
        [HttpPost]
        [Route("SavePin")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> SavePin(string DriverId, string Pin)
        {
            try
            {
                string userName = HttpContext.User.Identity.Name;
                var FRId = HttpContext.User.FindFirst("companyCode");
                return await _mediator.Send(new SetDriverPinCommand(FRId.Value, userName, DriverId, Pin));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// Document Type Dropdown
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// 
        /// </remarks>
        [HttpGet]
        [Route("GetDocType")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetDocType()
        {
            try
            {
                return await _mediator.Send(new DriverGetDocTypeQuery());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// Lists the drivers documents
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// Sample Parameter: <br/><br/>
        /// driverID = 114020
        /// </remarks>
        [HttpGet]
        [Route("GetDocuments")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetDocuments(string driverID)
        {
            try
            {
                return await _mediator.Send(new DriverGetDocumentQuery(driverID));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// Saves the driver's document details
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// Sample Parameter: <br/><br/>
        /// driverID = 114020
        /// </remarks>
        //[HttpPost]
        //[Route("SaveDocDetails")]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        //public async Task<CommonResponseModel> SaveDocDetails(string driverID)
        //{
        //    string userName = HttpContext.User.Identity.Name;
        //    var FRId = HttpContext.User.FindFirst("companyCode");
        //    return await _mediator.Send(new SaveDocumentsCommand(FRId.Value, userName, DriverId, Pin));
        //}

        /// <summary>
        /// Saves the driver details
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// </remarks>
        [HttpPost]
        [Route("SaveOld")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> Save([FromBody] SaveDriverDTO driver)
        {
            try
            {
                string userName = HttpContext.User.Identity.Name;
                var FRId = HttpContext.User.FindFirst("companyCode");
                return await _mediator.Send(new SaveDriverCommand(FRId.Value, userName, driver));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        private CommonResponseModel generateExceptionResponse(Exception ex)
        {
            CommonResponseModel response = new();
            response.StatusCode = 0;
            response.StatusMessage = "Exception Occured.";
            response.ErrorMessage = ex.Message;
            response.ResponseObject = null;
            return response;
        }
    }
}
