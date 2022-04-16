"use strict";
(self["webpackChunkPeerAssessment"] = self["webpackChunkPeerAssessment"] || []).push([["main"],{

/***/ 2455:
/*!************************************************!*\
  !*** ./src/app/admin/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 6662);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 1363);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2455);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard.service */ 2394);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 1832);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.DashboardService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_1__.MyProfileComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule], exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_1__.MyProfileComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent] }); })();


/***/ }),

/***/ 6662:
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dashboard.service */ 2394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function DashboardComponent_li_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, client_r5, 0, 10), " ");
} }
function DashboardComponent_a_58_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_a_58_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onProjectChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r6);
} }
function DashboardComponent_a_64_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r9);
} }
function DashboardComponent_a_64_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r9);
} }
function DashboardComponent_a_64_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r9);
} }
function DashboardComponent_a_64_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r9);
} }
function DashboardComponent_a_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 41)(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_a_64_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_a_64_span_3_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_a_64_span_4_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_a_64_span_5_Template, 2, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const year_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", year_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "2018");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "2017");
} }
function DashboardComponent_tr_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const teamMemberSumary_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](teamMemberSumary_r18.Region);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", teamMemberSumary_r18.TeamMembersCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", teamMemberSumary_r18.TemporarilyUnavailableMembers, " ");
} }
function DashboardComponent_div_105_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
} }
function DashboardComponent_div_105_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51)(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const member_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" #", member_r27.ID, " ", member_r27.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r27.Status);
} }
function DashboardComponent_div_105_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DashboardComponent_div_105_ng_template_8_div_0_Template, 5, 3, "div", 38);
} if (rf & 2) {
    const teamMembersGroup_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", teamMembersGroup_r19.Members);
} }
function DashboardComponent_div_105_ng_template_10_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const member_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r30.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", member_r30.Status == "Busy" ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", member_r30.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r30.Status);
} }
function DashboardComponent_div_105_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 32)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_105_ng_template_10_tr_10_Template, 7, 5, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const teamMembersGroup_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", teamMembersGroup_r19.Members);
} }
function DashboardComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "h2", 53)(3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 55)(6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DashboardComponent_div_105_div_7_Template, 1, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_div_105_ng_template_8_Template, 1, 1, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_105_ng_template_10_Template, 11, 1, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const teamMembersGroup_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-target", "#cardbody" + i_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", teamMembersGroup_r19.Region, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "cardbody" + i_r20)("ngClass", i_r20 == 0 ? "show" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r20 == 0)("ngIfThen", _r22)("ngIfElse", _r24);
} }
class DashboardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.Designation = "";
        this.Username = "";
        this.NoOfTeamMembers = 0;
        this.TotalCostOfAllProjects = 0;
        this.PendingTasks = 0;
        this.UpComingProjects = 0;
        this.ProjectCost = 0;
        this.CurrentExpenditure = 0;
        this.AvailableFunds = 0;
        this.ToDay = new Date();
        this.Clients = [];
        this.Projects = [];
        this.Years = [];
        this.TeamMembersSummary = [];
        this.TeamMembers = [];
    }
    ngOnInit() {
        this.Designation = 'Team Leader';
        this.Username = 'Scott Smith';
        this.NoOfTeamMembers = 67;
        this.TotalCostOfAllProjects = 240;
        this.PendingTasks = 15;
        this.UpComingProjects = 0.2;
        this.ProjectCost = 2113507;
        this.CurrentExpenditure = 96788;
        this.AvailableFunds = 52536;
        this.ToDay = new Date();
        this.Clients = [
            'ABC Infotech Ltd.',
            'DEF Software Solutions',
            'GHI Industries',
        ];
        this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
        for (var i = 2019; i >= 2010; i--) {
            this.Years.push(i);
        }
        this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
        this.TeamMembers = [
            {
                Region: 'East',
                Members: [
                    { ID: 1, Name: 'Ford', Status: 'Available' },
                    { ID: 2, Name: 'Miller', Status: 'Available' },
                    { ID: 3, Name: 'Jones', Status: 'Busy' },
                    { ID: 4, Name: 'James', Status: 'Busy' },
                ],
            },
            {
                Region: 'West',
                Members: [
                    { ID: 5, Name: 'Anna', Status: 'Available' },
                    { ID: 6, Name: 'Arun', Status: 'Available' },
                    { ID: 7, Name: 'Varun', Status: 'Busy' },
                    { ID: 8, Name: 'Jasmine', Status: 'Busy' },
                ],
            },
            {
                Region: 'South',
                Members: [
                    { ID: 9, Name: 'Krishna', Status: 'Available' },
                    { ID: 10, Name: 'Mohan', Status: 'Available' },
                    { ID: 11, Name: 'Raju', Status: 'Busy' },
                    { ID: 12, Name: 'Farooq', Status: 'Busy' },
                ],
            },
            {
                Region: 'North',
                Members: [
                    { ID: 13, Name: 'Jacob', Status: 'Available' },
                    { ID: 14, Name: 'Smith', Status: 'Available' },
                    { ID: 15, Name: 'Jones', Status: 'Busy' },
                    { ID: 16, Name: 'James', Status: 'Busy' },
                ],
            },
        ];
    }
    onProjectChange($event) {
        if ($event.target.innerHTML.trim() == 'Project A') {
            this.ProjectCost = 2113507;
            this.CurrentExpenditure = 96788;
            this.AvailableFunds = 52436;
        }
        else if ($event.target.innerHTML.trim() == 'Project B') {
            this.ProjectCost = 88923;
            this.CurrentExpenditure = 22450;
            this.AvailableFunds = 2640;
        }
        else if ($event.target.innerHTML.trim() == 'Project C') {
            this.ProjectCost = 662183;
            this.CurrentExpenditure = 7721;
            this.AvailableFunds = 9811;
        }
        else if ($event.target.innerHTML.trim() == 'Project D') {
            this.ProjectCost = 928431;
            this.CurrentExpenditure = 562;
            this.AvailableFunds = 883;
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 106, vars: 33, consts: [[1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-lg-3", "pb-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "text-white", "text-center", "mx-auto", "rounded", "pt-2", "pb-2", "font-weight-bold", 2, "background-color", "#a39e9e", "font-family", "'Arial Narrow Bold', sans-serif"], [1, "col-12", "text-center", "mt-2"], ["src", "assets/user.png", "width", "120px"], [1, "col-12", "text-center", "pt-2", "pb-2", "font-weight-bold", 2, "font-family", "Tahoma"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Arial"], [1, "col-12", "mb-3"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "badge-secondary", "badge-pill", 2, "font-size", "13px"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Arial Narrow"], [1, "col-12"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "col-lg-6"], [1, "col-12", "pt-0", "pb-2", 2, "background-color", "#e9e6e6"], [1, "row", "mt-2"], [1, "col-6", "text-left"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "dropdown-menu"], ["class", "dropdown-item", "href", "#", "onclick", "return false", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-6", "text-right"], ["class", "dropdown-item", "href", "#", 4, "ngFor", "ngForOf"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-2", "pb-2", "mx-auto", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "table", "table-borderless"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-2", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-1", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "Arial Narrow"], [1, "col-lg-12", "pt-2"], ["id", "accordion1", 1, "accordion"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["href", "#", "onclick", "return false", 1, "dropdown-item", 3, "click"], ["href", "#", 1, "dropdown-item"], [3, "ngSwitch"], ["style", "color: green", 4, "ngSwitchCase"], ["style", "color: blue", 4, "ngSwitchCase"], ["style", "color: red", 4, "ngSwitchCase"], ["style", "color: black", 4, "ngSwitchDefault"], [2, "color", "green"], [2, "color", "blue"], [2, "color", "red"], [2, "color", "black"], [1, "card"], ["id", "card1", 1, "card-header", "bg-secondary"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", 1, "btn", "btn-link", "text-white"], ["data-parent", "#accordion1", 1, "collapse", 3, "id", "ngClass"], [1, "card-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["firstTemplate", ""], ["secondTemplate", ""], [1, "card-header", "bg-primary", "text-white"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav")(1, "ol", 0)(2, "li", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "div", 5)(14, "div", 4)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " TEAM SUMMARY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11)(26, "ul", 12)(27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " NO. OF TEAM MEMBERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " TOTAL COST OF ALL PROJECTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " PENDING TASKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " UPCOMING PROJECTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " CLIENTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16)(47, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, DashboardComponent_li_48_Template, 3, 5, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 19)(50, "div", 4)(51, "div", 20)(52, "div", 21)(53, "div", 22)(54, "div", 23)(55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Project A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, DashboardComponent_a_58_Template, 2, 1, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 27)(60, "div", 23)(61, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, DashboardComponent_a_64_Template, 6, 4, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " PROJECT BRIEFING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 16)(68, "table", 30)(69, "tr")(70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Project Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tr")(76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Current Expenditure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](80, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "tr")(82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Available Funds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](86, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " TEAM MEMBERS SUMMARY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 16)(90, "table", 32)(91, "tr")(92, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Team Members Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Temporarily Unavailable Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, DashboardComponent_tr_98_Template, 8, 3, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 34)(100, "div", 4)(101, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " TEAM MEMBERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 36)(104, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, DashboardComponent_div_105_Template, 12, 7, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 15, ctx.ToDay, "d/M/y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 18, ctx.Designation), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 20, ctx.Username), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.NoOfTeamMembers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$ ", ctx.TotalCostOfAllProjects, " k");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.PendingTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 22, ctx.UpComingProjects));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Years);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](74, 24, ctx.ProjectCost, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](80, 27, ctx.CurrentExpenditure, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](86, 30, ctx.AvailableFunds, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.TeamMembersSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.TeamMembers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.PercentPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1363:
/*!**********************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfileComponent": () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MyProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(); };
MyProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 2, vars: 0, template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1832:
/*!******************************************************!*\
  !*** ./src/app/admin/projects/projects.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var src_app_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/project */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects.service */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function ProjectsComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_tr_43_Template_button_click_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.onEditClick($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_tr_43_Template_button_click_13_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onDeleteClick($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r1.projectID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r1.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r1.dateOfStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r1.teamSize);
} }
class ProjectsComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.projects = [];
        this.newProject = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
        this.editProject = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
        this.editIndex = null;
        this.deleteProject = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
        this.deleteIndex = null;
        this.searchBy = "ProjectName";
        this.searchText = "";
    }
    ngOnInit() {
        this.projectsService.getAllProjects().subscribe((response) => {
            this.projects = response;
        });
    }
    onSaveClick() {
        this.projectsService.insertProject(this.newProject).subscribe((response) => {
            //Add Project to Grid
            var p = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            this.projects.push(p);
            //Clear New Project Dialog - TextBoxes
            this.newProject.projectID = null; //set a new text box when create a new 
            this.newProject.projectName = null;
            this.newProject.dateOfStart = null;
            this.newProject.teamSize = null;
        }, (error) => {
            console.log(error);
        });
    }
    onEditClick(event, index) {
        this.editProject.projectID = this.projects[index].projectID;
        this.editProject.projectName = this.projects[index].projectName;
        this.editProject.dateOfStart = this.projects[index].dateOfStart;
        this.editProject.teamSize = this.projects[index].teamSize;
        this.editIndex = index;
    }
    onUpdateClick() {
        this.projectsService.updateProject(this.editProject).subscribe((response) => {
            var p = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            this.projects[this.editIndex] = p;
            this.editProject.projectID = null;
            this.editProject.projectName = null;
            this.editProject.dateOfStart = null;
            this.editProject.teamSize = null;
        }, () => {
        });
    }
    onDeleteClick(event, index) {
        this.deleteIndex = index;
        this.deleteProject.projectID = this.projects[index].projectID;
        this.deleteProject.projectName = this.projects[index].projectName;
        this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
        this.deleteProject.teamSize = this.projects[index].teamSize;
    }
    onDeleteConfirmClick() {
        this.projectsService.deleteProject(this.deleteProject.projectID).subscribe((response) => {
            this.projects.splice(this.deleteIndex, 1);
            this.deleteProject.projectID = null;
            this.deleteProject.projectName = null;
            this.deleteProject.dateOfStart = null;
            this.deleteProject.teamSize = null;
        }, (error) => {
            console.log(error);
        });
    }
    onSearchClick() {
        this.projectsService.SearchProject(this.searchBy, this.searchText).subscribe((response) => {
            this.projects = response;
        }, (error) => {
            console.log(error);
        });
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService)); };
ProjectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 144, vars: 13, consts: [[1, "row"], [1, "col-8", "mx-auto"], [1, "form-group", "form-row"], ["for", "drpSearchBy", 1, "col-form-label", "col-3"], [1, "col-9"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "ProjectID"], ["value", "ProjectName"], ["value", "DateOfStart"], ["value", "TeamSize"], ["for", "textSearchText", 1, "col-form-label", "col-3"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append", 3, "click"], [1, "input-group-text"], [1, "fa", "fa-search"], ["data-toggle", "modal", "data-target", "#newModal", 1, "btn", "btn-primary"], [1, "table"], [4, "ngFor", "ngForOf"], ["role", "dialog", "id", "newModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content", 2, "width", "700px"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-group", "row"], ["for", "txtNewProjectID", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewProjectID", "placeholder", "Project ID", "name", "ProjectID", 1, "form-control", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["for", "txtNewProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtNewProjectName", "placeholder", "Project Name", "name", "ProjectName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "txtNewDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtNewDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngModelChange"], ["for", "txtTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "number", "id", "txtTeamSize", "placeholder", "Team Size", "name", "TeamSize", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["data-dismiss", "modal", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editModal", 1, "modal"], ["for", "txtEditProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["for", "txtEditProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectName", "placeholder", "Project Name", "name", "ProjectName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "txtEditDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtEditDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngModelChange"], ["for", "txtEditTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "number", "id", "txtEditTeamSize", "placeholder", "Team Size", "name", "TeamSize", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngModelChange"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["for", "txtDeleteProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectName", "placeholder", "Project Name", "name", "ProjectName", "disabled", "disabled", 1, "form-control-plain-text", 3, "ngModel", "ngModelChange"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_8_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 2)(18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4)(21, "div", 11)(22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_22_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_Template_div_click_23_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 1)(27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Create Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 1)(30, "table", 17)(31, "thead")(32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ProjectsComponent_tr_43_Template, 15, 4, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "form")(45, "div", 19)(46, "div", 20)(47, "div", 21)(48, "div", 22)(49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "New Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 24)(52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 25)(55, "div", 26)(56, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 28)(59, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_59_listener($event) { return ctx.newProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 26)(61, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 28)(64, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_64_listener($event) { return ctx.newProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 26)(66, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 28)(69, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_69_listener($event) { return ctx.newProject.dateOfStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 26)(71, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 28)(74, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_74_listener($event) { return ctx.newProject.teamSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 36)(76, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_78_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "form")(81, "div", 39)(82, "div", 20)(83, "div", 21)(84, "div", 22)(85, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Edit Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "button", 24)(88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 25)(91, "div", 26)(92, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 28)(95, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_95_listener($event) { return ctx.editProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 26)(97, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 28)(100, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_100_listener($event) { return ctx.editProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 26)(102, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 28)(105, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_105_listener($event) { return ctx.editProject.dateOfStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 26)(107, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 28)(110, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_110_listener($event) { return ctx.editProject.teamSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 36)(112, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_114_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "form")(117, "div", 48)(118, "div", 20)(119, "div", 21)(120, "div", 22)(121, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Delete Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "button", 24)(124, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 25)(127, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Are you sure to delete this Project?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 26)(130, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 28)(133, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_133_listener($event) { return ctx.deleteProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 26)(135, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 28)(138, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_138_listener($event) { return ctx.deleteProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 36)(140, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_142_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProject.projectID);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProject.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProject.dateOfStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newProject.teamSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.editProject.projectID);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.editProject.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.editProject.dateOfStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.editProject.teamSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectID);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ 6662);
/* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/about/about.component */ 2455);
/* harmony import */ var _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/projects/projects.component */ 1832);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _can_activate_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./can-activate-guard.service */ 766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: "dashboard", component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_4__.CanActivateGuardService] },
    { path: "about", component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent },
    { path: "projects", component: _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, canActivate: [_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_4__.CanActivateGuardService] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 5619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





function AppComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.loginService.currentUserName);
} }
function AppComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.loginService.Logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class AppComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    onSearchClick() {
        console.log(this.loginService.currentUserName);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 25, vars: 5, consts: [[1, "navbar", "navbar-expand-sm", "bg-success", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#mynav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mynav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "about", 1, "nav-link"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group"], [1, "input-group-prepend"], ["id", "search", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "button", 1, "btn", "btn-warning", "my2-", "my-sm-0", 3, "click"], [1, "container-fluid"], ["routerLink", "dashboard", 1, "nav-link"], ["routerLink", "projects", 1, "nav-link"], ["href", "#", 1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"], ["routerLink", "login", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Angular Task Manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_li_7_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_li_11_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_li_12_Template, 3, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_li_13_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_li_14_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 9)(16, "div", 10)(17, "div", 11)(18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener() { return ctx.onSearchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4293);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.module */ 7095);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt-interceptor.service */ 1533);
/* harmony import */ var _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt-un-authorized-interceptor.service */ 9282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
            useClass: _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.JwtInterceptorService,
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
            useClass: _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_5__.JwtUnAuthorizedInterceptorService,
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__.AdminModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__.JwtModule.forRoot({
                config: {
                    tokenGetter: () => {
                        return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null);
                    }
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__.AdminModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__.JwtModule] }); })();


