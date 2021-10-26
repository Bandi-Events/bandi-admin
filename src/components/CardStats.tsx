import { Card, CardBody, CardHeader } from 'components/Card';

interface CardStatsProps {
  statSubtitle: string;
  statTitle: string;
  statArrow: 'up' | 'down';
  statPercent: string;
  statPercentColor: string;
  statDescription: string;
  statIconName: string;
  statIconColor: string;
}

const CardStats: React.FC<CardStatsProps> = ({
  statSubtitle = 'Traffic',
  statTitle = '350,897',
  statArrow = 'up',
  statPercent = '3.48',
  statPercentColor = 'text-emerald-500',
  statDescription = 'Since last month',
  statIconName = 'far fa-chart-bar',
  statIconColor = 'bg-red-500',
}): JSX.Element => {
  return (
    <Card>
      <CardBody>
        <CardHeader title={statTitle} subtitle={statSubtitle} iconName={statIconName} iconColour={statIconColor} />
        <p className="text-sm text-blueGray-400 mt-4">
          <span className={statPercentColor + ' mr-2'}>
            <i className={statArrow === 'up' ? 'fas fa-arrow-up' : statArrow === 'down' ? 'fas fa-arrow-down' : ''}></i>{' '}
            {statPercent}%
          </span>
          <span className="whitespace-nowrap">{statDescription}</span>
        </p>
      </CardBody>
    </Card>
  );
};

export default CardStats;
