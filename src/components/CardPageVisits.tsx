import { Card } from 'components/Card';
import { Table, TableHead, TableHeadCell, TableDataCell } from 'components/Table';

const CardPageVisits: React.FC = () => {
  return (
    <>
      <Card>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">Page visits</h3>
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
          <Table>
            <TableHead>
              <tr>
                <TableHeadCell>Page name</TableHeadCell>
                <TableHeadCell>Visitors</TableHeadCell>
                <TableHeadCell>Unique users</TableHeadCell>
                <TableHeadCell>Bounce rate</TableHeadCell>
              </tr>
            </TableHead>
            <tbody>
              <tr>
                <TableDataCell className="font-bold text-left">/argon/</TableDataCell>
                <TableDataCell>4,569</TableDataCell>
                <TableDataCell>340</TableDataCell>
                <TableDataCell>
                  <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                  46,53%
                </TableDataCell>
              </tr>
              <tr>
                <TableDataCell className="font-bold text-left">/argon/index.html</TableDataCell>
                <TableDataCell>3,985</TableDataCell>
                <TableDataCell>319</TableDataCell>
                <TableDataCell>
                  <i className="fas fa-arrow-down text-orange-500 mr-4" />
                  46,53%
                </TableDataCell>
              </tr>
              <tr>
                <TableDataCell className="font-bold text-left">/argon/charts.html</TableDataCell>
                <TableDataCell>3,513</TableDataCell>
                <TableDataCell>294</TableDataCell>
                <TableDataCell>
                  <i className="fas fa-arrow-down text-orange-500 mr-4" />
                  36,49%
                </TableDataCell>
              </tr>
              <tr>
                <TableDataCell className="font-bold text-left">/argon/tables.html</TableDataCell>
                <TableDataCell>2,050</TableDataCell>
                <TableDataCell>147</TableDataCell>
                <TableDataCell>
                  <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                  50,87%
                </TableDataCell>
              </tr>
              <tr>
                <TableDataCell className="font-bold text-left">/argon/profile.html</TableDataCell>
                <TableDataCell>1,795</TableDataCell>
                <TableDataCell>190</TableDataCell>
                <TableDataCell>
                  <i className="fas fa-arrow-down text-red-500 mr-4" />
                  46,53%
                </TableDataCell>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </>
  );
};

export default CardPageVisits;
