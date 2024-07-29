import RegisterForm from "../../components/RegisterForm/RegisterForm";

import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <main className={css.main}>
      <section className={css.section}>
        <RegisterForm />
      </section>
    </main>
  );
}
