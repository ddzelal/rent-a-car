import { useQuery } from 'react-query';
import { fetchLogin } from '../../api';

const waitThreeSeconds = async (time = 3000) =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      return resolve(true);
    }, time);
  });

//This is a promise which is return resolve TRUE after 3 SEC

export function useLogin(body) {
  const waitingQuery = useQuery('waiting', async () => waitThreeSeconds(), {
    cacheTime: 0,
  });

  //This is a function which is a wait to finish promise

  const loginQuery = useQuery('login', async () => fetchLogin(body), {
    enabled: waitingQuery.isSuccess,
  });

  //This  is function to not execute while waitingQuery return to True

  return loginQuery.isSuccess ? loginQuery : waitingQuery;
}
