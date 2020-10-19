import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '../../layouts';
import SearchPanel from '../../common/SearchPanel';
import CardContainer from '../../common/CardContainer';
import '../../../styles/FavoritesPage.less';
import { PlotlyCard } from '../../common';

function favoriteAPI() {}

export default ({ styles }) => (
  <Canvas
    Side={SearchPanel}
    Main={favoriteAPI => <CardContainer Card={PlotlyCard} />}
  />
);