/***/ }),

/***/ 766:
/*!***********************************************!*\
  !*** ./src/app/can-activate-guard.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanActivateGuardService": () => (/* binding */ CanActivateGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 5619);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class CanActivateGuardService {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route) {
        console.log(this.router.url);
        if (this.loginService.isAuthenticated()) {
            return true; //the user can navigate to the particular route
        }
        else {
            this.router.navigate(["login"]);
            return false; //the user can't navigate to the particular route
        }
    }
}
CanActivateGuardService.ɵfac = function CanActivateGuardService_Factory(t) { return new (t || CanActivateGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CanActivateGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CanActivateGuardService, factory: CanActivateGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2394:
/*!**************************************!*\
  !*** ./src/app/dashboard.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DashboardService {
    getTeamMembersSummary() {
        var TeamMembersSummary = [
            {
                Region: 'East',
                TeamMembersCount: 20,
                TemporarilyUnavailableMembers: 4,
            },
            {
                Region: 'West',
                TeamMembersCount: 15,
                TemporarilyUnavailableMembers: 8,
            },
            {
                Region: 'South',
                TeamMembersCount: 17,
                TemporarilyUnavailableMembers: 1,
            },
            {
                Region: 'North',
                TeamMembersCount: 15,
                TemporarilyUnavailableMembers: 6,
            },
        ];
        return TeamMembersSummary;
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(); };
DashboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac });


/***/ }),

