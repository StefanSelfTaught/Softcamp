import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Layout, Spin } from 'antd';

import SideNav from 'components/SideNav/SideNav.component';
import Footer from 'components/Footer/Footer.component';

import 'App.css';
import BootcampsPage from 'pages/BootcampsPage/BootcampsPage.component';
import ManageBootcampCoursesPage from 'pages/ManageBootcampCoursesPage/ManageBootcampCoursesPage.component';

const AlertMessage = lazy(() =>
  import('components/AlertMessage/AlertMessage.component'),
);
const Drawer = lazy(() =>
  import('components/Drawer/Drawer.component'),
);
const Modal = lazy(() => import('components/Modal/Modal.component'));
const LoginPage = lazy(() =>
  import('pages/LoginPage/LoginPage.component'),
);
const RegisterPage = lazy(() =>
  import('pages/RegisterPage/RegisterPage.component'),
);
const BootcampDetailsPage = lazy(() =>
  import('pages/BootcampDetailsPage/BootcampsDetailsPage.components'),
);
const ResetPasswordPage = lazy(() =>
  import('pages/ResetPasswordPage/ResetPassword.component'),
);
const ManageBootcampPage = lazy(() =>
  import('pages/ManageBootcampPage/ManageBootcampPage.component'),
);

const App = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Suspense fallback={''}>
      <Modal />
      <Drawer />
      <AlertMessage />
    </Suspense>
    <SideNav />
    <Layout className="site-layout">
      <Switch>
        <Route exact path="/">
          <Redirect to="/bootcamps" />
        </Route>

        <Route exact path="/bootcamps" component={BootcampsPage} />

        <Suspense fallback={<Spin size="large" tip="Loading..." />}>
          <Route
            exact
            path="/manage-bootcamp"
            component={ManageBootcampPage}
          />

          <Route
            path="/manage-bootcamp/:userBootcampId/courses"
            component={ManageBootcampCoursesPage}
          />

          <Route path="/register" component={RegisterPage} />

          <Route path="/login" component={LoginPage} />

          <Route
            path="/bootcamps/:bootcampId"
            component={BootcampDetailsPage}
          />

          <Route
            path="/reset-password/:token"
            component={ResetPasswordPage}
          />
        </Suspense>

        {/* 
            <Route path='*'>
              <NotFound />
            </Route> 
          */}
      </Switch>

      <Footer />
    </Layout>
  </Layout>
);

export default App;
