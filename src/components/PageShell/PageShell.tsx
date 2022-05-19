import { Fragment } from "react";
import "./PageShell.scss";
import { motion } from "framer-motion";

const PageShell = (Page: any) => {
  return (
    <motion.div
      className="page"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <Fragment>
        <Page />
      </Fragment>
    </motion.div>
  );
};

export default PageShell;
