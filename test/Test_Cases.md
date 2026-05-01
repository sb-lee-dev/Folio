# Test Cases

## Profile Page Test Cases

| Test Case ID | Scenario ID | Test Case Title | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|---|---|---|
| TC-PROFILE-01 | TS-PROFILE-01 | Verify selected user's profile data is displayed | User is selected from the user selection page | 1. Navigate to Profile Page | User ID: 1 | The selected user's name, bio, school, GitHub link, and LinkedIn link should be displayed correctly |  | NOT RUN |
| TC-PROFILE-02 | TS-PROFILE-01 | Verify user can update profile bio | User is on the Profile Page | 1. Click Edit button<br>2. Update bio field<br>3. Click Save | Bio: QA Tester studying automation testing | Updated bio should be saved and displayed on the Profile Page |  | NOT RUN |
| TC-PROFILE-03 | TS-PROFILE-01 | Verify empty name field validation | User is editing profile information | 1. Click Edit button<br>2. Clear name field<br>3. Click Save | Name: empty | The system should prevent saving and show a validation message |  | NOT RUN |
| TC-PROFILE-04 | TS-PROFILE-01 | Verify cancel button does not save changes | User is editing profile information | 1. Click Edit button<br>2. Change bio field<br>3. Click Cancel | Bio: Temporary test bio | Original profile data should remain unchanged |  | NOT RUN |
