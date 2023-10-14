//The entities and attributes are:
Gymnasium: gymnasium_id, Gymnasium_name, Gymnasium_address, Gymnasium_phoneNumber;
Member:    member_id, member_name, member_dateOfBirth, Member_address, Member_gender;
Session:   session_type, session_time, session_numberOfMember, session_coachName;
coach:     coach_name, coach_age, coach_typeOfSession;

//Then,
//Relationships between the entities
Registration    //Connects members to a specific gymnasium
member_session  //Connects members to sessions
coach_session   //Connects coaches to sessions


