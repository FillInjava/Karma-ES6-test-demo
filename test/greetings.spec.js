import {sayHi} from '../src/greetings';
import {expect} from 'chai';

describe("sayHi",function(){
  it("should say Hi when give a name",function(){
    expect(sayHi('Tom')).to.be.equal("hi Tom")
  });
})