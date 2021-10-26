/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js';
import { Card, CardBody, CardHeader } from 'components/Card';

Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);

const CardLineChart: React.FC = () => {
  const [isRebuildingCanvas, setIsRebuildingCanvas] = useState(false);
  const chartCanvasRef = useRef<HtmlCanvasElement | null>(null);

  useEffect(() => {
    if (isRebuildingCanvas) {
      setIsRebuildingCanvas(false);
    }
  }, [isRebuildingCanvas]);

  useEffect(() => {
    const chartCanvas = chartCanvasRef.current;

    if (isRebuildingCanvas || !chartCanvas) {
      return;
    }

    const chartInstance = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#ace39a',
            borderColor: '#ace39a',
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Sales Charts',
          fontColor: 'black',
        },
        legend: {
          labels: {
            fontColor: 'black',
          },
          align: 'end',
          position: 'bottom',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: 'rgba(0, 0, 0, .7)',
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Month',
                fontColor: 'white',
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(0, 0, 0, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: 'rgba(0, 0, 0, .7)',
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
                fontColor: 'white',
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: 'rgba(255, 255, 255, 0.15)',
                zeroLineColor: 'rgba(33, 37, 41, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [isRebuildingCanvas]);

  return (
    <>
      <Card>
        <CardBody>
          <CardHeader title="Sales value" subtitle="Overview" />
          <div className="p-4 flex-auto">
            <div className="relative h-350-px">
              {isRebuildingCanvas ? undefined : <canvas ref={chartCanvasRef} id="line-chart" />}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CardLineChart;
