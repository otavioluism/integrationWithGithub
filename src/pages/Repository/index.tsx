import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>(); //pega o params passado pela rota de dashboard e instanciando nas routes

  return <h1>Repository: { params.repository } </h1>
};

export default Repository;
