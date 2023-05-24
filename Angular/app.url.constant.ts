import { Component } from "@angular/core";

export class URLConstant {
  // Base URL

  // Development
      public APIBaseURL = "http://localhost:8001/api/";
      public APIRootURL = "http://localhost:8001/";
   // Staging
   // public APIBaseURL = "http://vat.cert.ae/MenasatiStageAdminAPI/api/";
   // public APIRootURL = "http://vat.cert.ae/MenasatiStageAdminAPI/";
  // Production
    // public APIBaseURL = "https://sisv2.cert.ae/SISv2APIProd/api/";
    // public APIRootURL = "https://sisv2.cert.ae/SISv2APIProd/";
  // Testing
  // public APIBaseURL = 'http://10.24.24.57:8001/api/';
  // public APIRootURL = 'http://10.24.24.57:8001/';
  // Live
  //  public APIBaseURL = 'http://10.24.12.70:801/api/';
  //  public APIRootURL = 'http://10.24.12.70:801/';
  // Staging
  // public APIBaseURL = 'http://vat.cert.ae/SIS20/api/';
  // public APIRootURL = 'http://vat.cert.ae/SIS20/';

  // Controller Names
  public AppMetadataModule = "AppMetadata/";
  public MemberModule = "Member/";
  public EmailContentModule = "EmailContent/";
  public CourseMaterialModule = "CourseMaterial/";
  public CourseMaterialChapterModule = "CourseMaterialChapter/";
  public CourseMaterialSectionModule = "CourseMaterialSection/";
  public CourseMaterialSectionContentModule = "CourseMaterialSectionContent/";
  public PublicHolidayModule = "PublicHoliday/";
  public CityModule = "City/";
  public LMSSubscriptionPlanModule="LMSSubscriptionPlan/";
  public LMSSubscriptionCourseCatalogueListModule="LMSSubscriptionCourseCatalogueList/";
  public CourseCatalogueBundleModule="CourseCatalogueBundle/";
  public SurveyModule = "Survey/";
  public SurveyParticipantModule = "SurveyParticipant/";
  public UserGroupModule = "UserGroup/";
  public GroupUserListModule = "GroupUserList/";
  public WorkFlowCategoryModule = "WorkFlowCategory/";
  public ProgramModule = "Program/";
  public ProgramCategoryModule = "ProgramCategory/";
  public GetAllByGroupCategoryID="GetAllByGroupCategoryID";
  public ProgramGroupModule = "ProgramGroup/";
  public PublishManagementPageModule = "PublishManagementPage/";
  public GraduationBatchModule = "GraduationBatch/";
  public SystemModule = "System/";
  public ConsultancyModule = "Consultancy/";
  public CorporateModule = "Corporate/";
  public UserProfileModule = "UserProfile/";
  public StudentProfileModule = "StudentProfile/";
  public ContactDetailModule = "ContactDetail/";
  public ExperienceSummaryModule = "ExperienceSummary/";
  public TenancyModule="Tenancy/";
  public DocumentLibraryModule = "DocumentLibrary/";
  public CourseModule = "Course/";
  public AssessmentQuestionModule = "AssessmentQuestion/";
  public QuestionnaireModule = "Questionnaire/";
  public QuestionnaireContentModule = "QuestionnaireContent/";
  public QuestionOptionModule = "QuestionOption/";
  public QuestionAnswerModule = "QuestionAnswer/";
  public DashboardModule = "Dashboard/";
  public GradeBookModule = "GradeBook/";
  public SemesterModule = "Semester/";
  public SemesterCourseModule = "SemesterCourse/";
  public LocationModule = "Location/";
  public RankScaleModule = "RankScale/";
  public CourseSandpitCategoryModule="CourseSandpitCategory/"
  public ClassRoomModule = "ClassRoom/";
  public BotActivityLogModule = "BotActivityLog/";
  public LMSCourseCatalogueModule = "LMSCourseCatalogue/";
  public SurveySandpitModule = "SurveySandpit/";
  public WebinarCatalogueModule = "WebinarCatalogue/";
  public LMSCourseCatalogueIndexModule = "LMSCourseCatalogueIndex/";
  public CourseSandpitModule="CourseSandpit/";
 
