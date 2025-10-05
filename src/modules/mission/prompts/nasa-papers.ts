export default `
U.S. Government work not protected by U.S. copyright
Defining the Required Net Habitable Volume for LongDuration Exploration Missions
Chel Stromgren, Callie Burke, Jason Cho, and Robert
Calderon
Binera, Inc.
77 S. Washington St.
Rockville, MD 20850
chel.stromgren@nasa.gov
c.burke@binera.com
j.cho@binera.com
r.calderon@binera.com
Michelle Rucker
NASA Johnson Space Center
2101 Nasa Parkway
Houston, TX 77058
michelle.a.rucker@nasa.gov
Abstract—As the National Aeronautics and Space
Administration continues planning for long-duration
space missions, specifically to Mars, it will be necessary
to understand the requirements for a “transit habitat”,
the element that the crew will live in as they travel to and
from Mars. In particular, understanding of volume
requirements for the transit habitat is of significant
importance because the volume is a first order driver of
the habitat size and mass, and therefore the propulsion
and propellant requirements for future Mars missions.
Despite this importance, there is significant uncertainty
regarding how much habitable volume is required to
support the crew on these missions. Prior studies provide
valuable background, but their focus has largely been on
investigating historical analogs in order to develop
parametric sizing formulas. Other research has focused
on specific drivers of habitat volume and stressors to the
crew. However, there has been limited focus on
establishing a comprehensive minimum required
habitable volume based on crew activity needs and crew
health requirements. This paper will describe a detailed
effort to establish the minimum required net habitable
volume for a Mars Transit Habitat employing a bottomup methodology. The process used to establish
volumetric requirements involves the definition of a set
of specific “crew functions” and the assignment of
required volumes to each function. This type of bottomup approach is the most accurate method to establish
required habitat volume and is specifically
recommended by the NASA Chief Medical Officer for
future space missions. The authors established a
taxonomy of crew functions that could be required
during a Mars transit. These functions include direct
operational activities, such as command and control or
system maintenance, habitation activities, such as eating
and sleeping, or health maintenance activities, such as
exercise and leisure. Health maintenance activities also
include “pseudo-activities”, such as psychological
wellbeing, that are directly related to habitat volume.
The authors then defined required volumes for each
defined activity, based on habitat analogs, prior
research, and SME input. The potential for various
activities to share volumetric space was then evaluated,
based on temporal usage, compatibility of tasks, and
crew health. Finally, the required minimum net
habitable volumes for a four crew and six crew Mars
Transit Habitats were assessed, including consideration
of specific geometrical constraints. Results of this study
will be used to evaluate deep space habitat options, and
also help formulate future Mars mission requirements.
Ultimately, results of this study will support the
refinement of NASA’s Mars Design Reference
Architectures, and help realize future long duration
exploration missions.
TABLE OF CONTENTS
1. INTRODUCTION......................................................1
2. ANALYSIS ...............................................................3
3. RESULTS...............................................................13
4. HABITAT CASE STUDY ........................................13
5. CONCLUSION........................................................15
REFERENCES .............................................................16
BIOGRAPHY...............................................................16
APPENDIX A: FUNCTIONS, VOLUMES, &
JUSTIFICATIONS........................................................18
APPENDIX B: FULL OVERLAPS ACROSS
CATEGORIES .............................................................31
APPENDIX C: FULL OVERLAPS.............................32
1.INTRODUCTION
Importance of Determining Habitable Volume
As the National Aeronautics of Space Administration
(NASA) continues planning for long-duration space
missions, specifically to Mars, it will be necessary to
understand the requirements for the required habitable
volume within crew habitats. Understanding volume
requirements for the transit habitat is significant because
volume is a first order driver of the habitat size and mass,
and therefore the propulsion and propellant requirements for
future Mars missions. Despite this importance, there is
significant uncertainty regarding how much habitable
volume is required to support the crew on these missions.
Past attempts to evaluate required volume have focused on
the evaluation of historical analogs in order to develop
parametric sizing formulas. While this type of top down
approach can be informative, there is large uncertainty in the
derived results.
A preferred method for establishing net habitable volume is
to apply a bottom-up approach, in which individual
requirements are established for defined functions and then
integrated across the habitat to develop a total required
habitable volume. While there has been research focused on
evaluating individual elements of habitable volume and
2
stressors to the crew, there have been limited efforts to
establish an integrated minimum required habitable volume
based on a comprehensive assessment of crew activities and
crew health requirements.
The effort described in the paper, conducted in support of
NASA’s Mars Integration Group (MIG), is the first
comprehensive study within NASA to evaluate the required
net habitable volume for a Mars Transit Habitat applying a
rigorous bottom-up approach. The MIG is conducting a
series of activities to define capability requirements and
options for crewed Mars missions. As part of this effort, the
team is developing a reference design for a Mars Transit
Habitat. While this reference is not intended to necessarily
represent the final habitat design, it is being used as a
common element to evaluate potential Mars mission
architectures. Accurately defining the required Net Habitable
Volume (NHV) is an important part of the effort.
The results of the effort described in the paper are intended
to serve as a reference to guide future NASA habitat designs.
The defined crew functions and established minimum
required volumes for these functions will serve as common
design guidelines for future efforts within NASA.
Net Habitable Volume
NASA has established a standard process for measuring the
Net Habitable Volume of a spacecraft, outlined in Net
Habitable Volume Verification Method (JSC-63557) [1].
This document codifies a standard for how NHV is defined
and measured.
The NHV represents only a portion of the total habitat
pressurized volume. The pressurized volume consists of the
sum of four components:
• NHV – The volume that the crew lives and works in.
• Systems Volume – Interior volume occupied by the
habitat systems.
• Storage Volume – Volume used to store consumables
and other logistics.
• Voids – Empty spaces that are not accessible to the
crew.
Systems volume is a function of the habitat systems design
and packaging. The storage volume is a function of crew
size, mission duration, and architecture. Voids are a function
of the packaging of volumes into a functional habitat.
The purpose of this effort was not to architect a specific
habitat or to calculate the volumes for that habitat. Rather,
the goal of this effort was to define the minimum NHV for
Mars missions with various crew sizes. The defined NHV
represents a floor level of habitable volume that must be
accommodated by an actual habitat design. Actual NHV in a
functional habitat will likely be somewhat greater than the
defined NHV. It is difficult to exactly fit the defined volumes
for different functions into a habitat, given the various design
constraints. In addition, designers may wish to allocate
additional NHV in the habitat for various reasons, including
support of mission specific goals, such as utilization. An
example of fitting the defined required minimum volume
into an actual habitat design is presented in Section 4 of this
paper.
It has generally been assumed that required NHV does not
vary for mission durations of greater than 180 days. Rather,
the volume that is required for the crew to work and live is
constant for durations longer than that threshold. Other
volumes (systems and storage) will still vary with duration.
Since this effort was intended to define minimum NHV for
long duration exploration missions, those longer than 180
days, duration was not a factor in this analysis.
Historical Precedents for Net Habitable Volume
Prior efforts to establish guidance for net habitable volume of
spacecraft have centered around two approaches: parametric
design standards and analysis of historical spacecraft
analogs.
Celentano/NASA-STD-3000 - In the early 1960s Celentano,
Amorelli, and Freeman of North American Aviation, as part
of an effort to establish a ‘Habitability Index’ for spacecraft
conducted a series of ground-based experiments, evaluating
how well ‘crews’ functioned and could complete tasks while
living in cabins of different sizes Celentano et al. [2]. The
authors used this data to establish what generally became
known as the “Celentano Curves”. These curves established
the required minimal habitable volume (and required
minimal floor area) per crew member as a function of
mission duration. Parametric curves were established for
three different levels of functionality: “Tolerable”,
“Performance”, and “Optimal”.
The Celentano curves were adopted as an accepted reference
for NHV and were eventually adopted as a standard in
NASA’s Man-Systems Integration Standards (MSIS), also
known as NASA-STD-3000 [3].
However, the use of the Celentano curves is problematic.
The test conducted by Celentano et al, which are the basis of
the curves, had a maximum duration of seven days. All data
beyond that time frame was extrapolated from the testing
results. In addition, the Celentano curves did not consider the
types of functions that might need to be accommodated by
the habitable volume. Often the Celentano curves are
referenced without full understanding of the conditions of the
original study and the limits of their application.
As the understanding of crew volume requirements with
respect to mission duration progressed, the use of the
Celentano curves has generally been discontinued. NASA’s
STD-3000 [3] has now been superseded by NASA-STD3001 [4] and the Human Integrated Design Handbook
(HIDH) [5], which no longer reference the Celentano
Curves.
Empirical Methods - To establish volume requirements that
were more well founded than the Celentano curves,
researchers have undertaken a series of activities to improve
the assessment of NHV. These efforts generally have
focused on an examination of the habitable volume of
historic spacecraft and other analogs, evaluating the available
habitable volume per crew member versus mission duration.
There are several issues with using empirically based
methods to specify NHV. At longer durations, those which
are significant to future Mars missions, there are only a
limited number of historical data points (Skylab, Salyut, Mir,
and ISS). The volumes of these analogs, which establish the
shape and position of the NHV curve, do not necessarily
represent the minimal required volume for the mission. The
design of each of these habitats was dependent on numerous
factors but, to a varying degree, were not focused on
minimizing habitable volume. Additionally, there is a large
3
variation in the habitable volume per crew for these historical
cases, resulting in significant uncertainty in any parametric
curve fit through the data.
Finally, as with the Celentano curves, the empirical methods
do not take account of the types of functions that the crew
will need to perform.
Bottom-Up Methodology - Recent focus for establishing
NHV has concentrated on bottom-up approaches. As part of
these methods, the effort is focused on defining volume
requirements for individual crew functions and then
integrating those into an overall volume requirement, rather
than trying to define required NHV at the top level. A group
of habitation experts from NASA, industry, and academia
participated in the 2012 Net Habitable Volume Workshop [6]
in Houston, TX. One of the major products of this workshop
was the definition of a process for conducting a
comprehensive bottom-up habitable volume assessment
referenced here. This process flow, originally presented in
the workshop report, outlines the high-level steps for
assessing required habitat functionality and defining required
volume for any spacecraft. This basic process was adapted
and applied for this effort.
The process utilized in this paper and outlined in Section 2
evaluates required volume following this type of bottom-up
approach. Individual required crew functions are identified
and required volumes for each individual function are
defined based on anthropomorphic data, simulation,
historical analogs, and/or design standards. The overall
required volume is then built up from the individual
functional volumes, accounting for potential overlaps in
functionality. The result is a minimum net habitable volume
for a specific mission.
NASA Guidance
In addition to existing NASA guidance on crew habitability,
such as NASA-STD-3001 [4] and HIDH [5], there also exist
additional documentation that directly relate to net habitable
volume.
Chief Medical Officer Memo - A significant piece of internal
NASA guidance was issued on December 19, 2016. The
agency Chief Medical Officer, in a Technical Memorandum
[7], recommended that the process outlined during the 2012
Net Habitable Volume Workshop [6] be adopted for all
future crewed space missions and that the defined process be
the desired method to verify the adequacy of spacecraft
volume.
NHV Design Standard - One other notable NASA document
related to NHV is the Net Habitable Volume Verification
Method from the Human Health and Performance
Directorate [1]. This document describes the method to use
to calculate NHV and is applicable to all crewed program
vehicles and habitats with an imposed NHV requirement.
The document establishes a standard for defining,
calculating, monitoring, evaluating, and verifying NHV.
2. ANALYSIS
The process employed in this effort is derived from the basic
process described in the 2012 Net Habitable Volume
Workshop [6] and endorsed by the NASA Chief Medical
Officer. The process involves a series of steps to identify
required crew functions and to then define the volumes
required to safely and efficiently conduct those functions.
First the team defined specific functional activities or tasks
that must be completed by the crew during a long-duration
exploration mission. Next the team defined minimum
required operational volume for each specific identified
function. Once individual functions and volume
requirements were defined, the team then identified
functional overlaps within categories, where individual
functions could overlap with overlapping functions each
accommodated in a given space. Based on identified
overlaps, a final set of ‘Functional Spaces’ were defined.
The Functional Spaces are the unique set of volumes that are
required to accommodate all defined functions in the
category. Each Functional Space may accommodate one or
more required functions. The sum of these spaces was
calculated to define the minimal NHV for a given crew size.
Classification of Crew Functional Tasks
The first step in the overall process was to identify the set of
all crew functional activities that must be accommodated by
the habitat and which allow the crew to conduct mission
operations and to live comfortably and safely in the habitat.
These functions form the basis for estimating required
volume in a bottom-up process. Functions are defined as
activities that the crew must or could be expected to perform,
either in nominal or contingency conditions, during the
mission. Functions include crew work functions, such as
command and control of the spacecraft and repair activities,
crew living functions, such as eating and sleeping, and crew
recreation functions.
The definition of functions for this activity was derived from
previous work completed by Howard [8]. As part of that
effort, the author developed an initial set of crew functions
for application in NHV definition. The team combined the
functions defined in Howard with additional functions
identified in Rucker and Thompson [9] and the Net
Habitable Volume Workshops [6] to develop an all-inclusive
set of candidate functions derived from all relevant sources.
The team then refined the final list of functions, accounting
for overlaps in definitions and criticality of the described
functions. As part of this refinement the team established a
taxonomy to capture how individual functions could be
grouped into operational categories. These categories
represent sets of functions that all have similar operational
parameters. For example, the category of ‘Meal Prep and
Dining’ represents a set of functions that includes Meal Prep,
Eating, and Clean Up.
For this study three categories of identified functions were
not included in the analysis to establish a minimum NHV.
First, the set of EVA related functions that would likely be
accomplished in an airlock space were not included. In most
cases, a segregated airlock space, which would generally
house a significant amount of EVA equipment, is not
considered to be habitable volume. Required EVA volumes
should be determined based on EVA requirements and
Concept of Operations and combined with Habitable Volume
to determine the overall required pressurized volume for a
candidate mission.
Similarly, the volume required for ‘Crew Safe Haven’ was
also not included in the analysis of minimum NHV. While it
is possible that space(s) to provide safe haven may be
4
incorporated into the habitat, and could contribute to NHV, it
is also possible that those space(s) might exist in the airlock
or in some other element.
The required habitable volume for both Airlock and Safe
Haven related functions are provided for reference in this
paper, to assist in future habitat design. However, the
volumes for those functions are not included in the
determination of minimum NHV.
Additionally, habitable volume for utilization functions were
also not included in this analysis. The types and scope of
utilization can vary heavily for different missions and are
dependent on the mission parameters and goals of the
utilization. Because those volumes are mission dependent,
they are not included in the minimum NHV.
Functional Categories
As part of the effort to define functional activities, individual
functions were grouped into ‘Functional Categories’. The
categories define sets of functions that all have related types
of operations and which are likely to be conducted in similar
and/or contiguous spaces.
Exercise – Deals with crew’s need to counteract the adverse
physiological effects of long duration space travel. The
definition of functions for Exercise was based on the use of a
suite of devices that is like the one employed on ISS. It is
anticipated that the types of devices used for exercise could
evolve for future exploration missions. However, it is also
anticipated that the number of devices and the required
volume will be similar to the requirements for the current
equipment. Specific functions include:
• Aerobic exercise (cycle ergometer)
• Aerobic exercise (treadmill)
• Resistive exercise
• Bone loading
• Sensorimotor
• Conditioning
Group Socialization and Recreation – Encompasses
functions for social and recreational crew interactions.
Specific functions include:
• Athletic games
• Personal recreation space
• Tabletop games & artistic/creative recreation
• Video/movie watching
• Window viewing
Human Waste Collection – Covers the collection and
disposal of human waste products. Specific functions
include:
• Hand cleaning
• Liquid waste collection
• Solid waste collection
Hygiene – Deals with functions that relate to maintaining
health, cleanliness, and personal appearance. Specific
functions include:
• Full body changing
• Facial cleaning
• Finger/toe nail clipping
• Full body cleaning
• Hair styling/grooming
• Hand cleaning
• Oral hygiene
• Hygiene supply surface access
• Viewing appearance
• Shaving
• Skin care
Logistics – Covers functions that relate to logistics storage,
transfer, management, and access. Specific functions include:
• Logistics surface access
• Small item containment
• Temporary stowage
Maintenance and Repair – Encompasses functions for
routine maintenance for spacecraft and its systems. Specific
functions include:
• Computer display and control interface
• Equipment diagnostics
• Telemaintenance
• Repair and maintenance work surface access
• Soft goods fabrication
EVA Support - Encompasses functions that deal with the
volume for storage, maintenance, and pre/post EVA support
activities that are required outside of the airlock. The volume
described by this category does not include the airlock that is
required for crewmember entry/exit, as the airlock is not
considered habitable volume. Specific functions include:
• Suit component testing
• Computer display and control interface
• Audio Communication
• Video Communication
Meal Preparation – Deals with functions for preparation of
food for crew consumption. Specific functions include:
• Food item sorting
• Food preparation
• Utensil and food equipment hygiene
Meal Consumption – Functions for daily meal
consumption. Specific functions include:
• Full crew dining
Medical Operations – Encompasses the necessity to
provide health care for the crew. Specific functions include:
• Advanced medical care (basic surgical care, trauma
care, advanced life support)
• Ambulatory care
• Basic medical care (space motion sickness, first aid,
anaphylaxis response, clinical diagnostics, medical
imaging)
• Computer data entry/manipulation
• Dental care
• Private telemedicine
• Medical meetings
Mission Planning – Covers group and individual planning
and interfaces for the execution of mission tasks. Specific
functions include:
• Command and control interface
• Physical mission planning surface access
• Team meetings
• Mission training
Private Habitation – Covers functions done in private
away from other crewmembers excluding hygiene and waste
management functions. Specific functions include:
5
• Clothes changing
• Meditation
• Non-sleep rest/relaxation in private quarters
• Personal work surface access
• Single person private work, entertainment, and
communication
• Sleep accommodation
• Stretching
• Two person meetings
• Viewing appearance in private quarters
Spacecraft Monitoring and Commanding – Covers
functions that refer to the capability of the crew to operate
the spacecraft and monitor spacecraft subsystems. Specific
functions include:
• Command and control
• Teleoperation and crew communication
Waste Management – Encompasses functions dealing with
trash packaging, containment, and disposal. Specific
functions include:
• Trash containment
• Trash packing for disposal
In addition to the categories and functions listed above,
which contribute to the minimum NHV, the following
functions may also be required and may exist within the
habitat, but are not included in the minimum NHV.
Airlock - Airlock operations encompass functions that deal
with the EVA operational activities. The volume described
by this includes only activities that would occur within the
airlock. Specific functions include:
• Depressurization
• Repressurization
• Hyperbaric isolation
• Hypobaric isolation
• Airlock command and control
• EVA suit donning and doffing
• Crew egress/ingress
• Payload egress/ingress
• Suit servicing
• Suit repair
Safe Haven – Covers crew necessity for safe haven in
emergency situation. Specific functions include:
• Safe haven
Volumetric Requirements
Once a final set of functions and categories was identified,
the team next defined the minimum required operational
volume for each specific identified function. Minimum
volumes included the volume for the crew to perform the
function, spaces for necessary access, and any required
clearances.
The minimum volume for each function was defined based
on three key assumptions:
1. Functions will occur in zero to minimal gravity.
2. Volumes are defined based on anthropometric data from
the 99th percentile male/female body depending on the
maximum sizes for each body part.
3. Mission length is at least 180 days. If the duration is
longer than 180 days it is assumed that the minimum
habitable volume is a fixed number.
The most significant resource that the team relied on was
NASA’s HIDH [5]. This document defines required volume
envelopes for a number of habitat functions in micro-gravity.
Figure 1 shows an example of Volume Envelope found in the
HIDH [5].

Figure 1: Example Volume Envelope
Anthropometric data for a variety of crew tasks is also
defined in NASA-STD-3001 [4]. Additional results from
Rucker and Thompson [9], Fitts [10] and the 2012 Habitable
Volume Workshop [7] include volume requirements for
other functions.
Other sources for volumetric data included results from
laboratory studies and human-in-the-loop simulation testing.
One such example of this is the University of Maryland’s
(UMD) Space Systems Laboratory analytic study in Akin et
al. [11] pertaining to habitat design as part of a NASA
Exploration Systems Mission Directorate grant. UMD has
developed full-scale mockups that have been tested on land
and in a Neutral Buoyancy Research Facility (NBRF) to
simulate a partial gravity environment. Results from these
studies [11] indicate required volumes for many tasks.
In certain cases, three dimensional Computer Aided Design
(CAD) models based on empirical information, including
photographic and video evidence, regarding volumetric
usage on ISS were utilized to assess the required volume. In
these cases, a CAD model was developed that captured the
performance of the required function based on
anthropometric information.
It is important to note that for many functions the required
volume includes not only a net minimal cubic volume but
also a set of minimum required dimensions. Minimum
dimensions represent an additional constraint on how the
required habitable volume must be arranged in the habitat.
One to three minimum dimensions may be specified. In all
cases both the minimum volume and any minimum
dimension constraints must be satisfied.
Unlike previous parametric methods, this study did not
attempt to reduce NHV requirements down to a standard ‘per
crew member’ value. The required NHV will not necessarily
vary linearly with crew size. Certain functions, such as
maintenance and repair, required a relatively fixed volume,
independent of crew size. Others, such as exercise may be
defined based on a step function – each four crew members,
or fraction thereof, would require an additional set of
exercise equipment. Certain functional volumes were
identified as being dependent on crew size.
The defined volumes are shown in Table 1. A more in-depth
explanation of how each volume was derived can be found in
Appendix A.
6
Table 1: Individual Functional Spaces and Volumes
FUNCTION VOLUME - 4 CREW
(m3
)
VOLUME - 6 CREW
(m3
)
Exercise
Aerobic Exercise 3.38 6.76
Aerobic Exercise 4.91 9.82
Resistive Exercise 3.92 7.84
Bone Loading 4.91 9.82
Sensorimotor Conditioning 4.91 9.82
Group Socialization
& Recreation
Athletic Games 18.2 27.3
Personal Recreation 1.2 1.2
Tabletop games & artistic/creative recreation 10.09 15.14
Video/movie viewing 4.8 7.2
Window viewing 4.62 4.62
Human Waste
Collection
Hand cleaning 2.69 5.38
Liquid waste collection 2.36 4.72
Solid waste collection 2.36 4.72
Hygiene
Changing Volume 2.18 4.36
Facial cleaning 2.69 5.38
Finger/toenail clipping 2.34 4.68
Full body cleaning 4.34 8.68
Hair styling/grooming 2.34 4.68
Hand cleaning 2.69 5.38
Oral hygiene 2.34 4.68
Physical work surface access 4.35 8.7
Viewing appearance 1.8 3.6
Shaving 2.34 4.68
Skin care 2.34 4.68
Logistics
Physical work surface access 4.35 4.35
Small item containment 1.2 1.2
Temporary stowage 6 6
Maintenance &
Repair
Computer display and control interface 1.7 3.4
Equipment Diagnostics 4.35 4.35
Physical work surface access 4.35 4.35
Soft goods fabrication 2.69 2.69
EVA Support
Suit Component Testing 4.82 4.82
Computer Display and Control Interface 1.7 1.7
Video Communication 1.7 1.7
Audio Communication 1.7 1.7
Meal Consumption Full Crew Dining 10.09 15.14
Meal Preparation
Food Item Sorting 3.3 3.3
Food Preparation 4.35 4.35
Utensil and food equipment hygiene 3.3 3.3
Medical
Operations
Advanced Medical Care 5.8 5.8
Ambulatory care 1.7 1.7
Basic Medical Care 5.8 5.8
Computer data entry / manipulation 1.2 1.2
Dental care 5.8 5.8
Private telemedicine 1.2 1.2
Two person meetings 3.4 3.4
Mission Planning
Command and control interface 3.42 3.42
Physical work surface access 10.09 15.14
Team Meetings 4.8 7.2
Mission Training 18.2 27.3
Private Habitation
Changing clothes 8.72 13.08
Meditation 4.8 7.2
Non-sleep rest/relaxation in private quarters 4.8 7.2
Physical work surface access 17.4 26.1
Single person private work, entertainment, and comm. 4.8 7.2
Sleep accommodation 10.76 16.14
Stretching 13.96 20.94
Two person meetings 13.6 20.4
Viewing appearance in private quarters 7.2 10.8
Spacecraft
Monitoring and
Commanding
Command and Control 3.42 3.42
Teleoperation and Crew Communication 1.7 1.7
Waste
Management
Trash Containment 2.55 2.55
Trash Packing for Disposal 3.76 3.76
7
Functional Overlaps
Once volumes were defined for each individual function, the
team next assessed potential overlaps in volumetric usage
between functions within a given category. Identifying
potential overlaps between functional activities is key to
understanding the overall habitat minimum volume
requirements. Most functions do not require dedicated
volumes and several functions may share a common volume.
Individual spaces can accommodate multiple functions, as
long as they are separated in time and are operationally
compatible.
Potential overlaps were identified based on similarities
volume and design considerations and temporal
independence (e.g., ensuring that functions would not occur
at the same time). Overlaps can be flexible. For example,
some hygiene functions, such as grooming, could take place
in personal quarters, or in a designated hygiene space.
The team used analysis matrices to assess the compatibility
of each possible pair of functions within a functional
category. The team individually evaluated each pair of
functions, assessing the schedule and duration of tasks, the
requirements for resources such as power and water, and
impacts of overlaps on crew health, safety, and comfort. If a
pair of functions could reasonably be accommodated in a
common volume, the pair was noted as a potential overlap.
Based on the mapping of potential overlaps, the team
identified a set of Functional Spaces within each category.
Functional Spaces are the unique set of volumes that are
required to accommodate all defined functions in the
category. Each Functional space may accommodate one or
more required functions. Volumes for functional spaces were
determined by taking the largest required volume of the
grouped functions.
An example of the overlap process is demonstrated in the
Hygiene category. One set of potential functional overlaps
that were identified included fingernail clipping, full-body
cleaning, oral hygiene, and shaving. These functions would
typically take place in the same general area with access to
cleansing wipes and a small vacuum or vent for hair, nail
clippings, etc. The function that takes the most volume to
complete is full-body cleaning, so this is the volume that
represents the minimum volume for the entire overlapping
section.
The team applied past research to ensure overlap decisions
were based on minimizing psychological stressors due to
volume. Overlaps and improvements in volumetric
efficiency should not contribute to a feeling of crowdedness.
From the 2011 NASA workshop on habitable volume,
discussed in Simon et al. [12], habitat design guidance
factors that can help mitigate crowdedness include separation
of high traffic functions, task scheduling, and rotating shifts,
dedicated translation paths in an integrated environment, and
increased volume or dimensions that increase the perception
of space. Particularly for the psychological well-being of the
crew, overlaps should refrain from impeding on social
common area volume. It was found in the workshop that
layout contributes more to most psychological-behavioral
health stressors than does internal volume. Additionally, the
workshop emphasized the importance of identifying overlaps
in task volumes as a desired body of work for volume
requirements determination. Tables 2-15 show the mapped
functional overlaps and resultant functional spaces for each
operational category.
Table 2: Exercise Overlaps and Functional Spaces
Aerobic Exercise
(Cycle Ergometer)
Aerobic Exercise
(Treadmill) Resistive Exercise Bone Loading Sensorimotor
Conditioning
Aerobic Exercise
(Cycle Ergometer)
Aerobic
Exercise (Treadmill) 0
Resistive Exercise 0 0
Bone Loading 0 1 0
Sensorimotor
Conditioning 0 1 0 1
Functional Space
Minimum
Volume - 4
crew (m3
)
Minimum
Volume - 6
crew (m3
)
Functions
Exercise-1 (Cycle
Ergometer) 3.38 6.76 Aerobic Exercise
(Cycle Ergometer)
Exercise-2 (Treadmill) 6.12 12.24 Aerobic Exercise
(Treadmill) Bone Loading Sensorimotor
Conditioning
Exercise-3 (Resistive
Device) 3.92 7.84 Resistive Exercise
8
Table 3: Group Socialization and Recreation Overlaps and Functional Spaces
Athletic Games Personal
Recreation
Tabletop Games
& Recreation
Video/Movie
Viewing
Window
Viewing
Athletic Games
Personal Recreation 1
Tabletop Games &
Recreation 0 0
Video/Movie Viewing 1 1 0
Window Viewing 1 1 0 1
Functional Space
Minimum
Volume - 4
Crew (m3
)
Minimum
Volume - 6
Crew (m3
)
Functions
Group Social-1 (Open
Area) 18.20 27.30 Athletic Games Personal
Recreation Video/Movie Viewing Window Viewing
Group Social-2 (Table) 10.09 15.14 Tabletop Games &
Recreation
Table 4: Hygiene Overlaps and Functional Spaces
Changing
Volume
Facial
Cleaning
Finger/toe
Nail
Clipping
Full Body
Cleaning
Hair
Styling/
Grooming
Hand
Cleaning
Oral
Hygiene
Physical Work
Surface Access
Viewing
Appearance Shaving Skin
Care
Changing Volume
Facial Cleaning 1
Finger/toe Nail
Clipping 1 1
Full Body Cleaning 1 1 1
Hair
Styling/Grooming 1 1 0 0
Hand Cleaning 1 1 1 1 0
Oral Hygiene 1 1 1 1 0 1
Physical Work
Surface Access 1 1 1 1 1 1 1
Shaving 1 1 1 1 1 1 1 1
Skin Care 1 1 1 0 1 1 1 1 1
Viewing
Appearance 1 1 1 0 1 1 1 1 1 1
Functional
Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
Functions
Hygiene-1
(Cleansing) 4.35 8.7 Changing
Volume
Facial
Cleaning
Finger/Toe
Nail Clipping
Full Body
Cleaning
Hand
Cleaning
Oral
Hygiene
Physical Work
Surface
Access
Shaving
Hygiene-2 (NonCleansing) 2.34 4.68 Hair Styling/
Grooming
Skin
Care
Viewing
appearance
9
Table 5: Logistics Overlaps and Functional Spaces
Physical Work
Surface Access
Small Item
Containment
Temporary
Stowage
Physical Work Surface Access
Small Item Containment 0
Temporary Stowage 0 1
Functional Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
Functions
Logistics-1 (Work Surface) 4.35 4.35 Physical Work Surface
Access
Logistics-2 (Temporary Stowage) 6.00 6.00 Temporary Stowage Small Item Containment
Table 6: Maintenance and Repair Overlaps and Functional Spaces
Computer Display
and Control Interface
Equipment
Diagnostics
Physical Work
Surface Access
Soft Goods
Fabrication
Computer Display and Control Interface
Equipment Diagnostics 0
Physical Work Surface Access 0 1
Soft Goods Fabrication 0 1 1
Functional Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
Functions
Maintenance-1 (Computer) 1.70 3.40 Computer Display and Control
Interface
Maintenance-2 (Work Surface) 4.35 4.35 Physical Work Surface Access Soft Goods Fabrication Equipment
Diagnostics
Table 7: EVA Support Overlaps and Functional Spaces
Computer
Display and
Control
Interface
Suit Component
Testing
Video
Communication
Audio
Communication
Computer Display and
Control Interface
Suit Component
Testing 0
Video Communication 1 0
Audio Communication 1 0 1
Functional Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
EVA-1 (Suit Testing) 4.82 4.82 Suit Component
Testing
EVA-2 (EVA
Computer/Data) 1.70 1.70 Computer Display and
Control Interface
Video
Communication
Audio
Communication
10
Table 8: Meal Consumption Overlaps and Functional Spaces
Functional Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
Functions
Meal Consumption (Table) 10.09 15.14 Meal Consumption
Table 9: Meal Preparation Overlaps and Functional Spaces
Food Item Sorting Food Preparation Utensil and Food Equipment
Hygiene
Food Item Sorting
Food Preparation 0
Utensil and Food Equipment Hygiene 1 0
Functional Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
Functions
Meal Preparation-1 (Food Prep) 4.35 4.35 Food Preparation
Meal Preparation-2 (Table/Work Surface) 3.30 3.30 Food Item Sorting Utensil and Food Equipment Hygiene
Table 10: Medical Operations Overlaps and Functional Spaces
Advanced
Medical Care
Ambulatory
Care
Basic Medical
Care
Computer Data Entry
/ Manipulation
Dental
Care
Private
Telemedicine
Two Person
Meetings
Advanced Medical Care
Ambulatory Care 0
Basic Medical Care 1 0
Computer Data Entry /
Manipulation 0 0 0
Dental Care 1 0 1 0
Private Telemedicine 0 0 0 1 0
Two Person Meetings 0 1 0 0 0 0
Functional Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
Functions
Medical-1 (Computer) 1.20 1.20 Computer Data Entry /
Manipulation Private Telemedicine
Medical-2 (Ambulatory Care) 3.40 3.40 Ambulatory Care Two Person Meetings
Medical-3 (Medical Care/Work Surface) 5.80 5.80 Advanced Medical Care Basic Medical Care Dental Care
11
Table 11: Mission Planning Overlaps and Functional Spaces
Command and
Control Interface
Physical Work
Surface Access Team Meetings Mission Training
Command and Control Interface
Physical Work Surface Access 0
Team Meetings 0 1
Mission Training 0 0 0
Functional Space Minimum Volume -
4 Crew, (m3
)
Minimum Volume
- 6 Crew, (m3
)
Functions
Mission Planning-1 (Table/Work Surface) 10.09 15.14 Physical Work Surface
Access Team Meetings
Mission Planning-2 (Computer/Command) 3.42 3.42 Command and Control
Interface
Mission Planning-3 (Training) 18.20 27.30 Mission Training
Table 12: Private Habitation Overlaps and Functional Spaces
Changing
Clothes Meditation
Non-Sleep
Rest/
Relaxation
Physical Work
Surface Access
Single Person
Private Work,
Ent., and Comm.
Sleep Accomm. Stretching
Two
Person
Meetings
Viewing
Appearance
Changing Clothes
Meditation 1
Non-Sleep
Rest/Relaxation 1 1
Physical Work
Surface Access 0 0 0
Single Person
Private Work, Ent.,
and Comm.
0 0 0 1
Sleep
Accommodation 1 1 1 1 0
Stretching 1 1 1 1 0 1
Two Person
meetings 0 0 0 1 1 0 0
Viewing
Appearance 1 1 1 1 0 1 1 0
Functional Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
Functions
Private Habitation-1
(Desk/Work Surface) 4.35 4.35
Single Person Private
Work, Entertainment,
and Communication
Physical Work
Surface Access
Two Person
Meetings
Private Habitation-2
(Sleep & Relaxation) 3.49 3.49 Sleep Accommodation Non-Sleep
Rest/Relaxation Meditation Stretching Changing
Clothes
Viewing
Appearance
Table 13: Spacecraft Monitoring and Command Overlaps and Functional Spaces
Command and Control Teleoperation and Crew Communication
Command and Control
Teleoperation and Crew Communication 1
Functional Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
Functions
Spacecraft Monitoring (Computer/Command) 3.42 3.42 Command and Control Teleoperation and Crew
Communication
12
Table 14: Waste Management Overlaps and Functional Spaces
Trash Containment Trash Packing for Disposal
Trash Containment
Trash Packing for Disposal 1
Functional Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
Functions
Waste Management 3.76 3.76 Trash Containment Trash Packing for Disposal
Table 15: Airlock Overlaps and Functional Spaces
Computer
Display and
Control
Interface
Depressurization
Repressurization
Hyperbaric
Isolation
Hypobaric
Isolation
EVA Suit
Don/
Doffing
Crew
Ingress/
Egress
Subsystem
or Payload
Ingress/
Egress
Suit
Servicing
Suit
Repair
Suit
Component
Testing
Airlock Display
and Control
Interface
Depressurization 0
Repressurization 0 1
Hyperbaric
Isolation 0 1 1
Hypobaric
Isolation 0 1 1 1
EVA Suit
Don/Doffing 0 1 1 1 1
Crew
Ingress/Egress 0 1 1 1 1 1
Subsystem or
Payload
Ingress/Egress
0 1 1 1 1 1 1
Suit Servicing 0 1 1 1 1 1 1 1
Suit Repair 0 1 1 1 1 1 1 1 1
Functional Space
Minimum
Volume - 4
Crew, (m3
)
Minimum
Volume - 6
Crew, (m3
)
Functions
A/L-1 (External
Airlock) 6.35 6.35 Depressurization
Repressurization
Hyperbatic
Isolation
Hypobatic
Isolation
EVA Suit
Don/Doffing
Crew
Ingress/
Egress
Subsytem or
Payload
Ingress/Egress
A/L-2 (Suit
Maintenance) 4.82 4.82 Suit Servicing Suit Repair
A/L-3 (EVA
Computer/Data) 1.70 1.70
Airlock Display
and Control
Interface
13
Cross Category Overlaps
A second step in classifying overlaps involved identifying
overlaps among Functional Spaces across functional
categories. Because functions in different categories
naturally tend to have different functional requirements and
constraints, there is generally less potential for overlaps in
these areas. However, there are certain cases where it is
possible to combine Functional Spaces across categories in
order to reduce overall volume.
The team utilized the same basic process for identifying
these overlaps as was done at the category level. A single
matrix was used to compare Functional Space pairs across
categories and to identify cases where there was potential for
overlaps. This matrix is shown in Appendix B.
3. RESULTS
Spaces with identified overlaps were then combined and a
final comprehensive list of cross category Combined
Functional Spaces was developed. As with the previous step,
the minimum volume between functional spaces was used
for the Combined Functional Space. Table 16 lists the
Combined Functional Spaces and resultant minimum
habitable volumes for the four and six crew cases.
Table 16: Functional Spaces and Volumes
Combined Functional Space
Minimum
Volume - 4
crew (m3
)
Minimum
Volume - 6
crew (m3)
Exercise-1 (Cycle Ergometer) 6.12 12.24
Exercise-2 (Treadmill) 3.38 6.76
Exercise-3 (Resistive Device) 3.92 7.84
Group Social-1 (Open Area) /
Mission Planning-3 (Training) 18.20 27.30
Group Social-2 (Table) / Meal
Consumption / Mission Planning1 (Table)
10.09 15.14
Human Waste-1 (Waste
Collection) 2.36 4.72
Human Waste-2 (Cleansing) /
Hygiene-1 (Cleansing) 4.35 8.70
Logistics-2 (Temporary Stowage) 6.00 6.00
Maintenance-1 (Computer) /
EVA-2 (EVA Computer/Data) 3.40 3.40
Maintenance-2 (Work Surface) /
Logistics-1 (Work Surface) / EVA-1
(Suit Testing)
4.82 4.82
Meal Preparation-1 (Food Prep) 4.35 8.70
Meal Preparation-2 (Work
Surface) 3.30 3.30
Medical-1 (Computer) 1.20 1.20
Medical-3 (Medical Care) 5.80 5.80
Mission Planning-2
(Computer/Command) /
Spacecraft Monitoring
3.42 3.42
Private Habitation-1 (Work
Surface) / Medical-2 (Ambulatory
Care)
17.40 26.10
Private Habitation-2 (Sleep &
Relaxation) / Hygiene-2 (NonCleansing)
13.96 20.94
Waste Management 3.76 3.76
TOTAL MINIMUM NHV 115.83 170.14
MINIMUM NHV PER CREW 28.96 28.36
This exercise resulted in 18 unique volumes, or Combined
Functional Spaces, that represent different physical areas.
Many of these areas can be used for multiple functions, while
some are reserved for only one specific function (e.g.
exercise). These Combined Functional Spaces were summed
to derive total net habitable volumes for both a 4-person
crew and a 6-person crew.
The resulting Functional Spaces are in line with what has
been recommended in previous research. Two large common
areas exist, one open area for group recreational activities,
group training, watching movies, etc. and one area with a
large enough surface for eating, working, and playing
tabletop games. As mentioned in Simon et al. [14], having
designated recreation areas away from work areas is critical
to crew psychological well being in long-duration missions.
As stated previously, these values represent a floor for NHV.
Constraints in an actual habitat design will likely result in an
actual NHV that is greater than these values. In addition, the
total habitat volume represented here is simply a
combination of individual required spaces. The habitat must
provide adequate volume for each identified combined
functional space based on minimum volumes and
dimensions.
4.HABITAT CASE STUDY
Mars Transit Habitat
The habitable volume results outlined in this paper only
represent a minimum NHV. Any design for the Mars Transit
Habitat will ultimately be subject to numerous constraints,
including shape and size. To demonstrate how the defined
NHV can be applied to a specific habitat design, the team
developed a habitat based on the basic design and
constraints of the Mars Transit Habitat (MTH) Conceptual
Layout proposed in the Human Exploration of Mars: A
Basis of Comparison Architecture [13]. This habitat design
is not intended to serve as a final concept for a Mars habitat
but rather to demonstrate how the NHV requirements would
be applied to develop an actual habitat design.
Figure 2: Case Study NHV Envelope
14
The team adjusted the proposed layout and dimensions to
accommodate the minimum volumetric requirements
derived in this paper. The team applied a three-dimensional
CAD model to alter the design and to create and measure
representations of Functional Spaces.
The case study assumed a crew size of four and mission
duration of 1,200 days. The MTH is sized to fit the SLS
8.4 m fairing diameter, with a diameter of 7.2 m. The length
was set to accommodate the required volume and layout.
For the defined mission, volume had to be provided to house
987 CTBEs of logistics and a utilization volume of 5.22 m3
.
The resultant habitat had a length of 8.91 m and a total
pressurized volume of 306 m3 (not including the volume of
the external airlock used in the MTH). To account for
additional functionalities required, the team allocated
additional habitable volume for utilization, logistics access,
and passageways. These volumes are driven entirely by
design and mission requirements and so do not have
minimum volume specifications. Figure 2 shows the
resultant habitable volume envelope of the MTH.
The team adjusted the original design to accommodate the
functional spaces defined in this effort. Deck heights were
shifted to more efficiently accommodate the defined spaces
and storage spaces were consolidated. The adjustments
resulted in the habitat design shown in Figure 3. After these
adjustments were made, each Functional Space was defined
within the spacecraft. Arrangements were based on
requirements and limitations for functional space design.
Then volumes representing each Functional Space were
evaluated to ensure that the space met the required
minimum volumes.
In most aspects, after adjusting the floors and storage, the
original design exceeded or equaled minimum volume
requirements. But in some areas, Functional Spaces did not
meet the minimum and the design had to be adjusted
accordingly. Private quarters, for example, had
approximately half of the volume required according to the
NHV results. To accommodate the greater volume, private
habitation areas were expanded and additional storage was
moved from the second deck to the lower dome area. The
orientation of the sleeping area was also changed, from
horizontal to vertical, to better maximize the space. These
adjustments demonstrate how a design might be catered to
meet the needs of a minimum habitable volume. This design
serves to demonstrate how minimum habitable volume
design considerations can be used to drive a conceptual
layout.
The minimal NHV and final NHV for each Combined
Functional Space in the MTH are shown in Table 17. A
summary of all the contributors to the pressurized volume
are shown in Table 18.
Figure 3: Case Study Habitat
Airlock
Third Deck: Exercise,
Storage
Second Deck: Private
Habitation, Storage
First Deck: Meals,
Recreation, Work
Stations, Medical,
Hygiene
987 CTBEs of storage
distributed throughout
habitat
ECLSS and additional
systems in upper and
lower domes
15
Table 17: Comparison of Minimum Habitable Volumes and Case Study Habitable Volumes
Functional Space Minimum
Volume (m3
)
MTH Volume
(m3
)
Exercise-1 (Cycle Ergometer) 3.38 3.50
Exercise-2 (Treadmill) 6.12 6.20
Exercise-3 (Resistive Device) 3.92 4.29
Group Social-1 (Open Area) / Mission Planning-3 (Training) 18.20 21.21
Group Social-2 (Table) / Meal Consumption (Table) / Mission Planning-2 (Table) 10.09 10.48
Human Waste-1 (Waste Collection) 2.36 2.36
Human Waste-2 (Cleansing) / Hygiene-1 (Cleansing) 4.35 4.35
Logistics-2 (Temporary Stowage) 6.00 6.18
Maintenance-1 (Computer) / EVA-2 (EVA Computer/Data) 3.40 3.55
Maintenance-2 (Work Surface) / Logistics-1 (Work Surface) / EVA-1 (Suit Testing) 4.82 5.11
Meal Preparation-1 (Food Prep) 4.35 4.35
Meal Preparation-2 (Work Surface) 3.30 3.30
Medical-1 (Computer) 1.20 1.65
Medical-3 (Medical Care) 5.80 6.40
Mission Planning-2 (Computer/Command) / Spacecraft Monitoring 3.42 3.55
Private Habitation-1 (Work Surface) / Medical-2 (Ambulatory Care) 17.40 17.40
Private Habitation-2 (Sleep & Relaxation) / Hygiene-2 (Non-Cleansing) 13.96 14.00
Waste Management 3.76 4.43
Logistics-3 (Storage Access) - 2.14
Utilization-1 (Scientific Research) - 5.22
Passageway to Hygiene - 3.84
Passageway to Second Deck - 10.25
Passageway to Third Deck / Egress/Ingress for Airlock - 3.43
Total NHV 115.83 147.19
NHV per Crewmember 28.96 36.80
The final Net Habitable Volume of the derived MTH is
approximately 147.19 m3
, not including the external airlock.
Storage volume, based on the requirement for 987 CTBEs is
52 m3
. Volume allocated for vehicle systems equipment
equals 104 m3
. The Airlock, not included in final volume
estimates, has a pressurized volume of 13.2 m3
and a
habitable volume of 11.05 m3
.
Table 18: Case Study Volume Breakdown
Area Volume (m3
)
Net Habitable Volume 147
Systems Volume 104
Storage Volume 52
Voids/Unreachable Areas 3
Pressurized Volume 306
The NHV of the MTH is approximately 27% larger than the
minimum possible NHV defined for the four-crew case in
this paper. This additional volume is partially from added
spaces for access and utilization but is also due to the
inefficiencies of packaging functional spaces into the
cylindrical form.
5. CONCLUSION
Previous parametric studies have suggested that a value of
approximately 25 m3 per crew is a reasonable estimate for
habitable volume. The results of this study indicate that
required minimum NHV should be close to that value. For
both the four and six crew cases, the minimum estimated
NHV per crew was between 28 m3
and 29 m3
. However, it is
important to note that once applied to an actual habitat
design, the resultant habitable volume was significantly
larger than the established minimum, after accounting for
additional access spaces and the efficiencies of providing
spaces in a cylindrical habitat. Based on the case study
developed in this paper, it is likely that the total net
habitable volume required to provide the minimum
functional volumes described in this paper will be closer to
37 m3 per crew.
This study developed two important products for establishing
future designs for exploration habitats. The first product is a
set of minimum habitable volume standards for all required
crew functional spaces based on functional needs. These
requirements establish a floor for habitable volume necessary
for operations and safety of the crew.
16
The second product is a method for applying the established
habitable volume requirements to the development of an
actual habitat design. By applying the minimum volumes as
part of a bottom-up methodology, habitat architects can
ensure that design efforts are acceptable, safe, and humancentric for long-duration missions.
The volume standards and application method formulated in
this study can be used to help plan future Mars mission
requirements and evaluate future habitat designs.
REFERENCES
[1] National Aeronautics and Space Administration, “Net
Habitable Volume Verification Method (JSC-63557),”
NASA Human Health and Performance Directorate,
2014.
[2] Celentano, Amorelli, and Freeman, "Establishing a
Habitability Index for Space Stations and Planetary
Bases”, AIAA 63-139, AIAA/ASMA Manned Space
Laboratory Conference, Los Angeles, CA, 1963.
[3] National Aeronautics and Space Administration, "ManSystems Integration Standards, NASA-STD-3000,"
NASA Technical Standards, 1995.
[4] National Aeronautics and Space Administration, “NASA
Space Flight Human-System Standard Volume 2:
Human Factors, Habitability, and Environmental
Health,” NASA Technical Standard NASA-STD-3001,
Volume 2, 2011.
[5] National Aeronautics and Space Administration,
"Human Integration Design Handbook (HIDH),"
NASA/SP-2010-3407, 2014.
[6] S. Thaxton, M. Chen, and M. Whitmore. “2012
Habitable Volume Workshop Results: Technical
Products,” Prepared for Human Research Program
(HRP) Space Human Factors Engineering (SHFE)
Portfolio, 2012.
[7] T. Taddeo, “Level II JSC Chief Medical Officer (CMO)
Health and Medical Technical Authority (HMTA)
Position on Net Habitable Volume and Internal Layout
Considerations for Exploration Missions,” National
Aeronautics and Space Administration, Johnson Space
Center, 2016.
[8] R. L. Howard, “Justification of Crew Function and
Function Capability for Long Duration Deep Space
Habitation,” American Institute of Aeronautics and
Astronautics, 2018.
[9] M. A. Rucker and S. Thompson, "Developing a Habitat
for Long Duration, Deep Space Missions," Global Space
Exploration Conference, 2012.
[10] Fitts, David J. “International Space Station (ISS)
Internal Volume Configuration,” AIAA Space
Architecture Symposium, 2002.
[11] D. L. Akin, K. McBryan, N. Limparis, N. D'Amore and
C. Carlsen, "Habitat Design and Assessment at Varying
Gravity Levels," 44th International Conference on
Environmental Systems, 2014.
[12] M. Simon, A. Whitmire, C. Otto and D. Neubek,
"Factors Impacting Habitable Volume Requirements:
Results from the 2011 Habitable Volume Workshop,"
National Aeronautics and Space Administration, 2011.
[13] N. J. Williams, “Human Exploration of Mars: A Basis
of Comparison Architecture,” National Aeronautics and
Space Administration Johnson Space Center, 2019.
BIOGRAPHY
Chel Stromgren currently
serves as the Chief Scientist of
Binera, Inc. Risk Analytics
Division. In this role, Mr.
Stromgren leads the
development of probability and
risk-based strategic models and
strategic analysis of complex
system development. Mr.
Stromgren has supported NASA
in the analysis of Space Shuttle and International Space
Station operations in the post-Columbia environment and
has led the development of strategic campaign models for
the lunar exploration initiatives. He holds a Bachelor of
Science degree in Marine Engineering and Naval
Architecture from the Webb Institute and a Master of
Science degree in Systems Management from the
Massachusetts Institute of Technology.
Michelle Rucker received a B.S.
(1984) and M.A. (1986) in
Mechanical Engineering from
Rice University and has been
with NASA for 29 years. She
currently serves in the
Exploration Integration and
Science Directorate at the
Johnson Space Center. She
began her NASA career as a test
engineer at the White Sands Test Facility before moving
onto roles as a deputy subsystem manager for the
International Space Station, EVA and Spacesuit Systems
Deputy Branch Chief, and Altair Lunar Test and
Verification Lead. She currently leads the Mars
Integration Group.
17
Callie Burke is a Senior Analyst at
Binera, Inc. where she has worked
since 2018 in the area of Risk
Analytics. She has supported
multiple projects for NASA’s Human
Spaceflight and Exploration Team
including volumetric analyses for
lunar landing designs and research
related to long-duration exploration missions. She holds
a Bachelor of Arts in Diplomacy and World Affairs from
Occidental College and a Master of Arts in Law and
Diplomacy from The Fletcher School at Tufts University.
Jason Cho received a B.S
(2019) in Aerospace
Engineering from The
University of Maryland and
currently serves as an
Aerospace Engineer at Binera,
Inc. Mr. Cho supports NASA in
the analysis of campaign and
probabilistic modeling for lunar and deep space
exploration efforts.
Robert Calderon received his
B.S. in Mechanical Engineering
(2010) and his Master of
Engineering Management
(2013) from the Johns Hopkins
University and Dartmouth
College, respectively. He
provides analytical support as
a Junior Operations Research
Analyst to Binera, Inc. in their
multiple risk-informed, statistically-driven assessments.
He interned at the Jet Propulsion Laboratory in 2012,
assisting in the research efforts to view exoplanets.
18
APPENDIX A: FUNCTIONS, VOLUMES, & JUSTIFICATIONS
EXERCISE
FUNCTION FUNCTION DESCRIPTION &
VOLUME ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Aerobic Exercise
- Cycle
Ergometer
Use of a cycle ergometer with
access and appropriate
separation. One device per four
crew.
3.38 6.76
HIDH [5] – 3.38 m3 per device
2012 HVW [6] – 3.31 m3 per device (Exercise in
ISS Zvezda Service Module);
Final Value: 3.38 m3 per device;
Width: 0.65 m
Depth: 0.69 m
Aerobic Exercise
- Treadmill
Use of a treadmill with access
and appropriate separation.
One device per four crew.
6.12 12.24 HIDH [5] – 6.12 m3 per device (Table 8.2-1); Height: 1.91 m
Resistive
Exercise
Use of the ARED Device. One
device per four crew.
3.92 7.84 ISS-IVC [10] – 3.92 m3 per crew; Height: 1.91 m
Bone Loading
Use of a treadmill with access
and appropriate separation.
One device per four crew.
4.91 9.92
HIDH [5] – 6.12 m3 per device (Table 8.2-1)
Same envelope as: “Aerobic Exercise –
Treadmill”;
Width: 0.65 m
Depth: 0.69 m
Sensorimotor
Conditioning
Use of a treadmill with access
and appropriate separation.
One device per four crew.
4.91 9.92
HIDH [5] – 6.12 m3 per device (Table 8.2-1)
Same envelope as: “Aerobic Exercise –
Treadmill”;
Width: 0.65 m
Depth: 0.69 m
GROUP SOCIALIZATION AND RECREATION
FUNCTION FUNCTION DESCRIPTION &
VOLUME ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Athletic Games
All crewmembers standing with
maximum volume used by
means of different arm
positions. Past examples of
activities include handball and
soccer.
18.20 27.30
HIDH [5] - 4.35 m3 per crewmember crew =
17.4 m3 for four crewmembers (Table 8.2-1:
General workstations, food preparation,
partial body cleaning, housekeeping);
CAD Modeling: 18.2 m3
for four crewmembers
(Volume of crewmembers with different arm
members and space between); 27.3 m3
for 6
crewmembers;
Final Value: 18.2 m3 per four crew;
Depth: 1.95 m
Personal
Recreation
Sufficient volume for one
crewmember to be in relaxed
position - away from work
station.
1.20 1.20 HIDH [5] - 1.2 m3
(Table 4.3-5: Neutral body in
0g);
Width: 0.91 m
Depth: 0.66
Height: 2.00
19
Tabletop Games
& Artistic/
Creative
Recreation
All crew members seated at
table. Historical examples
include boardgames like chess.
10.09 15.14
2012 HVW [6] – 10.09 m3
for four
crewmembers (Based on measurement of
Deep Space Habitat Demonstration Unit
Wardroom);
HIDH [5] – 2.69 m3 per crewmember = 10.76
m3
for four crewmembers;
Final Value: 10.09 m3 per four crew;
Width: 1.91 m
Depth: 1.91 m
Height: 1.49 m
Video/Movie
Viewing
Up to four crewmembers are
seated with ideal viewing
distance of a 1.5m 4k screen.
4.80 7.20
HIDH [5] – 1.7 m3
(Table 8.2-1: Body waste
management facilities, ascent and descent,
spacecraft duty station);
CAD Modeling: 4.8 m3
;
Final Volume: 4.8 m3 per four crew;
Width: 2.61 m
Height: 1.49 m
Window Viewing One crewmember looking out
window 4.62 4.62 HIDH [5] – 4.62 m3
(Image 8.6-6: Window
implementation in 0g);
Width: 0.65 m
HUMAN WASTE COLLECTION
FUNCTION FUNCTION DESCRIPTION &
VOLUME ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Hand Cleaning
Sufficient volume for one
crewmember to clean hands,
separate from waste collection;
Gravity-appropriate system for
deep cleaning and drying of
hands and forearms, inclusive of
contamination from medical,
bodily waste, or maintenance
activities. One station per four
crew, two stations per six crew.
2.69 5.38
HIDH [5] – 2.69 m3
(Table 8.2-1: Eating,
sleeping, hand washing, personal office,
radiation shelter, conference);
Width: 0.65 m
Depth: 0.54 m
Liquid Waste
Collection
Volume needed to
accommodate the UWMS. One
station per four crew, two
2.36 4.72
HIDH [5] – 1.7 m3
(Table 8.2-1: Body waste
management facilities, ascent and descent,
spacecraft duty station);
Width: 0.65 m
Height: 1.49 m
20
stations per six crew. CAD Modeling: 2.36 m3
;
Final Value: 2.36 m3 per system;
Solid Waste
Collection
Volume needed to
accommodate the UWMS. One
station per four crew, two
stations per six crew.
2.36 4.72
HIDH [5] – 1.7 m3
(Table 8.2-1: Body waste
management facilities, ascent and descent,
spacecraft duty station);
CAD Modeling: 2.36 m3
;
Final Value: 2.36 m3 per system;
Same envelope as “Liquid Waste”;
Width: 0.65 m
Height: 1.49 m
HYGIENE
FUNCTION FUNCTION DESCRIPTION &
VOLUME ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Changing
Volume
One crewmember with
sufficient room to change
clothes in dry environment with
visual separation. One station
per four crew, two stations per
six crew.
2.18 4.36
HIDH [5] – 1.2 m3
(Table 4.3-5: Neutral body in
0g);
CAD Modeling: 2.18 m3
(Neutral body with .15
m of extra space on all sides);
Width: 0.93 m
Height: 2.00 m
Facial Cleaning
Volume for one crewmember to
clean and dry face, separate
from full body cleaning area;
Gravity-appropriate system for
deep cleaning and drying of face
and hair, inclusive of
contamination from medical,
bodily waste, or maintenance
activities, and for application of
cosmetics or other facial
products. One station per four
crew, two stations per six crew.
2.69 5.38
HIDH [5] – 2.69 m3
(Table 8.2-1: Eating,
sleeping, hand washing, personal office,
radiation shelter, conference);
Same envelope as “Hand Cleaning” in Human
Waste Collection;
Width: 0.65 m
Depth: 0.54 m
Finger/Toenail
Clipping
Sufficient volume, gravity
accommodation, tool fixtures,
and debris capture for selfperformed finger and toenail
clipping. One station per four
crew, two stations per six crew.
2.34 4.68
HIDH [5] – 2.34 m3
(Table 8.2-1: Shaving,
grooming, oral hygiene);
CAD Modeling: 2.34 m3
;
Width: 0.65 m
Full Body
Cleaning
Deep washing and drying of
entire body exterior, inclusive
of contamination from
medical, bodily waste, or
maintenance activities. One
station per four crew, two
stations per six crew.
4.34 8.68
HIDH [5] – 4.35 m3
(Table 8.2-1: General
workstations, food preparation, partial body
cleaning, housekeeping);
CAD Modeling: 4.34 m3
(Based on hygiene
practices aboard the ISS in regards to
showering, shampooing, and nail clipping);
Width: 1.21 m
Depth: 1.43 m
Height: 2.51 m
21
Hair Styling/
Grooming
Sufficient volume, gravity
accommodation, tool fixtures,
and debris capture for selfperformed male and female hair
styling, grooming, and cutting
inclusive of a wide range of hair
styles. One station per four
crew, two stations per six crew.
2.34 4.68
HIDH [5] – 2.34 m3
(Table 8.2-1: Shaving,
grooming, oral hygiene);
CAD Modeling: 2.34 m3
;
Width: 0.65 m
Depth: 0.54 m
Hand Cleaning
Volume for one crewmember to
clean and dry hands, separate
from full body cleaning;
Gravity-appropriate system for
deep cleaning and drying of
hands and forearms, inclusive of
contamination from medical,
bodily waste, or maintenance
activities. One station per four
crew, two stations per six crew.
2.69 4.68
HIDH [5] – 2.69 m3
(Table 8.2-1: Eating,
sleeping, hand washing, personal office,
radiation shelter, conference);
Same envelope as “Facial Cleaning”;
Width: 0.65 m
Depth: 0.54 m
Oral Hygiene
Sufficient volume for one
crewmember to perform oral
hygiene tasks;
Gravity appropriate system for
tooth brushing, flossing, mouth
rinsing, and visual inspection of
teeth, tongue, and mouth
interior. One station per four
crew, two stations per six crew.
2.34 4.68
HIDH [5] – 2.34 m3
(Table 8.2-1: Shaving,
grooming, oral hygiene);
CAD Modeling: 2.34 m3
;
Depth: 0.98 m
Physical Work
Surface Access
One crewmember standing in
front of deployable or fixed
work surface for
accommodating items
4.35 4.35
HIDH [5] – 4.35 m3
(Table 8.2-1: General
workstations, food preparation, partial body
cleaning, housekeeping);
2012 HVW [6] – 4.78 m3
(Based on
Height: 1.91 m
22
associated with hygiene activity. measurement of Deep Space Habitat
Demonstration Unit Workstation);
CAD Modeling: 3.97 m3
;
Final Value: 4.35 m3 per station;
Viewing
appearance
Volume for one crewmember to
stand in front of full-length
mirror or other display system
sufficient to provide both facial
close-up and full body
inspection within private
volume. One station per four
crew, two stations per six crew.
1.80 3.60
HIDH [5] – 1.2 m3
(Table 4.3-5: Neutral body in
0g);
CAD Modeling: 1.8 m3
(Neutral body with 0.5m
of space in front of body for viewing ability);
Width: 0.91 m
Depth: 0.99 m
Height: 2.00 m
Shaving
Sufficient volume, gravity
accommodation, tool fixtures,
and debris capture for selfperformed shaving, inclusive of
facial and bodily extremities.
One station per four crew, two
stations per six crew.
2.34 4.68
HIDH [5] – 2.34 m3
(Table 8.2-1: Shaving,
grooming, oral hygiene);
CAD Modeling: 2.3 m3
(1.18 m x 0.9 m x 2.16
m)
Depth: 0.98 m
Skin care
Gravity appropriate solution for
application of creams,
ointments, or other skin care
solutions to the entire body or
localized portions. One station
per four crew, two stations per
six crew.
2.34 4.68
HIDH [5] – 2.34 m3
(Table 8.2-1: Shaving,
grooming, oral hygiene);
CAD Modeling: 2.3 m3
(1.18 m x 0.9 m x 2.16
m)
Depth: 0.98 m
LOGISTICS
FUNCTION FUNCTION DESCRIPTION & VOLUME
ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Physical Work
Surface Access
Volume for one crew member in
front of surface area fixed or
deployable, dedicated or shared,
surface near a logistics module
docking port for inspection,
repacking, or transfer of logistics
items.
4.35 4.35
HIDH [5] – 4.35 m3
(Table 8.2-1: General
workstations, food preparation, partial body
cleaning, housekeeping);
2012 HVW [6] – 4.78 m3
(Based on
measurement of Deep Space Habitat
Demonstration Unit Workstation);
CAD Modeling: 3.97 m3
;
Final Value: 4.35 m3 per station;
Width: 2.02 m
Depth: 0.98 m
Height: 1.91 m
Small Item
Containment
Volume for one crew member in
front of workstation or crew
station specific small trash or
small stowage units.
1.20 1.20 HIDH [5] – 1.2 m3
(Table 4.3-5: Neutral body in
0g);
Width: 0.65 m
Depth: 0.54 m
Height: 1.91 m
Temporary
Stowage
Volume for one crewmember to
pack and unpack temporary
stowage.
6.00 6.00 HIDH [5] – 6 m3
(Table 8.2-1: Food stowage,
personal locker, accessing stowage);
Width: 0.98 m
Depth: 2.02 m
Height: 2.31 m
23
MAINTENANCE AND REPAIR
FUNCTION FUNCTION DESCRIPTION & VOLUME
ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Computer
Display and
Control
Interface
One crew member standing in
front of computers and controls
with sufficient volume for arm
span and movement. One station
for four crew, two stations for six
crew.
1.70 3.40
2012 HVW [6] – 1.71 m3 per crewmember
(Volume estimate based on measurements of
the Mid-Fi Orion mockup).
HIDH [5] – 1.7 m3 per crewmember (Table 8.2-
1)
Width: 0.65 m
Height: 1.91 m
Equipment
Diagnostics
One crew member standing in
front of surface for component
sterilization, isolation, etc. One
station for four and six crew.
4.35 4.35
HIDH [5] – 4.35 m3 (Table 8.2-1: General
workstations, food preparation, partial body
cleaning, housekeeping);
2012 HVW [6] – 4.78 m3
(Based on
measurement of Deep Space Habitat
Demonstration Unit Workstation);
CAD Modeling: 3.97 m3
;
Final Value: 4.35 m3 per station;
Height: 1.91 m
Physical Work
Surface Access
One crew member standing in
front of surface for analysis of
materials, electronics, etc. One
station for four and six crew.
4.35 4.35
HIDH [5] – 4.35 m3
(Table 8.2-1: General
workstations, food preparation, partial body
cleaning, housekeeping);
2012 HVW [6] – 4.78 m3
(Based on
measurement of Deep Space Habitat
Demonstration Unit Workstation);
CAD Modeling: 3.97 m3
;
Final Value: 4.35 m3 per station;
Height: 1.91 m
Soft Goods
Fabrication
One crewmember with sufficient
volume to have soft goods in
front of body and movement
associated with sewing, cutting,
patching, etc. One station for
four and six crew.
2.69 2.69
HIDH [5] – 2.69 m3
(Table 8.2-1: Eating,
sleeping, hand washing, personal office,
radiation shelter, conference);
Width: 0.65 m
EVA SUPPORT
FUNCTION FUNCTION DESCRIPTION &
VOLUME ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Suit Component
Testing
Positions will vary (see source).
Use maximum dimensions for
bodily volume. -- probably need
space for one suited crew
member and one unsuited
crewmember
4.82 4.82 CAD Modeling: 4.82 m3
; Height: 2.31 m
Computer Crewmember in the seated 1.70 1.70 2012 HVW [6] – 1.71 m3 per crewmember Width: 0.65 m
24
Display and
Control Interface
position at computing station
for EVA operations.
(Volume estimate based on measurements of
the Mid-Fi Orion mockup);
HIDH [5] – 1.7 m3 per crewmember (Table 8.2-
1)
Height: 1.49 m
MEAL PREPARATION
FUNCTION FUNCTION DESCRIPTION & VOLUME
ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Food Item
Sorting
One crewmember in front of a
surface area with attachment
points to contain crew meal
packets for pre-meal sorting.
3.30 3.30
CAD Modeling: 3.3 m3
(Assume neutral
position in 0g, assume 2 m2 perpendicular
surface);
Width: 1.41 m
Depth: 1.41 m
Food
Preparation
Crewmember standing in front of
prep unit (includes rehydration,
food warming, food chilling, food
cooking, etc.).
4.35 4.35
HIDH [5] – 4.35 m3 Body volume associated
with food preparation in 0-g (HIDH Table 8.2-
1);
CAD Modeling: 4.35 m3
(Assume neutral
position in 0g);
Height: 1.91 m
Utensil and
Food
Equipment
Hygiene
Crewmember standing in front of
cleaning/utensil sanitation unit
for operation (either surface or
machine) - assume this is in a
slightly separate area than the
food prep area and food sorting
area so needs extra habitable
volume. For the ISS, utensils and
trays are cleaned using moist
sanitizing towelettes, eliminating
the need for a dishwasher or
kitchen sink.
3.30 3.30 CAD Modeling: 3.3 m3
(Assume sitting/neutral
in 0g);
Width: 1.41 m
Depth: 1.41 m
MEAL CONSUMPTION
FUNCTION FUNCTION DESCRIPTION & VOLUME
ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Full Crew Dining
Volume for four or six
crewmembers seated with
restraints at perpendicular
surface. Gravity appropriate
restraints or accommodations at
each intended crew dining
position; Capability to attach
meal items and utensils to dining
surface.
10.09 15.14
2012 HVW [6] – 10.09 m3
for four
crewmembers (Based on measurement of
Deep Space Habitat Demonstration Unit
Wardroom, assuming a 2 ft zone around the
wardroom table);
HIDH [5] - 2.69 m3 per crewmember = 10.76
m3
for four crewmembers;
Final Value: 10.09 m3 per four crew;
Width: 1.19 m
Depth: 1.19 m
Height: 1.91 m
25
MEDICAL OPERATIONS
FUNCTION FUNCTION DESCRIPTION & VOLUME
ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Advanced
Medical Care
(basic surgical
care, trauma
care, advanced
life support)
One crewmember lying down
on surface with restraints, room
for at least two crewmembers
preform operations,
crewmember should be laying
perpendicular to those
administering care with space
below and above.
Use of a ventilator, defibrillator,
cardioversion, etc. and drug
infusions.
5.80 5.80
CAD Modeling: 5.8 m3
;
Width: 2.00 m
Depth: 1.45 m
Height: 2.00 m
Ambulatory
Care
One crewmember sitting up
independently self-administering
care and using oral or topical
medications.
1.70 1.70
HIDH [5] – 1.7 m3
(Table 8.2-1: Body waste
management facilities, ascent and descent,
spacecraft duty station);
Height: 1.49 m
Basic Medical
Care (space
motion
sickness, first
aid, anaphylaxis
response,
clinical
diagnostics,
medical
imaging)
One crewmember laying down
on surface with restraints or
sitting up; one crewmember
administering IV or doing
diagnostics treatment for space
motion sickness, injecting,
reaching for fluids, kits, etc.,
possibly carrying/lifting patient
into room.
May require CPR, airway
management, supplemental
oxygen, large volumes of IV
fluids, and close monitoring.
A diagnosis made on the basis of
medical signs and patientreported symptoms, rather than
diagnostic tests.
5.80 5.80
CAD Modeling: 5.8 m3
(1.45 m x 2 m x 2 m);
https://ntrs.nasa.gov/archive/nasa/casi.ntrs.n
asa.gov/20070032039.pdf;
Same envelope as Advanced Medical Care;
Width: 2.00 m
Depth: 1.45 m
Height: 2.00 m
Computer Data
Entry /
Manipulation
One crew member in front of
computer terminal.
1.20 1.20 HIDH [5] – 1.2 m3
(Table 8.2-1: Neutral body in
0g);
Width: 0.65 m
Height: 1.49 m
Dental Care
One man lying down or upside
down; one man performing 5.80 5.80 CAD Modeling: 5.8 m3
; Width: 2.00 m
Depth: 1.45 m
26
dental examination or dental
surgery in extreme cases.
Same as Advanced Medical Care Height: 2.00 m
Private
Telemedicine
One crew member in front of
computer terminal - with ability
for private conversations.
1.20 1.20 HIDH [5] – 1.2 m3
(Table 4.3-5: Neutral body in
0g);
Width: 0.65 m
Height: 1.49 m
Two Person
Meetings
Sufficient volume for two crew to
sit, facing each other, with
unobstructed line of sight, with
physical work surface between
them, with at least six inches
separation between the nearest
body parts of the two.
3.40 3.40 HIDH [5] – 1.7 m3 per crewmember;
CAD Modeling: 3.4 m3
for two crewmembers;
Height: 1.49 m
MISSION PLANNING
FUNCTION FUNCTION DESCRIPTION & VOLUME
ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Command and
Control
Interface
Two crewmembers standing up
using two monitors. Assumed 24"
monitors. One station needed for
four crew and six crew.
3.42 3.42
2012 HVW [6] – 1.71 m3 per crewmember
(Volume estimate based on measurements of
the Mid-Fi Orion mockup);
HIDH [5] – 1.71 m3 per crewmember (Table
8.2-1: Body waste management facilities,
ascent and descent, spacecraft duty station);
CAD Modeling: 3.37 m3
for two crewmembers;
Final Value: 3.42 m3
for two crewmembers.
Height: 1.91 m H
Physical Work
Surface Access
Four or six crewmembers sitting
around a table (with restraints)
taking notes, space for laptop
use.
10.09 15.14
2012 HVW [6]: 10.09 m3
for four
crewmembers (Based on measurement of
Deep Space Habitat Demonstration Unit
Wardroom, assuming a 2 ft zone around the
wardroom table);
HIDH [5]: 2.69 m3 per crewmember = 10.76 m3
for four crewmembers (Extra overlap due to
shared volume at table justifies using the
smaller volume of 10.09 m3
);
Width: 1.19 m
Depth: 1.19 m
Height: 1.91 m
Team Meetings Four or six crewmembers in front
of video and monitors.
4.80 7.20
HIDH [5]: 1.70 m3
(Table 8.2-1: Body waste
management facilities, ascent and descent,
spacecraft duty station);
CAD Modeling: 4.8 m3
;
Final Value: 4.8 m3
;
Width: 2.61 m
Height: 1.49 m
Mission
Training
Four crewmembers in front of
video and monitors with
sufficient space to move around,
possible use of VR.
18.20 27.30
HIDH [5]: 4.35 m3 per crewmember = 17.4 m3
for four crewmembers (Table 8.2-1: General
workstations, food preparation, partial body
cleaning, housekeeping);
CAD Modeling: 18.2 m3
for four crewmembers
(Volume of crewmembers with different arm
members and space between);
Depth: 1.95 m
27
Final Value: 18.2 m3
for four crew;
PRIVATE HABITATION
FUNCTION FUNCTION DESCRIPTION &
VOLUME ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Changing
Clothes
Sufficient open volume in
quarters to change clothing.
8.72 13.08
HIDH [5]: 1.2 m3
(Table 4.3-5: Neutral body in
0g);
CAD Modeling: 2.18 m3
(Neutral body with
0.15 m of extra space on all sides);
Width: 0.93 m
Height: 2.00 m
Meditation
Sufficient crew quarters volume
to support meditation postures
consistent with most
philosophies and religious faiths. 4.8 7.2
HIDH [5]: 1.2 m3
(Table 4.3-5: Neutral body in
0g); Width: 0.65 m
Non-Sleep
Rest/Relaxation
in Private
Quarters
One crewmember in seated or
reclined position.
4.8 7.2
HIDH [5]: 1.2 m3
(Table 4.3-5: Neutral body in
0g); Width: 0.65 m
Physical Work
Surface Access
Surface area that can
accommodate laptop and space
for writing, one person sitting in
repositionable chair.
17.4 26.1
HIDH [5]: 4.35 m3
(Table 8.2-1: General
workstations, food preparation, partial body
cleaning, housekeeping);
2012 HVW [6]: 4.78 m3
(Based on
measurement of Deep Space Habitat
Demonstration Unit Workstation);
CAD Modeling: 3.97 m3
;
Final Value: 4.35 m3 per station;
Height: 1.91 m
Single Person
Private Work,
Entertainment,
and
Communication
One person sitting or lying down
looking at monitor or laptop.
4.8 7.2
HIDH [5]: 1.2 m3
(Table 4.3-5: Neutral body in
0g); Width: 0.65 m
Sleep
Accommodation
One crewmember in sleeping
bag with enough headspace to
be in a sitting position. 10.76 16.14
HIDH [5]: 2.69 m3
(Table 8.2-1: Eating,
sleeping, hand washing, personal office,
radiation shelter, conference);
Width: 0.65 m
Stretching
Sufficient crew quarters volume
to stretch standing, sitting, or
prone. 13.96 20.94
CAD Modeling: 3.49 m3
(0.9 m x 1.55 m x 2.5
m)
Width: 0.65 m
Two Person
Meetings
Sufficient volume for two crew
to sit, facing each other, with
unobstructed line of sight, with
physical work surface between
them, with at least six inches
separation between the nearest
body parts of the two. 13.6 20.4
HIDH [5]: 1.7 m3 per crewmember
CAD Modeling: 3.4 m3
for two crewmembers
Final Value: 3.4 m3 per two crew station;
Height: 1.49 m
Viewing Full length mirror and 7.2 10.8 HIDH [5]: 1.2 m3
(Table 4.3-5: Neutral body in Width: 0.91 m
28
Appearance in
Private
Quarters
sufficient volume in quarters to
back far enough away to see
full body.
0g);
CAD Modeling: 1.8 m3
(Neutral body with 0.5
m of space in front of body for viewing
ability);
Depth: 0.99 m
Height: 2.00 m
SPACECRAFT MONITORING AND COMMANDING
FUNCTION FUNCTION DESCRIPTION & VOLUME
ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Command and
Control
Two crewmembers in front of
separate monitors. Access to
controls (assumed size of
keyboard + basic control inputs).
3.42 3.42
2012 HVW [6]: 1.71 m3 per crewmember
(Volume estimate based on measurements of
the Mid-Fi Orion mockup);
2012 HVW [5]: 1.71 m3 per crewmember
(Table 8.2-1: Body waste management
facilities, ascent and descent, spacecraft duty
station);
CAD Modeling: 3.37 m3
for two crewmembers;
Final Value: 3.42 m3 per two crew station;
Height: 1.91 m H
Teleoperation
and Crew
Communication
One crewmember in front of one
monitor. Access to keyboard. 1.70 1.70
2012 HVW [6]: 1.71 m3 per crewmember
(Volume estimate based on measurements of
the Mid-Fi Orion mockup).
HIDH [5]: 1.7 m3 per crewmember (Table 8.2-
1)
Width: 0.65 m
Height: 1.49 m
WASTE MANAGEMENT
FUNCTION FUNCTION DESCRIPTION & VOLUME
ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Trash Volume for one crewmember to 2.55 2.55 HIDH [5]: 2.55 m3
(Table 8.2-1: Egress, Width: 0.65 m
29
Containment carry and stow trash - use egress
volume from HIDH.
translation, passageways);
Trash Packing
for Disposal
Crewmember will either be
stuffing small trash bag or
maneuvering with larger trash
container through spacecraft (see
note). Allow for sufficient space
to all sides of crewmember;
overhead reach is likely not
necessary.
3.76 3.76 CAD Modeling: 3.76 m3
(based on Trash
packing & maintenance on ISS) Width: 0.65 m
Airlock Functions
AIRLOCK OPERATIONS
FUNCTION FUNCTION DESCRIPTION &
VOLUME ASSUMPTIONS
MIN.
VOLUM - 4
CREW (m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Depressurization
Two fully suited crewmembers
standing with sufficient room.
Not included inside Common
Habitat; in external Airlock.
4.51 4.51 CAD Modeling: 4.51 m3
;
Width: 1.30 m
Height: 1.91 m
Repressurization
Two fully suited crewmember
standing with sufficient room.
Not included inside Common
Habitat; in external Airlock.
4.51 4.51 CAD Modeling: 4.51 m3
;
Same envelope as “Depressurization”;
Width: 1.30 m
Height: 1.91 m
Hyperbaric
Isolation
Two unsuited crewmembers
standing.
Not included inside Common
Habitat; in external Airlock.
4.51 4.51 CAD Modeling: 4.51 m3
;
Same envelope as “Depressurization”;
Width: 1.30 m
Height: 1.91 m
Hypobaric
Isolation
2 unsuited crewmembers
standing.
Not included inside Common
Habitat; in external Airlock
4.51 4.51 CAD Modeling: 4.51 m3
;
Same envelope as “Depressurization;
Width: 1.30 m
Height: 1.91 m
EVA Suit
Don/Doffing
Unsuited crewmember with
sufficient volume to don/doff
suit with assistance of fellow
crewmember (either in EVA suit
or in plain clothes).
Not included inside Common
Habitat; in external Airlock.
6.35 6.35
HIDH [5]: 6.35 m3 per one crewmember
(Table 8.2-1: Dressing (don and doff), EVA
suiting area);
Height: 2.31 m
Crew
Ingress/Egress
Sufficient room for
crewmember to enter and exit
airlock - volume around hatch.
Not included inside Common
Habitat; in external Airlock.
4.64 4.64 HIDH [5]: 4.64 m3 per crewmember (Table
8.2-1: EVA Suit Ingress/Egress);
Width: 1.30 m
Height: 1.91 m
30
Subsystem or
Payload
Ingress/Egress
Sufficient room for payload to
enter and exit airlock - volume
around hatch;
Not included inside Common
Habitat; in external Airlock.
4.64 4.64 HIDH [5]: 4.64 m3 per crewmember (Table
8.2-1: EVA Suit Ingress/Egress);
Width: 1.30 m
Height: 1.91 m
Suit Servicing
Sufficient room for two
crewmembers and one suit;
in external Airlock.
4.82 4.82
CAD Modeling: 4.82 m3
;
Width: 1.18 m
Depth: 2.05 m
Height: 2.00 m
Suit Repair
Sufficient room for two
crewmembers and one suit;
Suit washing, full Maintenance
& Fabrication workstation
capabilities; in external Airlock.
4.82 4.82 CAD Modeling: 4.82 m3
; Width: 1.30 m
Height: 1.91 m
SAFE HAVEN
FUNCTION FUNCTION DESCRIPTION &
VOLUME ASSUMPTIONS
MIN.
VOLUM -
4 CREW
(m3
)
MIN.
VOLUM - 6
CREW (m3
)
SOURCES MINIMUM HABITABLE DIMENSIONS (AS
REQUIRED)
Safe Haven
Area that holds space for all
four or six crewmembers to
take safe haven in an
emergency; in external Airlock.
10.76 16.14 HIDH [5] 2.69m3 per one crew (Table 8.2- 1);
Width: 1.3 m
Depth: 1.98 m
Height: 1.91 m
31
APPENDIX B: FULL OVERLAPS ACROSS CATEGORIES
MIN.
VOLUME
- 4 CREW
(m3
)
MIN.
VOLUME
- 6 CREW
(m3
)
EVA-1 (Suit Testing)
EVA-2 (EVA Computer/Data)
Exercise-1
Exercise-2
Exercise-3
Group Social-1 (Open Area)
Group Social-2 (Table)
Human Waste-1 (Waste
Collection)
Human Waste-2 (Cleansing)
Hygiene-1 (Cleansing)
Hygiene-2 (Non-Cleansing)
Logistics-1 (Work Surface)
Logistics-2 (Temporary Stowage)
Maintenance-1 (Computer)
Maintenance-2 (Work Surface)
Meal Consumption (Table)
Meal Preparation-1 (Food Prep)
Meal Preparation-2 (Table/Work
Surface)
Medical-1 (Computer)
Medical-2 (Ambulatory Care)
Medical-3 (Medical Care/Work
Surface)
Mission Planning-1 (Table/Work
Surface)
Mission Planning-2
(Computer/Command)
Mission Planning-3 (Training)
Private Habitation-1 (Desk/Work
Surface)
Private Habitation-2 (Sleep &
Relaxation)
Spacecraft Monitoring
(Computer/Command)
Waste Management
EVA-1 (Suit Testing) 4.82 4.82
EVA-2 (EVA Computer/Data) 1.70 1.70 0
Exercise-1 (Cycle Ergometer) 3.38 6.76 0 0
Exercise-2 (Treadmill) 6.12 12.24 0 0 0
Exercise-3 (Resistive Device) 3.92 7.84 0 0 0 0
Group Social-1 (Open Area) 18.20 27.30 1 0 0 0 0
Group Social-2 (Table) 10.09 15.14 0 0 0 0 0 0
Human Waste-1 (Waste Collection) 2.36 4.72 0 0 0 0 0 0 0
Human Waste-2 (Cleansing) 2.69 5.38 0 0 0 0 0 0 0 0
Hygiene-1 (Cleansing) 4.35 8.70 0 0 0 0 0 0 0 0 1
Hygiene-2 (Non-Cleansing) 4.68 4.68 0 0 0 0 0 0 0 0 0 0
Logistics-1 (Work Surface) 4.35 4.35 1 0 0 0 0 0 1 0 0 0 0
Logistics-2 (Temporary Stowage) 6.00 6.00 0 0 0 0 0 0 0 0 0 0 0 0
Maintenance-1 (Computer) 3.40 3.40 0 1 0 0 0 0 0 0 0 0 0 0 0
Maintenance-2 (Work Surface) 4.35 4.35 1 0 0 0 0 0 0 0 0 0 0 1 0 0
Meal Consumption (Table) 10.09 15.14 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0
Meal Prep.-1 (Food Prep) 4.35 8.70 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0
Meal Prep.-2 (Table/Work Surface) 3.30 3.30 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0
Medical-1 (Computer) 1.20 1.20 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0
Medical-2 (Ambulatory Care) 3.40 3.40 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0
Medical-3 (Medical Care/Work
Surface) 5.80 5.80 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0
Mission Planning-1 (Table/Work
Surface) 10.09 15.14 1 0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0 1 0 0 0
Mission Planning-2
(Computer/Command) 3.42 3.42 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0
Mission Planning-3 (Training) 3.42 3.42 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
Private Habitation-1 (Desk/Work
Surface) 17.40 26.10 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0
Private Habitation-2 (Sleep &
Relaxation) 13.96 20.94 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 1
Spacecraft Monitoring 3.42 3.42 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0 0 0
Waste Management 3.76 3.76 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
32
APPENDIX C: FULL OVERLAPS
COMBINED FUNCTIONAL AREAS MIN. VOLUME -
4 CREW (m3
)
MIN. VOLUME -
6 CREW, (m3
)
FUNCTION AREAS ACCOMODATED
Exercise-1 (Cycle Ergometer) 3.38 6.76 Exercise-1 (Cycle Ergometer)
Exercise-2 (Treadmill) 6.12 12.24 Exercise-2 (Treadmill)
Exercise-3 (Resistive Device) 3.92 7.84 Exercise-3 (Resistive Device)
Group Social-1 (Open Area) / Mission
Planning-3 (Training) 18.20 27.30 Group Social-1 (Open Area) Mission Planning-3
(Training)
Group Table - (Recreation, Meal Prep,
Dining) 10.09 15.14 Group Social-2 (table) Meal Consumption (Table) Mission Planning-1
(Table/Work Surface)
Human Waste-1 (Waste Collection) 2.36 4.72 Human Waste-1 (Waste
Collection)
Human Waste-2 (Cleansing) / Hygiene-1
(Cleansing) 4.35 8.70 Human Waste-2 (Cleansing) Hygiene-1 (Cleansing)
Logistics-2 (Temporary Stowage) 6.00 6.00 Logistics-2 (Temporary
Stowage)
Maintenance-1 (Computer) / EVA-2 (EVA
Computer/Data) 3.40 3.40 Maintenance-1 (Computer) EVA-2 (EVA Computer/Data)
Maintenance-2 (Work Surface) /
Logistics-1 (Work Surface) / EVA-1 (Suit
Testing)
4.82 4.82 Maintenance-2 (Work
Surface) EVA-1 (Suit Testing) Logistics-1 (Work Surface)
Meal Preparation-1 (Food Prep) 4.35 8.70 Meal Preparation-1 (Food
Prep)
Meal Preparation-2 (Work Surface) 3.30 3.30 Meal Preparation-2
(Table/Work Surface)
Medical-1 (Computer) 1.20 1.20 Medical-1 (Computer)
Medical-3 (Medical Care) 5.80 5.80 Medical-3 (Medical
Care/Work Surface)
Mission Planning-2
(Computer/Command) / Spacecraft
Monitoring
3.42 3.42 Mission Planning-2
(Computer/Command)
Spacecraft Monitoring
(Computer/Command)
Private Habitation-1 (Work Surface) /
Medical-2 (Ambulatory Care) 13.96 20.94 Private Habitation-1
(Desk/Work Surface) Medical-2 (Ambulatory Care)
Private Habitation-2 (Sleep & Relaxation)
/ Hygiene-2 (Non-Cleansing) 17.40 26.10 Private Habitation-2 (Sleep
& Relaxation) Hygiene-2 (Non-Cleansing)
Waste Management 3.76 3.76 Waste Management
Total 115.83 170.14
Total per Crewmember 28.96 28.36

NASA/TP-2020-220505
Deep Space Habitability Design Guidelines
Based on the NASA NextSTEP Phase 2
Ground Test Program
Prepared by:
Michael Gernhardt
Steve Chappell
Kara Beaton
Harry Litaker
Omar Bekdash
Carolyn Newton
James Stoffel
NASA Johnson Space Center
Approved by:
Douglas A. Craig
Programmatic Integration and Strategic Analyses, Advanced Exploration Systems
NASA Headquarters
National Aeronautics and
Space Administration
Johnson Space Center
Houston, Texas 77058
November 2019
NASA STI Program Office ... in Profile
Since its founding, NASA has been dedicated to the
advancement of aeronautics and space science. The
NASA scientific and technical information (STI)
program plays a key part in helping NASA maintain this important role.
The NASA STI program operates under the
auspices of the Agency Chief Information Officer.
It collects, organizes, provides for archiving, and
disseminates NASA’s STI. The NASA STI
program provides access to the NTRS Registered
and its public interface, the NASA Technical
Report Server, thus providing one of the largest collections of aeronautical and space science STI in the
world. Results are published in both non-NASA
channels and by NASA in the NASA STI Report Series, which includes the following report types:
• TECHNICAL PUBLICATION. Reports of
completed research or a major significant
phase of research that present the results of
NASA Programs and include extensive data or
theoretical analysis. Includes compilations of
significant scientific and technical data and information deemed to be of continuing reference value. NASA counter-part of peer-reviewed formal professional papers but has
less stringent limitations on manuscript length
and extent of graphic presentations.
• TECHNICAL MEMORANDUM. Scientific
and technical findings that are preliminary or
of specialized interest, e.g., quick release reports, working papers, and bibliographies that
contain minimal annotation. Does not contain
extensive analysis.
• CONTRACTOR REPORT. Scientific and
technical findings by NASA-sponsored
contractors and grantees.
• CONFERENCE PUBLICATION.
Collected papers from scientific and technical conferences, symposia, seminars, or
other meetings sponsored or
co-sponsored by NASA.
• SPECIAL PUBLICATION. Scientific, technical, or historical information from NASA
programs, projects, and missions, often concerned with subjects having substantial public interest.
• TECHNICAL TRANSLATION.
English-language translations of foreign scientific and technical material pertinent to
NASA’s mission.
Specialized services also include organizing
and publishing research results, distributing specialized research announcements and feeds,
providing information desk and personal search
support, and enabling data exchange services.
For more information about the NASA STI program, see the following:
• Access the NASA STI program home page
at http://www.sti.nasa.gov
• E-mail your question to help@sti.nasa.gov
• Phone the NASA STI Information Desk at
757-864-9658
• Write to:
NASA STI Information Desk
Mail Stop 148
NASA Langley Research Center
Hampton, VA 23681-2199
Available from:
NASA STI Program National Technical Information Service
Mail Stop 148 5285 Port Royal Road
NASA Langley Research Center Springfield, VA 22161
Hampton, VA 23681-2199
This report is also available in electronic form at http://www.sti.nasa.gov/ and http://ntrs.nasa.gov
iii
Table of Contents
Figures............................................................................................................................................ iv
Tables............................................................................................................................................. iv
Acronyms........................................................................................................................................ v
1 Introduction............................................................................................................................. 1
2 Capability Assessment Prioritization...................................................................................... 2
2.1 Capability Assessment Ratings for Missions ≤ 30 Days................................................ 3
2.2 Capability Assessment Ratings for 60-day Missions ..................................................... 5
2.3 Pairwise Comparison of Capabilities.............................................................................. 5
3 Function Allocation Recommendations for the Habitation and Logistics Outpost and
International Habitat ....................................................................................................................... 6
4 Habitat Design Guidelines...................................................................................................... 7
4.1 General Layout................................................................................................................ 7
4.2 Crew Quarters................................................................................................................. 9
4.3 Hygiene Stations............................................................................................................. 9
4.4 Waste Collection System.............................................................................................. 10
4.5 Exercise......................................................................................................................... 10
4.6 Galley and Galley Table ............................................................................................... 11
4.7 Trash Management........................................................................................................ 12
4.8 Multipurpose Workstations........................................................................................... 12
4.9 Dedicated Science Workspaces and Surfaces............................................................... 13
4.10 Glovebox....................................................................................................................... 13
4.11 Dedicated Medical Workspaces and Surfaces.............................................................. 14
4.12 Crew Common Area ..................................................................................................... 14
4.13 Logistics Stowage and Location Referencing............................................................... 15
4.14 Lighting......................................................................................................................... 15
4.15 In-flight Maintenance.................................................................................................... 16
4.16 Radiation Protection...................................................................................................... 16
4.17 Multipurpose Airlocks.................................................................................................. 17
5 Conflicts of Interest............................................................................................................... 17
6 Funding ................................................................................................................................. 17
Appendix A: Ground Test Background and Methods .................................................................. 18
A.1 Study Design................................................................................................................. 18
A.1.1 Mission Timeline Development............................................................................ 19
A.2 Ground Test Execution ................................................................................................. 23
A.2.1 Test Personnel Roles, Responsibilities, and Training........................................... 23
A.2.2 Communication..................................................................................................... 24
A.2.3 Timeline and Procedure Management .................................................................. 24
A.2.4 Test Execution Flight Rules.................................................................................. 25
A.2.5 Test Readiness Review and Institutional Review Board Approvals .................... 26
A.3 Metrics and Data Analysis Methodology ..................................................................... 26
A.3.1 Practical Significance............................................................................................ 26
A.3.2 Capability Assessment Ratings............................................................................. 27
A.3.3 Pairwise Comparison of Capabilities.................................................................... 28
A.3.4 Simulation Quality Ratings................................................................................... 29
A.3.5 Acceptability Ratings............................................................................................ 30
iv
A.3.6 Fatigue Ratings ..................................................................................................... 30
A.3.7 Workload Ratings ................................................................................................. 31
A.3.8 Planned versus Actual Timeline Execution .......................................................... 31
A.3.9 Crew Location Frequency Distribution ................................................................ 32
A.3.10 Design Element Distribution................................................................................. 32
A.4 Study Limitations.......................................................................................................... 33
A.5 References..................................................................................................................... 34
Appendix B: Summary Design Guidelines................................................................................... 36
Figures
Figure 1. Assimilated capability assessment ratings (not a rank order) from all contractor tests for
missions ≤ 30 and 60 days; capabilities rated essential/enabling and significantly enhancing are
boxed in red..................................................................................................................................... 3
Figure 2. Flow diagram for developing the core Gateway mission-representative timeline........ 20
Figure 3. Mission timeline task derived from and mapped to draft Gateway functional
requirements and objectives.......................................................................................................... 21
Figure 4. Playbook integration of crew timelines and procedures................................................ 25
Figure 5. Acceptability rating scale describing practically significant (i.e., categorical)
differences..................................................................................................................................... 27
Figure 6. Capability assessment rating scale. ............................................................................... 27
Figure 7. Pairwise comparison of candidate Gateway capabilities............................................... 29
Figure 8. Simulation quality rating scale. ..................................................................................... 30
Figure 9. Acceptability rating scale. ............................................................................................. 30
Figure 10. Fatigue rating scale...................................................................................................... 31
Figure 11. Workload rating scale.................................................................................................. 31
Tables
Table 1. Definitions for Each Essential/Enabling and Significantly Enhancing Capability........... 6
Table 2. Capability Allocation Recommendations for HALO and I-Hab ...................................... 7
Table 3. NASA Core Timeline Tasks with High-level Task Summaries..................................... 21
Table 4. Summary Design Guidelines.......................................................................................... 36
v
Acronyms
AMCC Analog Mission Control Center
BAA Broad Agency Announcement
CAPCOM Capsule Communicator
CDR Commander
CO2 Carbon Dioxide
CPR Cardiopulmonary Resuscitation
CTB Cargo Transfer Bag
DPC Daily Planning Conference
EVA Extravehicular Activity
FLIGHT Flight Director
FY Fiscal Year
GFE Government Furnished Equipment
HALO Habitation and Logistics Outpost
HEOMD Human Exploration and Operations Mission Directorate
I-Hab International Habitat
IFM In-flight Maintenance
IRB Institutional Review Board
ISS International Space Station
JSC Johnson Space Center
LLT Low-Latency Teleoperations
MS Mission Specialist
NASA National Aeronautics and Space Administration
NextSTEP Next Space Technologies for Exploration Partnerships
PAO Public Affairs Office
PI Principal Investigator
PWD Potable Water Dispenser
RFID Radio Frequency Identification
RMS Remote Manipulator System
SME Subject Matter Expert
SPE Solar Particle Event
SRC Sample Return Canister
TC Test Coordinator
TCCS Trace Contaminant Control System
TRR Test Readiness Review
VIS Vibration Isolation System
WCS Waste Collection System
1
1 Introduction
This report summarizes habitation design guidelines for deep space habitats, which were derived
from the NASA Next Space Technologies for Exploration Partnerships (NextSTEP) Phase 2 Habitat Ground Test Program. All data presented in this document have been contractor-deidentified
and approved for public release. The report prioritizes capabilities and recommends allocating
those capabilities to either the Habitation and Logistics Outpost (HALO) or the International Habitat (I-Hab). A review of the design guidelines is presented in the main body of the report, along
with a list of the 170 specific design guidelines with references to the specific data sources from
which they were derived.
Five government contractors each developed a ground-based prototype of the Gateway habitation
system; the purpose of the NextSTEP Phase 2 Ground Test Program was to evaluate how the
capabilities, layouts, and design features of these prototypes enhance the mission and crew performance. To accomplish this, astronaut test subjects conducted the same representative multiday
core Gateway mission in each contractor’s ground-based prototype habitat, while also performing
unique tasks that highlighted various aspects of each habitat design, such as in-flight-maintenance
tasks and tests of various new technologies.
The core mission timeline was developed with input from NASA subject matter experts (SMEs,
Appendix A.1.1) and included exploration objectives from the Human Exploration and Operations
Mission Directorate (HEOMD) and the International Space Station (ISS) Exploration Capability
Study Team. The resulting ground test objectives were incorporated into functional tasks, which
were then structured to represent a Gateway mission timeline. During each test, the core timeline
was augmented with unique tasks that were conducted in a sequence that maximized crew performance in each contractor’s unique layout. Each mission timeline was approved by the contractor
before the testing began.
Four NASA astronauts evaluated each prototype. At least 2 of the astronauts overlapped between
each test, ensuring a consistent evaluation. To increase the fidelity of the mission simulation, The
NASA Flight Operations Directorate provided a flight director, a capsule communicator (CAPCOM), and a planner to support each test by providing flight-like communication and an operations tempo. All test subject crews were trained on the rationale and objectives of the testing,
including familiarization with the equipment, methods, and metrics, and they participated in an inhouse NASA dry run test (Appendix A.2.1).
Objective and subjective data were captured throughout each test. Objective metrics included the
planned versus the actual time to complete objectives (Appendix A.3.8), and crewmember location
frequency distribution within the habitats (Appendix A.3.9). The location frequency distribution
data were collected using the AllTraq system, which was used to track the amount of time each
crewmember spent in pre-defined functional zones of the habitat while executing the mission timeline. The resulting data provided insight into how the crew used the space and how efficiently they
performed tasks in different areas of the habitat, as well as identified areas of the habitat that were
under-utilized and could potentially be re-purposed or eliminated.
2
The astronaut test subjects provided subjective evaluations of the simulation quality and acceptability of each of the habitation elements (ranging from no improvements necessary to improvements desired, warranted, or required). Additionally, to prioritize the cost benefit of implementing
the capabilities, the test subjects determined if the capabilities were essential or offered significant,
moderate, marginal, or no enhancement for the mission. A pairwise comparison of capabilities was
also performed to discriminate the relative importance for capabilities that received the same rating. The test subjects also evaluated the layout of each design and recommended the best location
and quantity for each habitat system, including crew quarters, hygiene areas, waste collection system (WCS) areas, exercise areas, galley, galley table, trash management, multipurpose workstations, science workspaces and surfaces, gloveboxes, medical workspaces and surfaces, crew
common areas, and logistics stowage.
The astronaut test subjects provided both individual and consensus ratings of simulation quality
and acceptability. Individual ratings collected throughout each test provided contextual information and insightful comments; however, inferential statistics using individual ratings from an n
of 4 is not meaningful, so the test subject crew also performed a consensus evaluation at the end
of each test day. The consensus evaluation ensured that each test subject interpreted the questions
consistently, and it allowed them to discuss and judge, using their prior experience, how microgravity might affect operations. The consensus evaluations were considered the actionable results.
Appendix A describes the details of the rigorous process by which the study objectives and mission
timelines were generated, how the tests were executed, and how the data were collected and analyzed. The investigators assimilated the data from evaluations of each habitat, and a summary of
the recommendations for the layout and the design of a deep space habitat are presented in this
document, along with the priority for incorporating the capabilities, and the best location for allocating each function. These design guidelines were assessed in the context of a 30-day or a 60-day
Gateway mission; however, some of the recommendations for general layout and specific features
of habitation systems could apply to longer duration missions. All design guidelines recommended
in this report were vetted by the astronaut test subjects and the NASA Astronaut Office. A summary of the design guidelines is provided in Appendix B Table 4.
2 Capability Assessment Prioritization
The primary objective of the NextSTEP Phase 2 Ground Test Program was to identify the capabilities that are required for exploration missions, the nonessential capabilities that might enhance
exploration, and the capabilities that provide marginal or no meaningful enhancement and can
therefore be excluded, resulting in cost savings without impact to mission success. The astronaut
test crews used a 10-point Likert capability assessment scale that has been used extensively in the
past to rate capabilities that might enable and enhance future exploration missions (Figure 1). The
scale consists of 5 categories: essential/enabling (impossible or highly inadvisable to perform the
mission without this capability); significantly enhancing (capability is likely to significantly enhance one or more aspects of the mission); moderately enhancing (capability is likely to moderately enhance one or more aspects of the mission or significantly enhance the mission on rare
occasions); marginally enhancing (capability is only marginally useful or useful only on very rare
occasion); and little to no enhancement. At the conclusion of each habitat test, the astronaut crew
provided capability assessment ratings for 20 candidate Gateway capabilities for mission durations
≤ 30 days and up to 60 days. Figure 1 shows the assimilated capability assessment ratings from
3
all evaluations for mission durations ≤ 30 days and up to 60 days; note these are not ranked in
order. These evaluations provide a cost-effective approach to prioritize the capabilities that will
provide the most impact to the mission; other less enhancing capabilities can be added as resources
(e.g., time, money) allow.
Capability ≤ 30 Day 60 Day
A hardwired multipurpose workstation for critical commanding 1 1
Trash removal capability on at least a per mission basis 1 1
A viewing window (not a virtual window) 2 1
An additional WCS separate from Orion 2 1
Private crew quarters 3 2
A dedicated hygiene area 3 3
An additional galley separate from Orion 4 2
Separate wet and dry trash stowage 4 3
Dedicated labeled stowage areas vs. bungees and CTBs 5 3
A permanently installed exercise station 5 3
A WCS on a different deck/module from the galley 5 4
Two or more multipurpose workstations 5 5
Exercise station separate from other volumes in habitat 6 5
A dedicated science area 6 5
Common secondary structure interface 6 5
Galley/ward room table for 4 crewmembers 6 5
Circadian cycle lighting system 7 6
A dedicated medical area 7 7
Two exercise stations 8 5
Single (i.e., 30 days) missions worth of logistic stowage in the habitat 8 8
Figure 1. Assimilated capability assessment ratings (not a rank order) from all contractor tests for missions ≤
30 and 60 days; capabilities rated essential/enabling and significantly enhancing are boxed in red.
2.1 Capability Assessment Ratings for Missions ≤ 30 Days
Essential/Enabling: Four capabilities were rated essential and enabling for missions ≤ 30 days: a
hardwired multipurpose workstation for critical commanding, a trash removal capability on at
least a per mission basis, a viewing window (not a virtual window), and an additional WCS separate from Orion. At least one hardwired multipurpose workstation was considered essential for
flight safety because wireless critical commanding was not considered sufficiently reliable. Trash
removal on at least a per mission basis was deemed essential because continually stowing trash
on the Gateway for a year or more could result in both unfavorable living conditions and systems
contamination. A viewing window was also considered an essential capability because it provides
operational safety during dynamic events (e.g., robotics and docking situational awareness)
through direct visual situational/spatial awareness, it also allows photography opportunities for
science and public outreach, and it enhances crew morale. An additional WCS separate from Orion
4
provides a backup should the Orion WCS malfunction; such a malfunction could result in termination of the mission depending on the timing of the WCS failure. Furthermore, the Orion WCS
only has 5-liter tank for waste water, and if used as the primary WCS, would require at least daily
waste water dumps in the direction of the stack and lander. A second WCS that is separate from
Orion will provide flexibility for crew to perform simultaneous WCS operations, saving time and
enhancing crew performance.
Significantly Enhancing: Four capabilities were rated significantly enhancing for missions ≤ 30
days: private crew quarters, a dedicated hygiene area, an additional galley separate from Orion,
and separate wet and dry trash stowage. For shorter duration missions, e.g., early in the assembly
of the Gateway, temporary sleep accommodations would be acceptable, assuming that permanent
crew quarters would be provided later. However, daily deployment and stowing of sleep stations
takes time and, depending on their location, they could interfere with ongoing tasks. A dedicated
hygiene area (i.e., enclosed) was rated significantly enhancing even for short-duration missions
because this will mitigate cross-contamination with other habitation and work areas and will provide privacy without interrupting nominal operations. It is much less desirable to perform hygiene
activities in a common space or in other dedicated areas such as private crew quarters due to the
risk of cross-contamination, and it is unacceptable to conduct hygiene-related tasks in the WCS
compartment. An additional galley separate from Orion adds substantial efficiency over what can
be provided by Orion, including the potential for additional food prep options (i.e., potable hot and
cold water) and a common gathering area to eat together. Separate wet and dry stowage would be
significantly enhancing because wet trash results in more odor and contamination risk than dry
trash, and it requires a solution for ventilation and odor mitigation.
Moderately Enhancing: Eight capabilities were rated moderately enhancing. Dedicated labeled
stowage areas were determined to be moderately enhancing and were preferred over bungees and
cargo transfer bags (CTBs) because strapping CTBs to pallet fronts, or wherever space allows, has
become untenable on the ISS. A permanently installed exercise station would limit the time needed
to setup and stow exercise devices each time a crewmember exercises. A WCS on a different
deck/module from the galley would limit cross-contamination between “dirty” areas (e.g., hygiene,
WCS, exercise) and “clean” areas (e.g., galley, crew quarters, science, and medical). Two or more
multipurpose workstations (with the assumption that both are hardwired) were rated as moderately
enhancing because of the strong desire to have a backup to support critical commanding. This
capability could also be implemented with a laptop or tablet computer for systems monitoring in
wireless mode or could be plugged into a hardwired receptacle for critical commanding. An exercise station separate from other volumes in the habitat would limit cross-contamination of “clean”
areas (e.g. science, galley, medical, crew quarters). A dedicated science area was rated moderately
enhancing, but the necessity and dedicated space aspect is highly dependent on the specific science
objectives of the mission. A common secondary structure interface may reduce the number of
tools required for reconfiguration, payload installation, or in-flight maintenance (IFM). A galley/ward room table for 4 crewmembers is not essential; however a volume large enough for all
crew to gather comfortably is important for crew productivity and morale.
Marginally Enhancing: Four capabilities were rated marginally enhancing. A circadian cycle
lighting system may improve sleep and mood for some crewmembers. A dedicated medical area
was rated only marginally enhancing, particularly for medical treatment, as long as there is multiuse space provided elsewhere that can accommodate medical tasks. Two exercise stations were
5
deemed unnecessary because operations can be planned to accommodate all 4 crewmember’s daily
exercise without the need to have them exercise in parallel (and assuming a single exercise device
could accommodate both cardiovascular and resistive exercise). A single (i.e., 30-day) mission’s
worth of logistic stowage in the habitat was deemed unnecessary because no more than a week’s
worth of logistics plus critical spares would be needed in the habitat; additional logistics can be
retrieved from the logistics module. For conventional smaller habitats, the additional logistics volume could be used to improve layout and add additional capabilities such as permanent crew quarters
and windows. The large inflatable habitats have sufficient volume for more than a week’s worth of
logistics without compromising layouts and capabilities; this extra volume could be useful to accommodate unutilized spares and utilization elements as logistics modules are changed out.
Little to No Enhancement: No capabilities were rated as having little to no enhancement.
2.2 Capability Assessment Ratings for 60-day Missions
A comparison of capabilities assessment ratings for ≤ 30 and 60 days are shown in Figure 1. Several of the habitation capabilities were rated as providing greater enhancement for 60-day missions
than for 30-day missions. Private crew quarters, and an additional galley separate from Orion
became essential/enabling. The following capabilities became significantly enhancing: dedicated labeled stowage areas vs. bungees and CTBs, a permanently installed exercise station, a
WCS on a different deck/module from the galley. The following capabilities elevated to moderately enhancing: a circadian cycle lighting system, two exercise stations. The remaining marginally enhancing capabilities remained the same.
2.3 Pairwise Comparison of Capabilities
After the astronaut test subjects rated the capabilities, they conducted a pairwise comparison of these
20 capabilities. This pairwise comparison discriminates the relative importance of capabilities that received the same rating, and results in a rank order of most-to-least important capabilities; note, however, that just because a capability is ranked lower, it does not mean that it is not mission enhancing.
Overall, the top-ranking capability was a hardwired multipurpose workstation for critical commanding and the lowest ranking capability was a single (i.e., 30-day) mission’s worth of logistics stowage
in the habitat. Furthermore, the eleven highest ranked capabilities for missions of 60 days were all
rated essential/enabling or significantly enhancing (highlighted in the red box in Figure 1).
6
3 Function Allocation Recommendations for the Habitation
and Logistics Outpost and International Habitat
The capabilities defined in Table 1 were rated essential or significantly enhancing and represent
the recommended minimum set of capabilities required for the Gateway mission. The crew provided their preference for the location and quantity of these capabilities within the dual habitat
Gateway reference stack containing the Habitation and Logistics Outpost (HALO) and the International Habitat (I-Hab) (Table 2); additional capabilities, namely those with assessment ratings
> 4 (as shown in Figure 1), were desirable if they could be implemented. Note that the astronauts
test subjects recommended this function allocation be included if no limits exist with respect to
time, resources, or money; it is recognized that in reality some limitations may exist that preclude
the inclusion of all of these capabilities. A strong common theme across all 5 habitats was the
desire to separate clean and dirty functions. For the HALO and I-Hab, this translates into a “clean”
habitat and “dirty” habitat, where the dirty habitat contains the WCS, hygiene, and exercise areas.
Table 1. Definitions for Each Essential/Enabling and Significantly Enhancing Capability
Capability Definition
A hardwired multipurpose workstation for critical
commanding
A workstation for performing robotics, critical commanding,
and subsystems checks
Trash removal capability on at least a per mission
basis
A capability to remove trash from the Gateway at least once
every 30 days rather than stowing it long-term
A viewing window (not a virtual window) A window with a view of the Earth/Moon at some portion of
the orbit; also able to support monitoring of robotic and visiting vehicle operations
An additional WCS separate from Orion A separate, enclosed WCS area
Private crew quarters Four private crew quarters that are ideally permanent vs. deployable
An additional galley separate from Orion A galley area for rehydrating/warming meals
A dedicated hygiene area An separate, enclosed hygiene area that is not co-located
with the WCS
Separate wet and dry trash stowage Separation of wet and dry trash stowage along with the ability to contain wet trash odors for the duration of their storage
Dedicated labeled stowage areas vs. bungees and
CTBs
Dedicated volume solely for logistics storage of both high
frequency use items (i.e., items used at least once per week)
and low frequency use items (i.e. items used once or less per
30-day mission) along with a deterministic system for stowing and retrieving items.
A permanently installed exercise station A permanently installed exercise station
A WCS on a different deck/module from galley A separate, enclosed WCS area that is in a different
deck/module than the galley
Multipurpose Payload/Work Surface Area A reconfigurable work surface/area with available
power/data/fluids connections to support a variety of payloads (e.g., medical and science tasks)
7
Table 2. Capability Allocation Recommendations for HALO and I-Hab
Capability
Quantity in HALO
(“dirty hab”)
Quantity in I-Hab
(“clean hab”)
A hardwired multipurpose workstation for critical commanding 1 1
Trash removal capability on at least a per mission basis 1 1
A viewing window (not a virtual window) 1A 1
An additional WCS separate from Orion 1 0
Private crew quarters 0B 4C
An additional galley separate from Orion 1D 1
A dedicated hygiene area 1 0
Separate wet and dry trash stowage 1 1
Dedicated labeled stowage areas vs. bungees and CTBs 1 1
A permanently installed exercise station 1E 0
A WCS on a different deck/module from galley 1F 0
Multipurpose Payload/Work Surface Area 1 2 A include if possible since rated as essential for a mission of any length
B include, if possible; for initial short missions, temporary deployable sleep quarters would be acceptable C four permanent and private crew quarters
D minimal galley for short-duration missions (potable water dispenser and/or food warmer) E can be deployable for HALO-only missions and permanent for HALO + I-Hab missions F acceptable not to meet this for HALO only missions
4 Habitat Design Guidelines
Individual (proprietary) reports that included the detailed analyses of all objective and subjective
data were provided to the contractors and NASA headquarters at the conclusion of each ground
test. The habitat design guidelines presented below were derived from the assimilated data from
all assessments. Data from the acceptable and unacceptable habitat elements have been mapped to
corresponding design guidelines, with the unacceptable elements being as significant as the acceptable elements in informing design guidelines. Whereas existing design standards were followed by all contractors, those design standards are traditionally focused on individual crew tasks
and workspaces. These tests offered the opportunity to evaluate contractor-provided integrated
designs that represented a balance between human factor task and workspace design and engineering and operational constraints, and, as such, represent a unique set of integrated design guidelines
and recommendations. The resulting guidelines are generally applicable to all deep space missions
and specifically to Gateway missions of ≤ 30 days and up to 60 days; any guidelines that are
specific to particular mission durations are stated explicitly (e.g., deployable versus permanent
crew quarters and exercise stations). The habitat design guidelines presented below are provided
in the order of general habitat layout followed by habitation systems (e.g., crew quarters, hygiene
stations, etc.) and then work systems (e.g., multipurpose workstations, dedicated science workspaces, etc.).
4.1 General Layout
Habitat layout and volume are important factors in the acceptability of the habitat design. In general, the results of this test suggest that layout can be more important than volume; i.e., a smaller,
properly laid out volume is generally more acceptable than a larger, poorly laid out volume. However, additional volume (provided it is properly laid out) can enable better separation of function
to minimize interference between crewmembers, prevent cross-contamination, and provide more
8
room for privacy and more separation for noise abatement. Additional volume also enables duplicate functional areas to be incorporated, which saves time, improves efficiency, and provides contingency options in the event of hardware or subsystem failures. Large habitat designs (e.g., with
multiple decks) result in more open translation paths and less interference between crewmembers;
their deck-to-deck translation paths for personnel and equipment are shorter and thus can be more
efficient than translation through linked modules. However, multiple standard smaller habitat modules could also provide sufficient volume and might provide an additional redundancy advantage
(although unless they are virtually identical with a full Environmental Control and Life Support
System) and all the necessary functions to execute mission objectives, the loss of one smaller
module could have mission-degrading impacts up to and including loss of mission (the same is
true for loss of a single larger habitat).
Habitat layouts should separate “clean” and “dirty” functional areas. “Clean” areas include crew
quarters, galley, and science and medical workspaces. “Dirty” areas include the WCS, hygiene,
and exercise spaces. Locating “dirty” areas near one another (e.g., a hygiene station next to an
exercise area) mitigates cross-contamination when crewmembers move between these areas.
Cross-contamination can be further mitigated by strategically locating the floors, walls, pallets,
and other barriers in the galleys, exercise, and medical areas. Smooth surfaces more easily facilitate
cleaning. All areas of the habitat that must be cleaned should be easily accessible. Separate accommodations for wet and dry trash stowage with odor mitigation should be provided; if possible, wet
trash and WCS waste should be vented directly into trace contaminants incinerators for odor control. Where practical, long-term trash stowage should be located in a separate module with a sealable hatch. Trash should be removed at least once every 30 days.
All habitation and work areas must have sufficient stability aids (e.g., handholds, foot restraints,
and body restraints), mobility aids (including an adequate mounting structures), and temporary
stowage accommodations (e.g., Velcro, bungees, nets, and caddies). The specifics of each should
be dictated by the work functions to be performed in each area and the individual layout of the
area (see Sections 4.2 through 4.17); for example, a large amount of appropriately sized temporary
stowage accommodations should be provided near hatches for staging cargo during transfer of
logistics between modules (e.g., between an arriving logistics vehicle and the primary habitat).
The size and location of stability and mobility aids and temporary stowage should be adjustable to
accommodate individual crewmembers working in the area in multiple orientations, and they
should provide enhanced flexibility for microgravity operations.
The ability to reconfigure all habitat modules (i.e., the ability to move pallets, payloads, and/or
entire functional areas within each module or between modules) allows for flexibility as the Gateway is assembled and as Gateway objectives and mission durations change. A common secondary
structure (e.g., mounting points, tracks, interfaces, fasteners, pip pins) throughout the habitat module(s) reduces the number of different tools needed on board and overall crew overhead. In smaller
habitats, deployable work surfaces can better utilize the available space, but they require mounting
tracks, power and data ports, deployable task lighting, adjustable stability aids (e.g., foot and body
restraints), and temporary stowage accommodations. The size and orientation of work surfaces
should also be adjustable.
Dedicated, labeled storage areas for short-term and long-term stowage of high-frequency and lowfrequency use items is needed to accommodate payloads, spare parts, wet and dry trash, waste
9
from WCS, and personal items. A simple, clearly defined coding scheme that references the item’s
location should be implemented so crewmembers can quickly and reliably locate items.
A viewing window (not a virtual window) should enable viewing of the Earth, Moon, and rendezvous and robotic operations (because direct viewing increases safety); due to the expected orientation of Orion on the Gateway stack, the Orion windows will be insufficient. A window also
provides photography opportunities for science and public outreach and enhances crew morale.
An omni-directional viewing window is preferred over a planar view port, with additional benefits
if it can be relocated to different ports based on operational drivers.
4.2 Crew Quarters
Private quarters should be provided for each crewmember. For missions ≤ 30 days, the crew quarters can be deployable; for missions > 30 days, crew quarters should be permanent. The crew
quarters should be co-located with other “clean” areas of the habitat (e.g., galley, science workspaces, and medical workspaces); hygiene tasks should be performed in separate, dedicated spaces
to limit cross-contamination (Section 4.3).
Each crew quarter should incorporate a rigid enclosure and door, light and sound proofing, adjustable ventilation (air flow speed and direction that is adjustable for personal preference and to mitigate CO2 buildup), caution and warning indicators (audible and visual), power and data connections (for laptops, tablets, task lighting, general charging), peripheral mounts (for laptops and tablets), customizable mood and spot lighting (relocatable, adjustable color/brightness), flexible temporary stowage (e.g., Velcro, bungees, nets, caddies), adjustable sleeping bag positioning (both
orientation and location within the crew quarter), and direct access to any additional personal crew
stowage lockers from within the crew quarters. Adjustable aids for stability and translation should
be provided to accommodate crew activities such as working on a laptop/tablet, changing clothes,
reading, and watching entertainment. The dimensions of the crew quarters should be at least 30”
wide x 30” deep and > 78” long to comfortably accommodate crewmembers, while accounting for
on-orbit spinal elongation.
4.3 Hygiene Stations
At least one dedicated, enclosed hygiene station should be provided. This area should be separate
from other functional areas, including the WCS and crew quarters, to prevent cross-contamination;
the crew quarters should remain dry, and the WCS should be reserved for WCS operations. The
hygiene station(s) should be co-located near other “dirty” areas in the habitat; locating one next to
the exercise area minimizes the need for crewmembers to pass through the habitat after they exercise and reduces the risk of sweat contaminating other areas. Each hygiene station should be permanent, private, easy to clean, and sufficiently ventilated. The hygiene enclosure should have rigid
walls and a door; all surfaces should be slick, smooth, and non-porous to repel water, facilitate
easy cleaning, and prevent bacterial growth. To ensure privacy, the door should be securable to
prevent it from inadvertently opening if bumped.
Adjustable stability aids for body, hands, and feet are required, as is temporary stowage accommodations (e.g., to include cleanable and removable caddies for stowage of shampoo, soap, etc.).
10
Long-term stowage of hygiene-related items should be available outside the hygiene station to
prevent cross-contamination and to facilitate cleaning of the interior of the station.
Hygiene station dimensions should be a minimum of ~45” wide x 30” deep x 78” tall. An asymmetrical cross-section can provide a sufficient anthropometric work envelope for hygiene tasks
(e.g., a 45” x 30” rectangle is more useful than a 37.5” x 37.5” square). The dimensions should
accommodate taller crewmembers when they change and wash their hair, while also accounting
for crewmembers’ on-orbit spinal elongation. The volume should provide adequate space to move
the body and maintain positions required during showering and should be tall enough to accommodate crewmembers with long hair (note that long hair floats in 0g and should not contact the
enclosure during washing). A portion of the hygiene station could be deployable, allowing it to
expand as needed for crewmembers to change clothes or wash long hair.
4.4 Waste Collection System
At least one private, dedicated WCS separate from Orion should be provided. The WCS(s) should
be co-located with areas where other “dirty” functions are performed. Each WCS should be permanent, private, easy-to-clean, well ventilated, and separate from the hygiene station. The WCS
enclosure should have rigid walls and a door; all surfaces should be slick, smooth, and non-porous
to repel water, facilitate easy cleaning, and prevent mold growth. To ensure privacy, the door
should be securable to prevent it from inadvertently opening if bumped. The enclosure should
provide sound abatement. The WCS itself should be appropriately located within the enclosure to
enable adequate space to position the body while using the WCS and have sufficient space to
access all sides when conducting maintenance.
Adjustable stability aids for hands and feet should be provided in front and to the sides of the WCS
itself. Temporary stowage accommodations are needed for items such as toilet supplies and urine
funnels and should be easily reachable while performing WCS operations. Separate, long-term
storage of WCS related wet trash and waste should be provided within the WCS enclosure or in a
temporary canister that is then combined with all wet trash and stowed elsewhere; this stowage
should be vented directly into the trace contaminant control system (TCCS) to catalyze and absorb
odors, rather than allowing odor to leak into the cabin atmosphere. The WCS enclosure should
have task lighting that is adjustable to assist crewmembers during cleaning, maintaining, and servicing the WCS.
WCS compartment dimensions should be a minimum of ~40” wide x 30” deep x 78” tall to accommodate taller crewmembers while also accounting for on-orbit spinal elongation.
4.5 Exercise
Guidelines for exercise are dependent on the prescribed protocol for inflight exercise, including
the type (e.g., cardio, resistive), frequency, and duration, as well as the specific hardware to be
used. The exercise device may need be mounted on a vibration isolation system (VIS), therefore
additional space to accommodate a VIS should be considered. The following recommendations
are made based on evaluations using the Hopper (a NASA government furnished equipment [GFE]
ground prototype resistive exercise device), a full range-of-motion volumetric assessments, and
the assumption that all crewmembers will exercise daily for a minimum of 30 min. For missions
11
≤ 30 days, a deployable exercise device is acceptable, provided adequate volume is available to
perform all required exercises and operation does not interfere with other crewmember activities.
For missions > 30 days, the exercise equipment should be permanently installed in a dedicated
area to avoid setup and stow before and after each use. The exercise station should be located in
close proximity to other “dirty” areas of the habitat. Positioning the exercise station near a hygiene
station limits the distance crewmembers need to translate to clean up after exercising, thereby
reducing the risk of cross-contamination within the habitat. Power connections should be provided
nearby for viewing laptops, tablets, or personal electronics, and temporary stowage accommodations and adjustable mounts should be within reach for exercise gear, water bags, and towels. A
window near the exercise area could allow external viewing during exercise. Adequate ventilation
should be provided to prevent CO2 buildup and to allow for temperature and humidity control. The
dimensions of the exercise area will be dependent on the flight exercise equipment and exercise
protocol but should accommodate the tallest crewmembers while they perform a full range of motion for all exercises.
4.6 Galley and Galley Table
An additional galley separate from Orion should be provided for missions of any duration. The
galley should be located near other “clean” areas of the habitat and be separated from “dirty” areas
to prevent cross-contamination. For missions of ≤ 30 days, a minimal galley that includes a potable
water dispenser (PWD) and possibly a food warmer is sufficient. For missions of > 30 days, additional galley features are desirable, such as hot and cold PWDs, food warmers, cold storage, local
stowage for one week’s worth of food, and a galley table large enough for all crew to gather together to eat a meal. Simple PWD interfaces should be used (e.g., the needle-captured septum used
in previous spacecraft including the Space Shuttle and ISS, or others). Food warming systems
should incorporate swing-open doors and not long pullout drawers, which require additional space
and stability aids to access. Food should be stowed near the galley and readily accessible while the
PWDs and food warmers are being used and while crewmembers are gathered at the table. The
galley table should be no smaller than the table on the ISS (e.g., at least 22” wide x 50” long when
fully extended), allowing all crewmembers to gather and eat together, and it should be located
where it does not interfere with other critical workspaces (e.g., it should not inhibit access to a
multipurpose workstation used for critical commanding). The table may be deployable.
Stability aids should be provided for use when operating the PWDs and food warmers and to enable all crew to “sit” at the table. Sufficient local temporary stowage should be provided to accommodate items required for meal preparation and consumption and should include the ability to stow
multiple small items, such as condiments, food packets, and utensils. Separate wet and dry trash
stowage should be provided in or near the galley; this could be implemented by attaching trash
bags directly to the galley table (e.g., as is done to the handrails along the ISS galley table). The
galley table could also be used as a common gathering area for crewmembers to perform work or
for entertainment; therefore, easily accessibly power/data connections and mounts (e.g., for laptops, tablets, task lighting, etc.) should be provided; crewmembers should also be able to access
the primary galley functions (e.g., PWD, food storage, etc.) while other crewmembers are working
at the galley table. All galley surfaces should be easy to clean.
12
4.7 Trash Management
Weekly removal of trash is highly desirable; removing trash at least every 30 days is critical. Trash
must be collected, stowed, isolated, and disposed of effectively to control odors and mitigate risk
of cross-contamination. For effective trash management, wet and dry trash should be collected and
stowed separately. Wet and dry trash containers should be provided near areas where trash is generated, eliminating the need to move it long distance. Routine planned trash management should
include consolidating trash and moving it to long-term stowage locations. Dedicated areas are required for stowing biological waste (non-WCS) and sharps (e.g., needles, catheters) to prevent
exposure to biohazards. If trash needs to be stowed long-term, it should be located outside of the
main habitation areas (e.g., inside a rarely used logistics module compartment). Note that if trash
is stowed inside the logistics module, odors will leak into the habitat every time the logistics hatch
is opened. This could be mitigated by having a dedicated wet trash compartment that has a oneway, grommet-style door to seal the trash. Trash should be vented directly into the TCCS to absorb
and catalyze odors rather than allowing odor to leak into the cabin atmosphere. A method should
be provided to remove trash from the Gateway at least once every 30 days (e.g., via a trash ejection
capability). If a trash ejection capability is available, the ejection velocity should ensure that the
trash does not re-contact any element of the Gateway stack. A volume of approximately 36 ft3 is
needed to store the typical amount of wet and dry trash, excluding WCS waste, accumulated during
a 30-day mission.
4.8 Multipurpose Workstations
At least one hardwired multipurpose workstation must be provided to ensure reliable critical commanding; a second hardwired multipurpose workstation can be provided as a backup and to accommodate parallel operations. Wireless workstations or tablets are not acceptable for critical
commanding; they are acceptable for monitoring and status checks. Access to critical commanding
workstations should not be blocked at any time. To help ensure that operators can provide precise
inputs (e.g., stack commanding, robotic manipulator system operations), workstations should be
positioned away from heavy traffic/high-use areas to avoid inadvertent interference from other
crewmembers who are passing or are conducting other tasks nearby. If critical commanding and
robotics operations need to occur in parallel, there should be sufficient space for 2 crewmembers
to work in parallel.
Workstation monitors and hand controllers should be adjustable, in both the vertical and depth
directions and in tilt, to accommodate variability in crew height and ergonomic preferences as well
as right- and left-handedness; adjustments should be easy, quick, and require no tools. Adjustable
foot restraints (that also require no tools to adjust) should be provided to enable the crewmember
to position themselves effectively and comfortably in relation to displays, keyboards, and hand
controllers. Handholds, adjustable arm rests, and body restraints may be needed for additional
stability during delicate hand control movements. Separate hand controllers should be used for
translation and rotation; each controller should have stick forces that enable precise inputs and an
easily identifiable central detent that provides no input.
If touchscreen workstation displays are used, the touchscreen feature should have a lock feature;
when this feature is unlocked, a firm touch input should be required to prevent inadvertent com-
13
mands if a crewmember accidently brushes against the screen. Furthermore, critical functions accessed through a touchscreen should have a manual back-up method (e.g., bezel buttons, keyboard
inputs, mouse inputs) in the event that the touchscreen capability malfunctions. Regardless of
whether inputs are provided via touchscreen, bezel button, keyboard, or mouse, immediate feedback (e.g., visual, audible, and/or tactile indicators) should be given indicating that the input has
been accepted to avoid inadvertently inputting multiple commands. Any lag between an input and
execution of a command should be minimized.
Small work surfaces, mounts, and temporary stowage accommodations (e.g. Velcro, bungees, nets,
pockets, etc.) should be provided near multipurpose workstations to accommodate checklists, notebooks, and tablets; corresponding power and data connections for laptops, tablets, and task lighting
should also be provided.
4.9 Dedicated Science Workspaces and Surfaces
Depending on intended science tasks, dedicated science workspaces and surfaces might not be
required as long as sufficient multipurpose workspaces and surfaces are provided; at least one
multipurpose work area should be available for science during shorter missions. Multiple multipurpose work areas should be provided for longer duration missions to allow for parallel science
and/or medical tasks. Workspaces and surfaces used for science should be grouped with other
“clean” areas to mitigate the risk of cross-contamination from “dirty” areas. Note that some science
tasks could be considered “dirty” (e.g., animal-based research experiments), and it should be possible to isolate these tasks within the science work area (e.g., inside a glovebox that can be thoroughly cleaned). Deployable workspaces are acceptable if proper interfaces to secure them are
provided, including, for example, standoffs that accommodate vertical loads on the surface. These
workspaces can be deployed into full, half, and quarter sizes to accommodate different needs.
Workspaces that accommodate science should have smooth, non-porous surfaces that repel liquids
for ease of cleaning. Accommodations for temporary stowage of wet, dry, and biohazard trash
should be provided (as applicable). Adjustable stability aids (i.e., foot restraints and handrails)
should be provided to allow different sized crewmembers to appropriately position themselves in
relation to the work area. Temporary stowage (e.g., Velcro, bungees, pockets, caddies) should be
available at the workspaces to accommodate the science tools and instruments, including various
small items. Power and data connections and adjustable mounts for laptops, tablets, task lights,
and science equipment should also be provided.
4.10 Glovebox
If a glovebox is used for science and operations (e.g., maintenance) tasks it should be able to be
thoroughly cleaned. A glovebox does not need to be permanently deployed unless it will be used
regularly (e.g., at least once per week); it could be deployed in a multipurpose work area when
needed and stored in a logistics module when not in use. The latter approach would allow the
volume otherwise dedicated for a glovebox to be allocated to other, higher priority functions.
The area around an installed glovebox should allow access to all glove ports and nearby work
surfaces, mounts, and data connections should be available for tablets, laptops, and notebooks.
Adjustable stability aids (e.g., foot and body restraints) should be provided so that the installed
14
height of the glovebox accommodates a range of crew heights and arm lengths. Access within the
glovebox should accommodate the reach of all crewmembers; all locations inside the glovebox
should be reachable, including the back and side walls, airlock access port, instruments (e.g., microscope), and tools. Furthermore, power/data connections, adjustable lighting and temporary
stowage accommodations for tools, samples, equipment, etc., should be provided both inside and
outside the glovebox. Other considerations include the potential need for an ultraviolet bulb to
assist in sterilizing, viewing reagents, etc., and an ultra-pure water source could be built into the
glovebox for molecular and/or biomedical work.
4.11 Dedicated Medical Workspaces and Surfaces
Dedicated medical workspaces and surfaces for crew medical diagnostics and treatment are not
necessarily required if sufficient multipurpose work areas are provided; at least one multipurpose
work surface should be available for medical use for missions of any duration. It is desirable to
have audio privacy for medical conferences (e.g., private crew quarters). Multiple multipurpose
work areas should be provided for longer duration missions to enable parallel science and/or medical tasks. Workspaces used for medical tasks should be grouped with other “clean” areas of the
habitat to mitigate the risk of cross-contamination from “dirty” areas (e.g., exercise, WCS, hygiene). At least one multipurpose workspace should allow a patient to be restrained to a surface
with enough space for at least one other crewmember to access the patient from all sides. Adjustable stability aids (e.g., foot restraints and handrails) should be provided around the patient to
enable a non-patient crewmember to conduct medical care, including cardiopulmonary resuscitation (CPR). Workspaces that accommodate medical tasks should have smooth, non-porous surfaces that repel liquids for ease of cleaning. Temporary stowage (e.g., Velcro, bungees, pockets,
caddies) should be available that accommodate all expected medical tools and instruments. Additionally, separate wet and dry trash receptacles, sharps containers, and biohazard bags need to be
located near the patient. Power and data connections and adjustable mounts for laptops, tablets,
task lights, and medical equipment should also be provided.
4.12 Crew Common Area
An area large enough for all crewmembers to gather provides positive morale benefits to the individual and to the team. This area could be integrated into other areas (e.g., the galley table) or
could have its own dedicated volume if space is available. Large, high-resolution viewing screens
in this area could be used for planning meetings, videoconferencing, public outreach, press conferences, displaying views from external Gateway cameras (which could provide a psychological
benefit, but are not a substitute for windows), and entertainment (e.g., watching movies).
Power/data connections and adjustable mounts (for screens, additional lighting, laptops, tablets,
etc.) should be provided. Adjustable stability aids should be available that allow crewmembers to
comfortably view the screens and to interact with each other. All lights in nearby areas should be
adjustable (including an option to turn them off) to avoid glare and unwanted reflections.
15
4.13 Logistics Stowage and Location Referencing
Dedicated logistics stowage volume, as well as a logical, concise coding scheme that references
the location of items should be incorporated into initial habitat designs. The habitat should have
dedicated stowage for one week’s worth of consumables (approximately 85-95 ft3 for food and
clothes), frequently used items, and critical spares; these items should be located close to the areas
in which they will be used (e.g., food should be stored near the galley). The remaining items should
be stored in the logistics module, thereby freeing up space in the main habitat. CTBs should be
stored no more than one layer deep for easy identification and retrieval; if accessible from both
sides, CTBs can be stored 2 layers deep. Transparent sides of CTBs would ensure that the contents
are easily verified while stowed and upon retrieval. CTBs can be secured with crossover elastic
straps or bungee cords that keep bags in place and allow individual bags to be removed to access
specific items. Elastic straps or bungees are preferred over large cargo nets, which make it difficult
to access individual bags without unstowing others.
A stowage tracking system (e.g., radio frequency identification [RFID], scanner, camera, etc.) as
well as a clear and concise coding scheme should be implemented to assist crewmembers in locating items. The location reference scheme should include a definitive grid (i.e., radial, horizontal/vertical) that uses simple letters and/or numbers; colors or icons can also be included for simplicity. The same location reference scheme should apply to all equipment in all work and habitation areas. The reference scheme should be labeled throughout the habitat modules in multiple
locations, so it is easy to see from any location within each module. Stowage bags and containers
should have a clear, concise numbering scheme with labels that are visible on all sides when the
bags are in their stowage location.
There should be a sufficient number of temporary stowage accommodations in all areas and surfaces of habitat (e.g., Velcro, bungees, tethers, caddies, etc.), as detailed in the other functional
work and habitation area sections. Additionally, temporary stowage staging areas should be located near the hatches for cargo bags being transferred from and to visiting vehicles as they arrive
and depart the Gateway.
4.14 Lighting
Both general and task (i.e., spot) lighting should be available throughout the habitat. Brighter overhead general lighting in each module and each functional area should help the crewmembers orient
themselves with the workspace (i.e., in the heads-up/nadir-zenith direction). Simple on/off
switches paired with brightness and possibly color control should be available in each module and
also in areas with critical or overlapping tasks. Both fixed and mobile task lighting should be provided. Fixed task lights, with the same level of controllability as general lighting, should be installed in each compartment (e.g., WCS, hygiene, glovebox). Mobile, adjustable task lights (adjustable position, orientation, and brightness) that can be moved and installed wherever work is
necessary (e.g., during maintenance tasks) should also be provided. When dedicated lighting is
required in certain areas of the habitat for specific purposes (e.g., plant growth lights), protective
eyeglasses or the ability to block, dim, or turn off the lights should be provided when crewmembers
are required to work in close proximity. Private crew quarters should have an option to completely
16
darken them inside. Automatic or manual circadian lighting to facilitate day/night cycles may benefit the health and performance of some crewmembers. Additional guidelines for lighting design
for each functional area are described in their respective sections above.
Caution and warning lighting, paired with audible indicators, should be provided throughout the
habitat. A “smart” subsystem caution and warning indicator lighting system would allow crewmembers to readily distinguish subsystem failures. In cases where an emergency evacuation is
necessary, translation path lighting should lead the way to Orion.
4.15 In-flight Maintenance
Ground test evaluations included the assessment of representative IFM tasks; note that testing did
not evaluate IFM of the habitat as a whole. Habitat designs should enable simple and efficient inflight maintenance. All subsystems that may need IFM should have adequate physical and visual
access to replace components, including for mating/demating power, data and fluids connectors.
Where needed, systems that enable access to all sides of subsystems should be implemented (e.g.,
“drawers” that allow pallets to first be pulled out and then rotated for better access). Common tool
kits, and/or interfaces that require no tools, would minimize the tools required on board and can
make IFM more time efficient. Dedicated subsystem IFM kits will reduce the time needed to gather
supplies; this is particularly important for time-sensitive maintenance tasks, such as pressure vessel
leaks. The operator performing the maintenance task should be able to view and access all relevant
fasteners and interfaces. Common relocatable multipurpose work surfaces with movable temporary stowage that can be affixed where needed during maintenance tasks should be provided. A
multipurpose temporary stowage caddy with elastic pouches, Velcro, etc. could provide temporary
movable storage that is independent of the work surface itself and could better accommodate tools,
parts, and equipment. Mobile and adjustable stability aids (i.e., hand and foot restraints) and task
lighting are also required; these should be able to be secured wherever maintenance is needed.
4.16 Radiation Protection
All crewmembers must have rapid access to adequate protection from solar particle events (SPEs).
While SPE protection could be provided through a variety of different means (e.g., by the external
shell of the habitat, individual radiation “suits” that crewmembers don during radiation events, or
a dedicated radiation shelter within the habitat), the following guidelines are specific to isolated
SPE shelters constructed within the habitat. Note that due to programmatic resource limitations,
the ground test did not evaluate overall protection due to galactic cosmic radiation.
The shelter does not need to be permanently deployed within the habitat; the crew could construct
it when needed. If the SPE shelter is constructed as needed, all necessary components (e.g., water
tiles, compacted trash tiles) should be easily identifiable, and the crew should be provided with
simple construction plans that clearly denote where each component is to be placed. Since SPEs
may last for several days, the crew must have the ability to perform essential personal and operations functions within the shelter (e.g., the ability to eat, sleep, perform basic hygiene and WCS
ops, and conduct critical commanding). However, if these functions cannot be performed inside
the shelter, the radiation shelter should be constructed in close proximity to areas were the functions can be performed to limit the amount of time that crewmembers must be outside of the shelter
(e.g., a single exit/entry point with direct access to the WCS). The shelter should also contain
17
ventilation, power, and data connectivity (e.g., for lighting and laptops/tablets, including a hardwired monitoring/commanding interface), and methods for securing sleeping bags, and accommodations for temporary stowage. Privacy barriers (e.g., curtain, door) within the shelter should be
provided for privacy during activities such as changing clothes.
4.17 Multipurpose Airlocks
Modules can be designed to provide habitation functions (e.g., exercise and science) and to serve
as an airlock for extravehicular activity (EVA). Airlocks for EVA generally have both an equipment lock (where EVA preparation and post EVA activities occur) and a crew lock (where suited
crewmembers egress and ingress the spacecraft). Normally the equipment lock does not go to vacuum pressure, but a pressure vacuum could occur if the interior crew lock hatch fails to seal. Thus,
any habitation-related equipment in the equipment lock that cannot tolerate a vacuum must be
moved to other modules during EVA preparation activities. Sufficient volume and stability aids
must be provided in the equipment lock to mount 2 EVA suits and to accommodate up to 4 crewmembers working on and around the suits simultaneously. The suits should be accessible for donning (upward through a hard upper torso or through a rear-entry hatch) and mounting of all necessary EVA tools and equipment on the suits. Stowage volume and accommodations (permanent and
temporary) should accommodate all necessary EVA tools, equipment, suits, and umbilicals. Umbilicals must be long enough to reach from the interior of the crew lock to any location in the
equipment lock. Any permanent (e.g., lockers) or temporary stowage (e.g., Velcro, bungees) accommodations must accommodate suit servicing kits, crew preference items, tools, etc., within the
equipment lock during EVA prep and post operations. Crew lock umbilical interfaces and restraints currently used on ISS should be provided.
5 Conflicts of Interest
None of the investigators or stakeholders receive any research support from non-public sponsors
of research. They do not perform any validation research of a drug or device. They do not receive
any gifts or income from individuals associated with these research studies. They do not use their
positions or proprietary or confidential information obtained in performing their duties, in any
marketing, investing, or commercial ventures.
6 Funding
Funding for the project and associated testing has been provided by NASA’s Advanced Exploration Systems via the NextSTEP Phase 2 program.
18
Appendix A: Ground Test Background and Methods
The NASA NextSTEP program is a public-private partnership model that seeks commercial development of deep space exploration capabilities to support human spaceflight missions around
and beyond cislunar space [1]. The NextSTEP Phase 2 Broad Agency Announcement (BAA) invited 5 commercial companies to refine their cislunar habitation concepts and to develop groundbased prototypes for evaluation by NASA astronaut test subjects [2]. The NASA ground-test protocol covered all aspects of these evaluations, including the hypotheses, strategic questions, objectives, methods, and metrics by which the Phase 2 habitation concepts were consistently evaluated
during integrated, multiday mission simulations [3]. In Fiscal Year (FY)18, 2 engineering test runs
and 2 evaluations by astronaut test subjects were conducted at NASA Johnson Space Center (JSC)
on 2 NASA-developed habitation configurations to train the astronaut crews and ground-test team,
and to refine the data collection and evaluation methods. Additional 1-day evaluations by astronaut
crew were conducted in early FY19 to increase the astronaut test subject pool. These evaluation
dry runs were conducted to ensure informed and consistent assessment of the contractor deliverables in FY19.
The NextSTEP Phase 2 ground tests each involved 4 NASA astronauts performing a multiday
mission timeline that integrated all habitation operations (e.g., eating, sleeping, WCS operations,
exercise) and representative science and robotics tasks relevant to future Gateway missions (e.g.,
low-latency teleoperations [LLT] rover operations, life science tasks, medical evaluations); some
tests included EVA tasks (e.g., airlock configuration, prep/post EVA operations). All mission timelines included a core set of NASA-defined tasks (Appendix A.2.3 Table 3) in addition to several
tasks that were specific to each contractor’s design and based on the contractor’s unique design
deliverables. Established objective and subjective metrics were collected and analyzed to provide
data-drive actionable recommendations for Phase 3 of the NextSTEP program. The overall purpose of this assessment was not to select a single specific configuration, but to provide data and
recommendations regarding how habitation, science, and EVA functions can be acceptably distributed across the elements of the Gateway. Data from these tests are also used to define the
minimum acceptable configurations, as well as a variety of options for hybrid configurations that
offer the highest levels of acceptability (though some of these may not be achievable due to practicalities). The resulting datasets obtained from the FY19 evaluations were assimilated and analyzed to define a range of acceptable Gateway habitation options, including elements and distributions of function across those elements (Sections, 2, 0, and 4). The following subsections provide
a brief overview of the test methods, study design, and evaluation metrics used to generate these
final recommendations for habitat design.
A.1 Study Design
Since 2008, the core ground test team for the NextSTEP Phase 2 habitation concepts evaluations
has successfully conducted multiple evaluations of spaceflight analog missions using a consistent
set of operational products, tools, methods, and metrics to enable the iterative development, testing, analysis, and validation of evolving exploration architectures, operations concepts, and vehicle designs. This has been achieved by ensuring that the required level of rigor and consistency is
applied before, during, and after the operational tests so that the data collected remains highly
19
relevant to NASA’s strategic architecture and technology development goals, and provides datadriven, actionable recommendations. Key points of this methodology include:
• The definition of the strategic questions that need to be answered and rationale behind each
• An understanding of how results will be used and the decisions that need to be made
• The development of objectives and hypotheses (i.e., expected outcomes) related to the
questions being tested
• The prospective definition of metrics that will be used to assess the objectives and accept/reject the hypotheses, including levels of practical significance
• The development of a study design that incorporates all necessary tasks to address the
questions and objectives, and a plan to collect the quantitative and qualitative data
• The selection of test subjects that are representative of the target population (e.g., astronauts who have flown on space missions) and the provision of sufficient training, so that
subjects understand the objectives and methods for collecting their input
• The execution of the study design with adequate fidelity of the operational environment
and relevant technologies (hardware and software) to address the questions at hand
• The use of test subject consensus results to form a single set of data that reflect the agreedupon results of any subjective input provided
• The mapping of the results to specific, actionable hardware, software, and/or procedural
recommendations
A.1.1 Mission Timeline Development
The core Gateway mission timeline was derived from a rigorous process that is described in detail
in the ground test and analysis protocol [3]. Briefly, ground test objectives were developed by
mapping the HEOMD exploration objectives, the ISS Exploration Capability Study Team phase
objectives, and the capability test objectives to representative functional requirements for the Gateway. Ground test objectives were then defined to evaluate how well different Gateway configurations address each of the representative functional requirements. These objectives were further
refined using recommendations provided by NASA SMEs and stakeholders, and ultimately formed
the common baseline used to consistently evaluate each contractor’s concept for habitation. Figure
2 provides a flow diagram of this process.
20
Figure 2. Flow diagram for developing the core Gateway mission-representative timeline.
The timeline for evaluating each habitation concept was developed by integrating multiple ground
test objectives into functional tasks and structuring them into a representative mission (Figure 3).
A core set of timeline tasks were completed across all contractor’s designs to ensure consistency
across all tests. Contractor-specific tasks were also included in the timelines if specific aspects of
a contractor’s unique habitat design and layout could not be evaluated with the core set of NASA
tasks. Table 3 provides a high-level summary of the NASA-provided, core Gateway mission timeline tasks that were conducted consistently across the different contractor’s habitat designs.
21
Figure 3. Mission timeline task derived from and mapped to draft Gateway functional requirements and
objectives.
Table 3. NASA Core Timeline Tasks with High-level Task Summaries
Category Task Task Description
Habitation
Crew Quarters
Operations
Perform pre- and post-sleep activities in the crew quarters, including getting
dressed, working on a laptop or tablet, reading, and watching entertainment.
Simulate sleep. Evaluate the number, location, layout, volume, and privacy
of the available crew quarters for sleep and pre-/post-sleep activities.
Waste Collection
System (WCS)
Operations
Simulate use, maintenance, and cleaning of the WCS. Evaluate the number,
location, layout, volume, and privacy of each WCS.
Personal Hygiene
Perform personal hygiene tasks including changing clothes, shaving, taking
a shower, and washing hair. Evaluate the ability to conduct personal hygiene
tasks in the habitat; include considerations for privacy. If a dedicated hygiene station is available, consider the quantity, location, layout, volume,
and ability to clean the station.
Exercise
Conduct volumetrically representative resistive exercises. Evaluate the ability to conduct exercise, including sufficient volume for the unstowed and
stowed equipment.
Meal Preparation
& Consumption
Prepare and eat a meal. Evaluate the ability for multiple crewmembers to
prepare food and eat simultaneously based on the available galley and galley
table features.
Housekeeping
Tasks
Gather locally stowed trash and move it to the long-term stowage location.
Conduct routine housekeeping tasks, such as cleaning walls, doors, enclosures, surfaces, etc. Evaluate trash management and the ability to conduct
housekeeping tasks; include considerations for accessibility.
Radiation Shelter
Construct a radiation shelter. Evaluate the radiation shelter location, volume,
layout, accessibility, and usability to continue habitation and work operations from within the shelter.
22
Category Task Task Description
Stability/Mobility
Aids and Temporary Stowage
Evaluate the location, type, usability, and availability of stability aids, mobility/translation aids, and temporary stowage accommodations throughout
the habitat.
Systems
Checks
Habitat Consumables and Subsystems Checks
Check status of habitat consumables, power subsystem, and environmental
control and life support system subsystem. Evaluate the quantity, location,
layout, volume, and usability of the workstations for conducting these tasks.
Operations
Planning
Daily Planning
Conference (DPC)
Conduct a DPC with the Mission Control Center (MCC) team. Evaluate the
location, volume, and elements needed (e.g., workspaces for taking notes,
etc.) for all crewmembers to conduct this task together.
Robotic and
Telerobotic
Operations
Gateway Stack
Attitude
Adjustments
Simulate commanding the Gateway stack into a new attitude by navigating
attitude telemetry, inputting a new state, and monitoring the progress of the
adjustment on a multipurpose workstation. Evaluate the location, volume,
layout, and usability of the workstation.
Low-Latency Teleoperations (LLT)
Rover Simulation
Perform a high-fidelity physics LLT simulation of a lunar rover moving
through a congested rock field with the goal of reaching a sample return ascent vehicle. Evaluate the location, volume, layout and usability of the workstation including hand controllers for performing LLT.
LLT Robotic
Manipulation
Simulation
Perform a high-fidelity physics LLT simulation of robotic manipulation that
requires precise rotational and translational control. Evaluate the location,
volume, layout and usability of the workstation, including hand controllers
for performing LLT.
Robotic Manipulator System
(RMS) Transfer
Simulation of
Sample Return
Canister (SRC) to
Science Payload
Airlock
Robotically retrieve a lunar sample container from an arriving SRC; grapple
the sample return vehicle with the robotic arm and retrieve the SRC using
the RMS. Evaluate the location, layout, volume, and usability of the workstation including hand controllers for performing robotics operations.
Science
SRC Processing
Glovebox
Retrieve the SRC from the Science Payload Airlock, prepare the SRC for
Earth-return inside the glovebox, and stow for return-to-Earth. Evaluate the
location, layout, volume, and usability of the glovebox and associated areas
for conducting the task.
Lunar Traverse &
Sample Collection
Simulation
Navigate a lunar region of interest to find specific rocks within a boulder
field that are desired by Earth-based scientists. Evaluate the location, layout,
volume, and usability of the workstation including hand controllers for performing this task.
Telescope
Observations
Simulation
Point an externally mounted Gateway telescope at specific targets on the
Earth, Moon, and Sun and take pictures at specified times throughout the
mission. Evaluate the location, layout, volume, and usability of the workstation for conducting telescope observations.
BioMolecule
Sequencer
Collect environmental samples and extract bacterial DNA using a miniDNA sequencer. Evaluate the ability to conduct this lengthy, complicated
science task while other crewmembers are performing other parallel tasks
nearby.
Muscle
Ultrasound
Perform an SME-guided ultrasound scan of a crewmember's leg muscles.
Evaluate the location, volume, layout, and usability of the workspace available to conduct this science research task.
Vein Ultrasound
Perform an ultrasound-guided intravenous catheter insertion into a phantom
arm. Evaluate the location, volume, layout, and usability of the workspace
available to conduct this science research task.
Medical Personal Health
Checkout
Conduct a personal health checkout, including heart rate, blood pressure,
temperature and pulse oximetry. Evaluate location, volume, layout, and usability of the workspace available to conduct this routine medical assessment.
23
Category Task Task Description
Private Medical
Conference
Conduct a conference call with a flight surgeon on the ground to review results from the personal health checkout. Evaluate the location and privacy
available for this call.
Reconfiguration
Logistics
Reconfiguration
Retrieve one week's worth of stowage from the logistics module and transfer
it to contractor pre-defined locations within the habitat. Evaluate the location(s), volume(s), availability, accessibility, and organization of stowage areas within the habitat for both short-term and long-term stowage, as well as
low-frequency use and high-frequency use stowage. Evaluate interference
with other crewmembers performing activities during logistics transfers.
Extravehicular
Activity (EVA)
Preparation and
Post-EVA
Operations
Reconfigure the airlock module from "habitation mode" to "EVA airlock
mode." Evaluate the location, volume, layout, accessibility, and usability of
this area for conducting EVA preparations and post-extravehicular activities.
PAO
Public Affairs
Office (PAO)
Event
Conduct a PAO event with the ground. Evaluate the location, volume, layout, and usability of the habitat to support this event while other crewmembers are conducting parallel tasks.
A.2 Ground Test Execution
A.2.1 Test Personnel Roles, Responsibilities, and Training
Each ground test was designed to provide a high-fidelity simulation of a cislunar mission, including the use of astronaut test subject crews and mission control personnel. All test subjects were
recruited from the NASA Astronaut Office and included astronauts who have flown in space and
astronaut candidates. These astronaut test subjects were assigned the roles of Commander (CDR),
Mission Specialist-1 (MS1), Mission Specialist-2 (MS2), and Mission Specialist-3 (MS3). Timeline tasks were typically conducted by 2 crewmembers together: CDR and MS1 were paired, and
MS2 and MS3 were paired. All subjects participated in training sessions at JSC that included the
rationale and the objectives of the testing, and hands-on familiarization with the equipment, methods, and metrics. The crewmembers also participated in at least one engineering dry run of a Gateway-representative mission timeline that used NASA-developed habitation elements, and they
completed individual and consensus questionnaires evaluating their experiences (see Appendix
A.3). During the week before each test, the crew assigned to the test received a 1-hr briefing on
the contractor’s habitation concept and the unique timeline tasks, and the protocol principal investigator (PI) reviewed the proper process for completing the questionnaires. The day before the first
Mission Day, the crew trained for approximately 6 hours on the contractor-unique timeline tasks
inside the contractor’s ground-based habitat.
The ground tests took place at either a NASA center or a contractor facility and were supported by
NASA Flight Operations Directorate flight controllers and SMEs in the NASA JSC Analog Mission Control Center (AMCC) in JSC Building 30. The AMCC enables experts to coordinate, monitor and execute test activities within JSC and at remote locations, and consists of individual consoles with multi-monitor computer workstations. The consoles are linked by a high-speed data
network, and each is identified by the call sign of the operator who uses it. During the mission
days, the AMCC was staffed by a flight director (FLIGHT) who oversaw all activities during the
test, a CAPCOM who communicated directly with the astronaut test subject crewmembers, a planner who supported the generation of timelines, and at least one SME who provided support for
24
each task. The ground tests were further supported by a network of out-of-simulation personnel
who ensured the test was running in accordance with the objectives outlined in the protocol and
provided hardware, software, and network troubleshooting support if needed. The protocol principal investigator (PI) was responsible for ensuring tasks and questionnaires were completed according to the priorities of the protocol, and made real-time decisions if operations ran off-nominal.
This individual coordinated with the test coordinator (TC) and relayed critical decisions directly
to the Flight Director if needed. The TC was responsible for coordinating all out-of-simulation
activities with the test architecture support personnel and for relaying relevant information to the
PI; he or she assisted the PI with real-time decision making and managed the flight rules timer
(described below). Test architecture support personnel were present at both the test site and in the
AMCC to ensure crew workstations, AMCC consoles, and communication networks were functioning properly. All AMCC personnel and test execution and support personnel participated in
the same JSC-based dry runs as the astronaut test subjects.
A.2.2 Communication
Two-way communication (including voice, text, video, and data) was exchanged between test subject crews and AMCC personnel. All audio, video, data, and text traffic traveled across the NASA
Space Network Research Federation network and was managed by several out-of-simulation console support personnel to ensure connectivity. Communication protocols that mirrored ISS communication procedures were established between the astronaut crew test subjects and CAPCOM
and between FLIGHT and SMEs. All in-simulation and out-of-simulation personnel were trained
on communication “best practices” for use during each test. VCOM® software (IntraCom Systems,
LLC) provided the communication loops that enabled conversations among the crew, AMCC, and
test personnel:
• Flight – coordination loop between FLIGHT and SMEs (and Protocol PI when needed).
• S/G-1, 2, 3, 4, 5 – space-to-ground loops to communicate with the crew. CAPCOM was
the nominal voice to the crew, and these conversations primarily occurred on S/G-1. SMEs
listened to S/G-1 at all times. On a task-specific basis, FLIGHT could direct SMEs to talk
directly to the crew (e.g., for complex procedures) on the S/G-2, 3, 4, 5 channels. S/G-2,
3, 4, 5 assigned specifically to individual crewmembers.
• S/G-M1, M2 – medical 1 and 2 loops dedicated to private medical conferences between
individual crewmembers and the SURGEON.
• Intercom Loop –internal crew coordination loop inside the habitat only.
• Plan Coord – loop for communicating with the Planner.
• SME Coord – loops for SME teams to communicate with each other.
• Test Loop – out-of-sim coordination between TC and test team.
A.2.3 Timeline and Procedure Management
Playbook, a crew timeline management and execution tool [4], was used by each crewmember on
each Mission Day. Execute notes and detailed procedures were developed for each task and linked
into Playbook. Execute notes served as high-level reminders for the purpose of that particular task
with respect to the study objective. Procedures were displayed through the procedure execution
tool ProX so that crewmembers could step through each procedure step automatically and the
MCC and SMEs could follow along in real-time with the crew as they completed the steps. Figure
25
4 shows a representation of the crew timeline with tasks organized for each crewmember, task
execute notes, and corresponding ProX procedure.
Figure 4. Playbook integration of crew timelines and procedures.
A.2.4 Test Execution Flight Rules
The following flight rules were implemented to troubleshoot issues with communication, hardware, and simulation:
1. Space-to-ground voice communication troubleshooting: The communication team can spend
up to 10 min troubleshooting the communication network, while testing continues in parallel
if possible. After 10 min, the following backups will be employed:
• If Crew  AMCC communication is down and the crew is not directly communicating
with an SME: the backup local CAPCOM (at the test site) will temporarily communicate
with the crew. Once communication is restored, the Protocol PI will provide a recap and
handoff back to the JSC AMCC. If Crew  backup local CAPCOM communication
is down: backup local CAPCOM opens hatch and talks direct to crew.
• If Crew  AMCC communication is down and the crew is directly communicating
with an SME: SME talks direct to crew via cell phone.
2. Physical hardware troubleshooting: Up to 2 individuals can enter the mock-up to conduct
troubleshooting for up to 2 h (assuming minimal test interference during this time). If there
is a complete hardware failure that takes more than 10 min to resolve, the crew will be
instructed by CAPCOM (via Protocol PI) either to move to the next task or to wait.
3. Simulation troubleshooting: The simulation team can spend up to 10 min troubleshooting.
If the sim cannot be fixed in 10 min, CAPCOM will direct the crew to standby until
FLIGHT talks with the Protocol PI, who determines how to proceed.
26
A.2.5 Test Readiness Review and Institutional Review Board Approvals
A test readiness review (TRR) was completed and approved before to each test. The TRR included
a detailed hazard analysis and safety inspection of all facilities and equipment used in that test.
Members of the TRR board included safety and medical officers, facility managers, TCs, and the
protocol PI. Furthermore, all testing was conducted in accordance with the pre-approved NASA
JSC Institutional Review Board (IRB) protocol #STUDY00000040. Before to the start of each
test, all astronaut test subjects were informed of the test termination criteria and means by which
their privacy and the confidentiality of their data would be maintained. They provided informed,
written consent to their participation in each study.
A.3 Metrics and Data Analysis Methodology
Subjective and objective data related to test crew performance, human factors, and habitability
were collected throughout each test. Subjective metrics included capability assessment, pairwise
comparison of capabilities, simulation quality, acceptability, and measures of fatigue and workload. These metrics have been developed, refined, and vetted by the core ground test team over
the past decade and have been successfully used to evaluate habitability, human factors, and human
performance aspects of candidate spaceflight vehicles [5-8] and other operations concepts for future human exploration-class missions [9-17] to derive actionable results and recommendations
for future iterations and tests. Objective metrics include planned versus actual timeline data and
crew location over time within each contractor’s mock-up. Objective data inform the subjective
results (and vice versa).
The astronaut test subjects provided both individual and consensus ratings of capability assessment, simulation quality, and acceptability. Whereas individual ratings provide contextual information and insightful comments, the use of inferential statistics from individual ratings for an n =
4 is not meaningful, therefore test subjects also provided a crew consensus rating at the end of each
test day. The consensus rating ensured each test subject interpreted the questions consistently, and
allowed them to discuss and judge, using their prior experience, how microgravity might affect
operations. The consensus evaluations were considered the actionable results.
A.3.1 Practical Significance
A 10-point Likert scale was used to obtain subjective ratings of capability assessment, acceptability, workload, and fatigue (described in detail in the following sections). Each scale is divided into
5 distinct categories with 2 numerical ratings within each category to discriminate preferences. For
these ground tests, sample sizes were not large enough to use inferential statistics and hence we
prospectively defined practical significance as a categorical difference on the Likert rating scales
(Figure 5). For objective metrics, such as the planned versus the actual time to complete a task, we
prospectively defined practical significance to be a 10% difference.
27
Figure 5. Acceptability rating scale describing practically significant (i.e., categorical) differences.
A.3.2 Capability Assessment Ratings
The primary objective of the NextSTEP ground test program is to identify the capabilities that are
required for exploration missions, the nonessential capabilities that might enhance exploration,
and the capabilities that provide marginal or no meaningful enhancement and can therefore be
excluded, resulting in cost savings without impact to mission success. The capability assessment
scale is a 10-point scale used to rate the extent to which candidate capabilities might enable and
enhance future exploration missions (Figure 6). The scale consists of 5 categories: essential/enabling (impossible or highly inadvisable to perform the mission without this capability), significantly enhancing (capability is likely to significantly enhance one or more aspects of the mission),
moderately enhancing (capability is likely to moderately enhance one or more aspects of the mission or significantly enhance the mission on rare occasions), marginally enhancing (capability is
only marginally useful or useful only on very rare occasion), and little to no enhancement.
Figure 6. Capability assessment rating scale.
The astronaut test subjects evaluated 20 candidate Gateway capabilities for each contractor’s habitat. Although many of these capabilities related to general interior architecture, the crew evaluated
the capabilities in the context of each contractor’s habitat design. Evaluations were conducted
twice: first for missions less than 30 days, and second for missions of 60 days. The 20 capabilities
evaluated included:
• An additional WCS separate from Orion
• An additional galley separate from Orion
• Galley/ward room table for 4 crewmembers
• Trash removal capability on at least a per mission basis
• Separate wet and dry trash stowage
• Common secondary structure interface
• Two or more multipurpose workstations
• A dedicated medical area
28
• A dedicated science area
• A dedicated hygiene area
• A hardwired, multipurpose workstation for critical commanding
• Two exercise stations
• A permanently installed exercise station
• Exercise station in separate module from the main habitat
• Private crew quarters
• A dedicated labeled stowage area vs bungees and CTBs
• Single (i.e., 30 days) missions worth of logistic stowage in the habitat
• A WCS in a different module from the galley
• Circadian cycle lighting system
• A viewing window (not a virtual window)
After they completed their evaluation of the larger inflatable habitats, the crew was asked to provide a capability assessment rating of replacing the single standard habitat in a stack that also
includes a multipurpose airlock, personal protective equipment (PPE), and logistics module with
either one large inflatable habitat or two standard (smaller, non-inflatable) habitat modules. The
level of mission enhancement was rated in reference to this baseline and while assuming each
habitat would provide the same habitation functions.
A.3.3 Pairwise Comparison of Capabilities
After they completed the capability assessment ratings, the astronaut test subjects completed a
pairwise comparison of the 20 different capabilities. This pairwise comparison discriminates the
relative importance of capabilities that may have received the same rating, and results in a rank
order of most-to-least important capabilities. For this assessment, the 20 capabilities were listed
across the rows and columns of a matrix (Figure 7). Test subjects then compared the capability in
each row to the capability in each column, one pair at a time. If the capability in the row was more
important than the capability listed in the column, an X was placed in that cell. If the capability in
the row was less important than the capability in the column, the cell was left blank. If the capabilities were equally important, a T (for tie) was placed in the cell. The relative weighting and rank
order of each capability was then calculated using the analytical hierarchy process where X = 2,
blank = 0.5, and T = 1. The test subjects completed this consensus pairwise comparison task twice:
first for missions less than 30 days, and second for missions greater than 30 days.
29
Figure 7. Pairwise comparison of candidate Gateway capabilities.
A.3.4 Simulation Quality Ratings
Simulation quality ratings reflect the extent to which the simulation allows meaningful evaluation
of the aspects of Gateway habitation being assessed (Figure 8). Unplanned communication dropouts, unresolved hardware failures, and low-fidelity mock-ups are examples of factors that could
affect simulation quality ratings. Aspects of Gateway habitation that were not being assessed in
this test, including 1-g test artifacts, were intentionally excluded from consideration when providing ratings of simulation quality.
Each acceptability rating (described next) was preceded by an evaluation of simulation quality
because the same simulation may differ in quality depending on the types of operations or systems
being assessed or the perspective from which it is being assessed (e.g., by different groups). When
a simulation quality rating of 4 or 5 was given, comments were noted describing the simulation
limitations but acceptability ratings were not collected because, by definition, significant simulation limitations or anomalies precluded meaningful evaluations. It was understood and expected
that some habitation elements would not provide flight-like simulation qualities. Hence, simulation
quality ratings enabled the study team to place the other ratings in context.
Selection Criteria
(x Indicates Row more Important Than Column;
T indicates capabilities are equally important
[silver bullet])
An additional WCS separate from Orion
An additional galley separate from Orion
Galley/ward room table for 4 crew
Trash Removal Capability
Separate wet and dry trash stowage
Common secondary structure interface
Two or more multi-purpose workstations
A dedicated medical area
A dedicated science area
A dedicated hygiene area
A hardwired multi-purpose workstation for critical commanding
Two exercise stations
A permanently installed exercise station
Exercise station in separate module from the main habitat
Private crew quarters
A dedicated labeled stowage areas vs bungees and CTBs
Single (ie 30 days) missions worth of logistic stowage in the habitat
A WCS in a different module from the galley
Circadian cycle lighting system
A viewing window
An additional WCS separate from Orion
An additional galley separate from Orion
Galley/ward room table for 4 crew
Trash Removal Capability
Separate wet and dry trash stowage
Common secondary structure interface
Two or more multi-purpose workstations
A dedicated medical area
A dedicated science area
A dedicated hygiene area
A hardwired multi-purpose workstation for critical commanding
Two exercise stations
A permanently installed exercise station
Exercise station in separate module from the main habitat
Private crew quarters
A dedicated labeled stowage areas vs bungees and CTBs
Single (ie 30 days) missions worth of logistic stowage in the habitat
A WCS in a different module from the galley
Circadian cycle lighting system
A viewing window
30
Figure 8. Simulation quality rating scale.
A.3.5 Acceptability Ratings
The acceptability rating scale (Figure 9) measures the acceptability of different prototype systems
and operations concepts for future spaceflight missions, and it informs requirements for improvements when necessary [17]. The scale consists of 5 categories: totally acceptable with no improvements necessary, acceptable with minor improvements desired, borderline with improvements
warranted, unacceptable with improvements required, and totally unacceptable with major improvements required. Any rating of 4 or lower is considered acceptable. Any rating of 3 or higher
requires the evaluator to describe the specific desired, warranted, and/or required improvements.
Figure 9. Acceptability rating scale.
Test subjects completed individual and consensus acceptability questionnaires related to the following Gateway habitation systems and functions: general habitat layout, crew quarters, hygiene
stations, WCS, exercise, galley and galley table, trash management, multipurpose workstations,
science workspaces and surfaces, gloveboxes, medical workspaces and surfaces, crew common
area, logistics stowage and location referencing, lighting, inflight maintenance, radiation protection, and (if applicable to the contractor) multipurpose airlocks. Individual questionnaires were
completed after each test subject finished the associated task. Consensus questionnaires were completed at the end of each mission day by all 4 crewmembers together. The astronaut test crews also
provided a consensus evaluation of the overall acceptability of the habitat configuration.
A.3.6 Fatigue Ratings
The fatigue rating scale (Figure 10) measures the level of underlying fatigue that each test subject
experienced throughout the course of the testing [18]. Fatigue reflects multiple factors, including
task workload and complexity, stress, sleep quality, and physical exertion. This scale consists of 5
fatigue categories: no, minor, moderate, significant, and extreme fatigue. Fatigue ratings were collected at the beginning, the middle, and the end of each mission day.
31
Figure 10. Fatigue rating scale.
A.3.7 Workload Ratings
Workload refers to the test subject’s ability to maintain maximum task performance in a given
environment or under a given test condition while accounting for task overlap and/or interference
from other test subjects conducting their own tasks. Although this does not provide direct insight
into the distribution of functions across the Gateway configuration, it does provide insight into the
task and the overall habitation system design. For example, workload may be rated high during
setup of exercise equipment if the habitat interfaces, accessibility, and procedures are complex.
The workload rating scale integrates mental, physical, and environmental factors and is used to
identify peak and average workload per subject and across all subjects [18] (Figure 11). This scale
consists of 5 workload categories: minimal, low, moderate, significant, and extreme. Workload
ratings were collected at the beginning, the middle, and the end of each mission day.
Figure 11. Workload rating scale.
A.3.8 Planned versus Actual Timeline Execution
Variance between the actual time required to complete a task and the planned time for that task
provides a contextual understanding of other crew performance metrics. Each mission timeline
was developed to provide a common structure to consistently evaluate the different Gateway habitation concepts, and it was designed to limit the number of crewmembers conducting a specific
task at a given time, avoiding crewmember overlap and wait times for use of various cabin functions (e.g., WCS, galley, or exercise devices). The core mission timeline was baselined to be configuration-independent and representative of a cislunar Gateway mission. However, the timeline
of the tasks was modified to serve each contractor’s architecture, and unique tasks were integrated
into the timeline to highlight specific design features and habitation elements.
Variances between the actual and planned time to complete tasks were compared with insight into
to what may have caused the differences (such as conflicts for use of the same habitable volume,
simulation quality effects, crew training nuances, etc.).
32
A.3.9 Crew Location Frequency Distribution
The amount of time that test subjects spent in different areas of each habitat were collected over
time to evaluate the distribution of tasks and functions. To develop the frequency distribution of
area usage, each habitat was divided into different functional zones. The time that each test subject
spent in each zone on each test day was collected using the AllTraq system with the objective of
assessing the efficacy of crew time/motion as they executed the timeline. These data provided
insight into cabin layout, volume utilization, and efficiency of task/function distributions throughout the habitat to further inform functional requirements and habitation design refinements for
NextSTEP Phase 3. For example, areas of the habitat that may be underutilized could potentially
be repurposed or eliminated.
The AllTraq system is a real-time position tracking system that uses ultra-wideband frequency
receivers, radio frequency identification (RFID) tags, and data security protocols for collecting
data on human movement. The RFID tags worn by test subjects were small and non-intrusive and
had an accuracy of ~6-8 inches between pre-determined zones. For each contractor habitat, a number of receivers were placed throughout the habitat and a geolocation center was calculated. To
improve accuracy, stationary RFID tags were positioned within each habitat module. The “Stationary Tag Accuracy” is a metric that quantifies the error in the geolocation estimate of the stationary tag. Accuracy of the geolocations was calculated by first placing the stationary tag in the
habitat with the other receivers and then calculating a probability or confidence level. Each functional zone was subdivided into a grid of 10-in x 10-in squares. The amount of time spent in each
10-in square was inferred from the density of the geolocations within that area. Heat maps were
constructed to visualize the time each test subject spent in a particular area; the color gradation
scale ranged from white (representing 0 minutes spent in that area) to dark red (representing 60
minutes spent in that area). Histograms were also generated to show the relative distribution of
high-use and low-use zones; an equal distribution reference line was added to the histograms that
represents the total amount of time that would be spent in each zone if the crew distributed their
time evenly between zones.
A.3.10 Design Element Distribution
The test subject crew completed a consensus element distribution during which they designed the
details of their preferred Gateway stack. This included defining which and how many different
habitation and work elements they thought should be allocated to that contractor’s habitat module(s)/decks and associated logistics module. These data were used to inform design guidelines for
Gateway habitation modules.
33
A.4 Study Limitations
Several study limitations were present throughout the execution of the ground tests. The following
list describes these limitations and explains how the effects of each limitation were mitigated.
1. Number, Type, and Fidelity of Contractor Habitats: Due to budget, schedule, and 1-g limitations, the number, type, and fidelity of various contractor habitation elements varied
widely. For this reason, simulation quality ratings (Section A.3.3) were used to discriminate the data that could be reliably used for Gateway recommendations. Also due to budget
and schedule, the ground tests did not include mock-ups of Orion. Hence, the contributions
of Orion should be assessed through a combination of analyses, virtual reality, and standalone testing, rather than fully integrated human-in-the-loop astronaut testing.
2. 1-g Test Environment: The Gateway will be occupied in a microgravity environment,
which cannot be fully simulated in on Earth. However, previous testing has shown that 1-
g mock-ups that contain features required for microgravity operations (e.g., handholds, foot
loops, Velcro, etc.) and are reviewed by experienced astronauts can still result in meaningful assessments. Virtual reality was also used to address some aspects of microgravity, such
as full utilization of the habitation volume that is not always possible in a 1-g test (e.g.,
exercise on the ceiling versus floor).
3. Ground Test Study Design: The NextSTEP BAA Phase 2 resulted in 5 different habitation
configurations. At the start the test program, the test team did not have the details of each
individual contractor configuration with respect to the number and type of modules and the
distribution of habitation, science, and EVA functions. Also, since each contractor provided their own designs, the test team did not have full control to systematically vary the
independent and dependent variables, and they could not could not prospectively develop
multiple specific hypotheses. Instead, 2 high-level hypotheses were proposed that provided
the framework to guide the human-in-the-loop astronaut ground tests [19]. The results of
each ground test were assimilated, analyzed, and used to inform the Gateway design guidelines presented above. In this type of human-in-the-loop testing using a targeted population
of astronauts as test subjects, it is not possible to execute the studies with large numbers of
subjects (due to limited number of astronauts, scheduling constraints, etc.). Therefore, although individual data was collected, the crew’s consensus evaluation was used to test the
hypotheses and to identify the actionable results.
4. Ground Test Timeline Limitations: The timeline used in each contractor evaluation was
derived through the rigorous process of down-selecting tasks from high-level Gateway objectives and functional requirements. Due to programmatic and resource limitations, we
could not practically test every possible timeline variant (including content and order).
34
A.5 References
[1] Z. Hester, "After the International Space Station: National Aeronautics and Space
Administration, Industry, and the Future of Commercial Spaceflight in Low-Earth Orbit,"
New Space, vol. 5, pp. 33-44, 2017.
[2] J. C. Crusan, D. A. Craig, and N. B. Herrmann, "NASA's deep space habitation strategy,"
presented at the IEEE Aerospace Conference, Big Sky, MT, 2017.
[3] M. Gernhardt, K. H. Beaton, S. Chappell, O. S. Bekdash, and A. Abercromby,
"Development of a Ground Test & Analysis Protocol for NASA's NextSTEP Phase 2
Habitation Concepts," presented at the IEEE Aerospace Conference, Big Sky, MT, 2018.
[4] J. J. Marquez, M. J. Miller, T. Cohen, I. Deliz, D. S. Lees, J. Zheng, et al., "Future needs
for science-driven geospatial and temporal extravehicular activity planning and execution,"
Astrobiology, vol. 19, pp. 440–461, 2019.
[5] M. L. Gernhardt, O. S. Bekdash, H. L. Litaker, S. P. Chappell, K. H. Beaton, C. Newton,
et al., "Mars Ascent Vehicle Sizing, Habitability, and Commonality in NASA's Evolvable
Mars Campaign," presented at the IEEE Aerospace Conference, Big Sky, MT, 2017.
[6] H. L. Litaker, A. F. J. Abercromby, N. R. Moore, S. P. Chappell, R. L. Howard, and J. S.
Klein, "Assessment of the Habitable Airlock (HAL) and the Alternate Multiple Mission
Space Exploration Vehicle (AMMSEV) Configurations in the NASA Neutral Buoyancy
Laboratory (NBL)," NASA, NASA Johnson Space Center, Houston, TX2013.
[7] H. L. Litaker Jr, S. G. Thompson, R. Szabo, E. S. Twyford, C. S. Conlee, and R. L. Howard
Jr, "Dual rover human habitation field study," Acta Astronautica, vol. 90, pp. 378-390,
2013.
[8] H. Litaker, M. Chen, R. Howard, and B. Cloyd, "Human Factors Assessment for the Space
Exploration Vehicle (SEV) GEN 2A Habitable Volume Three Day Study-Research and
Technology Studies (RATS) Phase 2," National Aeronautics and Space Administration,
Washington, D.C.2012.
[9] K. H. Beaton, S. P. Chappell, A. F. J. Abercromby, M. J. Miller, S. E. Kobs Nawokniak,
A. L. Brady, et al., "Using science-driven analog research to investigate extravehicular
activity science operations concepts and capabilites for human planetary exploration,"
Astrobiology, vol. 19, pp. 300–320, 2019.
[10] K. H. Beaton, S. P. Chappell, A. F. J. Abercromby, M. J. Miller, S. E. Kobs Nawokniak,
A. L. Brady, et al., "Assessing the acceptability of science operations concepts and the
level of mission enhancement of capabilities for Mars exploration extravehicular activity,"
Astrobiology, vol. 19, pp. 321–346, 2019.
[11] K. H. Beaton, S. Chappell, M. J. Miller, D. S. S. Lim, and A. Abercromby, "Extravehicular
Activity Operations Concepts under Communication Latency and Bandwidth Constraints,"
presented at the IEEE Aerospace Conference, Big Sky, MT, 2017.
35
[12] S. P. Chappell, K. H. Beaton, M. J. Miller, T. G. Graff, A. F. Abercromby, M. L. Gernhardt,
et al., "NEEMO 18-20: Analog Testing for Mitigation of Communication Latency During
Human Space Exploration," presented at the IEEE Aerospace Confernce, Big Sky, MT,
2016.
[13] S. P. Chappell, A. F. J. Abercromby, M. Reagan, and M. Gernhardt, "NEEMO 16:
Evaluation of systems for human exploration of near-Earth asteroids," presented at the 43rd
International Conference on Environmental Systems, Vail, CO, 2013.
[14] S. P. Chappell, A. F. Abercromby, W. L. Todd, and M. L. Gernhardt, "NEEMO 14:
Evaluation of human performance for rover, cargo lander, crew lander, and exploration
tasks in simulated partial gravity," NASA Johnson Space Center, Houston, TX TP-2011-
216152, 2011.
[15] A. F. Abercromby, M. L. Gernhardt, and J. Jadwick, "Evaluation of dual multi-mission
space exploration vehicle operations during simulated planetary surface exploration," Acta
Astronautica, vol. 90, pp. 203-214, 2013.
[16] A. F. Abercromby, M. L. Gernhardt, and H. L. Litaker Jr, "Desert Research and
Technology Studies (DRATS) 2009: Evaluation of small pressurized rover and
unpressurized rover prototype vehicles in a lunar analog environment," NASA Johnson
Space Center, Houston, TX TP-2012-217360, 2012.
[17] A. F. Abercromby, M. L. Gernhardt, and H. L. Litaker, "Desert Research and Technology
Studies (DRATS) 2008 evaluation of Small Pressurized Rover and unpressurized rover
prototype vehicles in a lunar analog environment," NASA Johnson Space Center, Houston,
TX NASA-TP-2010-216136, 2010.
[18] A. F. J. Abercromby, M. L. Gernhardt, and H. Litaker, "Desert Research and Technology
Studies (DRATS) 2009: A 14-day evaluation of the space exploration vehicle prototype in
a lunar analog environment," NASA Johnson Space Center, Houston, TX2012.
[19] NASA, "NextSTEP Phase 2 Habitat Ground Test & Analysis Protocol," NASA Johnson
Space Center, Houston, TX2018, Rev A.
36
Appendix B: Summary Design Guidelines
Table 4 summarizes the design guidelines provided in Section 4 and also links to the data products from the individual contractors (deidentified as contractor A, B, C, D, and E) from which the design guidelines were derived. Descriptions of the data products are provided
in Appendix A.3.
Table 4. Summary Design Guidelines
Design
Guideline # Design Guideline Supporting Data References
General Layout
1
Habitat layout can be more important than volume; i.e., a small volume that is
properly laid out can be more acceptable than a large volume that is poorly laid
out.
• Overall Acceptability → A, B, C, D, E
• General Layout Acceptability → A, B, C, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
2
Additional volume (provided it is properly laid out) can enable better separation of
functions to minimize interference between crewmembers, prevent cross-contamination, and provide more room for privacy and more separation for noise abatement.
• Overall Acceptability → A, B, D, E
• General Layout Acceptability → A, D
• Overall Capability Assessment → A, D
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, D, E
• AllTraq → A, B, C, D, E
3
Additional volume also enables the incorporation of duplicate functional areas,
which improves crew timeline efficiency and provides contingency options in the
event of hardware or subsystem failures.
• Overall Acceptability → A, D, E
• General Layout Acceptability → A, D
• Overall Capability Assessment → A, D
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, D, E
• AllTraq → A, B, C, D, E
37
Design
Guideline # Design Guideline Supporting Data References
4
Habitat layouts should separate “clean” and “dirty” functional areas. “Clean” areas include crew quarters, galley, and science and medical workspaces; “dirty” areas include the WCS, hygiene, and exercise spaces.
• Overall Acceptability → A, B, C, D, E
• General Layout Acceptability → A, B, C, D, E
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
5
Locating “dirty” areas near one another (e.g., a hygiene station next to an exercise
area) mitigates cross-contamination when crewmembers need to translate between
these areas.
• Overall Acceptability → A, B, C, D, E
• General Layout Acceptability → A, B, C, D, E
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
6
Strategically located floors, walls, pallets, and other barriers in the galleys, exercise, and WCS, hygiene, and medical areas can further mitigate cross-contamination risks.
• Overall Acceptability → A
• Galley Acceptability → A, B
• Exercise Acceptability → A, B
• WCS Acceptability → A, B, C, D, E
• Hygiene Acceptability → A, B, C, D, E
• Medical Acceptability → A, D
• Element Distribution → A
7 All areas of the habitat that must be cleaned should be easily accessible and have
smooth surfaces to facilitate easy cleaning.
• General Layout Acceptability → A, B, C, D
• Hygiene Acceptability → A, C,
• WCS Acceptability → C
• Exercise Acceptability → A, B, C, D, E
• Galley Acceptability → A, B, E
• Science Acceptability → D
8
All habitation and work areas should have sufficient, adjustable stability aids (e.g.,
hand-holds, foot restraints, and body restraints) and mobility aids (including an
adequate mounting structure) and temporary stowage accommodations (e.g., Velcro, bungees, nets, and caddies).
• General Layout Acceptability → A, B, C, E
• Stowage Acceptability → A, B, C, E
38
Design
Guideline # Design Guideline Supporting Data References
9
Specific stability/mobility aids and temporary stowage accommodations should be
dictated by the work functions to be performed in each area as well as the individual layouts of those areas.
• General Layout Acceptability → A, B, C, E
• Stowage Acceptability → A, B, C, D. E
• Crew Quarters Acceptability → A, B, C, D, E
• Hygiene Acceptability → A, B, C, D, E
• WCS Acceptability → A, B, C, D, E
• Exercise Acceptability → A, B, C, D, E
• Galley Acceptability → A, B, C, D, E
• MPWS Acceptability → A, B, C, D, E
• Science Acceptability → A, B, C, E
• Medical Acceptability → A, B, D, E
• Common Area Acceptability → A, D
• IFM Acceptability → A, B, C, E
• Radiation Shelter Acceptability → A, B
• Multipurpose Airlock Acceptability → C
10
The size and location of stability/mobility aids and temporary stowage accommodations should be customizable by individual crewmembers to accommodate individual anthropometrics.
• General Layout Acceptability → A, B, C, E
• Stowage Acceptability → A, B, C, D. E
• Crew Quarters Acceptability → A, B, C, D, E
• Hygiene Acceptability → A, B, C, D, E
• WCS Acceptability → A, B, C, D, E
• Exercise Acceptability → A, B, C, D, E
• Galley Acceptability → A, B, C, D, E
• MPWS Acceptability → A, B, C, D, E
• Science Acceptability → A, B, C, D, E
• Medical Acceptability → A, B, D, E
• Common Area Acceptability → A, D
• IFM Acceptability → A, B, C, E
• Radiation Shelter Acceptability → A, B
• Multipurpose Airlock Acceptability → C
11
Habitat layouts should support reconfigurability (i.e., the ability to move pallets,
payloads, and/or entire functional areas within each module or between modules)
to provide flexibility as the Gateway is assembled and as Gateway objectives and
mission durations change.
• Overall Acceptability → A, C
• Reconfiguration Acceptability→ E
• Capability Assessment (≤ 30 day) → B, C, E
• Capability Assessment (> 30 day) → B, C, E
12
A common secondary structure (e.g., mounting points, tracks, interfaces, fasteners, pip-pins) reduces the number of different tools needed on board and overall
crew overhead.
• Overall Acceptability → E
• IFM Acceptability → C, E
• Capability Assessment (≤ 30 days) → E
• Capability Assessment (> 30 days) → E
39
Design
Guideline # Design Guideline Supporting Data References
13 If deployable multipurpose work surfaces are used, they should be adjustable in
size/orientation and include attachment points that provide power and data ports.
• MPWS Acceptability → B, C, E
• Science Acceptability → B, C, E
• Medical Acceptability → B, C, E
• IFM Acceptability → A, B, C, E
14 A simple, clearly defined coding reference scheme should be implemented to locate items, allowing crewmembers to quickly and reliably locate logistics.
• Overall Acceptability → A, D
• Stowage Acceptability → A, D
15
At least one viewing window (not a virtual window) should be included to increase safety during robotics operations through direct visual situational and spatial awareness, to allow photography opportunities for science and public outreach, and to enhance crew morale.
• Overall Acceptability → A, B, C, D, E
• Exercise Acceptability → A, B, C
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
16 An omni-directional viewing window that can be relocated to different ports (e.g.,
as stack architecture evolves) is preferred over a permanent smaller window. • Overall Acceptability → A, B
Crew Quarters
17
Private quarters should be provided for each crewmember; for missions ≤ 30 days,
the crew quarters can be deployable; for missions > 30 days, crew quarters should
be permanent.
• General Layout Acceptability → D, E
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, D
• Pairwise Comparison (> 30 day)→ A, B, D
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, D, E
18 The crew quarters should be co-located with other “clean” areas of the habitat
(e.g., galley, science workspaces, and medical workspaces).
• Crew Quarters Acceptability → A, B, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, D, E
19 Each crew quarter should incorporate a rigid enclosure and a door.
• Overall Acceptability → A, D, E
• General Layout Acceptability → E
• Crew Quarters Acceptability → A
20 Each crew quarter should incorporate light and sound proofing. • Overall Acceptability → A, B, D
• Crew Quarters Acceptability → A, B, D
21 Each crew quarter should incorporate adjustable ventilation (adjustable airflow
speed and direction for personal preference and to mitigate CO2 buildup). • Crew Quarters Acceptability → A, D, E
22 Each crew quarter should incorporate caution and warning indicators (audible and
visual). • Crew Quarters Acceptability → A
23 Each crew quarter should incorporate power and data connections (for laptops,
tablets, task lighting, general charging). • Crew Quarters Acceptability → A, D
40
Design
Guideline # Design Guideline Supporting Data References
24 Each crew quarter should incorporate peripheral mounts (for laptops and tablets). • Crew Quarters Acceptability → A
25 Each crew quarter should incorporate customizable mood and spot lighting (relocatable, adjustable color/brightness).
• Crew Quarters Acceptability → A, B, D, E
• Capability Assessment→ ≤ 30 day → A, B, C, D, E
• Capability Assessment→ ≥ 30 day → A, B, C, D, E
• Pairwise comparison → A, B, D, E
26 Each crew quarter should incorporate flexible temporary stowage (e.g., Velcro,
bungees, nets, caddies).
• Crew Quarters Acceptability → A, B, D, E
• Capability Assessment (≤ 30 day) → A, B, D, E
• Capability Assessment (> 30 day) → A, B, D, E
• Pairwise comparison (≤ 30 day) → A, B, D, E
• Pairwise comparison (> 30 day) → A, B, D, E
27 Each crew quarter should incorporate adjustable sleeping bag positioning (both
orientation and location within the crew quarter). • Crew Quarters Acceptability → A, B, D, E
28 Each crew quarter should incorporate direct access to any additional personal
crew stowage lockers from within the crew quarters. • Crew Quarters Acceptability → A, D
29
Adjustable stability and translation aids should be provided to accommodate crew
activities, such as working on a laptop/tablet, changing clothes, reading, and
watching entertainment.
• Overall Acceptability → B, C, E
• General Layout Acceptability → B, E
30 Crew quarters dimensions should be at least 30” wide x 30” deep x 78” long.
• Overall Acceptability → D
• Crew Quarters Acceptability → B, D, E
• Capability Assessment (≤ 30 day) → A
• Capability Assessment (> 30 day) → A
Hygiene Stations
31 At least one dedicated, enclosed hygiene station, separate from other functional areas including the WCS and crew quarters, should be provided.
• Overall acceptability → A
• General Layout Acceptability → B, C
• Hygiene Acceptability → A, B, C, D, E
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise comparison (≤ 30 day) → A, B, C, D, E
• Pairwise comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
41
Design
Guideline # Design Guideline Supporting Data References
32
The hygiene station(s) should be co-located near other “dirty” areas in the habitat
(e.g., WCS and exercise); locating hygiene stations near exercise minimizes translation through clean areas of the habitat and thus decreases the risk of cross-contamination.
• Overall Acceptability → A
• General Layout Acceptability → B, D, E
• Hygiene Acceptability → A, C, D, E
• Capability Assessment (≤ 30 day) → A, B, D, E
• Capability Assessment (≥ 30 day) → A, B, D
• Overall Capability Assessment → A, D
• Pairwise comparison (≤ 30 day) → A, D, E
• Pairwise comparison (> 30 day) → A, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
33 Each hygiene station should be permanent, private, easy to clean, and sufficiently
ventilated
• Overall Acceptability → A, D
• General Layout Acceptability → C, D
• Hygiene Acceptability → A, C, D
• Crew Quarters Acceptability → B
• Capability Assessment (≤ 30 day) → A, B, C, D
• Capability Assessment (> 30 day) → A, B, C, D
• Pairwise comparison (≤ 30 day) → A, B, C, D
• Pairwise comparison (> 30 day) → A, B, C, D
• Element Distribution → A, B, C, D
• AllTraq → A, B, C, D, E
34
The hygiene enclosure should have rigid walls and door, and surfaces should be
slick, smooth, and non-porous surfaces to repel water, facilitate easy cleaning, and
prevent bacterial growth.
• General Layout Acceptability → C
• Hygiene Acceptability → A, C
• Element Distribution → A, B, C, D, E
35 To ensure privacy, the hygiene enclosure door should be securable to prevent it
from inadvertent opening if bumped.
• Overall Acceptability → A, C, D
• Hygiene Acceptability → A, C, D
• Capability Assessment (≤ 30 day) → E
• Element Distribution → A, B, D
36 The hygiene station should have adjustable stability aids for body, hands, and feet.
• Overall Acceptability → A
• General Layout Acceptability → A, C, E
• Hygiene Acceptability→ A, E
• WCS Acceptability→ C, E
• IFM Acceptability→ C
37 The hygiene station should have temporary stowage accommodations (e.g., to include cleanable and removable caddies for stowage of shampoo, soap, etc.).
• Overall Acceptability → A, D
• General Layout Acceptability → A, C, D
• Hygiene Acceptability → A, C, D, E
• WCS Acceptability→ C, E
• Capability Assessment (≤ 30 day) → A, C, D, E
• Capability Assessment (> 30 day) → A, C, D, E
42
Design
Guideline # Design Guideline Supporting Data References
38
Long-term stowage of hygiene-related items should be available outside of the hygiene station to prevent cross-contamination and facilitate cleaning of the interior
of the hygiene station.
• Overall Acceptability → A, D
• General Layout Acceptability → A, D
• Hygiene Acceptability → A, D
• Stowage Acceptability→ A, D
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, C, D
• Pairwise Comparison (> 30 day) → A, C, D
• Element Distribution → A, C, D
39
The volume should provide adequate space for body movements and positions required during showering, changing clothes, and be tall enough to accommodate
crewmembers with long hair (note that long hair floats in 0g and should not contact
the enclosure during washing).
• Overall Acceptability → A, D
• General Layout Acceptability → E
• Hygiene Acceptability → A, B, D, E
• Capability Assessment (≤ 30 day) → A, C, D
• Overall Capability Assessment → A, D
• Element Distribution → A, B, C, D, E
• AllTraq → E
40 Hygiene station dimensions should be at least 45” wide x 30” deep by 78” tall; a
portion of the station can be deployable to achieve this size.
• Overall Acceptability → A
• Hygiene Acceptability → A, C, E
• WCS Acceptability→ C, E
• Capability Assessment (≤ 30 day) → A
• Element Distribution → A, C
WCS Stations
41 At least one private, dedicated WCS separate from Orion should be provided.
• Overall acceptability → A, C, D
• General Layout Acceptability → B, C
• WCS Acceptability → A, B, C, D, E
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
43
Design
Guideline # Design Guideline Supporting Data References
42 The WCS(s) should be co-located with other “dirty” functions in the habitat.
• Overall Acceptability → A, C, D
• General Layout Acceptability → A, B, C, D, E
• WCS Acceptability → A, C, D, E
• Hygiene Acceptability → A, B, C, D, E
• Galley Acceptability → C
• Crew Quarters Acceptability → B
• IFM Acceptability → C
• Science Workspaces Acceptability → C
• Overall Capability Assessment → A, D
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, D, E
• Pairwise Comparison (> 30 day) → A, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
43 Each WCS should be permanent, private, easy-to-clean, well ventilated, and separate from the hygiene station.
• Overall acceptability → A, C, D
• General Layout Acceptability → B, C
• WCS Acceptability → A, B, C, D, E
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
44
The WCS enclosure should have rigid walls and a door, and surfaces should be
slick, smooth, and non-porous to repel water, facilitate easy cleaning, and prevent
mold growth.
• General Layout Acceptability → C
• Hygiene Acceptability → A, C
• Element Distribution → A, B, C, D, E
45 To ensure privacy, the WCS station door should be securable to prevent it from
inadvertent opening if bumped.
• Overall Acceptability → A, C, D
• Hygiene Acceptability → A, C, D
• Capability Assessment ( ≤ 30 day) → E
• Element Distribution → A, B, D
46 The WCS enclosure should provide sound abatement. • Overall acceptability → A, D
• WCS Acceptability → D
47
The WCS should be appropriately located within the WCS enclosure to enable adequate space to position the body during WCS operations, as well as sufficient space
to access all sides when conducting maintenance.
• WCS Acceptability → A, C
44
Design
Guideline # Design Guideline Supporting Data References
48 Adjustable stability aids for hands and feet should be provided in front and to the
sides of the WCS itself.
• General Layout Acceptability → C, D, E
• WCS Acceptability → C
• IFM Acceptability → C
49
Temporary stowage accommodations should be provided for items such as toilet
supplies and urine funnels and should be easily reachable while performing WCS
operations.
• Overall Acceptability → A, B, D
• General Layout Acceptability → A, B, C, D, E
• WCS Acceptability→ A, C, D, E
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
50
Separate, long-term storage of WCS wet trash and waste should be provided within
the WCS enclosure or in a temporary canister that is then combined with all wet
trash and stowed elsewhere; this stowage should be vented directly into the trace
contaminant control system (TCCS) to catalyze and absorb odors, rather than allowing odors to leak into the cabin atmosphere.
• General Layout Acceptability → A
• WCS Acceptability → A
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
51 The enclosure should have adjustable task lighting to assist crewmembers during
cleaning, maintenance, and servicing.
• WCS Acceptability → A, D, E
• Capability Assessment (≤ 30 day) → A, D
• Capability Assessment (> 30 day) → A, D
52 WCS compartment dimensions should be at least 40” wide x 30” deep and 78” tall. • WCS Acceptability → A, B, C, D, E
Exercise
53
For missions ≤ 30 days, a deployable exercise device is acceptable, provided adequate volume is available to perform all required exercises and operation does not
interfere with other crewmember activities.
• Capability Assessment (≤ 30 day) → A, B, C, D, E
54 For missions > 30 days, the exercise equipment should be permanently installed in
a dedicated area to avoid setup and stow before and after each use. • Capability Assessment (> 30 day) → A, B, C, D, E
45
Design
Guideline # Design Guideline Supporting Data References
55
The exercise station should be located in close proximity to other “dirty” areas of
the habitat; e.g., positioning the exercise station near a hygiene station reduces the
distance crewmembers need to translate to clean up after exercising, thereby reducing the risk of cross-contamination within the habitat.
• Overall acceptability → A, C
• General Layout Acceptability → A, B, C, D, E
• Exercise Acceptability → A, B, C, D, E
• Hygiene Acceptability → A, E
• Galley Acceptability → C
• Crew Quarters Acceptability → B
• Radiation Shelter Acceptability → B
• IFM Acceptability → C
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
56 Adequate ventilation should be provided in the exercise area to prevent CO2
buildup. • Exercise Acceptability → D
57
Temporary stowage accommodations, adjustable mounts, and power connections
for exercise gear, a water bag, towel, laptop or tablet, and personal electronics
should be provided within in reach and view of the exercise equipment.
• Exercise Acceptability → A, D, E
58 A window near the exercise area could provide for external viewing during exercise. • Exercise Acceptability → B
59
The dimensions of the exercise area are dependent on the flight exercise equipment
and exercise protocol, but should accommodate full range of motion for the tallest
crewmembers for all exercises.
• Exercise Acceptability → A, B, C, D, E
Galley & Galley Table
60 An additional galley separate from Orion should be provided for missions of any
duration.
• Galley Acceptability → A, B, C, D, E
• Overall Capability Assessment → D
• Capability Assessment (≤ 30 day) → A, B, C, D
• Capability Assessment (> 30 day) → A, B, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, C, D, E
• AllTraq → A, B, C, D, E
46
Design
Guideline # Design Guideline Supporting Data References
61 The galley should be located near other “clean” areas of the habitat and be separated from “dirty” areas to prevent cross-contamination.
• Galley Acceptability → A, B, C, D, E
• General Layout Acceptability → A, B, D, E
• Capability Assessment (≤ 30 day) → A, B, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
62 For mission durations ≤ 30 days, a minimal galley that includes a potable water
dispenser (PWD) and possibly a food warmer is sufficient. • Capability Assessment (≤ 30 day) → A, B, C, D, E
63
For mission durations > 30 days, additional galley features are appreciated, such
as hot and cold PWDs, food warmers, cold storage, local stowage for one week’s
worth of food, and a galley table large enough for all crew to gather together to eat
a meal.
• Capability Assessment (≤ 30 day) → A, B, C, D, E
64 Simple PWD interfaces should be used (e.g., the needle-captured septum used in
previous spacecraft including the Space Shuttle and ISS). • Galley Acceptability → A, C
65 Food warming systems should incorporate swing-open doors rather than long pullout drawers, which require additional space and stability aids to access. • Galley Acceptability → A
66
Local food stowage should be near the galley and readily accessible while the
PWDs and food warmers are being used and while other crewmembers are gathered at the table.
• Galley Acceptability → A, B, C, D, E
67
A galley table should be no smaller than that provided on the ISS (e.g., at least
22” wide x 50” long when fully extended) allowing all crewmembers to gather
and eat together.
• Galley Acceptability → A, B, C, D
• AllTraq → A, B, C, D, E
68
The galley table should be located in an area that does not interfere with other critical workspaces (e.g., it should not inhibit access to a multipurpose workstation
used for critical commanding).
• Galley Acceptability → A, B, C, D, E
• General Layout Acceptability → B, D
• Overall Capability Assessment→ A, D
• Capability Assessment (≤ 30 day) → A
• Capability Assessment (> 30 day) → A
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
69 The galley table may be deployable and adjustable in size (e.g., foldout leafs). • Galley Acceptability → B, E
70 Stability aids should be provided that enable use of all galley functions and to enable all crew to “sit” at the table.
• Galley Acceptability → A, B, C, D, E
• General Layout Acceptability → A, C, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
71
Sufficient local temporary stowage should be provided to accommodate meal
preparation and consumption and should include the ability to stow multiple small
items, such as condiments, food packets, and utensils.
• Galley Acceptability → A, B, C, D, E
• Capability Assessment (≤ 30 day) → A
• Capability Assessment (> 30 day) → A
• Element Distribution → A, B, C, D, E
47
Design
Guideline # Design Guideline Supporting Data References
72
Separate wet and dry trash stowage should be provided in or near the galley; this
could be implemented by attaching trash bags directly to the galley table (e.g., as
is done to the handrails along the ISS galley table).
• Galley Acceptability → A, B, C, D, E
• General Layout Acceptability → C
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
73
If the galley table is also used as a common gathering area for crewmembers to
perform work or for entertainment, it should provide easily accessibly power/data
connections and mounts (e.g., for lap-tops, tablets, task lighting, etc.).
• Galley Acceptability → D
• AllTraq → A, B, C, D, E
74 All galley surfaces should be easily cleanable. • Element Distribution → A, B, C, D, E
• AllTraq → A, B, C, D, E
Trash Management
75 Wet and dry trash should be collected and stowed separately.
• General Layout Acceptability → A, B, C, D, E
• Hygiene Acceptability → A, D
• WCS Acceptability → A, D
• Galley Acceptability → A, B, C, D
• Stowage Acceptability → C
• Medical Workspaces Acceptability → A
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
76 Wet and dry trash containers should be provided near areas where trash is generated
so that it does not have to be translated large distances.
• General Layout Acceptability → A, B, C, D, E
• Hygiene Acceptability → A, D
• WCS Acceptability → A, D
• Galley Acceptability → A, B, C, D
• Medical Workspaces Acceptability → A, D
48
Design
Guideline # Design Guideline Supporting Data References
77 Routine trash management should be a timelined activity and should include trash
consolidation and movement to long-term stowage locations.
• General Layout Acceptability → A, B, C, D, E
• Hygiene Acceptability → A, B, D, E
• WCS Acceptability → A, B, D, E
• Science Workspaces Acceptability → A, D, E
• Galley Acceptability → A, B, C, D, E
• Medical Workspaces Acceptability → A, D
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (>30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
78 Dedicated accommodations should be made for the storage of biological waste
(non-WCS) and sharps (e.g., needles, catheters) to prevent exposure to biohazards. • Medical Acceptability → A
79
If trash needs to be stowed long-term, it should be located outside of the main habitation areas (e.g., inside a rarely-used logistics module); long-term stowage of
WCS waste and wet trash should be vented directly into the TCCS to absorb and
catalyze odors rather than allowing odors to leak into the cabin atmosphere.
• General Layout Acceptability → A, C, D, E
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (>30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
80 A method of removing trash from Gateway at least every 30-days (e.g., via a trash
ejection capability) should be provided.
• Trash Management Acceptability → B
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
81 A volume of approximately 36 ft3 is needed to store a typical 30 day mission’s worth
of trash.
• General Layout Acceptability → A, B, C, D, E
• Trash Management Acceptability → B
• Capability Assessment (≤ 30 day) → A, B, C, D, E
• Capability Assessment (> 30 day) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
Multipurpose Workstations
82 At least one hardwired multipurpose workstation must be provided to ensure reliable critical commanding.
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
83 A second hardwired multipurpose workstation can be provided for redundancy
and to accommodate parallel operations.
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
84 Wireless workstations or tablets are acceptable for monitoring and status checks
only. • MPWS Acceptability → E
49
Design
Guideline # Design Guideline Supporting Data References
85 Critical commanding workstations should not be blocked at any time. • MPWS Acceptability → C, E
86
Workstations should be positioned away from heavy traffic/high-use areas to
avoid inadvertent interference by other crewmembers translating nearby or conducting other tasks.
• MPWS Acceptability → C, E
87
Workstation monitors and hand controllers should be adjustable, in both the vertical and depth directions and in tilt, to accommodate variability in crew height and
ergonomic preferences as well as right and left-handedness; adjustments should be
easy, quick, and require no tools.
• MPWS Acceptability → A, B, C, D, E
88
Adjustable foot restraints should be provided to allow the crewmember to effectively and comfortably position themselves in relation to displays, keyboards, and
hand controllers; handholds, adjustable arm rests, and body restraints may be
needed for additional stability during delicate hand controller inputs.
• MPWS Acceptability → A, B, C, D
89
Separate translational and rotational hand controllers should be used; each controller should have stick forces that enable precise inputs and an easily identifiable
central detent that provides no input.
• MPWS Acceptability → A, B, C, D
90
If touchscreen workstation displays are used, the touchscreen should include a
locking feature; when this feature is unlocked, a firm touch input should be required to prevent inadvertent commands if a crewmember accidently brushes
against the screen.
• MPWS Acceptability → A, C
91
Critical functions accessed through a touchscreen should have a manual back-up
method (e.g., bezel buttons, keyboard inputs, mouse inputs) ensuring these functions are always available in the event that the touchscreen capability malfunctions.
• MPWS Acceptability → C
92
For all inputs, regardless of whether they are provided via touchscreen, bezel button, keyboard or mouse, immediate feedback (e.g., visual, audible, and/or tactile
indicators) should be given that the input has been accepted to avoid crewmembers from inadvertently inputting multiple commands. Any lag between input and
execution of a command should be minimized.
• MPWS Acceptability → C
93
Small work surfaces, mounts, and temporary stowage accommodations (e.g. Velcro, bungees, nets, pockets, etc.) for checklists, notebooks, laptops, and tablets
should be provided near multipurpose workstations.
• MPWS Acceptability → A, B
94 Power and data connections for laptops, tablets, and task lighting should be provided in all multipurpose workstations. • MPWS Acceptability → A
Dedicated Science Workspaces and Surfaces
50
Design
Guideline # Design Guideline Supporting Data References
95 Dedicated science workspaces and surfaces are not required if sufficient multipurpose workspaces and surfaces are provided.
• Science Acceptability → B, C, E
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
96 If dedicated science workspaces and surfaces are not included, at least one multipurpose work area should be available for science for missions of any duration. • Science Acceptability → B, C, E
97 Multiple multipurpose work areas should be provided for longer duration missions
to allow for parallel science and/or medical tasks.
• Science Acceptability → B, C, E
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, D, E
98
Workspaces and surfaces used for science should be grouped with other “clean”
areas to mitigate risks of cross-contamination from “dirty” areas. Note that some
science tasks could be considered “dirty” (e.g., animal-based research experiments),
and these tasks should be able to be isolated within the science work area (e.g.,
inside a glovebox that can be thoroughly cleaned).
• Overall Acceptability → A, B, C, D, E
• General Layout Acceptability → A, B, C, D, E
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
99
Science work surfaces could be deployable as long as proper interfaces to secure
them are provided, including e.g., standoffs that can accommodate vertical loads on
the surface.
• Science Acceptability → B, E
100 Science work surfaces can be adjustable in size (e.g.; quarter, half, and full size to
accommodate different needs). • Science Acceptability → B, C, E
101 Workspaces that accommodate science should have smooth, non-porous surfaces
that repel liquids for ease of cleaning. • Science Acceptability → A
102
Adjustable stability aids (i.e., foot restraints and handrails) should be provided to
allow different sized crewmembers to appropriately position themselves in relation
to the work area.
• Science Acceptability → A, C, D
103
Temporary stowage (e.g., Velcro, bungees, pockets, caddies) should be available at
the workspaces to accommodate the anticipated science tools and instruments, including various small items.
• Science Acceptability → A, C
104 Power and data connections and adjustable mounts and for laptops, tablets, task
lights, and science equipment should also be provided. • Science Acceptability → A, B, C, D, E
Glovebox
51
Design
Guideline # Design Guideline Supporting Data References
105 If a glovebox is used for science and operations (e.g., maintenance) tasks, it should
be able to be thoroughly cleaned.
106
A glovebox does not need to be permanently deployed unless it will be used regularly (e.g., at least once per week); it could be deployed in a multipurpose work area
when needed and stored in a logistics module when not in use to allow the volume
otherwise dedicated for a glovebox to be allocated to other, higher priority functions.
• Science Acceptability → A, B, C, E
107 The area around an installed glovebox should allow access to all glove ports. • Science Acceptability → C
108 A glovebox should have nearby work surfaces, mounts, and data connections for
tablets, laptops, and notebooks. • Science Acceptability → A, B, C, D. E
109
Adjustable stability aids (e.g., foot and body restraints) should be provided near the
glovebox allowing the installed height of the glovebox to accommodate a range of
crew heights and arm lengths.
• Science Acceptability → A, B, C, D, E
110
Reach access within the glovebox should account for a range of crew anthropometrics; all locations inside the glovebox should be reachable, including the back and
side walls, airlock access port, instruments (e.g., microscope), and tools.
• Science Acceptability → A
111
Power/data connections, adjustable lighting and temporary stowage accommodations for tools, samples, equipment, etc., should be provided both inside and outside
the glovebox.
• Science Acceptability → A
112
A glovebox may need to accommodate an ultraviolet bulb to assist in sterilizing,
viewing reagents, etc., and an ultra-pure water source for molecular and/or biomedical work.
• Science Acceptability → D
Dedicated Medical Workspaces and Surfaces
113
Dedicated medical workspaces and surfaces for crew medical diagnostics and
treatment (not medical science research) are not required if sufficient multipurpose work areas are provided.
• Medical Acceptability → B, C, E
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
114
If dedicated medical workspaces and surfaces are not included, at least one multipurpose work surface should be available for medical use for missions of any duration.
• Medical Acceptability → B, C, E
115 Multiple multipurpose work areas should be provided for longer duration missions
to enable parallel science and/or medical tasks.
• Medical Acceptability → B, C, E
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, D, E
52
Design
Guideline # Design Guideline Supporting Data References
116
Workspaces used for medical tasks should be grouped with other “clean” areas of
the habitat to mitigate risks of cross-contamination from “dirty” areas (e.g., exercise, WCS, hygiene).
• Overall Acceptability → A, B, C, D, E
• General Layout Acceptability → A, B, C, D, E
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• Element Distribution → A, B, C, D, E
117
At least one multipurpose workspace should allow a patient to be restrained to a
surface with enough space for one other crewmember to access the patient from
all sides.
• Medical Acceptability → A, B, C, D, E
118
Adjustable stability aids (e.g., foot restraints and handrails) should be provided
around the patient to enable non-patient crewmembers to conduct medical care,
including CPR.
• Medical Acceptability → A, D
119 Workspaces that accommodate medical tasks should have smooth, non-porous
surfaces that repel liquids for ease of cleaning. • Medical Acceptability → A
120 Temporary stowage (e.g., Velcro, bungees, pockets, caddies) should be available
and accommodate all expected medical tools and instruments. • Medical Acceptability → A, B, C, D, E
121 Separate wet and dry trash receptacles, sharps containers, and biohazard bags
should be located in the medical workspace and near the patient. • Medical Acceptability → A
122 Power and data connections and adjustable mounts for laptops, tablets, task lights,
and medical equipment should be provided. • Medical Acceptability → A, B, D
Crew Common Area
123 A crew common area that is large enough for all crewmembers to gather together
provides positive benefits for individual and team morale.
• Galley Acceptability → A, B, D, E
• Common Area Acceptability → A
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
• AllTraq → A, B, C, D, E
124 A crew common area could be integrated into other areas (e.g., the galley table) or
could have its own dedicated volume if space is available.
• Galley Acceptability → A, B, D, E
• Common Area Acceptability → A
125
Large, high-resolution viewing screens in a crew common area could be used for
planning meetings, videoconferencing, public outreach, press conferences, displaying external Gateway cameras views (which could provide a psychological
benefit, but are not a substitute for windows), and entertainment (e.g., watching
movies).
• Galley Acceptability → D
• Common Area Acceptability → A
126 Crew common areas should have power/data connections and adjustable mounts
(for viewing screens, additional lighting, laptops, tablets, etc.).
• Galley Acceptability → D
• Common Area Acceptability → A
53
Design
Guideline # Design Guideline Supporting Data References
127 Adjustable stability aids should be available in crew common areas to allow crewmembers to view the screens and interact with each other.
• Galley Acceptability → A, D
• Common Area Acceptability → A
128
All lights in areas adjacent to the common area should be adjustable (including an
option to turn them off) to avoid glare and unwanted reflections on viewing
screens.
• Common Area Acceptability → A
Logistics Stowage and Location Referencing
129
The habitat should have dedicated stowage for approximately one week’s worth of
consumables (approximately 85-95 ft3 for food and clothes), frequently used items,
and critical spares; the remaining logistics should be stowed in the logistics module
thereby freeing up space in the main habitat for other habitation and work systems.
• Stowage Acceptability → B, C, D, E
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
130
One week’s worth of consumables, frequently used items, and spares stowed in the
habitat should be located close to the areas in which they will be used (e.g., food
should be stored near the galley).
• Stowage Acceptability → B, C, D, E
• Hygiene Acceptability → C, D
• WCS Acceptability → A, B, C, D, E
• Exercise Acceptability → A, B, C, D, E
• Galley Acceptability → B, C, D, E
• Science Acceptability → A, B, C, D, E
131
Cargo transfer bags (CTBs) should be stored no more than one layer deep for easy
identification and retrieval; if accessible from both sides, CTBs can be stored 2 layers deep.
• Stowage Acceptability → A, C, D
132 CTBs with transparent sides would ensure that the contents are easily verified while
stowed and when retrieved. • Stowage Acceptability → A, C, D
133
CTBs can be held in their respective volumes with cross-over elastic straps or
bungee cords that keep bags in place but can also be individually removed to access
specific items; elastic straps or bungees are preferred over large cargo nets, which
make it difficult to access individual bags without unstowing others.
• Stowage Acceptability → A, C, D
134
A stowage tracking system (e.g., radio-frequency identification [RFID], scanner,
camera, etc.) as well as a clear and concise location coding scheme should be implanted to assist crewmembers in locating logistics.
• Stowage Acceptability → A, D
135
The location coding scheme should include a definitive grid (i.e., radial, horizontal/vertical) that uses simple letters and/or numbers; colors or icons can also be included for simplicity.
• Stowage Acceptability → A, D
136 The same location coding scheme should apply to all equipment and all possible
work and habitation areas. • Stowage Acceptability → D
137 The coding scheme should be labeled throughout the habitat modules in multiple
areas, so it is easy to see from any location within each module. • Stowage Acceptability → E
138 Stowage bags/containers should have a clear, concise numbering scheme with labels that are visible on all sides while the bags are in their stowage location. • Stowage Acceptability → A, C, D
54
Design
Guideline # Design Guideline Supporting Data References
139 There should be a sufficient number of temporary stowage accommodations in all
areas and surfaces of habitat (e.g., Velcro, bungees, tethers, caddies, etc.). • Stowage Acceptability → A, C
140
Temporary stowage staging areas should be located near the hatches for cargo
bags being transferred from and to visiting vehicles as they arrive and depart the
Gateway.
• Stowage Acceptability → A
Lighting
141 Habitat lighting should incorporate both general and task (i.e., spot) lighting in all
habitable volumes
Crew Quarters Acceptability → A, B, C, D, E
Hygiene Acceptability → A,
WCS Acceptability → A, D
Science Acceptability → A, B, C, D, E
Medical Acceptability → A
Common Area Acceptability → A, D
IFM Acceptability → A, B, C, D, E
142
Bright general overhead lighting in each module and functional area should help
crewmembers orient themselves to the associated work area (i.e., in the headsup/nadir-zenith direction).
• Overall Acceptability → A
143 Private crew quarters should have an option to completely darken the inside. • Crew Quarters Acceptability → A, B, D, E
144 Automatic or manual circadian lighting to facilitate day/night cycles may benefit
the health and performance of some crewmembers.
• Capability Assessment (≤ 30 days) → A, B, C, D, E
• Capability Assessment (> 30 days) → A, B, C, D, E
• Pairwise Comparison (≤ 30 day) → A, B, C, D, E
• Pairwise Comparison (> 30 day) → A, B, C, D, E
145 Caution and warning lighting, paired with audible indicators, should be provided
throughout the habitat.
• Crew Quarters Acceptability → A
• IFM Acceptability → B
• Fire Emergency Acceptability → B
146 A “smart” subsystem caution and warning indicator lighting system could be employed so that crewmembers can readily distinguish subsystem failures.
• IFM Acceptability → A, B
• Fire Emergency Acceptability → B
147 In cases where an emergency evacuation is necessary, translation path lighting
should lead the way to Orion. • IFM Acceptability → A, B
In-Flight Maintenance
148 Habitat designs should enable simple and efficient in-flight maintenance (IFM). • IFM Acceptability → A, B, C, D, E
• Overall Capability Assessment → A, D
149
All subsystems that may need IFM should have adequate access to replace components, including for mating/demating power, and to access data, and fluids interfaces.
• General Layout Acceptability → B, C, D
• IFM Acceptability → A, B, C, D, E
• Overall Capability Assessment → A, D
150
Where needed, methods that enable access to all sides of subsystems should be
implemented (e.g., “drawers” that allow pallets to first be pulled out and then rotated for better access).
• IFM Acceptability → D
• Overall Capability Assessment → A, D
55
Design
Guideline # Design Guideline Supporting Data References
151 Common tool kits and/or tool-less interfaces minimize the tools required on board
and can make IFM more time efficient. • IFM Acceptability → A, B, C, D, E
152
Dedicated subsystem IFM kits will reduce the time needed to gather supplies; this
is particularly important for time-sensitive maintenance tasks, such as pressure
vessel leaks.
• IFM Acceptability → A
• AllTraq → A
153
The operator performing a maintenance task should be able to view all fasteners,
holes and interfaces (i.e., eliminate blind mating); there should be no spurious
holes nearby intended fastener holes.
• IFM Acceptability → C
154
Common relocatable multipurpose work surfaces with movable temporary stowage that can be affixed where needed during maintenance tasks should be provided.
• IFM Acceptability → A, B, C, D, E
155
A deployable multipurpose temporary stowage caddy with elastic pouches, Velcro, etc. that is independent of the work surface itself could provide movable temporary stowage and better accommodate tools, parts, and equipment.
• IFM Acceptability → A, B, C, D, E
156
Mobile and adjustable stability aids (i.e., hand and foot restraints) and task lighting are also required; these should be able to be secured wherever maintenance is
needed.
• IFM Acceptability → A, B, C, D, E
Radiation Protection
157 A radiation shelter does not need to be permanently deployed within the habitat. • Radiation Shelter Acceptability → A, B
158
If a radiation shelter is constructed when needed, all necessary components (e.g.,
water tiles, compacted trash tiles) should be easy to identify and have simple construction plans that clearly denote where each component is to be placed.
• Radiation Shelter Acceptability → A
159
Since radiation events may last for several days, essential habitation and operations
functions (e.g., the ability to eat, sleep, perform basic hygiene and WCS ops, and
conduct critical commanding) must be provided and accessed within the shelter; if
any of these are not possible, the radiation shelter should be constructed in close
proximity to these functions to limit the amount of time that crewmembers must be
outside of the shelter (e.g., a single exit/entry point with direct access to the WCS).
• Radiation Shelter Acceptability → A
160
The shelter should contain ventilation, power and data connectivity (e.g., for lighting and laptops/tablets, including a hardwired monitoring/commanding interface),
methods for securing sleeping bags, and temporary stowage accommodations.
• Radiation Shelter Acceptability → A
161 Privacy barriers (e.g., curtain, door) within the shelter should be provided where
crewmembers can perform tasks such as changing clothes. • Radiation Shelter Acceptability → A
Multipurpose Airlocks
162 Modules may be designed to provide both habitation functions (e.g., exercise and
science) and to serve as an airlock for EVA.
• Overall Acceptability → C
• General Layout Acceptability → C
• Multipurpose Airlock Acceptability → C
56
Design
Guideline # Design Guideline Supporting Data References
163
Airlocks for EVA should be designed to have both an equipment lock (where
EVA preparation and post activities occur) and a crew lock (where suited crewmembers egress and ingress the spacecraft).
• Multipurpose Airlock Acceptability → C
164
Nominally the equipment lock does not go to vacuum, but it could be necessary if
the interior crew lock hatch fails to seal. Thus, habitation-related equipment in the
equipment lock that cannot tolerate a vacuum must be moved to other modules
during EVA preparation activities.
• General Layout Acceptability → C
• Multipurpose Airlock Acceptability → C
165
Sufficient volume and stability aids must be provided in the equipment lock to
mount 2 EVA suits and to allow up to 4 crewmembers to work on and around
them simultaneously.
• Multipurpose Airlock Acceptability → C
166
The suits should be accessible in the equipment lock for donning (upward through
a hard upper torso or through a rear-entry hatch) and mounting of all necessary
EVA tools and equipment on the suits.
• Multipurpose Airlock Acceptability → C
167
Stowage volume and accommodations (permanent and temporary) in the equipment lock should accommodate all necessary EVA tools, equipment, suits, and
umbilicals.
• Multipurpose Airlock Acceptability → C
168 Umbilicals must be long enough to reach from the interior of the crew lock to any
location in the equipment lock. • Multipurpose Airlock Acceptability → C
169
Any permanent (e.g., lockers) or temporary stowage (e.g., Velcro, bungees) accommodations in the equipment lock must accommodate suit servicing kits, crew
preference items, tools, etc., during EVA prep and post operations.
• Multipurpose Airlock Acceptability → C
170 Crew lock umbilical interfaces and restraint designs currently in use on ISS should
be provided. • Multipurpose Airlock Acceptability → C
`.trim()
