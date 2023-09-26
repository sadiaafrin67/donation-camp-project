import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';



const COLORS = ['#FF444A', '#00C49F', '#FFBB28', '#FF8042'];

export default function PiechartData({totalDonationData, donation}) {
console.log(totalDonationData, donation)

  const data = [
    { name: 'Total Donation', value: totalDonationData || 100 },
    { name: 'Your Donation', value: donation || 0 },
   
  ];


  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize="16" // Customize font size
        fontWeight="bold" // Customize font weight
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={140}
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {data?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS?.length]} />
          ))}
        </Pie>

        <Legend
        //   verticalAlign="middle"
        //   align="right"
        //   iconType="circle" // Customize legend icon shape
          iconSize={35} // Customize legend icon size
        //   layout="vertical" // Display legend vertically
          wrapperStyle={{
            fontSize: '18px', // Customize legend font size
            fontWeight: 'bold', // Customize legend font weight
            padding: '10px', // Add padding to the legend
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

PiechartData.propTypes = {
  totalDonationData: PropTypes.number,
  donation: PropTypes.number
}