# Test Cases

## Profile Page Test Cases

| Test Case ID | Scenario ID | Test Case Title | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|---|---|
| TC-PROFILE-01 | TS-PROFILE-01 | Verify selected user's profile data is displayed | User is selected from the user selection page | 1. Navigate to Profile Page | User ID: 1 | The selected user's name, bio, school, GitHub link, and LinkedIn link should be displayed correctly |  | NOT RUN |
| TC-PROFILE-02 | TS-PROFILE-01 | Verify user can update profile bio | User is on the Profile Page | 1. Click Edit button<br>2. Update bio field<br>3. Click Save | Bio: QA Tester studying automation testing | Updated bio should be saved and displayed on the Profile Page |  | NOT RUN |
| TC-PROFILE-03 | TS-PROFILE-01 | Verify empty name field validation | User is editing profile information | 1. Click Edit button<br>2. Clear name field<br>3. Click Save | Name: empty | The system should prevent saving and show a validation message |  | NOT RUN |
| TC-PROFILE-04 | TS-PROFILE-01 | Verify cancel button does not save changes | User is editing profile information | 1. Click Edit button<br>2. Change bio field<br>3. Click Cancel | Bio: Temporary test bio | Original profile data should remain unchanged |  | NOT RUN |

## Project Page Test Cases

| Test Case ID | Scenario ID | Test Case Title | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|---|---|
| TC-PROJECT-01 | TS-PROJECT-01 | Verify selected user's project data is displayed | User is selected from the user selection page | 1. Navigate to Projects Page | User ID: 1 | The selected user's project title, description, tags, and status should be displayed correctly |  | NOT RUN |
| TC-PROJECT-02 | TS-PROJECT-01 | Verify user can update project description | User is on the Projects Page | 1. Click on Folio project<br>2. Click Edit button<br>3. Edit description field<br> 4. Click Save button<br> 5. Click OK button from the alert<br> 6. Click Close button| Description: A portfolio dashboard web application that allows users to organize and showcase their professional profile in one place.| Updated description should be saved and displayed on Folio card |  | NOT RUN |
| TC-PROJECT-03 | TS-PROJECT-01 | Verify user can update project status | User is on the Projects Page | 1. Click on Folio project<br>2. Click Edit button<br>3. Change the status of the project<br> 4. Click Save button<br> 5. Click OK button from the alert<br> 6. Click Close button| Status: InProgress | Updated status should be saved and displayed on Folio card |  | NOT RUN |
| TC-PROJECT-04 | TS-PROJECT-01 | Verify empty project title field validation | User is editing project information | 1. Click on Folio project<br>2. Click Edit button<br>3. Clear project title field<br> 4. Click Save button<br> 5. Click OK button from the alert<br> 6. Click Close button| Project title: empty | The system should prevent saving and show a validation message |  | NOT RUN |
| TC-PROJECT-05 | TS-PROJECT-01 | Verify user can update project tags | User is editing project information | 1. Click on Folio project<br>2. Click Edit button<br>3. Edit tags field<br> 4. Click Save button<br> 5. Click OK button from the alert<br> 6. Click Close button| Tags: React JS | Updated tags should be displayed correctly on Folio card |  | NOT RUN |
| TC-PROJECT-06 | TS-PROJECT-01 | Verify cancel button does not save changes | User is editing project information | 1. Click on Folio project<br>2. Click Edit button<br>3. Clear project title field<br> 4. Click Cancel button<br> 5. Click Close button| Project title: empty| Original project data should remain unchanged |  | NOT RUN |