/***/ 1533:
/*!********************************************!*\
  !*** ./src/app/jwt-interceptor.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptorService": () => (/* binding */ JwtInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class JwtInterceptorService {
    constructor() {
    }
    intercept(request, next) {
        var currentUser = { token: "" };
        if (sessionStorage['currentUser'] != null) {
            currentUser = JSON.parse(sessionStorage['currentUser']);
        }
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + currentUser.token
            }
        });
        return next.handle(request);
    }
}
JwtInterceptorService.ɵfac = function JwtInterceptorService_Factory(t) { return new (t || JwtInterceptorService)(); };
JwtInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptorService, factory: JwtInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9282:
/*!**********************************************************!*\
  !*** ./src/app/jwt-un-authorized-interceptor.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtUnAuthorizedInterceptorService": () => (/* binding */ JwtUnAuthorizedInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class JwtUnAuthorizedInterceptorService {
    constructor() {
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                //do something with response
            }
        }, (error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
                if (error.status == 401) {
                    console.log(error);
                    alert("401 UnAuthorized");
                }
            }
        }));
    }
}
JwtUnAuthorizedInterceptorService.ɵfac = function JwtUnAuthorizedInterceptorService_Factory(t) { return new (t || JwtUnAuthorizedInterceptorService)(); };
JwtUnAuthorizedInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtUnAuthorizedInterceptorService, factory: JwtUnAuthorizedInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9269:
/*!*************************************!*\
  !*** ./src/app/login-view-model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginViewModel": () => (/* binding */ LoginViewModel)
