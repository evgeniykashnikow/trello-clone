import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider } from '@/app/ThemeProvider';
import Board from '@/features/board/Board';
import BoardContext from '@/features/board/BoardContext';

const App: FC = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BoardContext>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </BoardContext>
  </ThemeProvider>
);

export default App;
