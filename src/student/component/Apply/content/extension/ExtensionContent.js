import React, { Component } from 'react';

import './ExtensionContent.scss';

import { getExtensionMap } from '../../../../../lib/applyAPI';
import ExtensionMapseat from './ExtensionMapSeat';

const mapInfoList = [
  {
    top: '칠판',
    bottom: '벽',
    left: '창문',
    right: '복도'
  },
  {
    top: '칠판',
    bottom: '벽',
    left: '창문',
    right: '복도'
  },
  {
    top: '칠판',
    bottom: '벽',
    left: '창문',
    right: '복도'
  },
  {
    top: '칠판',
    bottom: '벽',
    left: '창문',
    right: '복도'
  },
  {
    top: '칠판',
    bottom: '벽',
    left: '창문',
    right: '복도'
  },
  {
    top: '칠판',
    bottom: '벽',
    left: '창문',
    right: '복도'
  },
  {
    top: '칠판',
    bottom: '벽',
    left: '창문',
    right: '복도'
  },
  {
    top: '칠판',
    bottom: '벽',
    left: '창문',
    right: '복도'
  },
  {
    top: '칠판',
    bottom: '벽',
    left: '창문',
    right: '복도'
  },
  {
    top: '칠판',
    bottom: '벽',
    left: '창문',
    right: '복도'
  }
];

export default class ExtensionContent extends Component {
  state = {
    loading: false,
    mapData: []
  };
  setMapInfo = async (time, classNum) => {
    console.log(classNum);
    if (this.state.loading) return;
    this.setState({
      loading: true
    });
    try {
      const response = await getExtensionMap(time, classNum);
      console.log(`data: ${response.data.map}`);
      this.setState({
        mapData: response.data.map
      });
    } catch (e) {
      console.log(e);
    }
    this.setState({
      loading: false
    });
    return null;
  };

  componentDidMount() {
    const { time, classNum } = this.props;
    this.setMapInfo(time, classNum + 1);
  }

  componentWillReceiveProps(nextProps) {
    const { time, classNum } = nextProps;
    this.setMapInfo(time, classNum + 1);
  }

  render() {
    const { time, classNum } = this.props;
    const { mapData } = this.state;
    const map = mapData.map((seatCol, i) => {
      const row = seatCol.map((seat, i) => {
        if (seat === 1)
          return <ExtensionMapseat key={i} invisibleClass='invisible' />;
        return <ExtensionMapseat key={i} content={seat} />;
      });
      return <tr key={i}>{row}</tr>;
    });
    return (
      <div className='apply--content--extension'>
        <span className='apply--content--extension--mark top'>
          {mapInfoList[classNum].top}
        </span>
        <span className='apply--content--extension--mark bottom'>
          {mapInfoList[classNum].bottom}
        </span>
        <span className='apply--content--extension--mark left'>
          {mapInfoList[classNum].left}
        </span>
        <span className='apply--content--extension--mark right'>
          {mapInfoList[classNum].right}
        </span>
        <table className='apply--content--extension--map'>{map}</table>
      </div>
    );
  }
}
