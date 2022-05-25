import { Fragment } from "react";
import "./PageShell.scss";

const PageShell = (Page: any) => {
  return (
    <div className="page">
      <Fragment>
        <Page />
      </Fragment>
    </div>
  );
};

export default PageShell;
