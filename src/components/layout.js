import Nav from "./Nav";
import classes from "../styles/layout.module.css";

export default function layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
