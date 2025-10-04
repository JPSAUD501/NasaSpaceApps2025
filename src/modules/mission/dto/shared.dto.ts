import { z } from 'zod'

export const ModuleTypes = z.enum(['private_crew_quarters', 'common_kitchen_and_mess', 'work_command_station', 'multipurpose_science_medical_area', 'dedicated_storage_logistics', 'radiation_shelter', 'dedicated_wcs', 'full_hygiene_station', 'permanent_exercise_area'])
