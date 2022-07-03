import './TableView.css';
import {IHero} from '../heroes/interface/hero.types';
type Props = {
    data: IHero[];
    onClick: (hero: IHero, open: boolean) => void;
}

export const TableView = ({data, onClick}: Props) => {
  const handleClick = (item: IHero) => {
    onClick && onClick(item, true);
  };

  return (
    <table className='card-tabular'>
      <tr>
        <td>Heroes</td>
        <td>Type</td>
        <td>Description</td>
      </tr>
      {

        data.map((row, index) => (
          <tr key={index} className='card-table-tr-body-item' onClick={() => handleClick(row)}>
            <td>
              <div>
                <img src={row.avatarUrl} alt='avatar'/>
                <h2>{row.fullName}</h2>
              </div>
            </td>
            <td>{row.type.name}</td>
            <td>{row.description}</td>
          </tr>
        ))
      }
    </table>
  );
};
