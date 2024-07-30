import { Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";

import { Toaster } from "react-hot-toast";

import Loader from "../Loader/Loader";

import AppBar from "../AppBar/AppBar";
import Layout from "../Layout/Layout";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

export default function App() {
  // const error = useSelector(selectError);
  // const loading = useSelector(selectLoading);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Layout>
  );
}

//  <h1 className={css.title}>Phonebook</h1>
//     <ContactForm />
//     <SearchBox />
//     {loading && <Loader />}
//     <ContactList />
//     {error && <Error errorMessage={error} />}
