import { LineChart, Line,XAxis,YAxis } from 'recharts';

const Linecharts = () => {

    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
        {name: 'Page B', uv: 500, pv: 1400, amt: 2400},
        {name: 'Page C', uv: 600, pv: 3400, amt: 2400},
        {name: 'Page C', uv: 100, pv: 1400, amt: 2400},
        {name: 'Page C', uv: 680, pv: 5100, amt: 2400},
        {name: 'Page C', uv: 900, pv: 8900, amt: 2400}
    ];
    
    return (
        <div className='mx-20 my-10'>
            <LineChart width={500} height={300} data={data}> 
                <XAxis dataKey='name'></XAxis>
                <YAxis> </YAxis>
                <Line type={'monotone'} dataKey='pv' stroke='green'></Line>
                <Line type={'monotone'} dataKey='uv' stroke='red'></Line>
            </LineChart>
            
        </div>
    );
};

export default Linecharts;