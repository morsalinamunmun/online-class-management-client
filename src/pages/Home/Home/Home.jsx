import Banner from "../../../components/Banner/Banner";
import AddTeacher from "../AddTeacher/AddTeacher";
import Partner from "../Partner/Partner";
import UpcomingCourse from "../UpcomingCourse/UpcomingCourse";
import UserCount from "../UserCount/UserCount";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <UpcomingCourse></UpcomingCourse>
            <UserCount></UserCount>
            <AddTeacher></AddTeacher>
        </div>
    );
};

export default Home;