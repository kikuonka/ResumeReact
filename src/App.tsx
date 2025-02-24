import "./App.css";
import HeaderResume from "./components/Header";
import AboutResume from "./components/About";
import PurposeResume from "./components/Purpose";
import EducationResume from "./components/Education";
import SkillsResume from "./components/Skills";
import Profile from "./components/Profile";

function App() {
    return (
        <>
            <div className="main-container">
                <div className="header-container">
                    <HeaderResume />
                </div>
                <div className="about-container">
                    <AboutResume />
                    <Profile />
                </div>
                <div>
                    <PurposeResume />
                </div>
                <div>
                    <EducationResume />
                </div>
                <div>
                    <SkillsResume />
                </div>
            </div>
        </>
    );
};

export default App
