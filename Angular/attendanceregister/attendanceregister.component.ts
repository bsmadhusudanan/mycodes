import { StudentProfileService } from "../services/studentprofile.service";
import { Component, OnInit } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";
import { ProgramService } from "../services/program.service";
import { URLConstant } from "../app.url.constant";
import { BatchService } from "../services/batch.service";
import { ProgramGroupService } from "../services/programgroup.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BatchSemesterService } from "../services/batchsemester.service";
import { BatchStudentService } from "../services/batchstudent.service";
import { StudentProgramRegistrationService } from "../services/studentprogramregistration.service";
import { StudentProgramRegistrationViewModel } from "../common.viewmodel/studentprogramregistration.viewmodel";
import { BatchCourseService } from "../services/batchcourse.service";
import { GradeBookService } from "../services/gradebook.service";
import { SemesterGradeViewModel } from "../gradebook/semestergrade.viewmodel";
import { SemesterGradeRecordViewModel } from "../gradebook/gradesemesterrecord.viewmodel";
import { MasterDataCategory } from "../appmetadata/metadatacategory";
import { ManageMasterDataService } from "../services/managemasterdata.service";
import { TransferSemesterService } from "../services/transfersemester.service";
import {
  TranscriptViewModel,
  SemesterDetailViewModel,
  CourseDetailViewModel
} from "../transfersemester/transcript.viewmodel";
import { AttendanceRegisterService } from "../services/attendanceregister.service";
import { SemesterScheduleService } from "../services/semesterschedule.service";
import { SemesterCourseScheduleService } from "../services/semestercourseschedule.service";
import { AttendanceRegisterViewModel } from "./attendanceregister.viewmodel";
import { SectionService } from "../services/section.service";
import { SectionweeklyscheduleService } from "../services/sectionweeklyschedule.service";
import { SectionWeekDayScheduleService } from "../services/sectionweekdayschedule.service";
import { SectiondayscheduleService } from "../services/sectiondayschedule.service";
import { SectionDaySchedulesService } from "../services/sectiondayschedules.service";

declare var jQuery: any;

@Component({
  selector: "app-attendanceregister",
  templateUrl: "./attendanceregister.component.html",
  styleUrls: ["./attendanceregister.component.css"]
})
export class AttendanceRegisterComponent implements OnInit {
  public studentProgramRegistration: StudentProgramRegistrationViewModel;
  public _semesterGrade: SemesterGradeViewModel;
  public _semesterGradeRecord: SemesterGradeRecordViewModel;
  public _transcriptViewModel: TranscriptViewModel;
  public _semesterDetailViewModel: SemesterDetailViewModel;
  public _courseDetailViewModel: CourseDetailViewModel;
  public _attendanceRegisterViewModel: AttendanceRegisterViewModel;
  _MCODE: string;
  _studentProgramRegistrationForm: FormGroup;
  _semesterGradeForm: FormGroup;
  _programDataList: any[] = [];
  _programGroupDataList: any[] = [];
  _batchDataList: any[] = [];
  _studentDataList: any[] = [];
  _semesterDataList: any[] = [];
  _sectionDataList: any[] = [];
  _studentRepositoryDataList: any[] = [];
  _semesterSchedulesDataList: any[] = [];
  _semesterWeeklyScheduleDataList: any[] = [];
  _semesterWeekDayScheduleDataList: any[] = [];
  _batchSemesterCourseDataList: any[] = [];
  _studentSemesterRecordDataList: any[] = [];
  _semesterGradeDataList: any[] = [];
  _semesterResultDataList: any[] = [];
  _transcriptResultDataList: any[] = [];
  _courseDetailDataList: any[] = [];
  _semesterCourseScheduleDataList: any[] = [];
  _sectionPeriodScheduleDataList: any[] = [];
  _studentAttendanceDataList: any[] = [];
  _projectTimeLineID: number;
  _batchSemesterID: number;
  _studentProgramRegistrationID: number;
  _semesterScheduleID: number;
  _sectionWeeklyScheduleID: number;
  _sectionWeekDayScheduleID: number;
  _periodID: number;
  _sectionID: number;
  _batchID: number;
  programName: "";
  programGroup: "";
  batchName: "";
  semesterName: "";
  studentName: "";
  _unlockedRecords: number;
  confirmationMessage: string;
  _semesterStatus: string;
  removeItemID: number;
  _studentSemesterRecordID: number;
  _programGroupID: number;
  sp: any;
  imageBaseURL = this._urlConstant.APIRootURL + "/Content/Avathar/";
  constructor(
    private _httpCalls: Http,
    private _urlConstant: URLConstant,
    private _programServiceCall: ProgramService,
    private _batchServiceCall: BatchService,
    private _studentProfileServiceCall: StudentProfileService,
    private _batchStudentServiceCall: BatchStudentService,
    private _batchSemesterServiceCall: BatchSemesterService,
    private _studentProgramRegistrationServiceCall: StudentProgramRegistrationService,
    private _gradeBookServiceCall: GradeBookService,
    private _sectionServiceCall: SectionService,
    private _programGroupServiceCall: ProgramGroupService,
    private _fb: FormBuilder,
    private _batchCourseServiceCall: BatchCourseService,
    private _masterDataCategory: MasterDataCategory,
    private _masterDataServiceCall: ManageMasterDataService,
    private _semsterScheduleService: SemesterScheduleService,
    private _attendanceRegisterService: AttendanceRegisterService,
    private _semesterCourseScheduleService: SemesterCourseScheduleService,
    private _sectionWeeklyScheduleServiceCall: SectionweeklyscheduleService,
    private _sectionWeekDayScheduleServiceCall: SectionWeekDayScheduleService,
    private _sectionDaySchedulesServiceCall: SectionDaySchedulesService
  ) {}

