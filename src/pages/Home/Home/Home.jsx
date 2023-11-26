import Banner from "../../../components/Banner/Banner";
import AddTeacher from "../AddTeacher/AddTeacher";
import Partner from "../Partner/Partner";
import UpcomingCourse from "../UpcomingCourse/UpcomingCourse";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <UpcomingCourse></UpcomingCourse>
            <AddTeacher></AddTeacher>
        </div>
    );
};

export default Home;