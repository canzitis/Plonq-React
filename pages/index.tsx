import Header from "../src/Components/Sections/Header/Header";
import Home from "../src/Components/Sections/Home/Home";
import React, {useEffect} from "react";
import Scroll from "../src/Components/SmoothScrollbar";
import Footer from "../src/Components/Sections/Footer/Footer";
import Preloader from "../src/Components/Common/Preloader/Preloader";
import {PageLoaded} from "../src/recoil/atom";
import { useSetRecoilState} from "recoil";

interface IndexProps {
    data: any
}

const Index: React.FC<IndexProps> = ({data}) => {
    const setPageLoaded = useSetRecoilState(PageLoaded);
    useEffect(() => {
        setPageLoaded({
            pageLoaded: true
        })
    })
    return (
        <>
            <Scroll/>
            <Preloader/>
            <Header header={data.header}/>
            <Home home={data.home}/>
            <Footer/>
            223
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
