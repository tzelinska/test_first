let userType = "subscriber";
let userCategory;
switch (userType) {
    case "employee":
        userCategory = "As an Employee you are authorized to have access to Dietary Services";
        break;
    case "member":
        userCategory = "As an Enrolled Member you are authorized to have access to Dietary Services and one-on-one interaction with a dietician";
        break;
    case "subscriber":
        userCategory = "You are authorized to have partial access to facilitate Dietary Services";
        break;
    default:
        userCategory = "As a Non Subscriber you need to enroll or at least subscribe first to avail this facility";
}
console.log("User Category:", userCategory);