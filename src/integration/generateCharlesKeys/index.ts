import { geradorNome } from 'gerador-nome'
import { getKeyCharles } from '../getKeyCharles'
import UsersController from '../../controllers/SaveKeysDatabase'

interface returnNameInterface {
  name: string
  lastName: string
  lastName2: string
}

const usersController = new UsersController()

const generateName = (): string => {
  const retunName: returnNameInterface = {
    name: geradorNome(),
    lastName: geradorNome(),
    lastName2: geradorNome()
  }

  return `${retunName.name} ${retunName.lastName} ${retunName.lastName2}`
}

async function loopGetKeyCharles() {
  let cont: number = 0
  while (true) {
    try {
      const result = await getKeyCharles(generateName());
      await usersController.create(result.name, result.key)
      console.log("ok", cont++, result);
      await new Promise(resolve => setTimeout(resolve));
    } catch (error) {
      console.error('Error fetching key:', error);
      // break;
    }
  }
}

loopGetKeyCharles();