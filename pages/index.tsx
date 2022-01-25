import Header from "../src/Components/Sections/Header/Header";
import Home from "../src/Components/Sections/Home/Home";
import React, {useState} from "react";
import Scroll from "../src/Components/SmoothScrollbar";
import Footer from "../src/Components/Sections/Footer/Footer";
import Preloader from "../src/Components/Common/Preloader/Preloader";

interface IndexProps {
    data: any
}

const Index: React.FC<IndexProps> = ({data}) => {
    const [page, setPageLoaded] = useState(false);

    const pageLoadedHandler = (pageLoaded: boolean) => {
        setPageLoaded(pageLoaded)
    }
    return (
        <>
            <Scroll/>
            <Preloader pageLoaded={true} pageLoadedHandler={pageLoadedHandler}/>
            <Header header={data.header}/>
            <Home home={data.home}/>
            <Footer/>
        </>
    )
}


// @ts-ignore
Index.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/data')
    const data = await response.json()

    return {
        data
    }
}
export default Index;
