module.exports = (state, emitter) => {
  state.searchCriteria = "";
  state.searchResults = [];
  state.categories = [
    {name: 'All Cell Phones with Plans', categoryId: 'pcmcat209400050001'},
    {name: 'Desktop & All-in-One Computers', categoryId: 'abcat0501000'},
    {name: 'Digital Cameras', categoryId: 'abcat0401000'},
    {name: 'Health, Fitness, & Beauty', categoryId: 'pcmcat242800050021'},
    {name: 'Headphones', categoryId: 'abcat0204000'},
    {name: 'HomeAudio', categoryId: 'pcmcat241600050001'},
    {name: 'Home Automation & Security', categoryId: 'pcmcat254000050002'},
    {name: 'iPad, Tablets & E-Readers', categoryId: 'pcmcat209000050006'},
    {name: 'Laptops', categoryId: 'abcat0502000'},
    {name: 'Nintendo 3DS', categoryId: 'pcmcat232900050000'},
    {name: 'PlayStation 4', categoryId: 'pcmcat295700050012'},
    {name: 'Portable & Wireless Speakers', categoryId: 'pcmcat310200050004'},
    {name: 'PS Vita', categoryId: 'pcmcat243400050029'},
    {name: 'Ranges, Cooktops & Ovens', categoryId: 'abcat0904000'},
    {name: 'Refrigerators', categoryId: 'abcat0901000'},
    {name: 'Small Kitchen Appliances', categoryId: 'abcat0912000'},
    {name: 'TVs', categoryId: 'abcat0101000'},
    {name: 'Washers & Dryers', categoryId: 'abcat0910000'},
    {name: 'Wii U', categoryId: 'pcmcat273800050036'},
    {name: 'Xbox One', categoryId: 'pcmcat300300050002'}
  ];
}