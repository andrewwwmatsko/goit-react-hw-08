import toast from "react-hot-toast";

export const notifyOnContactRemove = () =>
  toast.success("Contact removed", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "lightpink",
    },
    iconTheme: {
      primary: "lightpink",
      secondary: "#FFFAEE",
    },
  });

export const notifyOnContactAdd = () => toast.success("Contact created!");

export const notifyOnLogIn = (username) =>
  toast(`Hello, ${username}`, {
    icon: "👋🏻",
    style: {
      borderRadius: "10px",
      background: "rgb(240, 230, 231)",
      color: "#fff",
    },
  });
