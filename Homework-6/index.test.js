// const {sum} = require('./index.js');
let users = require('./data/users');
let index = require('./index');

//--------------------------------------------------------------------------
describe('Testing getUserById()', () =>{
    test('Compare id. Input id: 5a58d21ccb3c3f594dab0afc', () => {
      expect(index.getUserById('5a58d21ccb3c3f594dab0afc', users)[0]._id).toBe('5a58d21ccb3c3f594dab0afc');
    }); 
    test('Haven\'t error if id not find', () => {
      expect(index.getUserById('adfgadfg', users).toString()).toMatch('');
    }); 
    test('Empty id field', () => {
      expect(index.getUserById('', users).toString()).toMatch('');
    }); 
});
//--------------------------------------------------------------------------
describe('Testing getAverangeUsers()', () =>{
    test('Find average in array \'users\'', () => {
      expect(index.getAverangeUsers(users)).toEqual(31.55);
    }); 

});
//--------------------------------------------------------------------------
describe('Testing getActiveUsers()', () =>{
  let activeUser = 'Sellers Cobb';
  let customArray = [{
    'isActive': false,
  },
  {
    'isActive': false,
  },
  {
    'isActive': false,
  }];
  test('Find average in customArray', () => {
    expect(index.getActiveUsers(customArray)).toHaveLength(0);
  }); 
  test('Find average in array \'users\'', () => {
    expect(index.getActiveUsers(users)).toHaveLength(7);
  }); 
  test('Active users consist \'Sellers Cobb\' in array \'users\'', () => {
    for(let i =0; i < index.getActiveUsers(users).length; i++){
      if(index.getActiveUsers(users)[i].name == 'Sellers Cobb' ){
        expect(index.getActiveUsers(users)[i].name).toMatch('Sellers Cobb');
      }
      
    }
    
  });

});
//--------------------------------------------------------------------------
describe('Testing getUsersGender()', () =>{
  test('Find people in array \'users\'', () => {
    expect(index.getUsersGender(users)).toEqual({
      male: 12,
      female: 8,
  });
  }); 

});
//--------------------------------------------------------------------------
describe('Testing getAverangeUsers()', () =>{
  test('Find average in array \'users\'', () => {
    expect(index.getAverangeUsers(users)).toEqual(31.55);
  }); 

});
//--------------------------------------------------------------------------
describe('Testing getFavoriteFruit()', () =>{
  test('Find sum of people, with favourite fruit apple in array \'users\'', () => {
    expect(index.getFavoriteFruit('apple',users).length).toEqual(6);
  }); 
});
//--------------------------------------------------------------------------
