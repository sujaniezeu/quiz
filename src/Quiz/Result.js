import React,{useState} from 'react'
import { useLocation } from "react-router-dom";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
function Result() {

  const { state } = useLocation();

 let y1=0;
 let y2=0;
 let percentage=(state.s1/state.Leng)*100;
  let [Options,SetOptions]=useState({
    chart: {
      type: "pie",
      backgroundColor:"#D9B586",
      borderColor:"#d9b586",
    },
    series: [
      {
        keys: ["y", "name"],
        data: [
          {
            y: 0,
          },
          {
            y: 0,
          },
        ],
        title:{text:"Pie Chart Score"}
       
      },
    ],
  });
  const getval=()=> {
  SetOptions ({
    chart: {
      type: "pie",
    },
    title:{text:"Pie Chart Score "},
    series: [
      { keys: ["y", "name"],
      
        data: [
          {
            y: y1,name:"correct score"
          },
          {
            y: y2,name:"IN correct score"
          },
        ],
      },
    ],
  })
}

React.useEffect(() => {
y1= state.s1;
y2=state.Leng - y1;
percentage=Math.round((y1/state.Leng)*100);
getval();
    }, [state]);
  
  return (
    <div>
      <h1>Result:</h1>
         
         <PieChart highcharts={Highcharts} options={Options} />
         <h1>Correct Answers : {state?.s1}</h1>
         <h1>IN Correct Answers : {state?.Leng-state?.s1}</h1>
         <h1> Total Questions : {state?.Leng}</h1>
          <h1> Score in Percentage : {percentage.toFixed(2)} %</h1>
         </div>
         )
}

export default Result