import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';
import { url } from 'inspector';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
    context('title', () => {
        it('should have header tag when mount', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('header')).to.have.length(1);
        });
        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });
        it('should not have h1 tag when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });
        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="JS com TDD na prática" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });
        it('should not have h2 tag when subtitle is not passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h2')).to.have.length(0);
        });
        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="JS com TDD na prática" />);
            expect(wrapper.find('h2').props().children).to.be.equal('JS com TDD na prática');
        });
    });

    context('bgColor', () => {
        it('should have background color equal #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('background-color').to.be.equal('#ccc');
        });
        it('should have background color equal #000 when is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgColor="#000" />);
            expect(wrapper).to.have.style('background-color').to.be.equal('#000');
        });
    });

    context('textColor', () => {
        it('should have text color equal #fff when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('color').to.be.equal('#fff');
        });
        it('should have text color equal #fff000 when is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" textColor="#fff000" />);
            expect(wrapper).to.have.style('color').to.be.equal('#fff000');
        });
    });

    context('font', () => {
        it('should have font equal sans-serif when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('font-family').to.be.equal('sans-serif');
        });
        it('should have font cursive when is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" font="cursive" />);
            expect(wrapper).to.have.style('font-family').to.be.equal('cursive');
        });
    });

    context('bgImg', () => {
        it('should have background-image equal empty when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('background-image').to.be.equal('url()');
        });
        it('should have background-image equal bg.jpg when is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgImg="bg.jpg" />);
            expect(wrapper).to.have.style('background-image').to.be.equal('url(bg.jpg)');
        });
    });

    context('video', () => {
        it('should have video tag when video is passed', () => {
            const wrapper = shallow(<FullHeader video="my-video.mp4" />);
            expect(wrapper.find('video')).to.have.length(1);
        });
        it('should not have video tag when video is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('video')).to.have.length(0);
        });
        it('should have video tag with the video passed', () => {
            const wrapper = shallow(<FullHeader video="my-video.mp4" />);
            expect(wrapper.find('video').props().src).to.be.equal('my-video.mp4');
        });
    });
});
