 import React from "react";

 import { LinearProgress } from "@mui/material";

 function ProgessBar ({value}) {
    return(
        <div className="progress-Bar">
            <LinearProgress variant="determinate" value={value}/>
        </div>
    )
 };

 export default ProgessBar;