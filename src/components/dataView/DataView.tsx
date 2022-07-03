import {useMemo} from 'react';
import {Card} from '../cardView/Card';
import {TableView} from '../table/TableView';
import {IHero} from '../heroes/interface/hero.types';
import {Pagination} from '../../dependencies/pagination/Pagination';
import {perPage} from '../../configs';
import {useSelector} from 'react-redux';
import {IReducersState} from '../../services/reducer/Reducers';

type IDataView = {
  data?: any[];
  view: 'mobile' | 'desktop';
  total: number;
  perPage: number;
  page: number;
  paginate?: (page: number) => void;
  onClick: (hero: IHero) => void;
  onLoadMore: (num: number) => void;
};

export const DataView = ({
  data = [],
  view = 'desktop',
  onClick,
  total,
  page,
  paginate,
  onLoadMore,
}: IDataView) => {
  const dataList = useMemo(() => data, [data]);

  const totalData: number = useSelector<IReducersState>((state) => state.totalData) as number;
  const currentDataListCount: number =
           useSelector<IReducersState>((state) => state.currentDataListCount) as number;

  const handleClick = (item: IHero, action?: any) => {
    onClick && onClick(item);
  };
  const handleLoadMore = () => {
    onLoadMore && onLoadMore(perPage);
  };
  return view === 'mobile' ? (
    <div style={{position: 'relative'}}>
      {dataList.map((item, index) => (
        <Card data={item} onClick={handleClick} key={index} />
      ))}
      <div
        style={{
          width: '100%',
          backgroundColor: 'rgba(0,0,00,0.02)',
          position: 'relative',
          bottom: '0',
          height: '70px',
          display: 'flex',
          alignItems: ' center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <p><i>{currentDataListCount + ' of ' + totalData}</i></p>
        {
          totalData === currentDataListCount?
          <div>
            <em>No more item to load!</em>
          </div> :
        <div
          className="clickable-icon"
          style={{
            borderRadius: '10px',
            backgroundColor: '#6098F2',
            padding: '10px 20px',
            color: '#ffffff',
          }}
          onClick={() => handleLoadMore()}
        >
          Load more
        </div>
        }
      </div>
    </div>
  ) : (
    <>
      <TableView onClick={handleClick} data={dataList} />
      <Pagination
        perPage={perPage}
        total={total}
        currentPage={page}
        paginate={(cur: number) => paginate && paginate(cur)}
        element={<p><i>{currentDataListCount + ' of ' + totalData}</i></p>}
      />
    </>
  );
};
