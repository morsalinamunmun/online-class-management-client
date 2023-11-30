import Banner from "../../../components/Banner/Banner";
import AddTeacher from "../AddTeacher/AddTeacher";
import CardItem from "../Card/Card";
import Partner from "../Partner/Partner";
import Subscribe from "../Subscribe/Subscribe";
import UpcomingCourse from "../UpcomingCourse/UpcomingCourse";
import UserCount from "../UserCount/UserCount";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <CardItem></CardItem>
            <UserCount></UserCount>
            <AddTeacher></AddTeacher>
            <UpcomingCourse></UpcomingCourse>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;