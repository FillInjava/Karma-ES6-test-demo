var test = require('unit.js');

describe('Learning by the example',function(){

  it('example variable',function(){
    var example = 'hello world';

    test
      .string(example).startsWith('hello').match(/[a-z]/)

      .given(example = 'you are welcome')
        .string(example)
          .endsWith('welcome')
          .contains('are')

      .when('example becomes an obejct',function(){

        example = {
          message: 'hello world',
          name: 'Nico',
          job: 'developper',
          from: 'France'
        };
      })
      .then('test the example object',function(){
        test.object(example)
          .hasValue('developper')
          .hasProperty('name')
          .hasProperty('from','France')
          .contains({message:'hello world'});
      })

      .if(example = 'bad value')
        .error(function(){
          example.badMethod();
        });
  });

  it('other test case',function(){
    var word = 'hello world';
    test.value(word).isEqualTo('hello world');
  });
})