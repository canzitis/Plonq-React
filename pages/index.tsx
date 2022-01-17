import Header from "../src/Components/Sections/Header/Header";
import Home from "../src/Components/Sections/Home/Home";
import React from "react";
import Scroll from "../src/Components/SmoothScrollbar";
import Footer from "../src/Components/Sections/Footer/Footer";

interface IndexProps {
    data: any
}

const Index: React.FC<IndexProps> = ({data}) => {
    return (
        <>
            <Scroll/>
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
