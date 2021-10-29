import { Card } from 'components/Card';
import { Table, TableHead, TableHeadCell, TableDataCell } from 'components/Table';
import { Progress } from './Progress';

const CardSocialTraffic: React.FC = () => {
  return (
    <>
      <Card>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">Social traffic</h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <Table>
            <TableHead>
              <tr>
                <TableHeadCell>Referral</TableHeadCell>
                <TableHeadCell>Visitors</TableHeadCell>
                <TableHeadCell></TableHeadCell>
              </tr>
            </TableHead>
            <tbody>
              <tr>
                <TableDataCell className="text-left font-bold">Facebook</TableDataCell>
                <TableDataCell>1,480</TableDataCell>
                <TableDataCell>
                  <Progress value={60} colour="red" />
                </TableDataCell>
              </tr>
              <tr>
                <TableDataCell className="font-bold text-left">Facebook</TableDataCell>
                <TableDataCell>5,480</TableDataCell>
                <TableDataCell>
                  <Progress value={70} colour="green" />
                </TableDataCell>
              </tr>
              <tr>
                <TableDataCell className="text-left font-bold">Google</TableDataCell>
                <TableDataCell>4,807</TableDataCell>
                <TableDataCell>
                  <Progress value={80} colour="purple" />
                </TableDataCell>
              </tr>
              <tr>
                <TableDataCell className="font-bold text-left">Instagram</TableDataCell>
                <TableDataCell>3,678</TableDataCell>
                <TableDataCell>
                  <Progress value={75} colour="blue" />
                </TableDataCell>
              </tr>
              <tr>
                <TableDataCell className="font-bold text-left">twitter</TableDataCell>
                <TableDataCell>2,645</TableDataCell>
                <TableDataCell>
                  <Progress value={30} colour="yellow" />
                </TableDataCell>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </>
  );
};

export default CardSocialTraffic;
