import { useRouteError } from "react-router-dom";
import Header from "./Header/Header";

export default function ErrorPage() {
  const error = useRouteError();
  const myStyle ={
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (<>
    <Header></Header>
    <div id="error-page" style={myStyle}>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  </>
    
  );
}