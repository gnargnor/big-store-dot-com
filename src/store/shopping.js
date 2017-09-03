module.exports = (state, emitter) => {
  state.searchCriteria = '';
  state.currentSearch = '';
  state.searchResults = [];
  state.parsedDetails = [];
  state.bigStoreCart = [];
  state.itemDisplay = [];
  state.qtyById = [];
  state.maxQty = 10;
  state.category = 'blank';
  state.categories = [
    {name: 'Search All Categories', categoryId: 'blank'},
    {name: 'All Cell Phones with Plans', categoryId: '&(categoryPath.id=pcmcat209400050001)'},
    {name: 'Desktop & All-in-One Computers', categoryId: '&(categoryPath.id=abcat0501000)'},
    {name: 'Digital Cameras', categoryId: '&(categoryPath.id=abcat0401000)'},
    {name: 'Health, Fitness, & Beauty', categoryId: '&(categoryPath.id=pcmcat242800050021)'},
    {name: 'Headphones', categoryId: '&(categoryPath.id=abcat0204000)'},
    {name: 'HomeAudio', categoryId: '&(categoryPath.id=pcmcat241600050001)'},
    {name: 'Home Automation & Security', categoryId: '&(categoryPath.id=pcmcat254000050002)'},
    {name: 'iPad, Tablets & E-Readers', categoryId: '&(categoryPath.id=pcmcat209000050006)'},
    {name: 'Laptops', categoryId: '&(categoryPath.id=abcat0502000)'},
    {name: 'Nintendo 3DS', categoryId: '&(categoryPath.id=pcmcat232900050000)'},
    {name: 'PlayStation 4', categoryId: '&(categoryPath.id=pcmcat295700050012)'},
    {name: 'Portable & Wireless Speakers', categoryId: '&(categoryPath.id=pcmcat310200050004)'},
    {name: 'PS Vita', categoryId: '&(categoryPath.id=pcmcat243400050029)'},
    {name: 'Ranges, Cooktops & Ovens', categoryId: '&(categoryPath.id=abcat0904000)'},
    {name: 'Refrigerators', categoryId: '&(categoryPath.id=abcat0901000)'},
    {name: 'Small Kitchen Appliances', categoryId: '&(categoryPath.id=abcat0912000)'},
    {name: 'TVs', categoryId: '&(categoryPath.id=abcat0101000)'},
    {name: 'Washers & Dryers', categoryId: '&(categoryPath.id=abcat0910000)'},
    {name: 'Wii U', categoryId: '&(categoryPath.id=pcmcat273800050036)'},
    {name: 'Xbox One', categoryId: '&(categoryPath.id=pcmcat300300050002)'}
  ];
}