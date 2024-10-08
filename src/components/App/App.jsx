import { Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";

import toast, { ToastBar, Toaster } from "react-hot-toast";

import { IoCloseCircleSharp } from "react-icons/io5";

import AppBar from "../AppBar/AppBar";
import Layout from "../Layout/Layout";
import { refreshUser } from "../../redux/auth/operations";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RefreshingUserLayout from "../RefreshingUserLayout/RefreshingUserLayout";
import Loader from "../Loader/Loader";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import { selectIsRefreshing } from "../../redux/auth/selectors";

export default function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <RefreshingUserLayout />
  ) : (
    <Layout>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <IoCloseCircleSharp size={16} />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </Layout>
  );
}
