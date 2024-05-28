import Main from "./components/pages/main";
import AboutUs from "./components/pages/aboutUs";
import AboutCourse from "./components/pages/aboutCourse";
import Test from "./components/pages/test";
import Navbar from "./components/navbar/navbar";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModalNavbar from "./components/navbar/modal";
import Login from "./components/LogIn/loginForm";
import { useLocation } from "react-router-dom";
import RedNav from "./components/navbar/redNavbar";
import SingUp from "./components/singUp/singUp";
import { FullLesson } from "./components/lessons/FullLesson";
import Resources from "./components/lessons/Resources";
import Less from "./components/lessons/LessonOptions";
import ResultCourse from "./components/lessons/ResultCourse.js";
import PrivateRoutes from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth, selectResult } from "./redux/slices/auth";
import Questions from "./components/BeginnTest/Questions";
import BeginTest from "./components/BeginnTest/BeginnTest";
import { fetchTest } from "./redux/slices/lessons";
import Page404 from "./components/pages/Page404";
import LessonOptions from "./components/lessons/LessonOptions";
import MainCoursePage from "./components/pages/MainCoursePage";
import Profile from "./components/pages/Profile";

function App() {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe());
    dispatch(fetchTest());
  }, []);
  const resultTest = useSelector(selectResult);

  return (
    <Router>
      {!nav ? (
        <div className="App relative min-h-screen ">
          <div className="absolute top-0 left-0 right-0 z-10">
            <Navigation setNav={setNav} />
          </div>
          <div className="relative z-0">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/aboutcourse" element={<AboutCourse />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SingUp />} />
              <Route path="/testStart" element={<BeginTest />} />
              <Route path="*" element={<Page404 />} />

              <Route element={<PrivateRoutes />}>
                <Route path="/test" element={<Test />} />
                <Route path="/lessons" element={<MainCoursePage />} />
                <Route path="/lessons/:id" element={<FullLesson />} />
                <Route
                  path="/lessons/:id/:lessonId"
                  element={<LessonOptions />}
                />
                <Route path="/resulat" element={<ResultCourse />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </div>
        </div>
      ) : (
        <ModalNavbar setNav={setNav} />
      )}
    </Router>
  );
}

const Navigation = ({ setNav }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ||
      location.pathname === "/aboutus" ||
      location.pathname === "/aboutcourse" ||
      location.pathname === "/test" ? (
        <Navbar setNav={setNav} />
      ) : (
        <RedNav setNav={setNav} />
      )}
    </>
  );
};

export default App;
