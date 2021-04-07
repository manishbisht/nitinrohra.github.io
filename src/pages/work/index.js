import React from "react";
import workData from "../../data/work";
import '../work/styles.css';

const Work = () => {
    const renderWorkSection = () =>
        workData.map((workItem) => (
            <div className="maindiv">
                <div className="column">
                    <div className="cardx">
                    <img src={workItem.image} className="res-img"/>
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

    return <div>{renderWorkSection()}</div>;
};

export default Work;
