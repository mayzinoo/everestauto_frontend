//libraries
import React, { Fragment, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
//components
import Header from "../Header/index";
import Footer from "../Footer/index";
//css
import "./components/styles/index.css";
import { BsWhatsapp } from "react-icons/bs";

//importing pages
const Home = lazy(() => import("../../Pages/Home"));
const CarDeatail = lazy(() => import("../../Pages/Home/sub/CarDetail"));
const Vehicles = lazy(() => import("../../Pages/Vehicles/sub/Vehicle"));
const Business = lazy(() => import("../../Pages/Business"));
const Faq = lazy(() => import("../../Pages/FAQ"));
const AboutUs = lazy(() => import("../../Pages/AboutUs"));
const PageNotFound = lazy(() => import("../../Pages/404"));
const Account = lazy(() => import("../../Pages/Account"));
const PrivacyPolicy = lazy(() => import("../../Pages/PrivacyPolicy"));
const Terms = lazy(() => import("../../Pages/Terms"));
//importing smaller ports
const Register = lazy(() => import("../../PreEmpt/Register"));
const Login = lazy(() => import("../../PreEmpt/Login"));
const ForgotPwd = lazy(() => import("../../PreEmpt/ForgotPwd"));
const ForgotConPwd = lazy(() => import("../../PreEmpt/ForgotConPwd"));
const ChangePwd = lazy(() => import("../../PreEmpt/ChangePwd"));
function AppEc() {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Please wait while we are loading the page
            </p>
          </div>
        }
      >
        <Header />
        <div style={{ marginTop: "95px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route strict path="/home" component={Home} />
            <Route strict path="/cardetails/:id" component={CarDeatail} />
            <Route strict path="/vehicles/:id" component={Vehicles} />
            <Route strict path="/business" component={Business} />
            <Route strict path="/faq" component={Faq} />
            <Route strict path="/aboutus" component={AboutUs} />
            <Route strict path="/privacypolicy" component={PrivacyPolicy} />
            <Route strict path="/terms" component={Terms} />
            <Route strict path="/account" component={Account} />
            <Route strict path="/register" component={Register} />
            <Route strict path="/login" component={Login} />
            <Route strict path="/forgotpassword" component={ForgotPwd} />
            <Route
              strict
              path="/forgotconfirmpassword/:id"
              component={ForgotConPwd}
            />
            <Route strict path="/changepassword" component={ChangePwd} />
            <Route strict path="*" component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
        {/* WhatsApp icon */}
        <a
          href="https://api.whatsapp.com/send/?phone=%2B6581736535&text=I'm%20interested%20in%20your%20car&app_absent=0"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className="whatsapp-icon" />
        </a>
      </Suspense>
    </Fragment>
  );
}

export default AppEc;
