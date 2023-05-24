import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { AppConstant } from "./app.constant";
import { URLConstant } from "./app.url.constant";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HomeComponent } from "../app/home/home.component";
import { GenericService } from "./services/generic.service";
import { EscapeHtmlPipe } from "./coursematerial/escapehtmlpipe";
import { Http, HttpModule } from "@angular/http";
import {
  FormControl,
  NgForm,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { AppmetadataService } from "./services/appmetadata.service";
import { ManageMasterDataComponent } from "./managemasterdata/managemasterdata.component";
import { ManageMasterDataService } from "./services/managemasterdata.service";
import { PublicHolidayComponent } from "./publicholiday/publicholiday.component";
import { PublicHolidayService } from "./services/publicholiday.service";
import { CityComponent } from "./city/city.component";
import { CityService } from "./services/city.service";
import { ProgramComponent } from "./program/program.component";
import { ProgramService } from "./services/program.service";
import { ProgramGroupComponent } from "./programgroup/programgroup.component";
import { ProgramGroupService } from "./services/programgroup.service";
import { ConsultancyComponent } from "./consultancy/consultancy.component";
import { ConsultancyService } from "./services/consultancy.service";
import { UserProfileComponent } from "./userprofile/userprofile.component";
import { UserProfileService } from "./services/userprofile.service";
import { MasterDataCategory } from "./appmetadata/metadatacategory";
import { ContactDetailService } from "./services/contactdetail.service";
import { ExperienceSummaryService } from "./services/experiencesummary.service";
import { DocumentLibraryService } from "./services/documentlibrary.service";
import { SemesterComponent } from "./semester/semester.component";
import { SemesterService } from "./services/semester.service";
import { SubjectService } from "./services/subject.service";
import { SemesterCourseService } from "./services/semestercourse.service";
import { DatePipe } from "@angular/common";
import { CourseComponent } from "./course/course.component";
import { CourseService } from "./services/course.service";
import { StudentProfileComponent } from "./studentprofile/studentprofile.component";
import { StudentProfileService } from "./services/studentprofile.service";
import { CorporateComponent } from "./corporate/corporate.component";
import { CorporateService } from "./services/corporate.service";
import { LocationComponent } from "./location/location.component";
import { LocationService } from "./services/location-service.service";
import { ClassRoomComponent } from "./class-room/class-room.component";
import { ClassRoomService } from "./services/classroom.service";
import { BatchComponent } from "./batch/batch.component";
import { BatchService } from "./services/batch.service";
import { BatchSemesterComponent } from "./batchsemester/batchsemester.component";
import { BatchSemesterService } from "./services/batchsemester.service";
import { BatchSemesterWeekSettingService } from "./services/batchsemesterweeksetting.service";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { StudentProgramRegistrationService } from "./services/studentprogramregistration.service";
import { DateFormatPipe } from "./util/dateformatpipe";
import { BatchStudentComponent } from "./batchstudent/batchstudent.component";
import { BatchStudentService } from "./services/batchstudent.service";
import { BatchCourseComponent } from "./batchcourse/batchcourse.component";
import { BatchCourseService } from "./services/batchcourse.service";
import { GradeBookComponent } from "./gradebook/gradebook.component";
import { GradeBookService } from "./services/gradebook.service";
import { ReportsComponent } from "./reports/reports.component";
import { ReportService } from "./services/report.service";
import { ProgramCategoryComponent } from "./programcategory/programcategory.component";
import { ProgramCategoryService } from "./services/programcategoryservice.service";
import { TransferSemesterComponent } from "./transfersemester/transfersemester.component";
import { TransferSemesterService } from "./services/transfersemester.service";
import { SemesterScheduleComponent } from "./semesterschedule/semesterschedule.component";
import { SemesterScheduleService } from "./services/semesterschedule.service";
import { SemesterCourseScheduleService } from "./services/semestercourseschedule.service";
import { AttendanceRegisterComponent } from "./attendanceregister/attendanceregister.component";
import { AttendanceRegisterService } from "./services/attendanceregister.service";
import { CertificateTemplatesComponent } from "./certificatetemplates/certificatetemplates.component";
import { CertificateTemplateService } from "./services/certificatetemplate.service";
import { CertificateTemplateParametersService } from "./services/certificatetemplateparameters.service";
import { SectionComponent } from "./section/section.component";
import { SectionService } from "./services/section.service";
import { HtmldesignComponent } from "./htmldesign/htmldesign.component";
import { RankScaleComponent } from "./rankscale/rankscale.component";
import { RankScaleService } from "./services/rankscale.service";
import { ProjectTimeLineTemplateComponent } from "./projecttimelinetemplate/projecttimelinetemplate.component";
import { ProjecttimelineComponent } from "./projecttimeline/projecttimeline.component";
import { ProjectTimeLineTemplateService } from "./services/projecttimelinetemplate.service";
import { UploadProjectTimelineComponent } from "./uploadprojecttimeline/uploadprojecttimeline.component";
import { UploadprojecttimelineService } from "./services/uploadprojecttimeline.service";
import { SectionweeklyscheduleService } from "./services/sectionweeklyschedule.service";
import { SectionWeekDayScheduleService } from "./services/sectionweekdayschedule.service";
import { SectionDaySchedulesService } from "./services/sectiondayschedules.service";
import { SectiondayscheduleService } from "./services/sectiondayschedule.service";
import { AttendancereportService } from "./services/attendancereport.service";
import { AttendancereportComponent } from "./attendancereport/attendancereport.component";
import { ManageAssessmentComponent } from "./manageassessment/manageassessment.component";
import { ManageAssessmentService } from "./services/manageassessment.service";
import { Gradebook20Component } from "./gradebook20/gradebook20.component";
import { Gradebook20Service } from "./services/gradebook20.service";
import { ManagestudentassessmentComponent } from "./managestudentassessment/managestudentassessment.component";
import { ManagestudentassessmentService } from "./services/managestudentassessment.service";
import { ProgressreportComponent } from "./progressreport/progressreport.component";
import { ProgressreportService } from "./services/progressreport.service";
import { FacultyloginComponent } from "./facultylogin/facultylogin.component";
import { FacultyloginService } from "./services/facultylogin.service";
import { ApplicationmoduleComponent } from "./applicationmodule/applicationmodule.component";
import { ApplicationmoduleService } from "./services/applicationmodule.service";
import { UserroleComponent } from "./userrole/userrole.component";
import { UserroleService } from "./services/userrole.service";
import { RolepermissionComponent } from "./rolepermission/rolepermission.component";
import { RolepermissionService } from "./services/rolepermission.service";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./services/login.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BannermigrationComponent } from "./bannermigration/bannermigration.component";
import { BannermigrationService } from "./services/bannermigration.service";
import { GraduatedstudentsComponent } from "./graduatedstudents/graduatedstudents.component";
import { GraduatedstudentsService } from "./services/graduatedstudents.service";
import { GraduationbatchComponent } from "./graduationbatch/graduationbatch.component";
import { GraduationbatchService } from "./services/graduationbatch.service";
import { GraduatestudentComponent } from "./graduatestudent/graduatestudent.component";
import { GraduatestudentService } from "./services/graduatestudent.service";
import { WorkflowcategoryComponent } from "./workflowcategory/workflowcategory.component";
import { WorkflowcategoryService } from "./services/workflowcategory.service";
import { WorkflowtemplateComponent } from "./workflowtemplate/workflowtemplate.component";
import { WorkflowtemplateService } from "./services/workflowtemplate.service";
import { DashboardService } from "./services/dashboard.service";
import { CourseMaterialService } from "./services/coursematerial.service";
import { CourseMaterialComponent } from "./coursematerial/coursematerial.component";
import { AssessmentrepositoryComponent } from "./assessmentrepository/assessmentrepository.component";
import { ImagegalleryComponent } from "./imagegallery/imagegallery.component";
import { VideogalleryComponent } from "./videogallery/videogallery.component";
import { GalleryService } from "./services/gallery.service";
import { AudiogalleryComponent } from "./audiogallery/audiogallery.component";
import { DocumentgalleryComponent } from "./documentgallery/documentgallery.component";
import { StudentloginComponent } from "./studentlogin/studentlogin.component";
import { AssessmentrepositoryService } from "./services/assessmentrepository.service";
import { LmscoursecatalogueComponent } from "./lmscoursecatalogue/lmscoursecatalogue.component";
import { LMSCourseCatalogueService } from "./services/lmscourse-catalogue.service";
import { LMSCourseCatalogueIndexService } from "./services/lmscourse-catalogue-index.service";
import { UsergroupComponent } from "./usergroup/usergroup.component";
import { GroupuserlistComponent } from "./groupuserlist/groupuserlist.component";
import { UsergroupService } from "./services/usergroup.service";
import { WebinarCatalogueService } from "./services/webinarcatalogue.service";
import { GroupuserlistService } from "./services/groupuserlist.service";
import { SurveyComponent } from "./survey/survey.component";
import { SurveyparticipantComponent } from "./surveyparticipant/surveyparticipant.component";
import { SurveyService } from "./services/survey.service";
import { SurveyparticipantsService } from "./services/surveyparticipants.service";
import { SurveyquestionComponent } from "./surveyquestion/surveyquestion.component";
import { SurveycontentauthorComponent } from "./surveycontentauthor/surveycontentauthor.component";
import { SurveycatalogueComponent } from "./surveycatalogue/surveycatalogue.component";
import { WebinarcatalogueComponent } from "./webinarcatalogue/webinarcatalogue.component";
import { UsersectionsComponent } from "./usersections/usersections.component";
// import { SimpleTinyComponent } from "./coursematerial/SimpleTinyComponent";
import { UsersectionService } from "./services/usersection.service";
import { BotscheduleComponent } from "./botschedule/botschedule.component";
import { BotscheduleserviceService } from "./services/botscheduleservice.service";
import { BotreportComponent } from "./botreport/botreport.component";
import { BotreportService } from "./services/botreport.service";
import { BotactivitylogComponent } from "./botactivitylog/botactivitylog.component";
import { BotactivitylogService } from "./services/botactivitylog.service";
import { EmailcomposerComponent } from "./emailcomposer/emailcomposer.component";
import { EmailcomposerService } from "./services/emailcomposer.service";
import { PublishmanagementpageComponent } from "./publishmanagementpage/publishmanagementpage.component";
import { PublishmanagementService } from "./services/publishmanagement.service";
import { JobfamilyComponent } from './jobfamily/jobfamily.component';
import { UserprivilegegroupComponent } from './userprivilegegroup/userprivilegegroup.component';
import { BotmaintenancelistComponent } from './botmaintenancelist/botmaintenancelist.component';
import { SubscriptionplanComponent } from './subscriptionplan/subscriptionplan.component';
import { SubscriptioncoursecatalogueComponent } from './subscriptioncoursecatalogue/subscriptioncoursecatalogue.component';
import { SubscriptionplanService } from "./services/subscriptionplan.service";
import { SubscriptioncoursecatalogueService } from "./services/subscriptioncoursecatalogue.service";
import { CoursecataloguebundleComponent } from './coursecataloguebundle/coursecataloguebundle.component';
import { CoursecataloguebundleService } from "./services/coursecataloguebundle.service";
import { TestpageComponent } from './testpage/testpage.component';
import { TenancyComponent } from './tenancy/tenancy.component';
import { TenancyService } from "./services/tenancy.service";
import { CoursesandpitComponent } from './coursesandpit/coursesandpit.component';
import { CoursesandpitService } from "./services/coursesandpit.service";
import { SurveysandpitComponent } from './surveysandpit/surveysandpit.component';
import { SurveysandpitService } from "./services/surveysandpit.service";
 

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "managetitle", component: ManageMasterDataComponent },
  { path: "managenationality", component: ManageMasterDataComponent },
  { path: "semesterresult", component: ManageMasterDataComponent },
  { path: "usertype", component: ManageMasterDataComponent },
  { path: "visatype", component: ManageMasterDataComponent },
  { path: "contacttype", component: ManageMasterDataComponent },
  { path: "jobtype", component: ManageMasterDataComponent },
  { path: "designation", component: ManageMasterDataComponent },
  { path: "expertise", component: ManageMasterDataComponent },
  { path: "studenttype", component: ManageMasterDataComponent },
  { path: "gender", component: ManageMasterDataComponent },
  { path: "logintype", component: ManageMasterDataComponent },
  { path: "consultancygrade", component: ManageMasterDataComponent },
  { path: "gradingtype", component: ManageMasterDataComponent },
  { path: "discipline", component: ManageMasterDataComponent },
  { path: "semestertype", component: ManageMasterDataComponent },
  { path: "studentprofilebatch", component: ManageMasterDataComponent },
  { path: "assessmentstrategytypes", component: ManageMasterDataComponent },
  { path: "lmscoursecategory", component: ManageMasterDataComponent },
  { path: "lmscoursedeliverymode", component: ManageMasterDataComponent },
  { path: "lmscoursetargetaudience", component: ManageMasterDataComponent },
  { path: "lmspartners", component: ManageMasterDataComponent },
  { path: "lmswebinarcategory", component: ManageMasterDataComponent },
  { path: "lmswebinardomain", component: ManageMasterDataComponent },
  { path: "campus", component: ManageMasterDataComponent },
  { path: "groupcategory", component: ManageMasterDataComponent },
  { path: "products",component:ManageMasterDataComponent},
  { path: "lmswebinartype", component: ManageMasterDataComponent },
  { path: "profession", component: ManageMasterDataComponent },
  { path: "systemconfig", component: ManageMasterDataComponent },
  { path: "surveycategory", component: ManageMasterDataComponent },
  { path: "language", component: ManageMasterDataComponent },
  { path: "usersectiongroup", component: ManageMasterDataComponent },
  { path: "botmodules", component: ManageMasterDataComponent },
  { path: "botscheduletypes", component: ManageMasterDataComponent },
  { path: "updocumenttype", component: ManageMasterDataComponent },
  { path: "coursebundletype", component: ManageMasterDataComponent },
  {path:"coursecataloguebundle", component:CoursecataloguebundleComponent},
  { path: "mnumasterdata", component: ManageMasterDataComponent },
  { path: "mnucoursebook", component: ManageMasterDataComponent },
  { path: "mnuclassroom", component: ManageMasterDataComponent },
  { path: "mnuprogram", component: ManageMasterDataComponent },
  { path: "mnubatch", component: ManageMasterDataComponent },
  { path: "mnuemployee", component: ManageMasterDataComponent },
  { path: "mnustudent", component: ManageMasterDataComponent },
  { path: "mnugradebook", component: ManageMasterDataComponent },
  { path: "mnugradebook20", component: ManageMasterDataComponent },
  { path: "mnuwebinar", component: ManageMasterDataComponent },
  { path: "mnutimetracker", component: ManageMasterDataComponent },
  { path: "mnutimeline", component: ManageMasterDataComponent },
  { path: "mnugraduation", component: ManageMasterDataComponent },
  { path: "mnuworkflow", component: ManageMasterDataComponent },
  { path: "mnusurvey", component: ManageMasterDataComponent },
  { path: "managemodule", component: ManageMasterDataComponent },
  { path: "mnuadministration", component: ManageMasterDataComponent },

  { path:"subscriptionplan", component:SubscriptionplanComponent},
  { path:"subscriptioncc", component:SubscriptioncoursecatalogueComponent},
  { path: "webinarcatalogue", component: WebinarcatalogueComponent },
  { path: "coursecatalogue", component: LmscoursecatalogueComponent },
  { path: "publicholiday", component: PublicHolidayComponent },
  { path: "city", component: CityComponent },
  { path: "program", component: ProgramComponent },
  { path: "programgroup", component: ProgramGroupComponent },
  { path: "consultancy", component: ConsultancyComponent },
  { path: "userprofile", component: UserProfileComponent },
  { path: "courses", component: CourseComponent },
  { path: "semesters", component: SemesterComponent },
  { path: "corporates", component: CorporateComponent },
  { path: "studentprofile", component: StudentProfileComponent },
  { path: "locations", component: LocationComponent },
  { path: "coursesandpit", component: CoursesandpitComponent },
  { path: "classroom", component: ClassRoomComponent },
  { path: "batch", component: BatchComponent },
  { path: "batchsemester", component: BatchSemesterComponent },
  { path: "batchcourse", component: BatchCourseComponent },
  { path: "batchstudent", component: BatchStudentComponent },
  { path: "gradebook", component: GradeBookComponent },
  { path: "programcategory", component: ProgramCategoryComponent },
  { path: "transfersemester", component: TransferSemesterComponent },
  { path: "semesterschedule", component: SemesterScheduleComponent },
  { path: "attendanceregister", component: AttendanceRegisterComponent },
  { path: "certificatetemplates", component: CertificateTemplatesComponent },
  { path: "section", component: SectionComponent },
  { path: "rankscale", component: RankScaleComponent },
  { path: "htmldesign", component: HtmldesignComponent },
  {
    path: "projecttimelinetemplate",
    component: ProjectTimeLineTemplateComponent,
  },
  { path: "projecttimelineupload", component: UploadProjectTimelineComponent },
  { path: "manageassessment", component: ManageAssessmentComponent },
  { path: "gradebook20", component: Gradebook20Component },
  {
    path: "managestudentassessment",
    component: ManagestudentassessmentComponent,
  },
  { path: "progressreport", component: ProgressreportComponent },
  { path: "facultylogin", component: FacultyloginComponent },
  { path: "appmodule", component: ApplicationmoduleComponent },
  { path: "userrole", component: UserroleComponent },
  { path: "rolepermission", component: RolepermissionComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "bannermigration", component: BannermigrationComponent },
  { path: "graduationbatch", component: GraduationbatchComponent },
  { path: "graduatestudent", component: GraduatestudentComponent },
  { path: "workflowcategory", component: WorkflowcategoryComponent },
  { path: "workflowtemplate", component: WorkflowtemplateComponent },
  { path: "coursematerial", component: CourseMaterialComponent },
  { path: "assessmentquestion", component: AssessmentrepositoryComponent },
  { path: "imagegallery", component: ImagegalleryComponent },
  { path: "videogallery", component: VideogalleryComponent },
  { path: "audiogallery", component: AudiogalleryComponent },
  { path: "documentgallery", component: DocumentgalleryComponent },
  { path: "studentlogin", component: StudentloginComponent },
  { path: "usergroup", component: UsergroupComponent },
  { path: "groupuserlist", component: GroupuserlistComponent },
  { path: "survey", component: SurveyComponent },
  { path: "surveyparticipant", component: SurveyparticipantComponent },
  { path: "surveyquestions", component: SurveyquestionComponent },
  { path: "surveycontentauthor", component: SurveycontentauthorComponent },
  { path: "surveycatalogue", component: SurveycatalogueComponent },
  {path:"surveysandpit", component:SurveysandpitComponent},
  { path: "usersection", component: UsersectionsComponent },
  { path: "botschedules", component: BotscheduleComponent },
  { path: "botreport", component: BotreportComponent },
  { path: "botactivitylog", component: BotactivitylogComponent },
  { path: "emailcomposer", component: EmailcomposerComponent },
  { path: "pmpage", component: PublishmanagementpageComponent },
  { path: "testpage", component: TestpageComponent },
  {path:"tenancy",component:TenancyComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscapeHtmlPipe,
    ManageMasterDataComponent,
    PublicHolidayComponent,
    CityComponent,
    ProgramComponent,
    ProgramGroupComponent,
    ConsultancyComponent,
    UserProfileComponent,
    SemesterComponent,
    CourseComponent,
    StudentProfileComponent,
    CorporateComponent,
    LocationComponent,
    ClassRoomComponent,
    BatchComponent,
    BatchSemesterComponent,
    DateFormatPipe,
    BatchStudentComponent,
    BatchCourseComponent,
    GradeBookComponent,
    ReportsComponent,
    ProgramCategoryComponent,
    TransferSemesterComponent,
    SemesterScheduleComponent,
    AttendanceRegisterComponent,
    CertificateTemplatesComponent,
    SectionComponent,
    HtmldesignComponent,
    RankScaleComponent,
    ProjectTimeLineTemplateComponent,
    ProjecttimelineComponent,
    UploadProjectTimelineComponent,
    AttendancereportComponent,
    ManageAssessmentComponent,
    Gradebook20Component,
    ManagestudentassessmentComponent,
    ProgressreportComponent,
    FacultyloginComponent,
    ApplicationmoduleComponent,
    UserroleComponent,
    RolepermissionComponent,
    LoginComponent,
    DashboardComponent,
    BannermigrationComponent,
    GraduatedstudentsComponent,
    GraduationbatchComponent,
    GraduatestudentComponent,
    WorkflowcategoryComponent,
    WorkflowtemplateComponent,
    CourseMaterialComponent,
    AssessmentrepositoryComponent,
    ImagegalleryComponent,
    VideogalleryComponent,
    AudiogalleryComponent,
    DocumentgalleryComponent,
    StudentloginComponent,
    LmscoursecatalogueComponent,
    UsergroupComponent,
    GroupuserlistComponent,
    SurveyComponent,
    SurveyparticipantComponent,
    SurveyquestionComponent,
    SurveycontentauthorComponent,
    SurveycatalogueComponent,
    WebinarcatalogueComponent,
    UsersectionsComponent,
    BotscheduleComponent,
    BotreportComponent,
    BotactivitylogComponent,
    EmailcomposerComponent,
    PublishmanagementpageComponent,
    JobfamilyComponent,
    UserprivilegegroupComponent,
    BotmaintenancelistComponent,
    SubscriptionplanComponent,
    SubscriptioncoursecatalogueComponent,
    CoursecataloguebundleComponent,
    TestpageComponent,
    TenancyComponent,
    CoursesandpitComponent,
    SurveysandpitComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    BsDatepickerModule.forRoot(),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppConstant,
    URLConstant,
    MasterDataCategory,
    GenericService,
    DashboardService,
    AppmetadataService,
    ManageMasterDataService,
    PublicHolidayService,
    CityService,
    ProgramService,
    ProgramGroupService,
    ConsultancyService,
    UserProfileService,
    DatePipe,
    ContactDetailService,
    ExperienceSummaryService,
    DocumentLibraryService,
    SemesterService,
    SemesterCourseService,
    CourseService,
    StudentProfileService,
    CorporateService,
    LocationService,
    ClassRoomService,
    BatchService,
    BatchSemesterService,
    BatchSemesterWeekSettingService,
    StudentProgramRegistrationService,
    BatchStudentService,
    BatchCourseService,
    GradeBookService,
    ReportService,
    ProgramCategoryService,
    TransferSemesterService,
    SemesterScheduleService,
    SemesterCourseScheduleService,
    AttendanceRegisterService,
    CertificateTemplateService,
    CertificateTemplateParametersService,
    SectionService,
    RankScaleService,
    ProjectTimeLineTemplateService,
    UploadProjectTimelineComponent,
    SectionweeklyscheduleService,
    SectionWeekDayScheduleService,
    SectionDaySchedulesService,
    SectiondayscheduleService,
    AttendancereportService,
    ManageAssessmentService,
    ManageAssessmentComponent,
    Gradebook20Service,
    ManagestudentassessmentService,
    ProgressreportService,
    FacultyloginService,
    ApplicationmoduleService,
    UserroleService,
    RolepermissionService,
    LoginService,
    BannermigrationService,
    GraduatedstudentsService,
    GraduationbatchService,
    GraduatestudentService,
    WorkflowcategoryService,
    WorkflowtemplateService,
    CourseMaterialService,
    GalleryService,
    AssessmentrepositoryService,
    LMSCourseCatalogueService,
    LMSCourseCatalogueIndexService,
    UsergroupService,
    GroupuserlistService,
    SurveyService,
    SurveyparticipantsService,
    WebinarCatalogueService,
    UsersectionService,
    BotscheduleserviceService,
    BotreportService,
    BotactivitylogService,
    EmailcomposerService,
    PublishmanagementService,
    SubscriptionplanService,
    SubscriptioncoursecatalogueService,
    CoursecataloguebundleService,TenancyService,CoursesandpitService,
    SurveysandpitService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
