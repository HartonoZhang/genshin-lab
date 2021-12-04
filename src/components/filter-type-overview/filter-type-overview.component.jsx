import './filter-type-overview.style.scss';
import FilterTypeItem from '../filter-type-item/filter-type-item.component';

const FilterTypeOverview = ({ typeFilter }) => (
  <div className='filter-type'>
    {
      typeFilter.map(item => (<FilterTypeItem key={item.id} item={item} />))
    }
  </div>
)

export default FilterTypeOverview;