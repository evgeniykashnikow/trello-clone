import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/config/queryClient';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import Board from '@/features/board/Board';

const App: FC = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
