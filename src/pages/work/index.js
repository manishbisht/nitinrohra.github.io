import React from "react";
import workData from "../../data/work";

const Work = () => {
    const renderWorkSection = () =>
        workData.map((workItem) => (
            <div>
                <div>{workItem.title}</div>
                <div>{workItem.description}</div>
                <img src={workItem.image} />
            </div>
        ));

    return <div>{renderWorkSection()}</div>;
};

export default Work;