  public BatchModule = "Batch/";
  public BotScheduleModule = "BotSchedule/";
  public BotReportModule = "BotReport/";
  public SectionModule = "Section/";
  public SectionMaterialModule = "SectionMaterial/";
  public UserSectionAssignmentModule = "UserSectionAssignment/";
  public SectionWeekDayScheduleModule = "SectionWeekDaySchedule/";
  public SectionDayScheduleModule = "SectionDaySchedule/";
  public SectionWeeklyScheduleModule = "SectionWeeklySchedule/";
  public BatchSemesterModule = "BatchSemester/";
  public BatchCourseModule = "BatchCourse/";
  public VirtualIDCardModule = "VirtualIDCard/";
  public BatchSemesterWeekSettingModule = "BatchSemesterWeekSetting/";
  public GetAllStudentProfileByBatchID = "GetAllStudentProfileByBatchID/";

  public StudentProgramRegistrationModule = "StudentProgramRegistration/";
  public SectionStudentMaterialModule = "SectionStudentMaterial/";
  public SemesterScheduleModule = "SemesterSchedule/";
  public SemesterCourseScheduleModule = "SemesterCourseSchedule/";
  public StudentSemesterRecordModule = "StudentSemesterRecord/";
  public GraduateStudentModule = "GraduateStudent/";
  public AttendanceRegisterModule = "AttendanceRegister/";
  public CertificateTemplateModule = "CertificateTemplate/";
  public CertificateTemplateParametersModule = "CertificateTemplateParameters/";
  public ProjectTimeLineModule = "ProjectTimeLine/";
  public StudentAssessmentStrategyEntryModule =
    "StudentAssessmentStrategyEntry/";
  public WorkflowTemplateModule = "WorkFlowTemplate/";
  public AssessmentStrategyDistribution = "AssessmentStrategyDistribution/";
  public AssessmentStrategy = "AssessmentStrategy/";
  public ApplicationModule = "ApplicationModule/";
  public UserRoleModule = "UserRole/";
  public RolePermissionModule = "RolePermissions/";
  public BannerMigrationModule = "BannerMigration/";