  ngOnInit() {
    this._MCODE = this._urlConstant.TimeTracker;
    this.applyViewRule();
    this.getAllPrograms();
    this._unlockedRecords = 0;
    jQuery("#addNewStudentFromRepository").hide();
    this.confirmationMessage = "";
    this._semesterStatus = "";
    this.removeItemID = 0;
    this.showStudentList();
    this.resetSemesterGradeViewModel();
    this.resetSemesterGradeRecordViewModel();
    this.loadMasterData();
    this.resetTranscriptViewModel();
    this.resetCourseDetailViewModel();
    this.resetSemesterDetailViewModel();
    jQuery(document).ready(function() {
      jQuery(".dd").nestable();

      jQuery(".dd-handle a").on("mousedown", function(e) {
        e.stopPropagation();
      });

      jQuery('[data-rel="tooltip"]').tooltip();
    });
  }

  applyViewRule() {
    try {
      if (localStorage.getItem("permission") != null) {
        let permission = JSON.parse(
          localStorage.getItem("permission").toString()
        );
        permission.forEach(element => {
          jQuery("#" + element.ModuleCode).show();
          if (element.ModuleCode == this._MCODE) {
            if (element.Create == true) {
              jQuery("." + this._urlConstant.AddNewBTN).show();
            } else {
              jQuery("." + this._urlConstant.AddNewBTN).hide();
            }
            if (element.Update == true) {
              jQuery("." + this._urlConstant.SaveBTN).show();
            } else {
              jQuery("." + this._urlConstant.SaveBTN).hide();
            }
            if (element.Delete == true) {
              jQuery("." + this._urlConstant.RemoveBTN).show();
            } else {
              jQuery("." + this._urlConstant.RemoveBTN).hide();
            }
          }
        });
      }
    } catch (error) {
      console.log("Error in applying the rules " + error);
    }
  }

