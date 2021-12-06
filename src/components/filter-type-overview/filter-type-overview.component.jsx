import FilterTypeItem from '../filter-type-item/filter-type-item.component';

import { FilterTypeOverviewContainer } from './filter-type-overview.style';

const FilterTypeOverview = ({ typeFilter }) => (
  <FilterTypeOverviewContainer>
    {
      typeFilter.map(item => (<FilterTypeItem key={item.id} item={item} />))
    }
  </FilterTypeOverviewContainer>
)

export default FilterTypeOverview;