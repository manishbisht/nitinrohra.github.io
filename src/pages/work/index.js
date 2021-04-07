import React from "react";
import workData from "../../data/work";
import "../work/styles.css";
import Header from "../../components/header";

const Work = () => {
    const renderWorkSection = () =>
        workData.map((workItem) => (
            <div>
                <div>
                    <div className="cardx">
                        {/*<img src={workItem.image} className="res-img" />*/}
                        <div className="middle">
                            <div className="text">
                                <div>{workItem.title}</div>
                                <div>{workItem.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));

    return (
        <>
            <Header />
            {renderWorkSection()}
        </>
    );
};

export default Work;
