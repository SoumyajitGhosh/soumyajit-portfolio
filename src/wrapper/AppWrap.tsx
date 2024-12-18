import { NavigationDots, SocialMedia } from "../components";

function AppWrap({
  Component,
  idName,
  classNames,
}: {
  Component: JSX.Element;
  idName: string;
  classNames?: string;
}){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        {Component}

        <div className="copyright">
          <p className="p-text">@2023 SOUMYAJIT GHOSH</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
}

export default AppWrap;
