# Requirements Traceability Matrix

| Test Case ID     | R001 | R002 | R003 | R004 | R005 | R006 | R007 | R008 | R009 | R010 | R011 | R012 | R013 | R014 | R015 | R016 | R017 |
|-----------------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|
| TC-PROFILE-01   |  x   |  x   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-02   |      |      |  x   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-03   |      |      |      |  x   |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-04   |      |      |      |      |   x  |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-05   |      |      |      |      |      |   x  |   x  |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-06   |      |      |      |      |      |      |   x  |   x  |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-07   |      |      |      |      |      |      |   x  |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-08   |      |      |      |      |      |      |   x  |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-09   |      |      |      |      |      |      |      |      |   x  |      |      |      |      |      |      |      |      |
| TC-PROFILE-10   |      |      |      |      |      |      |      |      |  x   |      |      |      |      |      |      |      |      |
| TC-PROFILE-11   |      |      |      |      |      |      |   x  |      |      |      |      |      |      |      |      |      |      |
| TC-PROJECT-01   |  x  |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |      |
| TC-PROJECT-02   |      |      |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |
| TC-PROJECT-03   |      |      |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |
| TC-PROJECT-04   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |
| TC-PROJECT-05   |      |      |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |
| TC-PROJECT-06   |      |      |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |
| TC-PROJECT-07   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |
| TC-PROJECT-08   |      |      |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |
| TC-PROJECT-09   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |
| TC-ROADMAP-01   |  x  |      |      |      |      |      |      |      |      |   x   |      |      |      |      |      |      |      |
| TC-ROADMAP-02   |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |      |      |      |
| TC-ROADMAP-03   |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |      |      |      |
| TC-ROADMAP-04   |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |      |      |
| TC-ROADMAP-05   |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |      |      |
| TC-ROADMAP-06   |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |      |      |
| TC-ROADMAP-07   |      |      |      |      |      |      |      |      |      |      |      |   x   |      |      |      |      |      |
| TC-PUBLIC-01   |  x  |      |      |      |      |      |      |      |      |      |      |     |      |      |      |   x  |      |
| TC-PUBLIC-02   |      |  x  |      |      |      |      |      |      |      |      |      |     |      |      |      |    x |   x  |
| TC-PUBLIC-03   |      |      |      |      |      |   x  |      |      |      |      |      |     |      |      |      |   x  |  x   |
| TC-PUBLIC-04   |      |      |      |      |      |      |      |      |      |      |      |     |      |      |      |   x  |  x   |
| TC-PUBLIC-05   |      |      |      |      |      |      |      |      |      |      |      |     |      |      |      |   x  |  x   |
| TC-PUBLIC-06   |      |      |      |      |      |      |      |      |      |      |      |    |      |      |      |    x |      |


# Functional Requirements

## Navigation
R001 — Navigate to the selected user’s portfolio via dynamic routing  

## Profile
R002 — Display user profile information (name, bio, school, GitHub, LinkedIn)  
R003 — Allow users to edit profile information  
R004 — Validate that the name field is not empty  
R005 — Allow users to cancel edits and restore original data  

## Skills
R006 — Display skills with name and progress level  
R007 — Allow users to add, edit, and delete skills  
R008 — Validate that skill name and level are not empty  
R009 — Validate that skill level is between 0 and 100  

## Roadmap
R010 — Display roadmap topics (title, description, status)  
R011 — Allow users to add, edit, and delete roadmap topics  
R012 — Validate that topic title and description are not empty  

## Projects
R013 — Display projects (title, description, status, tags)  
R014 — Allow users to add, edit, and delete projects  
R015 — Validate that project title, description, status, and tags are not empty  

## Public Page
R016 — Display a read-only public portfolio via a shareable URL  
R017 — Display profile, projects, skills, and roadmap on the public page  
