import React from "react";

import { Box, List, ListItem, ListItemIcon, Divider } from "@mui/material"
import { PieChart, Pie, Cell } from "recharts";
import { ComputerOutlined, TabletMacOutlined, LocalPhone } from "@mui/icons-material";

const COLORS = ["#3F51B5, #E53935", "#FB8C00"];

function Traffic({data}) {
    return(
    <Box className='pie-chart-container'>
        <h3 className='pie-chart-header'>Traffic by Device</h3>
        <Divider />
        <PieChart width={280} height={280}>
        <Pie 
            data={data}
            cx={140}
            cy={100}
            innerRadius={50}
            outerRadius={100}
            fill="#8884D8"
            paddingAngle={5}
            dataKey="traffic"
            startAngle={90}
            endAngle={360}
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
            ))}
        </Pie>
        </PieChart>
        <List>
        <ListItem>
            <ListItemIcon>
                <ComputerOutlined />
            </ListItemIcon>
            <ListItemIcon>
                <TabletMacOutlined />
            </ListItemIcon>
            <ListItemIcon>
                <LocalPhone />
            </ListItemIcon>
        </ListItem>
        </List>
                <table>
                    <tbody>
                        {data.map((data, index) => (
                        <th>
                            <tr>{data.device}</tr>
                            <tr><h1 style={{color:`${COLORS[index]}`}}>{data.traffic}%</h1> </tr>
                        </th> 
                        ))}
                    </tbody>
                </table>

    </Box>
    )
}
export default Traffic;