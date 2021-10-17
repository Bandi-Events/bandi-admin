import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Users from 'pages/Users';

const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-50">
        <main className="px-4 md:px-10 mx-auto w-full">
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/users" exact component={Users} />
            <Route path="/sign-in" exact component={Login} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
