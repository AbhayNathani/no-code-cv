
import './App.css';
import { BallTriangle } from 'react-loader-spinner';
import { useCallback } from 'react';
import ReactFlow, {
  Mindmap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
} from 'reactflow'

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}

export default Flow;

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BallTriangle />
        <h1> Welcome To Abhi's Lab</h1>
        <div id="flow"></div>
      </header>

    </div>
  );
}

export default App;
