import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "../../components/Layout/Layout";

import imgUrl from "../../images/404.png";

export default function NotFoundPage() {
  const [calldown, setCalldown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCalldown((prev) => prev - 1);

      if (calldown < 1) {
        navigate("/", { replace: true });
        clearInterval(intervalId);
        return;
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [calldown, navigate]);

  return (
    <main>
      <section className="">
        <h2 className="text-center font-mono text-4xl md:text-6xl font-semibold tracking-wide mt-16">
          Oops
        </h2>
        <img
          src={imgUrl}
          alt="123"
          className="sm:w-80 md:w-2/4 2xl:w-2/3 my-0 mx-auto block"
        />
        <p className="text-center font-mono text-lg mt-16">
          You are being redirected to the
          <Link className="underline" to="/">
            Home page
          </Link>{" "}
          after {calldown} seconds
        </p>
      </section>
    </main>
  );
}
