
import { Route, Routes } from "react-router-dom";
import Layout from './Common/Layout/Layout';
import Welcome from './Screens/Welcome/Welcome';
import User from './Screens/User/User';
import Home from './Screens/Admin/Home/Home';
import Question from './Screens/Admin/Question/Question';
import Sendmail from './Components/EmailJs/sendmail';


// import './styles/Colors.scss';
function App() {
  return (
    <div className="content">
      <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/question" element={<Question/>} />
        <Route exact path="/user" element={<User/>} />        
        <Route exact path="/welcome" element={<Welcome/>} />
        <Route exact path="/sendmail" element={<Sendmail/>} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;