/* harmony export */ });
class LoginViewModel {
    constructor() {
        this.UserName = "";
        this.Password = "";
    }
}


/***/ }),

/***/ 5619:
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);





class LoginService {
    constructor(httpBackend, jwtHelperService) {
        this.httpBackend = httpBackend;
        this.jwtHelperService = jwtHelperService;
        this.httpClient = null;
        this.currentUserName = null;
    }
    Login(loginViewModel) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
        return this.httpClient.post("/authenticate", loginViewModel, { responseType: "json" })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            if (user) {
                this.currentUserName = user.userName;
                sessionStorage['currentUser'] = JSON.stringify(user);
            }
            return user;
        }));
    }
    Logout() {
        sessionStorage.removeItem("currentUser");
        this.currentUserName = null;
    }
    isAuthenticated() {
        var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
        if (this.jwtHelperService.isTokenExpired()) {
            return false; //token is not valid
        }
        else {
            return true; //token is valid
        }
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _login_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-view-model */ 9269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginViewModel = new _login_view_model__WEBPACK_IMPORTED_MODULE_0__.LoginViewModel();
        this.loginError = "";
    }
    ngOnInit() {
    }
    onLoginClick(event) {
        this.loginService.Login(this.loginViewModel).subscribe((response) => {
            this.router.navigateByUrl("/dashboard");
        }, (error) => {
            console.log(error);
            this.loginError = "Invalid Username or Password";
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 3, consts: [[1, "row"], [1, "col-lg-6", "col-xl-5", "col-md-9", "mx-auto"], [1, "card", "mt-4"], [1, "card-header", "bg-secondary", "text-white"], [1, "card-body"], [1, "form-group", "form-row"], ["for", "UserName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "placeholder", "Username", "name", "UserName", "autofocus", "autofocus", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Password", 1, "col-md-4", "col-form-label"], ["type", "password", "placeholder", "Password", "name", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-right"], [1, "text-danger"], [1, "btn", "btn-primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.loginViewModel.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.loginViewModel.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11)(19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener($event) { return ctx.onLoginClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.loginViewModel.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.loginViewModel.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.loginError, "\u00A0");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2513:
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor() {
        this.projectID = 0;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = 0;
    }
}


/***/ }),

/***/ 318:
/*!*************************************!*\
  !*** ./src/app/projects.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsService": () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ProjectsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllProjects() {
        // var currentUser = { token: ""}
        // var headers = new HttpHeaders();
        // headers = headers.set("Authorization", "Bearer");
        // if (sessionStorage['currentUser'] != null)
        // {
        //   currentUser = JSON.parse(sessionStorage['currentUser']);
        //   headers = headers.set("Authorization", "Bearer " + currentUser.token);
        // }
        return this.httpClient.get("/api/projects", { /* headers: headers,*/ responseType: "json" })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((data) => {
            for (let i = 0; i > data.length; i++) {
                data[i].teamSize = data[i].teamSize * 100;
            }
            return data;
        }));
    }
    insertProject(newProject) {
        return this.httpClient.post("/api/projects", newProject, { responseType: "json" });
    }
    updateProject(existingProject) {
        return this.httpClient.put("/api/projects" + existingProject.projectID, existingProject, { responseType: "json" });
    }
    deleteProject(ProjectID) {
        return this.httpClient.delete("/api/projects/" + ProjectID);
    }
    SearchProject(searchBy, searchText) {
        return this.httpClient.get("/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProjectsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map