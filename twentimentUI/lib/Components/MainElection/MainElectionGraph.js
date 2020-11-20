import { useMemo } from "react";
import { Chart } from "react-charts";

function MainElectionGraph({ initialData, setGraphDate }) {
  const data = useMemo(() => {
    for (var i = initialData.length - 1; i >= 0; i--) {
      for (var j = initialData[i].data.length - 1; j >= 0; j--) {
        initialData[i].data[j].x = new Date(initialData[i].data[j].x);
      }
    }
    return initialData;
  }, []);

  const series = useMemo(() => ({ showPoints: true }), []);

  const axes = useMemo(
    () => [
      {
        primary: true,
        type: "time",
        position: "bottom",
        hardMin: new Date(data[0].data[0].x).getTime(),
        hardMax: new Date(data[0].data[data[0].data.length - 1].x).getTime(),
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  const onClick = (point) =>
    point &&
    setGraphDate({ candidate: point.seriesLabel, date: point.originalDatum.x });

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Chart
        data={data}
        series={series}
        axes={axes}
        onClick={onClick}
        tooltip
      />
    </div>
  );
}

export default MainElectionGraph;