  loadMasterData() {
    try {
      this._masterDataServiceCall
        .getAllByCategory(this._masterDataCategory.SemesterResult)
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._semesterResultDataList = [];
              this._semesterResultDataList = data.ResponseObject;
            }
          },
          error => alert(error),
          () => console.log("Get All Master Data Category API Called")
        );
    } catch (error) {
      console.log("Error in loading Master Data " + error);
    }
  }

  getAllPrograms() {
    try {
      this._programServiceCall.getMyPrograms()
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._programDataList = [];
              this._programDataList = data.ResponseObject;
            }
          },
          error => alert(error),
          () => console.log("Get All Program API Called")
        );
    } catch (error) {
      console.log("Error in retriving Programs : " + error);
    }
  }

  getAllProgramGroup(val) {
    try {
      this._programGroupServiceCall.getAllByProgramID(val).subscribe(
        data => {
          if (data.StatusCode === 1) {
            this._programGroupDataList = [];
            this._programGroupDataList = data.ResponseObject;
            this._batchDataList = [];
          }
        },
        error => alert(error),
        () => console.log("Get All Program Group API Called")
      );
    } catch (error) {
      console.log("Error in retriving Program Groups: " + error);
    }
  }

  getAllBatch(val) {
    try {
      this._programGroupID = val;
      this._batchServiceCall.getAllByProgramGroupID(val).subscribe(
        data => {
          if (data.StatusCode === 1) {
            this._batchDataList = [];
            this._batchDataList = data.ResponseObject;
            // if (preLoad) {
            //   jQuery('#FK_ProgramGroupID').val(this._batchViewModel.FK_ProgramGroupID);
            // }
          }
        },
        error => alert(error),
        () => console.log("Get All Batch API Called")
      );
    } catch (error) {
      console.log("Error in retriving Program Groups: " + error);
    }
  }

  getAllBatchStudents(val, bindbatch: boolean) {
    try {
      jQuery("#addNewStudentFromRepository").hide();
      if (bindbatch === true) {
        this.getAllBatchSemesters(val);
      }
      this.getAllSectionsByBatchID(val);
    } catch (error) {
      console.log("Error in retriving Program Groups: " + error);
    }
  }

  getAllSectionsByBatchID(val) {
    try {
      this._semesterDataList = [];
      jQuery("#btnActivateSchedule").hide();
      this._batchID = val;
      jQuery("#addNewStudentFromRepository").hide();
      this._sectionServiceCall.getAllByBatchID(val).subscribe(
        data => {
          if (data.StatusCode === 1) {
            this._sectionDataList = [];
            this._sectionDataList = data.ResponseObject;
            // console.log('Section Object : '+ JSON.stringify(this._sectionDataList));
          }
        },
        error => alert(error),
        () => console.log("Get All Batch Section API Called")
      );
    } catch (error) {
      console.log("Error in retriving Program Groups: " + error);
    }
  }

  getStudentSemesterStatus(student) {
    try {
      let status = "Not Declared";
      if (student.StudentSemesterRecord.length > 0) {
        student.StudentSemesterRecord.forEach(q => {
          if (q.FK_BatchSemesterID == this._batchSemesterID) {
            this._semesterResultDataList.forEach(item => {
              if (item.Key == q.Status) {
                status = item.Value;
              }
            });
          }
        });
      }
      return status;
    } catch (error) {
      console.log("Error in Getting the Student Status");
    }
  }
  getStudentSemesterRegistrationID(student) {
    try {
      if (student.StudentSemesterRecord.length > 0) {
        student.StudentSemesterRecord.forEach(q => {
          if (q.FK_BatchSemesterID == this._batchSemesterID) {
            return q.StudentSemesterRecordID;
          }
        });
      }
      return status;
    } catch (error) {
      console.log("Error in Getting the Student Status");
    }
  }
  getAllBatchSemesters(val) {
    try {
      jQuery("#addNewStudentFromRepository").hide();
      this._batchSemesterServiceCall.getAllSemesterByBatchID(val).subscribe(
        data => {
          if (data.StatusCode === 1) {
            this._semesterDataList = [];
            this._semesterDataList = data.ResponseObject;
          }
        },
        error => alert(error),
        () => console.log("Get All Batch Semesters API Called")
      );
    } catch (error) {
      console.log("Error in retriving Program Groups: " + error);
    }
  }

  getAllSectionStudents(val) {
    try {
      this._sectionID = val;
      this._batchStudentServiceCall
        .getAllBySectionID(val, this._batchSemesterID)
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._studentDataList = [];
              this._studentDataList = data.ResponseObject;
              // console.log("Student Data List : " + JSON.stringify(this._studentDataList));
            }
          },
          error => alert(error),
          () => console.log("Get All Section Students API Called")
        );
    } catch (error) {
      console.log("Error in getting the Section Students : " + error);
    }
  }

  viewStudentProfile(student) {
    try {
      this.sp = student.StudentProfile;
      jQuery("#studentProfile").modal("show");
    } catch (error) {
      console.log("Error in View Student Profile: " + error);
    }
  }

  confirmStudentProfileRemoval(student) {
    try {
      this.removeItemID = student.StudentProgramRegistrationID;
      this.confirmationMessage =
        student.BatchSemester.Description +
        " - " +
        student.StudentProfile.GivenName;
      jQuery("#modal-remove").modal("show");
    } catch (error) {
      console.log("Error in Showing Removal Confirmation Message.");
    }
  }

  remove(removeID) {
    try {
      this._studentProgramRegistrationServiceCall
        .removeByID(
          this._urlConstant.StudentProgramRegistrationModule,
          removeID
        )
        .subscribe(data => {
          if (data.StatusCode === 1) {
            this.showToast("Removed Successfully", "gritter-light");
            this.getAllBatchSemesterStudents(this._batchSemesterID);
            jQuery("#modal-remove").modal("hide");
          } else {
            this.showToast(data.ErrorMessage, "gritter-light");
          }
        });
    } catch (error) {
      console.log("Error in removing student from batch semester - " + error);
    }
  }

  getAllBatchSemesterStudents(val) {
    try {
      this.getSemesterSchedules(val);
      this.showStudentList();
      this._batchSemesterID = val;
      jQuery("#addNewStudentFromRepository").show();
      this._studentProgramRegistrationServiceCall
        .getAllByBatchSemesterID(val)
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._studentDataList = [];
              this._studentDataList = data.ResponseObject;
            }
          },
          error => alert(error),
          () => console.log("Get All Batch Student API Called")
        );
    } catch (error) {
      console.log("Error in retriving Program Groups: " + error);
    }
  }
  getAllByBatchSemesterIDandSectionID(val) {
    try {
      this.showStudentList();
      this._periodID = val;
      this._studentProgramRegistrationServiceCall
        .getAllByBatchSemesterIDandSectionID(
          this._batchSemesterID,
          this._sectionID
        )
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._studentDataList = [];
              this._studentDataList = data.ResponseObject;
              // console.log('Student List : ' + this._studentDataList);
            }
          },
          error => alert(error),
          () => console.log("Get All Batch Student API Called")
        );
    } catch (error) {
      console.log("Error in retriving Program Groups: " + error);
    }
  }
  getAllSemesterScheduleCourse(semesterScheduleID) {
    try {
      this._semesterScheduleID = semesterScheduleID;
      this._semesterCourseScheduleService
        .getAllBySemesterScheduleID(semesterScheduleID)
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._semesterCourseScheduleDataList = [];
              this._semesterCourseScheduleDataList = data.ResponseObject;
            }
          },
          error => alert(error),
          () => console.log("Get All Semester Schedule Courses API Called")
        );
    } catch (error) {
      console.log("Error in retriving Semester Schedule Courses : " + error);
    }
  }
  getAllStudentAttendance(semesterCourseScheduleID) {
    try {
      jQuery("#MarkAll").val("0");
      this._attendanceRegisterService
        .getByModuleMethodParameter(
          this._urlConstant.AttendanceRegisterModule,
          this._urlConstant.GetAllBySemesterCourseScheduleID,
          "?semesterScheduleID=" +
            semesterCourseScheduleID +
            "&batchSemesterID=" +
            this._batchSemesterID +
            "&sectionID=" +
            this._sectionID
        )
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._studentAttendanceDataList = [];
              this._studentAttendanceDataList = data.ResponseObject;
              jQuery("#MarkAll").show();
              // console.log("Student Attendance : " +JSON.stringify(this._studentAttendanceDataList));
              this._unlockedRecords = 0;
              this._studentAttendanceDataList.forEach(elements => {
                if (elements.Locked !== true) {
                  this._unlockedRecords = this._unlockedRecords + 1;
                }
                if (elements.Status !== "") {
                  jQuery("#MarkAll").hide();
                }
              });

              // console.log("Unlocked Records : " + this._unlockedRecords);
              // console.log('Student Attendance List : ' + JSON.stringify(this._studentAttendanceDataList));
              // console.log('Student List : ' + JSON.stringify(this._studentDataList));
            }
          },
          error => alert(error),
          () =>
            console.log(
              "Get All Semester Schedule by Batch Semester ID API Called"
            )
        );
    } catch (error) {
      console.log("Error in retriving Batch Semester Courses : " + error);
    }
  }

  getAttendanceText(status) {
    switch (status) {
      case "P":
        return "Present";
      case "L":
        return "Late";
      case "Q":
        return "A";
      case "V":
        return "Valid excuse provided";
    }
  }

  SaveAttendance() {
    try {
      let errorCount = 0;
      this._studentAttendanceDataList.forEach(element => {
        if (element.Status == "V") {
          let regEx = new RegExp("[a-zA-Z][a-zA-Z0-9s]*");
          if (regEx.test(element.Remarks) == false) {
            jQuery("#" + element.AttendanceRegisterID).css(
              "border-color",
              "red"
            );
            errorCount = errorCount + 1;
          } else {
            jQuery("#" + element.AttendanceRegisterID).css(
              "border-color",
              "#b5b5b5"
            );
          }
        }
      });

      if (this._unlockedRecords === 0) {
        this.showToast(
          "All Attendance Records are Locked. Unable to save attendance.",
          "gritter-light"
        );
        return "";
      }

      if (errorCount == 0) {
        this._attendanceRegisterService
          .updateAttendanceRegister(this._studentAttendanceDataList)
          .subscribe(
            data => {
              if (data.StatusCode === 0) {
                this.showToast(data.ErrorMessage, "gritter-light");
                jQuery("#errorMessageDateConfiguration").text(
                  data.ErrorMessage
                );
              } else {
                this.showToast(
                  "Attendance Updated Successfully.",
                  "gritter-light"
                );
              }
            },
            error => alert(error),
            () => console.log("Save Attendance Results.")
          );
      } else {
        this.showToast(
          "Valid Execuse and Late Absent should have remarks. Remarks should have only alphabets and numbers.",
          "gritter-light"
        );
      }
    } catch (error) {
      console.log("Error in Saving Attendance : " + error);
    }
  }

  markAllAttendance(val) {
    try {
      this._studentAttendanceDataList.forEach(q => (q.Status = val));
      // console.log(JSON.stringify(this._studentAttendanceDataList));
    } catch (error) {
      console.log("Error in marking attendance : " + error);
    }
  }

  getSemesterSchedules(batchSemesterID) {
    try {
      this.showStudentList();
      this._semsterScheduleService
        .getAllByBatchSemesterID(batchSemesterID)
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._semesterSchedulesDataList = [];
              this._semesterSchedulesDataList = data.ResponseObject;
            }
          },
          error => alert(error),
          () => console.log("Get All Semester Schedules API Called")
        );
    } catch (error) {
      console.log("Error in retriving Semester Schedules : " + error);
    }
  }

  UpdateStudentList() {
    try {
      this.getAllBatchSemesterStudents(this._batchSemesterID);
    } catch (error) {
      console.log("Error in Updating the Student List : " + error);
    }
  }

  getAllSectionWeeklySchedule(sectionID) {
    try {
      this._sectionID = sectionID;
      this._sectionWeeklyScheduleServiceCall
        .getAllBySectionAndBatchSemesterID(sectionID, this._batchSemesterID)
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._semesterWeeklyScheduleDataList = [];
              this._semesterWeeklyScheduleDataList = data.ResponseObject;
            }
          },
          error => alert(error),
          () => console.log("Get All Section Weekly Schedule API Called")
        );
    } catch (error) {
      console.log("Error in receiving Section Weekly Schedules : " + error);
    }
  }

  getSemesterWeekDaysSchedule(sectionWeeklyScheduleID) {
    try {
      this._sectionWeeklyScheduleID = sectionWeeklyScheduleID;
      this._sectionWeekDayScheduleServiceCall
        .getAllBySectionWeeklyScheduleID(sectionWeeklyScheduleID)
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._semesterWeekDayScheduleDataList = [];
              this._semesterWeekDayScheduleDataList = data.ResponseObject;
              // console.log('Semester Weekly Day Schedule : ' + JSON.stringify(this._semesterWeekDayScheduleDataList));
            }
          },
          error => alert(error),
          () => console.log("Get All Semester Week Day Schedule API Called")
        );
    } catch (error) {
      console.log("Error in receiving Semester Week Day Schedule : " + error);
    }
  }

  getSemesterDaySchedule(sectionWeekDayScheduleID) {
    try {
      this._studentAttendanceDataList = [];
      this._sectionWeekDayScheduleID = sectionWeekDayScheduleID;
      this._sectionDaySchedulesServiceCall
        .getAllBySectionWeekDayScheduleID(sectionWeekDayScheduleID)
        .subscribe(
          data => {
            if (data.StatusCode === 1) {
              this._sectionPeriodScheduleDataList = [];
              this._sectionPeriodScheduleDataList = data.ResponseObject;
              // console.log( "Section Period Schedule : " +JSON.stringify(this._sectionPeriodScheduleDataList));
            } else {
              console.log(data.ErrorMessage);
            }
          },
          error => alert(error),
          () => console.log("Retrieve Semester Day Schedule API Called")
        );
    } catch (error) {
      console.log("Error in receiving Semester Day Schedules : " + error);
    }
  }

  resetSemesterGradeRecordViewModel() {
    this._semesterGradeRecord = {
      SemesterAverage: 0,
      StudentSemesterRecordID: 0,
      ObtainedMark: 0,
      TotalMark: 0,
      Remarks: "",
      Status: ""
    };
  }

  resetTranscriptViewModel() {
    this._transcriptViewModel = {
      StudentID: 0,
      StudentName: "",
      Code: "",
      CurrentProgram: "",
      CurrentCampus: "",
      CurrentBlock: "",
      semesterDetailViewModel: []
    };
  }

  resetSemesterDetailViewModel() {
    this._semesterDetailViewModel = {
      Index: 0,
      ProgramAggregate: "",
      SemesterTitle: "",
      SemesterCredits: 0,
      SemesterGPA: 0,
      CourseDetail: []
    };
  }

  resetCourseDetailViewModel() {
    this._courseDetailViewModel = {
      Code: "",
      BookCode: "",
      CourseTitle: "",
      Credit: "",
      Grade: "",
      Score: 0
    };
  }
  resetAttendanceRegisterViewModel() {
    this._attendanceRegisterViewModel = {
      AttendanceRegisterID: 0,
      FK_SemesterCourseScheduleID: 0,
      FK_StudentProfileID: 0,
      Remarks: "",
      Status: ""
    };
  }
  resetSemesterGradeViewModel() {
    this._semesterGrade = {
      BatchSemesterCourseID: 0,
      FK_BatchSemesterID: 0,
      FK_StudentProgramRegistrationID: 0,
      StudentCourseMarkID: 0,
      CourseFullName: "",
      MaxMark: 0,
      AllocatedMarkPercentage: 0,
      MarkObtained: 0,
      Average: 0,
      Remarks: "",
      Status: ""
    };
    this._semesterGradeForm = this._fb.group({
      BatchSemesterCourseID: ["", Validators.required],
      FK_BatchSemesterID: ["", Validators.required],
      FK_StudentProgramRegistrationID: ["", Validators.required],
      StudentCourseMarkID: ["", Validators.required],
      CourseFullName: ["", Validators.required],
      MaxMark: ["", Validators.required],
      AllocatedMarkPercentage: ["", Validators.required],
      MarkObtained: ["", Validators.required],
      Average: ["", Validators.required],
      Remarks: ["", Validators.required],
      Status: ["", Validators.required]
    });
  }

  addFromStudentRepository() {
    try {
      jQuery("#addNewStudentToSemester").modal("show");
    } catch (error) {
      console.log("Error in adding Student from Repository");
    }
  }

  showToast(message, style) {
    jQuery("#_alertMessageText").text(message);
    jQuery("#alertMessageDialog").modal("show");
  }

  showStudentList() {
    jQuery("#markList").hide();
    jQuery("#transferSemester").show();
    jQuery("#studentList").show();
    jQuery("#transcript").hide();
    jQuery("#tblResult").hide();
    jQuery("#dvResult").hide();
  }
  showTranscript() {
    jQuery("#markList").hide();
    jQuery("#transferSemester").hide();
    jQuery("#studentList").hide();
    jQuery("#transcript").show();
    jQuery("#tblResult").hide();
    jQuery("#dvResult").hide();
  }
  showMarkList() {
    jQuery("#markList").show();
    jQuery("#studentList").hide();
    jQuery("#transferSemester").show();
    jQuery("#tblResult").show();
    jQuery("#dvResult").show();
    jQuery("#transcript").hide();
  }
}
