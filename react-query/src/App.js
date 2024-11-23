import './App.css';
import { QueryClientProvider, QueryClient} from 'react-query'
import SuperHeroes from './SuperHeroes';

const queryClient = new QueryClient();

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <SuperHeroes />
  </QueryClientProvider>
  );
}

export default App;
