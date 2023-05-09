// header
{/* <a class="z99 pointer absolute t5 r10 p20 textThemeHvr" onclick="document.getElementById('inputSearch').classList.toggle('hide');"><span class="ti-search h4 block"></a>
<input id="inputSearch" type="text" placeholder="Search & Enter" autofocus> */}

document.querySelector('header').innerHTML = /*html*/`
    <a class="menuBtn" onclick="document.body.classList.toggle('navOpen');"><span class="ti-menu"></a>
    <img class="certLogo" src="img/cert-logo.png" title="Higher Colleges of Technology">
    <div class="userBox dropdown" >
        <a class="" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="ti-user"></span>
            <div class="name">
                <p>Niyazar Alavudeen</p>
                <h6>ITC</h6>
            </div>
            <div class="clearfix"></div>
        </a>
        <ul class="dropdown-menu">
            <li><a class="" href=""><i class="ti-id-badge"></i>Profile</a></li>
            <li><a class="" href=""><i class="ti-settings"></i>Settings</a></li>
            <li><a class="" href="index.html"><i class="ti-power-off"></i>Logout</a></li>
        </ul>
    </div>

`;

// footer
document.querySelector('footer').innerHTML = /*html*/`
    <div class="container pt-0 textBlack5">
        <div class="clearfix mb-3" style="border: 1px solid var(--black1);"></div>
        <p class="float-start">Powered by: Cert Telematics</p>
        <p class="float-end">Integrated Transport Center</p>
        <div class="clearfix"></div>
    </div>
`;

