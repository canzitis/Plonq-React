import '../styles/globals.css'
import GlobalStyles from "../styles/globalStyles";
import {RecoilRoot} from "recoil";

function MyApp({Component, pageProps}) {

    return <>
        <RecoilRoot>
            <GlobalStyles/>
            <Component {...pageProps} />
        </RecoilRoot>
    </>

}

export default MyApp
