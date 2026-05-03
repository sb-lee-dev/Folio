# Folio Test Plan

## 1. Project Overview

Folio is a portfolio dashboard web application that allows users to manage and showcase their profile, projects, skills, and learning roadmap in one place.

The application starts with a user selection page. After selecting a user, the app loads that user's data and displays the profile page. Users can navigate between Profile, Projects, Roadmap, and Public pages using the navigation bar.

## 2. Objective

The objective of testing is to verify that the main user flows, CRUD features, navigation, UI behavior, and data display work correctly.

Testing will focus on making sure users can:
- Select a user
- View and update profile information
- Add, edit, and delete skills
- Add, edit, and delete projects
- Add, edit, and delete roadmap topics
- View public portfolio information correctly

## 3. Test Scope

### In Scope

The following features will be tested:

#### User Selection
- Verify that users are displayed on the user selection page
- Verify that selecting a user loads the correct user data
- Verify that the selected user is redirected to the Profile page

#### Navigation Bar
- Verify that Profile, Projects, Roadmap, and Public buttons navigate to the correct pages
- Verify that clicking the Folio logo navigates to the Profile page
- Verify that clicking the initials button navigates back to the user selection page

#### Profile Page
- Verify that the selected user's profile information is displayed correctly
- Verify that profile information can be edited
- Verify that skills are displayed correctly
- Verify that users can add a skill
- Verify that users can edit a skill
- Verify that users can delete a skill

#### Projects Page
- Verify that projects are displayed correctly
- Verify that project status is displayed as Planning, In progress, or Completed
- Verify that users can add a new project
- Verify that users can view project details
- Verify that users can edit a project
- Verify that users can delete a project
- Verify that project tags are displayed correctly without breaking the layout

#### Roadmap Page
- Verify that roadmap topics are displayed correctly
- Verify that topic status is displayed correctly
- Verify that users can add a topic
- Verify that users can edit a topic
- Verify that users can delete a topic

#### Public Page
- Verify that profile, projects, roadmap, and skills are displayed together
- Verify that the public page is read-only
- Verify that data shown on the public page matches the selected user's data

#### UI and Layout
- Verify that cards, modals, buttons, and forms display correctly
- Verify that long text or long tags do not break the layout
- Verify that modals open and close correctly

#### API Integration
- Verify that user data is fetched correctly from MockAPI
- Verify that create, update, and delete actions update the displayed data correctly

---

### Out of Scope

The following items will not be tested:

- User authentication and login
- User authorization
- Real backend database validation
- Security testing
- Performance testing
- Cross-browser testing beyond the main development browser
- Mobile responsiveness, unless time allows
- Automated testing, unless added later

## 4. Test Environment

| Item | Description |
|---|---|
| Application | Folio |
| Frontend | React |
| API | MockAPI |
| Browser | Chrome |
| OS | Windows |
| Test Type | Manual Functional Testing |
| Deployment | Vercel |
| Version Control | GitHub |

## 5. Types of Testing 

- Functional Testing
- UI Testing
- Regression Testing 

## 6. Test Strategy

Testing will be conducted using manual testing techniques based on key user flows and feature interactions.

The strategy will include:

- **Functional Testing**  
  Verifying that all core features (user selection, profile, projects, roadmap, public page) work as expected.
- **UI Testing**  
  Ensuring that layout, components (cards, modals, buttons), and visual elements display correctly and remain consistent.
- **Regression Testing**  
  Re-testing affected features after bug fixes or updates to ensure existing functionality is not broken.

## 7. Testing Approach 

The testing will focus on:
- Positive test cases
- Basic negative test cases
- UI validation
- CRUD operation validation
- Navigation validation
- Data consistency between pages

Each major feature will be tested from the user's point of view.

## 8. Test Deliverables

The following test documents will be created:

- Test Plan
- Test Scenarios
- Test Cases
- Bug Reports
- Test Summary Report

## 9. Entry Criteria

Testing can begin when:
- The main pages are implemented
- MockAPI connection is working
- User data can be loaded
- CRUD features are available for testing

## 10. Exit Criteria

Testing can be completed when:
- 100% of planned test cases are executed
- More than 95% of test cases passed 
- Main user flows have been tested
- Major bugs have been fixed or documented
- No critical or high severity bugs 
- Test results have been summarized

## 11. Risks

- MockAPI may not behave exactly like a real backend
- No authentication is implemented
- Some UI issues may appear with long text or long tags
- Data may be overwritten if multiple users edit the same MockAPI data
