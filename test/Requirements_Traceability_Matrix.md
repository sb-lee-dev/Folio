# Requirements Traceability Matrix

| Test Case ID     | R001 | R002 | R003 | R004 | R005 | R006 | R007 | R008 | R009 | R010 | R011 | R012 | R013 | R014 | R015 | R016 | R017 |
|-----------------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|
| TC-PROFILE-01   |  x  |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-02   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-03   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-04   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-05   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-06   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-07   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-08   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-09   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROFILE-10   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| TC-PROJECT-01   |  x  |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |      |
| TC-PROJECT-02   |      |      |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |
| TC-PROJECT-03   |      |      |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |
| TC-PROJECT-04   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |
| TC-PROJECT-05   |      |      |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |
| TC-PROJECT-06   |      |      |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |
| TC-PROJECT-07   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |
| TC-PROJECT-08   |      |      |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |
| TC-PROJECT-09   |      |      |      |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |
| TC-ROADMAP-01   |  x  |      |      |      |      |      |      |      |      |  X   |      |      |      |      |      |      |      |
| TC-ROADMAP-02   |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |      |      |      |
| TC-ROADMAP-03   |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |      |      |      |
| TC-ROADMAP-04   |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |      |      |
| TC-ROADMAP-05   |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |      |      |
| TC-ROADMAP-06   |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |      |      |
| TC-ROADMAP-07   |      |      |      |      |      |      |      |      |      |      |      |  X   |      |      |      |      |      |
| TC-PUBLIC-01   |  x  |      |      |      |      |      |      |      |      |      |      |     |      |      |      |      |      |
| TC-PUBLIC-02   |      |      |      |      |      |      |      |      |      |      |      |     |      |      |      |      |      |
| TC-PUBLIC-03   |      |      |      |      |      |      |      |      |      |      |      |     |      |      |      |      |      |
| TC-PUBLIC-04   |      |      |      |      |      |      |      |      |      |      |      |     |      |      |      |      |      |
| TC-PUBLIC-05   |      |      |      |      |      |      |      |      |      |      |      |     |      |      |      |      |      |
| TC-PUBLIC-06   |      |      |      |      |      |      |      |      |      |      |      |    |      |      |      |      |      |


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
