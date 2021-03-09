import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo_header_github.svg';

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title> Explore repositório do GitHub </Title>

      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
          <a href="">

            <img src="https://avatars.githubusercontent.com/u/43592310?s=460&u=48323dabcc77b148e26878bc5e0ae015b4618c4f&v=4"
            alt="Avatar"
            />

            <div>
              <strong>Rockeseat_unform</strong>
              <p>Este repositori foi criado com o intuiro de levar conhecimento aos usuarios. </p>
            </div>

            <FiChevronRight size={20} />

          </a>

          <a href="">

            <img src="https://avatars.githubusercontent.com/u/43592310?s=460&u=48323dabcc77b148e26878bc5e0ae015b4618c4f&v=4"
            alt="Avatar"
            />

            <div>
              <strong>Rockeseat_unform</strong>
              <p>Este repositori foi criado com o intuiro de levar conhecimento aos usuarios. </p>
            </div>

            <FiChevronRight size={20} />

          </a>

          <a href="">

            <img src="https://avatars.githubusercontent.com/u/43592310?s=460&u=48323dabcc77b148e26878bc5e0ae015b4618c4f&v=4"
            alt="Avatar"
            />

            <div>
              <strong>Rockeseat_unform</strong>
              <p>Este repositori foi criado com o intuiro de levar conhecimento aos usuarios. </p>
            </div>

            <FiChevronRight size={20} />

          </a>
      </Repositories>
    </>
  )
};

export default Dashboard;
