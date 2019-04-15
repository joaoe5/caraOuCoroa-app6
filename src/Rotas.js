import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Principal from './components/Principal';
import Resultado from './components/Resultado';

const Rotas = () => (
    <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='principal' component={Principal} initial title="Cara ou Coroa" />
        <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo" />
        <Scene key='outrosjogos' component={OutrosJogos} title="Outros Jogos" />
        <Scene key='jogar' component={Resultado} title="Resultado" />
    </Router>
);

export default Rotas;
