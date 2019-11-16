import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './Components/RouteWithLayout/index';
import { DriveLayout , EmailLayout, MinimalLayout , OrganizationLayout,InstituteLayout,StudentLayout,TeacherLayout } from './Layout/index';

import {
  MyDrive as MyDriveView,
  Shared as SharedView,
  Recent as RecentView,
  Trash as TrashView,
  SignUp as SignUpView,
  SignIn as SignInView,
  InboxMail as InboxMailView,
  DraftMail as DraftMailView,
  SentMail as SentMailView,
  OrganizationDash as OrganizationDashView,
  InstituteDash as InstituteDashView,
  StudentDash as StudentDashView,
  TeacherDash as TeacherDashView,
  OrganizationSignUp as OrganizationSignUpView,
  OrganizationLogin as OrganizationLoginView,
  InstituteSignUp as InstituteSignUpView,
  InstituteLogin as InstituteLoginView,
  AddStaff as AddStaffView,
  AddStudent as AddStudentView,
  AddTeacher as AddTeacherView,
  StaffLogin as StaffLoginView,
  TeacherLogin as TeacherLoginView,
  StudentLogin as StudentLoginView,
  PasswordChange as PasswordChangeView,
  InstiList as InstiListView,
  StaffList as StaffListView,
  TeacherList as TeacherListView,
  StudentList as StudentListView
} from './Views/index';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/orgsignup"
      />
      <RouteWithLayout
        component={MyDriveView}
        exact
        layout={DriveLayout}
        path="/mydrive"
      />
      <RouteWithLayout
        component={SharedView}
        exact
        layout={DriveLayout}
        path="/shared"
      />
      <RouteWithLayout
        component={RecentView}
        exact
        layout={DriveLayout}
        path="/recent"
      />
     
      <RouteWithLayout
        component={TrashView}
        exact
        layout={DriveLayout}
        path="/trash"
      />
      <RouteWithLayout
        component={OrganizationDashView}
        exact
        layout={OrganizationLayout}
        path="/orgdash"
      />
      <RouteWithLayout
        component={InstituteDashView}
        exact
        layout={InstituteLayout}
        path="/instdash"
      />
      <RouteWithLayout
        component={StudentDashView}
        exact
        layout={StudentLayout}
        path="/studentdash"
      />
      <RouteWithLayout
        component={InboxMailView}
        exact
        layout={EmailLayout}
        path="/inbox"
      />
            <RouteWithLayout
        component={DraftMailView}
        exact
        layout={EmailLayout}
        path="/draft"
      />
            <RouteWithLayout
        component={SentMailView}
        exact
        layout={EmailLayout}
        path="/sent"
      />
            <RouteWithLayout
        component={TeacherDashView}
        exact
        layout={TeacherLayout}
        path="/teacherdash"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/signup"
      />
       <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/signin"
      /> 
      <RouteWithLayout
        component={OrganizationSignUpView}
        exact
        layout={MinimalLayout}
        path="/orgsignup"
      /> 
      <RouteWithLayout
        component={OrganizationLoginView}
        exact
        layout={MinimalLayout}
        path="/orglogin"
      /> 
      <RouteWithLayout
        component={InstituteSignUpView}
        exact
        layout={MinimalLayout}
        path="/instisignup"
      /> 
      <RouteWithLayout
        component={InstituteLoginView}
        exact
        layout={MinimalLayout}
        path="/instilogin"
      /> 
      <RouteWithLayout
        component={AddStaffView}
        exact
        layout={MinimalLayout}
        path="/addstaff"
      /> 
      <RouteWithLayout
        component={AddStudentView}
        exact
        layout={MinimalLayout}
        path="/addstudent"
      /> 
      <RouteWithLayout
        component={AddTeacherView}
        exact
        layout={MinimalLayout}
        path="/addteacher"
      /> 
      <RouteWithLayout
        component={StaffLoginView}
        exact
        layout={MinimalLayout}
        path="/stafflogin"
      /> 
      <RouteWithLayout
        component={TeacherLoginView}
        exact
        layout={MinimalLayout}
        path="/teacherlogin"
      /> 
      
       <RouteWithLayout
        component={StudentLoginView}
        exact
        layout={MinimalLayout}
        path="/studentlogin"
      /> 
      <RouteWithLayout
        component={PasswordChangeView}
        exact
        layout={MinimalLayout}
        path="/passchange"
      /> 
      <RouteWithLayout
        component={TeacherListView}
        exact
        layout={InstituteLayout}
        path="/teacherlist"
      /> 
      <RouteWithLayout
        component={StudentListView}
        exact
        layout={InstituteLayout}
        path="/studentlist"
      />
      <RouteWithLayout
        component={StaffListView}
        exact
        layout={OrganizationLayout}
        path="/stafflist"
      />  
      <RouteWithLayout
        component={InstiListView}
        exact
        layout={OrganizationLayout}
        path="/instilist"
      /> 
      </Switch>
  ); 
  
};

export default Routes;