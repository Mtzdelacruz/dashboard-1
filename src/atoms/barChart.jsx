import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

import { longToShortDate } from '../iluts/dates';

function normalizeData(data) {

  return data.map((sale) => {
    const formattedDate = longToShortDate(sale.date);

    return {
      date: formattedDate,
      currentYear: sale.currentYear,
      lastYear: sale.lastYear
    };
  });
}

function barChart ({data}) {
  const newData = normalizeData(data);

  return (
    <BarChart width={900} height={380} data={newData} margin={{ top: 20, right: 30, left: 10, bottom: 5, }}>
      <CartesianGrid strokeDasharray="0" />
      <XAxis dataKey='date' /> 
      <YAxis />
      <Legend layout="horizontal" verticalAlign="top" />
      <Bar dataKey='currentYear' fill="#3F51B4" barSize={8} />
      <Bar dataKey='lastYear' fill="#EEEEEE" barSize={8}/>
    </BarChart>
  );
}

export default barChart;