import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/githubexplorerlogo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/52932437?s=460&u=7d97ff9bde67ee1990bb1be074a89cb86d841545&v=4"
            alt="Foto Perfil"
          />
          <div>
            <strong>Unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/52932437?s=460&u=7d97ff9bde67ee1990bb1be074a89cb86d841545&v=4"
            alt="Foto Perfil"
          />
          <div>
            <strong>Unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/52932437?s=460&u=7d97ff9bde67ee1990bb1be074a89cb86d841545&v=4"
            alt="Foto Perfil"
          />
          <div>
            <strong>Unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