// navigation aside
document.querySelector('aside').innerHTML = /*html*/`
<nav class="sideNav">
    <ul>
        <li id="Home"><a href="home.html"><i class="ti-home"></i>Home</a></li>
        <li id="Dashboard"><a href="dashboard.html"><i class="ti-dashboard"></i>Dashobard</a></li>
        <li id="Jobs"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddJobs"><i class="ti-car"></i>Jobs</a>
            <ul id="ddJobs" class="collapse">
                <li id="CurrentJobs"><a href="jobs.html">Current Jobs</a></li>
                <li id="AdvanceJobs"><a href="jobs.html">Advance Jobs</a></li>
                <li id="StreetJobs"><a href="jobs.html">Street Jobs</a></li>
                <li id="RecurringJobs"><a href="jobs.html">Recurring Jobs</a></li>
                <li id="HistoryJobs"><a href="jobs.html">History</a></li>
                <li id="ReportsJobs"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddJobReports" >Reports</a>
                    <ul id="ddJobReports" class="collapse">
                        <li id="DriverJobs"><a href="jobs.html">Driver Jobs</a></li>
                        <li id="ConfirmedJob"><a href="jobs.html">Confirmed Job</a></li>
                        <li id="ManualDispatcher"><a href="jobs.html">Manual Dispatcher</a></li>
                        <li id="DispatcherDetails"><a href="jobs.html">Dispatcher Details</a></li>
                        <li id="DispatcherSummary"><a href="jobs.html">Dispatcher Summary</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="FleetManagement"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddFleetManagement" aria-expanded="false"><i class="ti-direction-alt"></i>Fleet Management</a>
            <ul id="ddFleetManagement" class="collapse">
                <li id="DriversFleet"><a href="fleet.html">Drivers</a></li>
                <li id="FleetDashBoard"><a href="fleet.html">Fleet DashBoard</a></li>
                <li id="TaxiFleet"><a href="fleettaxi.html">Taxi</a></li>
                <li id="AssignDriver"><a href="fleet.html">Assign Driver</a></li>
                <li id="StatusLogs"><a href="fleet.html">Status Logs</a></li>
                <li id="ShiftAssignment"><a href="fleet.html">Shift Assignment</a></li>
                <li id="NRTFleet"><a href="fleet.html">NRT</a></li>
                <li id="MCC"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddMCC">MCC</a>
                    <ul id="ddMCC" class="collapse">
                        <li id="MCCCamera"><a href="fleet.html">MCC Camera</a></li>
                        <li id="InsTallationReport"><a href="fleet.html">InsTallation Report</a></li>
                    </ul>
                </li>
                <li id="ReportFleet"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddReportFleet">Report</a>
                    <ul id="ddReportFleet" class="collapse">
                        <li id="DriversNotReported"><a href="fleet.html">Drivers Not Reported</a></li>
                        <li id="DeadKMReport"><a href="fleet.html">Dead KM</a></li>
                        <li id="NRTReport"><a href="fleet.html">NRT</a></li>
                        <li id="DistanceTravelled"><a href="fleet.html">Distance Travelled</a></li>
                        <li id="DriverTipsSummary"><a href="fleet.html">Driver Tips Summary</a></li>
                        <li id="TaxiRegistration"><a href="fleet.html">Taxi Registration</a></li>
                        <li id="DriverRegistration"><a href="fleet.html">Driver Registration</a></li>
                        <li id="DriverAssignment"><a href="fleet.html">Driver Assignment</a></li>
                        <li id="DriverAssignmentHistory"><a href="fleet.html">Driver Assignment History</a></li>
                        <li id="DoubleShiftSummary"><a href="fleet.html">Double Shift Summary</a></li>
                        <li id="DoubleShiftDetails"><a href="fleet.html">Double Shift Details</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="Messages"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddMessages"><i class="ti-comments"></i>Messages</a>
            <ul id="ddMessages" class="collapse">
                <li id="ReceivedMessages"><a href="messages.html">Received Messages</a></li>
                <li id="SentMessages"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddSentMessages">Sent Messages </a>
                    <ul id="ddSentMessages" class="collapse">
                        <li id="LostFound"><a href="messages.html">Lost &amp; Found</a></li>
                        <li id="TaxiBreakDown"><a href="messages.html">Taxi Break Down</a></li>
                        <li id="FreeText"><a href="messages.html">Free Text</a></li>
                        <li id="MessageCashier"><a href="messages.html">Message Cashier</a></li>
                        <li id="OverSpeedMessage"><a href="messages.html">Over Speed Message</a></li>
                    </ul>
                </li>
                <li id="Events Dashboard"><a href="messages.html">Events Dashboard</a></li>
                <li id="SMSMessage"><a href="messages.html">SMS</a></li>
                <li id="MDTMessage"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddMDTMessage">MDT Message</a>
                    <ul id="ddMDTMessage" class="collapse">
                        <li id="MessagesManagement"><a href="messages.html">Messages Management</a></li>
                        <li id="MessagesConfiguration"><a href="messages.html">Messages Configuration</a></li>
                        <li id="DailyMessageQuota"><a href="messages.html">Daily Message Quota</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="Tracking"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddTracking" aria-expanded="false"><i class="ti-target"></i>Tracking</a>
            <ul id="ddTracking" class="collapse">
                <li id="TaxiStatusTracking"><a href="tracking.html">Taxi Status</a></li>
                <li id="TrackOnMap"><a href="tracking.html">Track On Map</a></li>
                <li id="TaxiAvailability"><a href="tracking.html">Taxi Availability</a></li>
                <li id="UpdateAddress"><a href="tracking.html">Update Address</a></li>
                <li id="GPSStatus"><a href="tracking.html">GPS Status</a></li>
                <li id="TripsonHeatmap"><a href="tracking.html">Trips on Heatmap</a></li>
            </ul>
        </li>
        <li id="Revenue"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddRevenue" aria-expanded="false"><i class="ti-medall"></i>Revenue</a>
            <ul id="ddRevenue" class="collapse">
                <li id="Payments"><a href="revenue.html">Payments</a></li>
                <li id="PaymentMonitor"><a href="revenue.html">Payment Monitor</a></li>
                <li id="BlackShift"><a href="revenue.html">Black Shift</a></li>
                <li id="PaymentBacklog"><a href="revenue.html">Payment Backlog</a></li>
                <li id="TaxiPaymentMonitor"><a href="revenue.html">Taxi Payment Monitor</a></li>
                <li id="LoginPermission"><a href="revenue.html">Login Permission</a></li>
                <li id="QRCodeDetails"><a href="revenue.html">QR Code Details</a></li>
                <li id="CreditCardPayments"><a href="revenue.html">Credit Card Payments</a></li>
                <li id="ReportsRevenue"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddReportsRevenue">Reports</a>
                    <ul id="ddReportsRevenue" class="collapse">
                        <li id="CCAdjustment"><a href="revenue.html">CC Adjustment</a></li>
                        <li id="QRComplaints"><a href="revenue.html">QR Complaints</a></li>
                        <li id="CashierReports"><a href="revenue.html">Cashier</a></li>
                        <li id="DriverReports"><a href="revenue.html">Driver</a></li>
                        <li id="CreditCardReports"><a href="revenue.html">Credit Card</a></li>
                        <li id="TaxiReports"><a href="revenue.html">Taxi</a></li>
                        <li id="ZoneReports"><a href="revenue.html">Zone</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="Admin"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddAdmin" aria-expanded="false"><i class="ti-crown"></i>Admin</a>
            <ul id="ddAdmin" class="collapse">
                <li id="CustomersAdmin"><a href="admin.html">Customers</a></li>
                <li id="HelpDeskAdmin"><a href="admin.html">Help Desk</a></li>
                <li id="CameraAdmin"><a href="admin.html">Camera</a></li>
                <li id="FranchiseeDashboard"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddFranchiseeDashboard">Franchisee Dashboard</a>
                    <ul id="ddFranchiseeDashboard" class="collapse">
                        <li id="DeviceDetail"><a href="admin.html">Device Detail</a></li>
                    </ul>
                </li>
                <li id="Operator"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddOperator">Operator</a>
                    <ul id="ddOperator" class="collapse">
                        <li id="Terminal"><a href="admin.html">Terminal</a></li>
                    </ul>
                </li>
                <li id="Taxis"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddTaxis">Taxis</a>
                    <ul id="ddTaxis" class="collapse">
                        <li id="DeviceDetailTaxis"><a href="admin.html">Device Detail</a></li>
                        <li id="FirmwareTaxis"><a href="admin.html">Firmware</a></li>
                    </ul>
                </li>
                <li id="User"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddUser">User</a>
                    <ul id="ddUser" class="collapse">
                        <li id="Users"><a href="admin.html">Users</a></li>
                        <li id="RolesUser"><a href="admin.html">Roles</a></li>
                        <li id="RoleAccess"><a href="admin.html">Role Access</a></li>
                        <li id="UserRoles"><a href="admin.html">User Roles</a></li>
                        <li id="UserRequest"><a href="admin.html">User Request</a></li>
                        <li id="PasswordConfigPolicy"><a href="admin.html">Password Config Policy</a></li>
                        <li id="ReportUserList"><a href="admin.html">Report User List</a></li>
                        <li id="ReportUserRoles"><a href="admin.html">Report User Roles</a></li>
                    </ul>
                </li>
                <li id="SSC"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddSSC">SSC</a>
                    <ul id="ddSSC" class="collapse">
                        <li id="MemberSSC"><a href="admin.html">Member</a></li>
                        <li id="UsageGroup"><a href="admin.html">Usage Group</a></li>
                        <li id="Nationality"><a href="admin.html">Nationality</a></li>
                        <li id="AuthProof"><a href="admin.html">Auth Proof</a></li>
                    </ul>
                </li>
                <li id="Settings"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddSettings">Settings</a>
                    <ul id="ddSettings" class="collapse">
                        <li id="FranchiseeConfig"><a href="admin.html">Franchisee Config</a></li>
                        <li id="DeveloperSettings"><a href="admin.html">Developer Settings</a></li>
                        <li id="DashBoardKPI"><a href="admin.html">DashBoard KPI</a></li>
                        <li id="FuelMaster"><a href="admin.html">Fuel Master</a></li>
                        <li id="PublishFiles"><a href="admin.html">Publish Files</a></li>
                        <li id="SystemDowntime"><a href="admin.html">System Downtime</a></li>
                        <li id="RevenueCashierConfig"><a href="admin.html">Revenue Cashier Config</a></li>
                    </ul>
                </li>
                <li id="Support"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddSupport">Support</a>
                    <ul id="ddSupport" class="collapse">
                        <li id="UpdateSupport"><a href="admin.html">Update</a></li>
                        <li id="AddQRTrip"><a href="admin.html">Add QR Trip</a></li>
                        <li id="ShiftClose"><a href="admin.html">Shift Close</a></li>
                        <li id="SSCUpdates"><a href="admin.html">SSC Updates</a></li>
                        <li id="CCSupport"><a href="admin.html">CC Support</a></li>
                        <li id="MonitorSupport"><a href="admin.html">Monitor</a></li>
                        <li id="AddCCRecord"><a href="admin.html">Add CC Record</a></li>
                    </ul>
                </li>
                <li id="Audit"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddAudit">Audit</a>
                    <ul id="ddAudit" class="collapse">
                        <li id="AuditTrails"><a href="admin.html">Audit Trails</a></li>
                    </ul>
                </li>
                <li id="ReportsAdmin"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddReportsAdmin">Reports</a>
                    <ul id="ddReportsAdmin" class="collapse">
                        <li id="CustomerList"><a href="admin.html">Customer List</a></li>
                        <li id="MobileCCCustomers"><a href="admin.html">Mobile CC Customers</a></li>
                        <li id="SupportSummary"><a href="admin.html">Support Summary</a></li>
                        <li id="SupportSLASummary"><a href="admin.html">Support SLA Summary</a></li>
                        <li id="SupportSLADetails"><a href="admin.html">Support SLA Details</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="Inventory"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddInventory" aria-expanded="false"><i class="ti-package"></i>Inventory</a>
            <ul id="ddInventory" class="collapse">
                <li id="Installation"><a href="inventory.html">Installation</a></li>
                <li id="Activation"><a href="inventory.html">Activation</a></li>
                <li id="ActivatedInventory"><a href="inventory.html">Activated Inventory</a></li>
                <li id="TotalLossReinstallation"><a href="inventory.html">TotalLoss Reinstallation</a></li>
                <li id="MasterInventory"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddMasterInventory">Master</a>
                    <ul id="ddMasterInventory" class="collapse">
                        <li id="SimMaster"><a href="inventory.html">Sim</a></li>
                        <li id="UnitMaster"><a href="inventory.html">Unit</a></li>
                        <li id="TaxiMaster"><a href="inventory.html">Taxi</a></li>
                        <li id="ProductMaster"><a href="inventory.html">Product</a></li>
                        <li id="PrintersMaster"><a href="inventory.html">Printers</a></li>
                        <li id="POSMaster"><a href="inventory.html">POS</a></li>
                        <li id="RoofLights"><a href="inventory.html">RoofLights</a></li>
                    </ul>
                </li>
                <li id="ADDReplacement"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddADDReplacement">ADD/Replacement</a>
                    <ul id="ddADDReplacement" class="collapse">
                        <li id="DevicesADDReplacement"><a href="inventory.html">Devices</a></li>
                    </ul>
                </li>
                <li id="Repair"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddRepair">Repair</a>
                    <ul id="ddRepair" class="collapse">
                        <li id="RepairLogSheet"><a href="inventory.html">Repair LogSheet</a></li>
                        <li id="ReturnRejects"><a href="inventory.html">Return Rejects</a></li>
                        <li id="RepairApprovals"><a href="inventory.html">Repair Approvals</a></li>
                        <li id="RepRequestInvoice"><a href="inventory.html">RepRequest Invoice</a></li>
                    </ul>
                </li>
                <li id="ReportsInventory"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddReportsInventory">Reports</a>
                    <ul id="ddReportsInventory" class="collapse">
                        <li id="ReInstallation"><a href="inventory.html">Re Installation</a></li>
                        <li id="RepairRequestItems"><a href="inventory.html">RepairRequest Items</a></li>
                        <li id="TotalLossReinstallation"><a href="inventory.html">TotalLoss Reinstallation</a></li>
                        <li id="RepairCharges"><a href="inventory.html">Repair Charges</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="Reports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddReports" aria-expanded="false"><i class="ti-receipt"></i>Reports</a>
            <ul id="ddReports" class="collapse">
                <li id="CCDashboardReports"><a href="reports.html">CC Dashboard</a></li>
                <li id="SentMessagesReports"><a href="reports.html">Sent Messages</a></li>
                <li id="SMSSentReports"><a href="reports.html">SMS Sent</a></li>
                <li id="DriverReports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddDriverReports">Driver</a>
                    <ul id="ddDriverReports" class="collapse">
                        <li id="ActivityReport"><a href="reports.html">Activity Report</a></li>
                        <li id="SpeedException"><a href="reports.html">Speed Exception</a></li>
                        <li id="24HrsNotLoggedOut"><a href="reports.html">24Hrs Not Logged Out</a></li>
                        <li id="LastPayment"><a href="reports.html">Last Payment</a></li>
                        <li id="LowAvgIncome"><a href="reports.html">Low Avg Income</a></li>
                        <li id="LowRevenueKMPerc"><a href="reports.html">Low Revenue KM Perc</a></li>
                        <li id="DriverLog"><a href="reports.html">Driver Log</a></li>
                        <li id="AlarmDriver"><a href="reports.html">Alarm</a></li>
                        <li id="SuspiciousTrips"><a href="reports.html">Suspicious Trips</a></li>
                        <li id="DriverJobsSummary"><a href="reports.html">Driver Jobs Summary</a></li>
                        <li id="DriverJobsRefused"><a href="reports.html">Driver Jobs Refused</a></li>
                        <li id="DriverJobDetails"><a href="reports.html">Driver Job Details</a></li>
                        <li id="AnalysisDriver"><a href="reports.html">Analysis</a></li>
                    </ul>
                </li>
                <li id="JobsReports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddJobsReports">Jobs</a>
                    <ul id="ddJobsReports" class="collapse">
                        <li id="CurrentBooking"><a href="reports.html">Current Booking</a></li>
                        <li id="RegionWise"><a href="reports.html">Region Wise</a></li>
                        <li id="RegionWise"><a href="reports.html">Region Wise</a></li>
                        <li id="BillableJobDetails"><a href="reports.html">Billable Job Details</a></li>
                        <li id="BillableJobSummary"><a href="reports.html">Billable Job Summary</a></li>
                        <li id="JobSummary"><a href="reports.html">Job Summary</a></li>
                        <li id="FranchiseeJobDetail"><a href="reports.html">Franchisee Job Details</a></li>
                        <li id="BidSummary"><a href="reports.html">Bid Summary</a></li>
                    </ul>
                </li>
                <li id="RevenueReports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddRevenueReports">Revenue</a>
                    <ul id="ddRevenueReports" class="collapse">
                        <li id="AuditLog"><a href="reports.html">AuditLog</a></li>
                        <li id="TripEReceipt"><a href="reports.html">Trip EReceipt</a></li>
                        <li id="PendingCollection"><a href="reports.html">Pending Collection</a></li>
                        <li id="DriverDailyIncome"><a href="reports.html">Driver Daily Income</a></li>
                        <li id="DriverBlackShift"><a href="reports.html">Driver Black Shift</a></li>
                        <li id="DefaultDriverID"><a href="reports.html">Default Driver ID</a></li>
                        <li id="DriverDailyFare"><a href="reports.html">Driver Daily Fare</a></li>
                    </ul>
                </li>
                <li id="InventoryReports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddInventoryReports">Inventory</a>
                    <ul id="ddInventoryReports" class="collapse">
                        <li id="InstallationSheet"><a href="reports.html">Installation Sheet</a></li>
                        <li id="ItemHistory"><a href="reports.html">Item History</a></li>
                        <li id="SimReplacement"><a href="reports.html">Sim Replacement</a></li>
                        <li id="UnitInstallationHistory"><a href="reports.html">Unit Installation History</a></li>
                        <li id="OverSpeedForCERT"><a href="reports.html">OverSpeed For CERT</a></li>
                    </ul>
                </li>
                <li id="RegulationReports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddRegulationReports">Regulation</a>
                    <ul id="ddRegulationReports" class="collapse">
                        <li id="RNLReport"><a href="reports.html">RNL Report</a></li>
                        <li id="CallCenterReport"><a href="reports.html">Call Center Report</a></li>
                        <li id="FranchiseesDailyPerformance"><a href="reports.html">Franchisees Daily Performance</a></li>
                        <li id="OverSpeed"><a href="reports.html">Over Speed </a></li>
                        <li id="VacantVersusOnduty"><a href="reports.html">Vacant Versus Onduty</a></li>
                        <li id="KPIRegulation"><a href="reports.html">KPI</a></li>
                        <li id="TaxiAvailability"><a href="reports.html">Taxi Availability</a></li>
                        <li id="AveragePickupTime"><a href="reports.html">Average Pickup Time</a></li>
                        <li id="TripsHourlyReport"><a href="reports.html">Trips Hourly Report</a></li>
                        <li id="TaxiHourlyReport"><a href="reports.html">Taxi Hourly Report</a></li>
                        <li id="TaxiUtilisatio"><a href="reports.html">Taxi Utilisation</a></li>
                        <li id="CurrentJobsHourly"><a href="reports.html">Current Jobs Hourly</a></li>
                        <li id="AdvanceJobsHourly"><a href="reports.html">Advance Jobs Hourly</a></li>
                    </ul>
                </li>
                <li id="ZoneReports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddZoneReports">Zone</a>
                    <ul id="ddZoneReports" class="collapse">
                        <li id="ZoneDashboard"><a href="reports.html">Zone Dashboard</a></li>
                    </ul>
                </li>
                <li id="ComplaintReports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddComplaintReports">Complaint</a>
                    <ul id="ddComplaintReports" class="collapse">
                        <li id="Franchisewise"><a href="reports.html">Franchisewise</a></li>
                        <li id="OpenComplaint"><a href="reports.html">Open</a></li>
                        <li id="Category/Severity"><a href="reports.html">Category/Severity</a></li>
                        <li id="GraphicalComplaint"><a href="reports.html">Graphical</a></li>
                        <li id="SummaryComplaint"><a href="reports.html">Summary</a></li>
                        <li id="Monthwise/Yearly"><a href="reports.html">Monthwise/Yearly</a></li>
                        <li id="HandledComplaint"><a href="reports.html">Handled</a></li>
                        <li id="StatusComplaint"><a href="reports.html">Status</a></li>
                    </ul>
                </li>
                <li id="LostFoundReports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddLostFoundReports">Lost &amp; Found</a>
                    <ul id="ddLostFoundReports" class="collapse">
                        <li id="SummaryLostFound"><a href="reports.html">Summary</a></li>
                        <li id="WeeklyReport"><a href="reports.html">Weekly Report</a></li>
                        <li id="FoundItems"><a href="reports.html">Found Items</a></li>
                    </ul>
                </li>
                <li id="SSCReports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddSSCReports">SSC</a>
                    <ul id="ddSSCReports" class="collapse">
                        <li id="SSCSummary"><a href="reports.html">SSC Summary</a></li>
                        <li id="SSCDetail"><a href="reports.html">SSC Detail</a></li>
                        <li id="SSCFraud"><a href="reports.html">SSC Fraud</a></li>
                        <li id="SSCInvestigation"><a href="reports.html">SSC Investigation</a></li>
                        <li id="PaymentStatusSSC"><a href="reports.html">Payment Status</a></li>
                        <li id="AuditSSC"><a href="reports.html">Audit</a></li>
                        <li id="PaymentSummarySSC"><a href="reports.html">Payment Summary</a></li>
                        <li id="ReplacedCardsSSC"><a href="reports.html">Replaced Cards</a></li>
                        <li id="SSCCardUtilization"><a href="reports.html">SSCCard Utilization</a></li>
                        <li id="CardsIssuedSSC"><a href="reports.html">Cards Issued</a></li>
                    </ul>
                </li>
                <li id="TaxiReports"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddTaxiReports">Taxi</a>
                    <ul id="ddTaxiReports" class="collapse">
                        <li id="TaxiTripReport"><a href="reports.html">Taxi Trip Report</a></li>
                        <li id="TaxiTypeZoneWise"><a href="reports.html">Taxi Type/Zone Wise</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="Complaints"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddComplaints" aria-expanded="false"><i class="ti-comment-alt"></i>Complaints</a>
            <ul id="ddComplaints" class="collapse">
                <li id="ComplaintList"><a href="complaints.html">Complaint List</a></li>
                <li id="EnquiryComplaints"><a href="complaints.html">Enquiry</a></li>
                <li id="LostandFound"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddLostandFound">Lost and Found</a>
                    <ul id="ddLostandFound" class="collapse">
                        <li id="TripLocatorComplaints"><a href="complaints.html">Trip Locator</a></li>
                        <li id="LostItemComplaints"><a href="complaints.html">Lost Item Complaints</a></li>
                        <li id="FoundItemsComplaints"><a href="complaints.html">Found Items</a></li>
                        <li id="HandOverComplaints"><a href="complaints.html">Hand Over</a></li>
                        <li id="AutoTripLocator"><a href="complaints.html">Auto Trip Locator</a></li>
                        <li id="DisposeFoundItems"><a href="complaints.html">Dispose Found Items</a></li>
                        <li id="DisposedItems"><a href="complaints.html">Disposed Items</a></li>
                        <li id="MDTFoundItems"><a href="complaints.html">MDT Found Items</a></li>
                    </ul>
                </li>
                <li id="Suspension"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddSuspension">Suspension</a>
                    <ul id="ddSuspension" class="collapse">
                        <li id="TaxiSuspension"><a href="complaints.html">Taxi</a></li>
                        <li id="DriverSuspension"><a href="complaints.html">Driver</a></li>
                        <li id="ReleaseSuspension"><a href="complaints.html">Release</a></li>
                        <li id="SuspensionMDTReports"><a href="complaints.html">Suspension MDT Reports</a></li>
                    </ul>
                </li>
                <li id="ReportsComplaints"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddReportsComplaints">Reports</a>
                    <ul id="ddReportsComplaints" class="collapse">
                        <li id="ComplaintsByStatus"><a href="complaints.html">Complaints By Status</a></li>
                        <li id="ComplaintStatusMatrix"><a href="complaints.html">Complaint Status Matrix</a></li>
                        <li id="ComplaintsAdho"><a href="complaints.html">Complaints Adhoc</a></li>
                        <li id="LFByStatus"><a href="complaints.html">L&amp;F By Status</a></li>
                        <li id="LFStatusMatrix"><a href="complaints.html">L&amp;F Status Matrix</a></li>
                        <li id="LFAdhoc"><a href="complaints.html">L&amp;F Adhoc</a></li>
                        <li id="EnquiryComments"><a href="complaints.html">Enquiry &amp; Comments</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="ControlRoom"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddControlRoom" aria-expanded="false"><i class="ti-shield"></i>Control Room</a>
            <ul id="ddControlRoom" class="collapse">
                <li id="OTAManagement"><a href="controlroom.html">OTA Management</a></li>
                <li id="StandardMessage"><a href="controlroom.html">Standard Message</a></li>
                <li id="EventManagement"><a a href="controlroom.html">Event Management</a></li>
            </ul>
        </li>
        <li id="CallCenter"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddCallCenter" aria-expanded="false"><i class="ti-headphone"></i>Call Center</a>
            <ul id="ddCallCenter" class="collapse">
                <li id="SSCComplaints"><a href="callcenter.html">SSC Complaints</a></li>
                <li id="DriverComplaints"><a href="callcenter.html">Driver Complaints</a></li>
                <li id="SuggestionComments"><a href="callcenter.html">Suggestion &amp; Comments</a></li>
                <li id="ReportCallCenter"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddReportCallCenter">Report</a>
                    <ul id="ddReportCallCenter" class="collapse">
                        <li id="SSCReports"><a href="callcenter.html">SSC Reports</a></li>
                        <li id="DriverReports"><a href="callcenter.html">Driver Reports</a></li>
                        <li id="SuggestionReports"><a href="callcenter.html">Suggestion Reports</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li id="IVRS"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddIVRS" aria-expanded="false"><i class="ti-check-box"></i>IVRS</a>
            <ul id="ddIVRS" class="collapse">
                <li id="ReportsIVRS"><a href="ivrs.html">Reports</a></li>
                <li id="AgentsIVRS"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddAgentsIVRS">Agents</a>
                    <ul id="ddAgentsIVRS" class="collapse">
                        <li id="AgentsPerformanceReport"><a href="ivrs.html">Agents Performance Report</a></li>
                        <li id="AgentsCallDetails"><a href="ivrs.html">Agents Call Details</a></li>
                        <li id="AgentStatistics"><a href="ivrs.html">Agent Statistics</a></li>
                    </ul>
                </li>
                <li id="CallsIVRS"><a class="collapsed arow" data-bs-toggle="collapse" data-bs-target="#ddCallsIVRS">Calls</a>
                    <ul id="ddCallsIVRS" class="collapse">
                        <li id="TotalCallsQueue"><a href="ivrs.html">Total Calls Queue</a></li>
                        <li id="OfferedCalls"><a href="ivrs.html">Offered Calls</a></li>
                        <li id="TotalCallsReport"><a href="ivrs.html">Total Calls Report</a></li>
                        <li id="OfferedCallsReport"><a href="ivrs.html">Offered Calls Report</a></li>
                        <li id="DroppedCallsBefore"><a href="ivrs.html">Dropped Calls Before</a></li>
                        <li id="DroppedCallsIn"><a href="ivrs.html">Dropped Calls In</a></li>
                    </ul>
                </li>
            </ul>
        </li>
       
    </ul>
</nav>
<div class="clearfix"></div>
`;

// darkLayer
var darkLayer = document.createElement('div');
darkLayer.classList = 'darkLayer';
darkLayer.onclick = function() { document.body.classList.remove('navOpen'); }
document.body.appendChild(darkLayer);

// dropdown 
function dropdown(id) {
    let current = document.getElementById(id);
    var elements = document.querySelectorAll(".show");
    elements.forEach(e => {
        if (e.classList.contains('show') && e.id != current.id)
            e.classList.remove('show')
    });
    current.classList.toggle("show");
};

// common funcitons for add, remove or toggle
function add(id, className) {document.getElementById(id).classList.add(className);};
function remove(id, className) {document.getElementById(id).classList.remove(className);};
function toggle(id, className) {document.getElementById(id).classList.toggle(className)};



