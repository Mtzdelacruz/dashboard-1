import React from "react";

import { Paper, ListItemIcon, Box, Avatar } from "@mui/material";
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@mui/icons-material";
import ProgessBar from "../atoms/progress-bar"
import "../styles/app.css"

let kpiInfo 

function KPI({data, icon, iconColor}) {

    const {title, amount, amountType, image, changeFromLastMonth, type} = data ?? {};

    const amountDecorator = (amount) => {

        const prefix = amountType === "thousands" ? "$" : "";
        const suffix = amountType === "thousands" ? "K" : "%";
        const formattedAmount = amountType === "thousands" ? amount/1000 : amount;
        return `${prefix}${formattedAmount}${suffix}`;
    }

    let percentageLost

    if(changeFromLastMonth < 0) {
        percentageLost = "percentage-color"
    }

    const monthChange = changeFromLastMonth > 0 ? <ArrowDownwardOutlined sx={{color: "#14BBA7"}}/> : <ArrowDownwardOutlined sx={{color: "#CD4344"}}/>
    const monthChangeDisplay = changeFromLastMonth === null ? "" : monthChange;

    const percentageIcon = changeFromLastMonth !== null ? "%" : "";

    if (type === "change") {
            kpiInfo = "Since Last Month";
        } else if (type === "progress") {

            kpiInfo = <ProgessBar value={amount}/>;
        } else {
            kpiInfo = " ";
        };


    return (
        <Paper sx={{height:"170px"}} className="kpi-container">
            <Box className="card-header-container">
                <Box className='card-title-container'>
                    <h6 className="card-title">{title}</h6>
                    <h1 className="amount">{amountDecorator(amount)}</h1>
                </Box>
            <p className="kpi-footer">
                <span className={percentageLost}>{monthChangeDisplay} {changeFromLastMonth} {percentageIcon} </span> {kpiInfo} </p>
            </Box>
            <Box sx={{pt:"180px"}} className='card-icon-container '>
                <Avatar sx={{bgcolor:`$(iconColor)`}} className="avatar-kpi">
                    {icon}
                </Avatar>
            </Box>
        </Paper>
    );
}

export default KPI 