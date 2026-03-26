const conversations = new Map<string, string>();
const dummyResponses = [
  {
    id: '1',
    output_text: 'Capital of India is New Delhi.',
  },
  {
    id: '2',
    output_text: 'Capital of France is Paris.',
  },
  {
    id: '3',
    output_text: 'Capital of the United Kingdom is London.',
  },
  {
    id: '4',
    output_text: 'The tallest mountain in the world is Mount Everest.',
  },
  {
    id: '5',
    output_text:
      'JavaScript is a dynamically typed language primarily used for web development.',
  },
  {
    id: '6',
    output_text:
      'TypeScript is a superset of JavaScript that adds static typing.',
  },
  {
    id: '7',
    output_text: 'Node.js allows JavaScript to run on the server side.',
  },
  {
    id: '8',
    output_text: 'React is a JavaScript library used to build user interfaces.',
  },
  {
    id: '9',
    output_text: 'HTTP stands for HyperText Transfer Protocol.',
  },
  {
    id: '10',
    output_text:
      'A REST API uses HTTP methods like GET, POST, PUT, and DELETE.',
  },
  {
    id: '11',
    output_text: 'Docker is a platform used to containerize applications.',
  },
  {
    id: '12',
    output_text: 'Kubernetes helps in orchestrating and managing containers.',
  },
  {
    id: '13',
    output_text: 'The Sun is a star at the center of our solar system.',
  },
  {
    id: '14',
    output_text:
      'Water boils at 100 degrees Celsius under standard conditions.',
  },
  {
    id: '15',
    output_text: 'The human brain controls thoughts, memory, and movement.',
  },
  {
    id: '16',
    output_text: 'Git is a distributed version control system.',
  },
  {
    id: '17',
    output_text: 'A database stores structured information electronically.',
  },
  {
    id: '18',
    output_text:
      'Cloud computing allows access to computing resources over the internet.',
  },
  {
    id: '19',
    output_text: 'AI stands for Artificial Intelligence.',
  },
  {
    id: '20',
    output_text:
      'Machine learning is a subset of AI that enables systems to learn from data.',
  },
];

export type DummyResponse = {
  id: string;
  output_text: string;
};

export const conversationRepository = {
  getLastConversationId(conversationId: string) {
    return conversations.get(conversationId);
  },
  setLastConversationId(conversationId: string, responseId: string) {
    conversations.set(conversationId, responseId);
  },
  getRandomDummyResponse() {
    return dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
  },
};