  // Action Names
  public GetAll = "GetAll";
  public CreateVirtualIDCardforSectionID="CreateVirtualIDCardforSectionID";
  public CreateIndividualVIDCard="CreateIndividualVIDCard";
  public InsertOrUpdate = "InsertOrUpdate";
  public UpdateVIPStatus = "UpdateVIPStatus";
  public AddGroupUsersToSurvey = "AddGroupUsersToSurvey";
  public AddSectionUsersToSurvey="AddSectionUsersToSurvey";
  public InsertOrUpdateCourse = "InsertOrUpdateCourse";
  public InsertOrUpdateSemester = "InsertOrUpdateSemester";
  public InsertOrUpdateStudent = "InsertOrUpdateStudent";
  public InsertOrUpdatePrintRquest = "InsertOrUpdatePrintRquest";
  public RequestProfileUpdate = "RequestProfileUpdate";
  public GetAllBySubscriptionID="GetAllBySubscriptionID";
  public GetAllByCourseCatalogueBundleID="GetAllByCourseCatalogueBundleID";
  public AddStudentToGraduationBatch = "AddStudentToGraduationBatch";
  public CreateUserLogin = "CreateUserLogin";
  public CreateStudentLogin = "CreateStudentLogin";
  public GenerateUserRegistrationCode = "GenerateUserRegistrationCode";
  public GenerateMessageTokenCode = "GenerateMessageTokenCode";
  public UpdateLockStatus = "UpdateLockStatus";
  public UpdatePeriodNumber = "UpdatePeriodNumber";
  public UpdateContentOrder = "UpdateContentOrder";
  public UpdateCourseSandpitCategoryOrder="UpdateCourseSandpitCategoryOrder";
  public PPTToIMGContent = "PPTToIMGContent";
  public UpdateAttendanceList = "UpdateAttendanceList";
  public GetSubMenuByModuleCode="GetSubMenuByModuleCode";
  public Remove = "Remove";
  public GetAllCourseCatalogueBundle="GetAllCourseCatalogueBundle";
  public GetAllCourseCatalogue = "GetAllCourseCatalogue";
  public GetMyPrograms="GetMyPrograms";
  public GetByID = "GetByID";
  public GetAllFacultyForAssignment="GetAllFacultyForAssignment";
  public GetAllActive = "GetAllActive";
  public GetAllInActive = "GetAllInActive";
  public GetAllActiveByKVP = "GetAllActiveByKVP";
  public GetAllActiveAsDDL = "GetAllActiveAsDDL";
  public GetAllByCategoryNameAsList = "GetAllByCategoryNameAsList";
  public GetAllBySurveyID = "GetAllBySurveyID";
  public SendEmailNotification = "SendEmailNotification";
  public GetAllByCourseSandpitID="GetAllByCourseSandpitID";
  public GetAllSurvey = "GetAllSurvey";
  public GetAllByUserGroupID = "GetAllByUserGroupID";
  public GetAllByCourseID = "GetAllByCourseID";
  public GeAllBySurveyID = "GeAllBySurveyID";
  public GetAllByCourseMaterialID = "GetAllByCourseMaterialID";
  public GetCourseSandpitIndexes="GetCourseSandpitIndexes";
  public GetAllByCourseChapterID = "GetAllByCourseChapterID";
  public GetAllByChapterSectionID = "GetAllByChapterSectionID";
  public GetAllByCourseSandpitCategoryID="GetAllByCourseSandpitCategoryID";
  public GetAllWebinarOverviewByWebinarCatalogueID =
    "GetAllWebinarOverviewByWebinarCatalogueID";
public CreateGalleryFolder="CreateGalleryFolder";
  public GetWebinarParticipantListByWebinarCatalogueID =
    "GetWebinarParticipantListByWebinarCatalogueID";
  public GetWebinarParticipantListByWebinarCatalogueIDAndVIPStatus =
    "GetWebinarParticipantListByWebinarCatalogueIDAndVIPStatus";
  public SendNotificationToAllParticipants =
    "SendNotificationToAllParticipants";
  public SendNotificationToParticipant = "SendNotificationToParticipant";
  public GetSponsorContentsUserProfileID = "GetSponsorContentsUserProfileID";
  public GetAllactiveByCategoryNameAsList = "GetAllActiveByCategoryNameAsList";
  public RemoveByID = "RemoveByID";
  public LoadSectionContent="LoadSectionContent";
  public RemoveSemesterByID = "RemoveSemesterByID";
  public RemovePrintRquestsByID = "RemovePrintRquestsByID";
  public GetAllCourseBySemesterID = "GetAllCourseBySemesterID";
  public GetAllByWorkFlowCategoryID = "GetAllByWorkFlowCategoryID";
  public RemoveCourseByID = "RemoveCourseByID";
  public RemoveStudentByID = "RemoveStudentByID";
  public MakeInActiveByID = "MakeInActiveByID";
  public MakeActiveByID = "MakeActiveByID";
  public UploadAvathar = "UploadAvathar";
  public AddParticipantToWebinar = "AddParticipantToWebinar";
  public GetByUserProfileID = "GetByUserProfileID";
  public GetHCTEmployeeDetail = "GetHCTEmployeeDetail";
  public SearchByEmiratesID = "SearchByEmiratesID";
  public TextSearch = "TextSearch";
  public UserLoginTextSearch="UserLoginTextSearch";
  public GetByStudentProfileID = "GetByStudentProfileID";
  public UploadProfileDocument = "UploadProfileDocument";
  public UploadStudentProfiles = "UploadStudentProfiles";
  public UploadBannerStudentProfiles = "UploadBannerStudentProfiles";
  public UploadBannerStudentGradeList = "UploadBannerStudentGradeList";
  public UploadProjectTimeLine = "UploadProjectTimeLine";
  public UploadSyllabusDocument = "UploadSyllabusDocument";
  public UploadCourseImage = "UploadCourseImage";
  public UploadWebinarCatalogueImage = "UploadWebinarCatalogueImage";
  public DownloadFile = "DownloadFile";
  public DownloadAttendanceReport = "DownloadAttendanceReport";
  public DownloadAttendanceWeeklyReport="DownloadAttendanceWeeklyReport";
  public DownloadDayAttendanceReport="DownloadDayAttendanceReport";
  public GetAllByProgramID = "GetAllByProgramID";
  public GetAllImages = "GetAllImages";
  public Search = "Search";
  public GetAllVideos = "GetAllVideos";
  public GetAllAudios = "GetAllAudios";
  public GetAllDocuments = "GetAllDocuments";
  public GetAllFilesByExtension = "GetAllFilesByExtension";
  public GetUniqueGraduatedPrograms = "GetUniqueGraduatedPrograms";
  public GetAllByProjectTimelineTemplateID =
    "GetAllByProjectTimelineTemplateID";
  public GetAllByCourseTimelineEntryByTimelineID =
    "GetAllByCourseTimelineEntryByTimelineID";
  public RemoveWeeklyTimeLineByID = "RemoveWeeklyTimeLineByID/";
  public GetAllByProgramGroupID = "GetAllByProgramGroupID";
  public GetAllByBatchID = "GetAllByBatchID";
  public GetAllBySectionID = "GetAllBySectionID";
  public GetAllUserLogins = "GetAllUserLogins";
  public GetByUserLoginID = "GetByUserLoginID";
  public GetAllByClassRoomID = "GetAllByClassRoomID";
  public GetAllSemesterWeekSettingByBatchID =
    "GetAllSemesterWeekSettingByBatchID";
  public GetAllSemesterByBatchID = "GetAllSemesterByBatchID";
  public GetAllByCourseCatalogueID = "GetAllByCourseCatalogueID";
  public GetAllCourseEnrollment = "GetAllCourseEnrollment";
  public GetCourseCatalogueTrackingID = "GetCourseCatalogueTrackingID";
  public GetAllSurveyResultByChapterSectionID =
    "GetAllSurveyResultByChapterSectionID";
  public GetAllCourse = "GetAllCourse";
  public GetAllCourseMaterialByCourseID = "GetAllCourseMaterialByCourseID";
  public GetAllCourseMaterialBySurveyID = "GetAllCourseMaterialBySurveyID";
  public GetAllByChapterByCourseMaterialID =
    "GetAllByChapterByCourseMaterialID";
  public GetAllSectionByCourseChapterID = "GetAllSectionByCourseChapterID";
  public GetContentBySectionID = "GetContentBySectionID";
  public GetSectionByChapterCatalogueID = "GetSectionByChapterCatalogueID";
  public UpdateCourseOverviewContent = "UpdateCourseOverviewContent";
  public TransferSemesterStudents = "TransferSemesterStudents";
  public GetAllBySemesterCourseID = "GetAllBySemesterCourseID";
  public GetAllByLocationID = "GetAllByLocationID";
  public GetAllByPagination = "GetAllByPagination";
  public GetAllHeartBeatPagination = "GetAllHeartBeatPagination";
  public GetAllByCourseFromSemesterRepository =
    "GetAllByCourseFromSemesterRepository";
  public GetAllStudentByBatchID = "GetAllStudentByBatchID";
  public GetAllStudentBySectionID = "GetAllStudentBySectionID";
  public GetAllBySPRID = "GetAllBySPRID";
  public Assign = "Assign";
  public Revoke = "Revoke";
  public Complete = "Complete";
  public AssignToAllStudents = "AssignToAllStudents";
  public GetAllBySemesterID = "GetAllBySemesterID";
  public GetAllBySemesterParentCourse = "GetAllBySemesterParentCourse";
  public GetAllByCityID = "GetAllByCityID";
  public GeAlltByCourseMaterialID = "GeAlltByCourseMaterialID";
  public GeAlltBySurveyID = "GeAlltBySurveyID";
  public GetAllByAssessmentQuestionID = "GetAllByAssessmentQuestionID";
  public GetAllByBatchSemesterID = "GetAllByBatchSemesterID";
  public GetAllAssessmentCourseByBatchSemesterID =
    "GetAllAssessmentCourseByBatchSemesterID";
  public GenerateScheduleReport = "GenerateScheduleReport";
  public GetAllBySemesterScheduleID = "GetAllBySemesterScheduleID";
  public GetAllByStudentProgramRegistrationID =
    "GetAllByStudentProgramRegistrationID";
  public GetAllSemesterByStudentID = "GetAllSemesterByStudentID";
  public GetAllPrintRequestByStudentID = "GetAllPrintRequestByStudentID";
  public GetAllByBatchSemesterCourseID = "GetAllByBatchSemesterCourseID";
  public GetAllBySemesterCourseScheduleID = "GetAllBySemesterCourseScheduleID";
  public GetAllByCertificateTemplateID = "GetAllByCertificateTemplateID";
  public GetByStudentProgramRegistrationIDAndBatchSemesterID =
    "GetByStudentProgramRegistrationIDAndBatchSemesterID";
  public GetAllSemestersByStudentIDandProgramGroupToGenerationTranscript =
    "GetAllSemestersByStudentIDandProgramGroupToGenerationTranscript";
  public UpdateSemesterResult = "UpdateSemesterResult";
  public GetAllBySectionAndProjectTimelineWeeklyScheduleID =
    "GetAllBySectionAndProjectTimelineWeeklyScheduleID";
  public ActivateSectionWeeklySchedule = "ActivateSectionWeeklySchedule";
  public GetAllBySectionWeeklyScheduleID = "GetAllBySectionWeeklyScheduleID";
  public GetAllBySectionWeekDayScheduleID = "GetAllBySectionWeekDayScheduleID";
  public GetCourseTimelineforWeeklySchedule =
    "GetCourseTimelineforWeeklySchedule";
  public GetSemesterWeeklySchedule = "GetSemesterWeeklySchedule";
  public GetAllByBatchSemesterIDandSectionID =
    "GetAllByBatchSemesterIDandSectionID";
  public GetAllByAssessmentStrategyDistributionID =
    "GetAllByAssessmentStrategyDistributionID";
  public GetAllActiveByAssessmentStrategyDistributionID =
    "GetAllActiveByAssessmentStrategyDistributionID";
  public GetAllStudentAssessmentStrategyEntries =
    "GetAllStudentAssessmentStrategyEntries";
  public GetAllStudentAssessmentStrategyList =
    "GetAllStudentAssessmentStrategyList";
  public GenerateProgressReport = "GenerateProgressReport";
  public SearchStudent = "SearchStudent";
  public GetStudentTranscriptSemesters = "GetStudentTranscriptSemesters";
  public GetSemesterCourses = "GetSemesterCourses";
  public GetSignUpProfile = "GetSignUpProfile";
  public SignUpUser = "SignUpUser";
  public SignInUser = "SignInUser";
  public displayName = "None";
  // Error Message


  // Module Code

  public Administration = "ADMN";
  public MasterData = "MSTDT";
  public ClassRoom = "CLRM";
  public Program = "PGM";
  public Batch = "BTCH";
  public Employee = "EMP";
  public Student = "STUD";
  public GradeBook = "GDBK";
  public GradeBook20 = "GDBK20";
  public TimeTracker = "TT";
  public ProjectTimeLine = "PTL";
  public Graduation = "MGGRN";
  public WorkFlow = "MGWF";
  public CourseMaterial = "CRSBK";
  public Webinar = "WBNR";
  public Section = "SECN";

  // Action Button Classes
  public AddNewBTN = "btnn";
  public RemoveBTN = "btnr";
  public SaveBTN = "btns";



}
